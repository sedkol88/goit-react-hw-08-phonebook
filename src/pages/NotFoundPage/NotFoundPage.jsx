import { Link } from 'react-router-dom';

// import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Cannot found this page</h1>
      <Link to="/contacts">To My contacts page</Link>
    </div>
  );
};

export default NotFoundPage;
