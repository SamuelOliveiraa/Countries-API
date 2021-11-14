import style from './Header.module.css'

import { FaRegMoon } from "react-icons/fa";

function Header() {
  function darkMode() {
    let root = document.querySelector('html')

    if(root.classList.contains('dark')){
      root.classList.remove('dark')
    }else{
      root.classList.add('dark')
    }
  }

  return(
      <div className={style.container}>
          <header>
            <h2>
                Where in the world?
            </h2>

            <h3 onClick={darkMode}>
                <FaRegMoon/>
                Dark Mode
            </h3>
          </header>
      </div>
  );
}

export default Header;