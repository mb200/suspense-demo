import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Spinner } from "./components/Spinner";
import { MovieListPage } from "./pages/MovieListPage";
import { MoviePage } from "./pages/MoviePage";

const App: React.FC = () => {
  return (
    <div className="app">
      <ErrorBoundary fallback={<h1>Oops! Check the console.</h1>}>
        <Suspense fallback={<Spinner isBig={true} />}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/movies" component={MovieListPage} />
              <Route path="/movies/:movieId*" component={MoviePage} />
              <Route>
                <Redirect to="/movies" />
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
