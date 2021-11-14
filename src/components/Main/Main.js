import style from './Main.module.css'
import Search from '../Search/Search';
import Cards from '../Cards/Cards';
import Card from '../Card/Card';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Main() {

 const [countrys, setCountrys] = useState([])
 const [url, setUrl] = useState('https://restcountries.com/v2/all')

useEffect(() => {
  axios.get(url === 'https://restcountries.com/v2/name/' ?'https://restcountries.com/v2/all' : url)
    .then((res) =>{
      setCountrys(res.data)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
 }, [url])

 console.log(countrys)

  return(
    <div className={style.container}>
      <main>
        <Search countrys={countrys} setUrl={setUrl}></Search>

        <Cards>
          {countrys.status === 404 ? <p>Sem Resultados</p> : countrys.map((country, index) => (
              index < 32 ? <Card countrys={country} key={index}></Card> : ''
          ))}
        </Cards>
      </main>
    </div>
  );
}

export default Main;