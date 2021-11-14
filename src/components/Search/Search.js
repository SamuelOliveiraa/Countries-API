import Input from '../Input/Input';
import Select from '../Select/Select';
import style from './Search.module.css'

function Search({countrys ,setUrl}) {
  return(
    <div className={style.search}>
      <Input setUrl={setUrl}></Input>

      <Select countrys={countrys} setUrl={setUrl}></Select>
    </div>
  );
}

export default Search;