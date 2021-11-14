import style from './Input.module.css'

import { BiSearchAlt2 } from "react-icons/bi";

function Input({setUrl}) {
  function update(e) {
    setUrl("https://restcountries.com/v2/name/" + e.target.value)
  }
  return(
    <div className={style.input}>
        <BiSearchAlt2/>
        <input type="text" placeholder='Seacrh for a country...' onChange={update} />
    </div>
  );
}

export default Input;