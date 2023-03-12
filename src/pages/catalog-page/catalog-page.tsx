import Cards from '../../components/cards/cards';
import GoogleAuth from '../../components/google-auth/google-auth';
import Search from '../../components/search/search';

export default function CatalogPage(): JSX.Element {
  return (
    <div className="main-container">
      <GoogleAuth />
      <img className="logo" src="images/logo.png" alt="logo" width="600" height="200" />
      <Search />
      <Cards />
    </div>
  );
}
