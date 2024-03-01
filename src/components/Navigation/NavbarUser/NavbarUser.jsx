import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';

import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const user = useSelector(selectUser);
  const email = user ? user.email : '';

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.block}>
      {email}
      <button onClick={onLogout} className={styles.logout_button}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
