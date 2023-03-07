type source = {
  title: string;
  region: string;
  domain: string;
  path: string | null;
};

type currency = {
  code: string;
  title: string;
  slug: string;
  url: string;
};

type vote = {
  negative: number;
  positive: number;
  important: number;
  liked: number;
  disliked: number;
  lol: number;
  toxic: number;
  saved: number;
  comments: number;
};

export type newsCryptoPanic = {
  kind: string;
  domain: string;
  source: source;
  title: string;
  published_at: string;
  slug: string;
  currencies: currency[];
  id: number;
  url: string;
  created_at: string;
  votes: vote;
};
