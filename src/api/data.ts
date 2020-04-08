export enum MovieID {
  PARASITE = "parasite",
  AVENGERS_ENDGAME = "avengers-endgame",
  US = "us",
  KNIVES_OUT = "knives-out",
  TOY_STORY_4 = "toy-story-4",
  THE_IRISHMAN = "the-irishman",
  LITTLE_WOMEN = "little-women",
  BOOKSMART = "booksmart",
  THE_FAREWELL = "the-farewell",
  MARRIAGE_STORY = "marriage-story",
}

export type IMovie = {
  id: MovieID;
  details: IMovieDetails;
};

export type IMovieReview = {
  blurb: string;
  author: string;
  source: string;
  fresh: boolean;
};

export type IMovieDetails = {
  name: string;
  posterSrc: string;
  tomatoMeter: number;
  audienceScore: number;
  criticsConsensus: string;
};

/**
 * ------------------------------------
 *
 * MOVIES
 *
 * ------------------------------------
 **/

const PARASITE: IMovie = {
  id: MovieID.PARASITE,
  details: {
    name: "Parasite (2019)",
    posterSrc:
      "https://resizing.flixster.com/iP4jDkaPmfu1p446vkgRUr5YZsY=/fit-in/200x296.2962962962963/v1.bTsxMzIyNDEwMjtqOzE4NDIzOzEyMDA7MjQwMDszNTU2",
    tomatoMeter: 99,
    audienceScore: 90,
    criticsConsensus: `
      An urgent, brilliantly layered look at timely social themes, 
      Parasite finds writer-director Bong Joon Ho in near-total command of his craft.
    `,
  },
};

const AVENGERS_ENDGAME: IMovie = {
  id: MovieID.AVENGERS_ENDGAME,
  details: {
    name: "Avengers: Endgame",
    posterSrc:
      "https://resizing.flixster.com/fbwrhADVOBsD2LUZQVeIMim25Q8=/fit-in/200x296.2962962962963/v1.bTsxMzAxOTkzMjtqOzE4NDIwOzEyMDA7MTY4ODsyNTAw",
    tomatoMeter: 94,
    audienceScore: 90,
    criticsConsensus: `
      Exciting, entertaining, and emotionally impactful, Avengers: Endgame does 
      whatever it takes to deliver a satisfying finale to Marvel's epic Infinity Saga.
    `,
  },
};

const US: IMovie = {
  id: MovieID.US,
  details: {
    name: "Us (2019)",
    posterSrc:
      "https://resizing.flixster.com/sYZHFbH0taeVkXFtTi71cFAPha0=/fit-in/200x296.2962962962963/v1.bTsxMzAyNTI3OTtqOzE4NDIwOzEyMDA7MzYwMDs1NzAw",
    tomatoMeter: 93,
    audienceScore: 59,
    criticsConsensus: `
      With Jordan Peele's second inventive, ambitious horror film, we have seen how to beat 
      the sophomore jinx, and it is Us.
    `,
  },
};

const KNIVES_OUT: IMovie = {
  id: MovieID.KNIVES_OUT,
  details: {
    name: "Knives Out",
    posterSrc:
      "https://resizing.flixster.com/Zel8IeRRdsU3vqtX9uQ5NkLaVqo=/fit-in/200x296.2962962962963/v1.bTsxMzE5MDI4NjtqOzE4NDIyOzEyMDA7MTk0NDsyODgw",
    tomatoMeter: 97,
    audienceScore: 92,
    criticsConsensus: `
      Knives Out sharpens old murder-mystery tropes with a keenly assembled suspense outing 
      that makes brilliant use of writer-director Rian Johnson's stellar ensemble.
    `,
  },
};

const TOY_STORY_4: IMovie = {
  id: MovieID.TOY_STORY_4,
  details: {
    name: "Toy Story 4",
    posterSrc:
      "https://resizing.flixster.com/wFHnR0SuewwiUb4qSKc19rw7TMk=/fit-in/200x296.2962962962963/v1.bTsxMzAyMzkxNjtqOzE4NDIwOzEyMDA7MTA4NjsxNjA5",
    tomatoMeter: 97,
    audienceScore: 94,
    criticsConsensus: `
      Heartwarming, funny, and beautifully animated, Toy Story 4 manages the unlikely feat of 
      extending -- and perhaps concluding -- a practically perfect animated saga.
    `,
  },
};

/**
 * ------------------------------------
 *
 * REVIEWS
 *
 * ------------------------------------
 **/

const PARASITE_REVIEWS: IMovieReview[] = [
  {
    blurb: `Bong delivers a stunning return to form with this newest venture.`,
    author: "Ben Croll",
    source: "TheWrap",
    fresh: true,
  },
  {
    blurb: `An imaginative comedy-thriller with darkness at its core.`,
    author: "Rafer Guzman",
    source: "Newsday",
    fresh: true,
  },
  {
    blurb: `Let's just say that by "Parasite's" conclusion, what started 
      out as a comedy of manners has become a furious snarl of rage and his most arresting social satire yet.`,
    author: "Bob Mondello",
    source: "NPR",
    fresh: true,
  },
  {
    blurb: `It isn't an easy ride, and as with life in the non-metaphorical world, 
    the destination is uncertain. You'll see strange and wonderful things along the way.`,
    author: "Andrew O'Hehir",
    source: "Salon.com",
    fresh: true,
  },
];

const AVENGERS_ENDGAME_REVIEWS: IMovieReview[] = [
  {
    blurb: `No matter how much homework you've done, what actually happens, the order in which it happens 
    and the folks to whom it happens will still pack surprises - also tongue-in-cheekiness and quite a bit of 
    lump-in-throatiness.`,
    author: "Bob Mondello",
    source: "NPR",
    fresh: true,
  },
  {
    blurb: `The MCU's long goodbye to the Avengers (is it really?) comes off as truly epic and thunderously 
    exciting. But here's the big surprise-it's also an emotional wipeout.`,
    author: "Peter Travers",
    source: "Rolling Stone",
    fresh: true,
  },
  {
    blurb: `The Motion Picture Academy never recognizes great acting if it comes attached to a costume or a cape. 
    That doesn't mean Downey isn't deserving of an Oscar. It's great acting in a great film.`,
    author: "Richard Roeper",
    source: "Chicago Sun-Times",
    fresh: true,
  },
  {
    blurb: `What's missing from "Endgame" is the free play of imagination, the liberation of 
    speculation, the meandering paths and loose ends that start in logic and lead to wonder.`,
    author: "Richard Brody",
    source: "New Yorker",
    fresh: false,
  },
];

const US_REVIEWS: IMovieReview[] = [
  {
    blurb: `"Us" is political filmmaking of the most spirited sort, and it sets up quite a fight: 
    the Hydes come to visit the Jekylls, and the Jekylls hit back. Whom you cheer for, in the long run, is up to you.`,
    author: "Anthony Lane",
    source: "New Yorker",
    fresh: true,
  },
  {
    blurb: `It's compulsory seeing for everyone who loves the horror genre, the movie medium and the notion of saying 
    sage things about contemporary life without straying from entertainment's twisty path.`,
    author: "Joe Morgenstern",
    source: "Wall Street Journal",
    fresh: true,
  },
  {
    blurb: `But the good so greatly outweighs the bad; "Us" is definitely worth seeing, and it is a positive sign 
    for the quality of Peele's upcoming "Twilight Zone" reboot.`,
    author: "Matthew Rozsa",
    source: "Salon.com",
    fresh: true,
  },
  {
    blurb: `It's one thing for a movie to humble you by leaving you unsure about yourself and your place in the world; 
    it's another for it to leave you wondering what, exactly, a filmmaker is trying to use his formidable verbal and visual vocabulary to say.`,
    author: "Stephanie Zacharek",
    source: "Time Magazine",
    fresh: false,
  },
];

const KNIVES_OUT_REVIEWS: IMovieReview[] = [
  {
    blurb: `What a kick to watch whip-smart director Rian Johnson shake the cobwebs off the whodunit genre and turn it 
    into terrific, twisted, all-star fun that actually does keep you guessing until the deliciously slippery end.`,
    author: "Peter Travers",
    source: "Rolling Stone",
    fresh: true,
  },
  {
    blurb: `A genre savant, Johnson understands that one of the pleasures of mystery stories is how they turn viewers 
    into detectives, eager amateur sleuths who also sift through the clues, false and not.`,
    author: "Manohla Dargis",
    source: "The New York Times",
    fresh: true,
  },
  {
    blurb: `Knives Out isn't just a beautifully made diversion. It's also a utopian vision.`,
    author: "Stephanie Zacharek",
    source: "TIME Magazine",
    fresh: true,
  },
  {
    blurb: `In the hands of Craig at his most gleeful, de Armas at her career best, and Johnson oozing love 
    for the genre, Knives Out rises splendidly to the task.`,
    author: "David Sims",
    source: "The Atlantic",
    fresh: true,
  },
];

const TOY_STORY_4_REVIEWS: IMovieReview[] = [
  {
    blurb: `The latest installment, "Toy Story 4," is perhaps the bleakest (and most beautiful) of them all.`,
    author: "Matthew Rozsa",
    source: "Salon.com",
    fresh: true,
  },
  {
    blurb: `TS4 is still flying high on visual pow, pinwheeling fun and soulful feeling. And oh that Forky! 
    As voiced by the incomparable Tony Hale, this plastic spork is an animated character for the ages.`,
    author: "Peter Travers",
    source: "Rolling Stone",
    fresh: true,
  },
  {
    blurb: `The animation is striking, the jokes amusing and the story sweet, though this being Pixar, 
    the tale is also melancholic enough that the whole thing feels deeper than it is.`,
    author: "Manohla Dargis",
    source: "The New York Times",
    fresh: true,
  },
  {
    blurb: `Even if no one needs a Toy Story 4, it's here, and the good news is that it's funny and 
    imaginative and, in places, intriguingly strange.`,
    author: "Stephanie Zacharek",
    source: "TIME Magazine",
    fresh: true,
  },
];

export const MOVIES: Map<MovieID, IMovie> = new Map()
  .set(MovieID.PARASITE, PARASITE)
  .set(MovieID.AVENGERS_ENDGAME, AVENGERS_ENDGAME)
  .set(MovieID.US, US)
  .set(MovieID.KNIVES_OUT, KNIVES_OUT)
  .set(MovieID.TOY_STORY_4, TOY_STORY_4);

export const REVIEWS: Map<MovieID, IMovieReview[]> = new Map()
  .set(MovieID.PARASITE, PARASITE_REVIEWS)
  .set(MovieID.AVENGERS_ENDGAME, AVENGERS_ENDGAME_REVIEWS)
  .set(MovieID.US, US_REVIEWS)
  .set(MovieID.KNIVES_OUT, KNIVES_OUT_REVIEWS)
  .set(MovieID.TOY_STORY_4, TOY_STORY_4_REVIEWS);
