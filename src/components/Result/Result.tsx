import './Result.scss';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';
import { Repo } from '../../@types';

type ResultProps = {
  repositories: Repo[];
};

function truncate(text: string, maxLength: number): string {
  const characters: string[] = [...text];
  let truncatedText: string = characters.slice(0, maxLength).join('');
  if (characters.length > maxLength) {
    truncatedText += '...';
  }
  return truncatedText;
}

function Result({ repositories }: ResultProps) {
  const listRepo = repositories.map((repo: Repo) => (
    <Card key={repo.id} className="result-card" href={repo.url}>
      <Image className="result-card_picture" src={repo.avatar} />
      <CardContent>
        <CardHeader className="result-card_name">{repo.name}</CardHeader>
        <CardMeta>
          <span className="result-card_owner-name">{repo.owner.login}</span>
        </CardMeta>
        <CardDescription>{truncate(repo.description, 90)}</CardDescription>
        <CardMeta className="result-card_stargazer-rates">
          <Icon color="yellow" name="star" /> {repo.stargazers_count}
        </CardMeta>
      </CardContent>
    </Card>
  ));

  return <section className="result-container">{listRepo}</section>;
}

export default Result;
