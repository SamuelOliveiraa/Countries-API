import style from './Card.module.css'
import { Link } from "react-router-dom"
;
function Card({countrys}) {
    let url = `/country/${countrys.name}`
    
  return(
    <Link to={url} className={style.card}>
        <div className={style.img_container}>
            <img src={countrys.flags.png} alt="" />
        </div>
        <div className={style.text}>
            <h2>
                {countrys.name}
            </h2>

            <p>
                Population:
                <span>
                    {countrys.population}
                </span>
            </p>
            <p>
                Region:
                <span>
                    {countrys.region}
                </span>
            </p>
            <p>
                Capital:
                <span>
                    {countrys.capital}
                </span>
            </p>
        </div>
    </Link>
  );
}

export default Card;