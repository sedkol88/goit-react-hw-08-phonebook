import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const MyContactsPage = lazy(() =>
  import('./pages/MyContactsPage/MyContactsPage')
);
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<MyContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
