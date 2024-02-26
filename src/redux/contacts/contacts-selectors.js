import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => store.contacts.items;

export const selectFavoriteContacts = createSelector(
  [selectAllContacts],
  contacts => contacts.filter(({ favorite }) => favorite)
);

export const selectContacts = state => state.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items } = contacts;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    return (
      normalizedNumber.includes(normalizedFilter) ||
      normalizedName.includes(normalizedFilter)
    );
  });

  return filteredContacts;
};
