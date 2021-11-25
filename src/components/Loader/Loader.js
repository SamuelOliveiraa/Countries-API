import style from './Loader.module.css'

import loading from '../../image/loading.svg'

function Loader() {
  return(
    <div className={style.loader_container}>
        <div className={style.load}></div>
    </div>
  );
}

export default Loader;