import { useState } from 'react';
import './SearchBar.scss';
import { FormField, Form, Segment, Input } from 'semantic-ui-react';

type SearchBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setSearch }: SearchBarProps) {
  const [inputSearch, setInputSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };
  const handleSubmit = () => {
    setSearch(inputSearch);
    setInputSearch('');
  };

  return (
    <Segment className="search-bar__container">
      <Form onSubmit={handleSubmit} className="search-bar__form" icon="search">
        <FormField className="search-bar__form-field">
          <Input
            onChange={handleChange}
            value={inputSearch}
            className="search-bar__input"
            icon="search"
            iconPosition="left"
            placeholder="react"
          />
        </FormField>
      </Form>
    </Segment>
  );
}

export default SearchBar;
