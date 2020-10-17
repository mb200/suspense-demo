import { rest, setupWorker } from "msw";
import { TIMEOUTS } from "./config";
import { MovieID, MOVIES, REVIEWS } from "./data";

const handlers = [
  rest.get("/api/movies", (req, res, ctx) => {
    return res(ctx.delay(TIMEOUTS.MOVIE_LIST), ctx.json([...MOVIES.values()]));
  }),

  rest.get("/api/movies/:id", (req, res, ctx) => {
    const movieId = req.params.id as MovieID;
    const match = MOVIES.get(movieId);

    if (!match) {
      return res(
        ctx.delay(TIMEOUTS.MOVIE_DETAILS),
        ctx.status(404, `No movie found with ID: ${movieId}`)
      );
    }

    return res(ctx.delay(TIMEOUTS.MOVIE_DETAILS), ctx.json(match.details));
  }),

  rest.get("/api/movies/:id/reviews", (req, res, ctx) => {
    const movieId = req.params.id as MovieID;
    const match = REVIEWS.get(movieId);

    if (!match) {
      return res(
        ctx.delay(TIMEOUTS.MOVIE_DETAILS),
        ctx.status(404, `No reviews found for movie with ID: ${movieId}`)
      );
    }

    return res(ctx.delay(TIMEOUTS.MOVIE_REVIEWS), ctx.json(match));
  }),
];

const server = setupWorker(...handlers);

export { server };
