
import React, {useEffect, useState} from "react";
import "./Style/App.css";
import MyHeader from "./Components/MyHeader";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import MyForm from "./Components/MyForm";
import CurrencyService from "./API/CurrencyService";

function App () { 

    const [currencyValue, setCurrencyValue] = useState([])

    useEffect(() => {
      fetchCurrency(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      ).then(res =>  {
        const data = res.data?.filter(item => item.ccy === 'USD' || item.ccy === 'EUR');
        setCurrencyValue(data);
      });
    }, []);

    async function fetchCurrency(url) {
      const currency = await CurrencyService.getAll(url);
      return currency;
    }


  return (
    
    <div className="App">
      <MyHeader currencyValue={currencyValue} />
      <hr style={{margin: '15px 0'}}/>
      <div className="Converter">
        <h1 style={{textAlign: 'center'}}>
          Конвертер Валют
        </h1>
        <MyForm className="myForm" currencyValue={currencyValue}
                // data={{uah: 10, currency: 20, rate: 2}}
        />
       
        

      </div>

    </div>
  );

}


export default App;
