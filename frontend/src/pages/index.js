import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>

      <Link to='/dashboard'>Dashboard</Link>
      <br />
      <Link to='/signin'>zaloguj sie</Link>
      <br />
      <Link to='/signup'>zarejestruj sie</Link>
      <br />
      <Link to='/blog'>BLOG</Link>
      <br />
    </>
  );
};

export default HomePage;
