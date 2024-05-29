import { useEffect, useState } from 'react';
import { Repo } from '../../@types';

import logo from '../../assets/images/logo-github.png';
import Counter from '../Counter/Counter';
import SearchBar from '../SearchBar/SearchBar';
import Result from '../Result/Result';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {
  // 1 - States
  const [search, setSearch] = useState('react');
  const [repositories, setRepositories] = useState([]);
  const [counter, setCounter] = useState(0);

  // Button to add page / result
  // const [moreResult, setmoreResult] = useState(false);

  // 3 - Behavior
  useEffect(() => {
    async function fetchRepositories() {
      try {
        const Response = await fetch(
          `https://api.github.com/search/repositories?q={${search}}&sort=stars&order=desc&page=1&per_page=20`
        );
        const data = await Response.json();

        const items = data.items.map((item: Repo) => ({
          name: item.name,
          description: item.description,
          owner: item.owner.login,
          avatar: item.owner.avatar_url,
          url: item.html_url,
          id: item.id,
          stargazers_count: item.stargazers_count,
        }));

        setCounter(data.total_count);
        setRepositories(items);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    fetchRepositories();
  }, [search]);

  // 2 - render
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchBar setSearch={setSearch} />
      <Counter counter={counter} />
      <Result repositories={repositories} />
    </div>
  );
}

export default App;
