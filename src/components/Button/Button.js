import style from './Button.module.css'
import { Link } from "react-router-dom";

function Button({text,icon, to}) {
  return(
        <Link to={to} className={icon === '' ? style.button : `${style.button} ${style.grid}`}>
            {icon}
            <p>
                {text}
            </p>
        </Link>
  );
}

export default Button;