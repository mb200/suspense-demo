import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Spinner } from "./components/Spinner";
import { MovieListPage } from "./pages/MovieListPage";
import { MoviePage } from "./pages/MoviePage";

const App: React.FC = () => {
  return (
    <div className="app">
      <ErrorBoundary fallback={<h1>Oops! Check the console.</h1>}>
        <Suspense fallback={<Spinner isBig />}>
          <Routes>
            <Route path="movies" element={<MovieListPage />} />
            <Route path="movies/:movieId*" element={<MoviePage />} />
            <Route path="*">
              <Navigate to="movies" />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export { App };
