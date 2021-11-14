import style from './Select.module.css'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import {useState} from 'react'

function Select({countrys, setUrl}) {
    const [container, setContainer] = useState(style.container)

    function toggle() {
      if(container === style.container){
          setContainer(`${style.container} ${style.show}`)
      }else{
          setContainer(`${style.container}`)
      }
    }

    function update(e){
      setUrl('https://restcountries.com/v2/region/' + e.target.innerHTML)
      toggle()
    }
    function all(){
      setUrl('https://restcountries.com/v2/all')
    }

  return(
      <div className={container}>
          <div className={style.select} onClick={toggle}>
            <h2>
                Filter by Region
            </h2>
            {container === `${style.container} ${style.show}` ? <FaAngleDown/> : <FaAngleUp/>}
          </div>

          <div className={style.options}>
            <p onClick={all}>
              All Regions
            </p>
            <p onClick={update}>
              Africa
            </p>
            <p onClick={update}>
              Americas
            </p>
            <p onClick={update}>
              Asia
            </p>
            <p onClick={update}>
              Europe
            </p>
            <p onClick={update}>
              Oceania
            </p>
          </div>
      </div>

  );
}

export default Select;