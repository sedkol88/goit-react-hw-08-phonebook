import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { selectIsLogin } from '../../redux/auth/auth-selectors';

import menuItems from './menuItems';

import styles from './navigation.module.css';

const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.navbar}>
      <ul>{elements}</ul>
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </nav>
  );
};

export default Navigation;
