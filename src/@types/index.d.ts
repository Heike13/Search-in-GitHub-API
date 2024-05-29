export type Repo = {
  name: string;
  description: string;
  owner: Owner;
  url: string;
  id: number;
  html_url: string;
  avatar: url;
  stargazers_count: number;
};

type Owner = {
  login: string;
  avatar_url: string;
};
