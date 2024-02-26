import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import styles from './shared-layout.module.css';

const SharedLayout = () => {
  return (
    <div className={styles.block}>
      <Navigation />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
