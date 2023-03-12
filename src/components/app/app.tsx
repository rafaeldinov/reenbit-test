import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import CardPage from '../../pages/card-page/card-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<CatalogPage />}
      />
      <Route
        path={AppRoute.Catalog}
        element={<CatalogPage />}
      />
      <Route
        path={AppRoute.Item}
        element={<CardPage />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<PageNotFound />}
      />
    </Routes>
  );
}

