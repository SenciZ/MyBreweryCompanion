import { SearchFieldContainer } from "./styles";

interface IProps {
  classname?: string;
  searchString: string;
  onChangeSearchString: (newSearchString: string) => void;
  onSearchSubmit: () => void;
};

export const SearchField: React.FC<IProps> = ({
  classname = '',
  onChangeSearchString,
  searchString,
  onSearchSubmit,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearchString(e.target.value);
  }

  const onSearchHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    onSearchSubmit();
  }

  return (
    <SearchFieldContainer>
      <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
      <input
        type='text'
        required
        placeholder='Search for a Brewery Now'
        id='brewery-search'
        onChange={onChangeHandler}
        value={searchString}
        aria-labelledby=""
      />
      <button type='submit' onClick={onSearchHandler}>Search</button>
    </SearchFieldContainer>
  )
}