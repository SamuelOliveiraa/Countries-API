import style from './Country.module.css'
import Button from '../../components/Button/Button';
import { useState, useEffect } from 'react';
import {FaArrowLeft} from 'react-icons/fa'
import Cards from '../../components/Cards/Cards';
import Card from '../../components/Card/Card';    

function Country() {
    let a = window.location.href
    const [countrys, setCountrys] = useState([])
    const [all, setAll] = useState([])

    let url = 'https://restcountries.com/v2/name/' + a.substr(30) 
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then((data) => (setCountrys(data)));
    }, [url])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all' )
        .then(response => response.json())
        .then((data) => (setAll(data)));
    }, [])

    let randon = Math.floor(Math.random() * 200) 
    
    console.log(countrys[0])
    console.log(countrys)

  return(
    
    <div className={style.container}>
        <div className={style.content}>
            <Button 
                text='Back'
                icon={<FaArrowLeft/>}
                to='/'
            ></Button>

            {countrys.length === 0 ? '' : <><div className={style.img_container}>
                    <img src={countrys[0].flag} alt="" />
                </div>
                <div className={style.text_container}>
                    <h2>
                        {countrys[0].name}
                    </h2>
                    <div className={`${style.text} ${style.text1}`}>
                        <p>
                            Native Name : 
                            <span>
                                {countrys[0].nativeName}
                            </span>
                        </p>
                        <p>
                            Population:
                            <span>
                                {countrys[0].population}
                            </span>
                        </p>
                        <p>
                            Region:
                            <span>
                                {countrys[0].region}
                            </span>
                        </p>
                        <p>
                            Sub Region:
                            <span>
                                {countrys[0].subregion}
                            </span>
                        </p>
                        <p> 
                            Capital:
                            <span>  
                                {countrys[0].capital}
                            </span>
                        </p>
                    </div>
                    <div className={`${style.text} ${style.text2}`}>
                        <p>
                            Top Level Domain:
                            <span>
                                {countrys[0].topLevelDomain}
                            </span>
                        </p>
                        <p>
                            Currencies:
                            <span>
                                {countrys[0].currencies[0].name}
                            </span>
                        </p>
                        <p> 
                            Languagens:
                            <span>  
                                {countrys[0].languages[0].name}
                            </span>
                        </p>
                    </div>

                    <div className={`${style.text} ${style.text3}`}>
                        <p>
                            Border Countries:
                        </p>

                        <div className={style.button_container}>
                            {countrys[0].borders === undefined ? <><Button text='Not Borders' icon='' to='#'/></>  : countrys[0].borders.map((border, index) => (
                                index > 3 ? '' : <Button
                                key={index}
                                text={border}
                                icon=''
                                to='#'
                                ></Button> 
                            ))}
                        </div>
                    </div>
                </div></>}
        </div>
        <Cards>
            {all.length === 0 ? '' : 
            <> <Card countrys={all[randon]}></Card> 
            
            <Card countrys={all[randon + 1]}></Card> 
            <Card countrys={all[randon + 2]}></Card> 
            <Card countrys={all[randon + 3]}></Card> </> }
        </Cards>
    </div>
  );
}

export default Country;