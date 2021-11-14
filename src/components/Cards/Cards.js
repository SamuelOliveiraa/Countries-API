import style from './Cards.module.css';

function Cards(props) {
  return(
    <div className={style.cards}>
        {props.children}
    </div>
  );
}

export default Cards;