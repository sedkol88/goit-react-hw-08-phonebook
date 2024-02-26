import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/contacts-operations';

import { setFilter } from '../../redux/filter/filter-slice';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/contacts-selectors';

import styles from './my-contacts.module.css';

const MyContacts = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const items = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.block}>
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <div>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
          <Filter onChangeFilter={onChangeFilter} />
          {isLoading && <p>...Loading</p>}
          {error && <p>{error}</p>}
          {Boolean(items.length) && (
            <ContactList items={items} deleteContact={onDeleteContact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyContacts;
