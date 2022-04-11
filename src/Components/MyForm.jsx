import React, { useRef, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const MyForm = ({ currencyValue, name, rate }) => {

  

  const [inputValue, setInputValue] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('')
  // const bodyInputRef = useRef();

  const sortCurrency = (sort) => {
    setSelectedCurrency(sort);
    console.log(sort)
  }

  // const calculate = (e) => {
  //   setInputValue(currencyValue => ({...currencyValue, 
  //   base_ccy: e.target.base_ccy === 'UAH' ? e.target.value : e.target.value * }))
  // }


  return (

    currencyValue.map(item =>
    (<div>
      <p>{item.base_ccy}</p>
      <MyInput
        value={inputValue}
        onChange={e=>setInputValue(e.target.value)}
        type='number'
        placeholder='Введите значение'
      />
      <MySelect
        value={selectedCurrency}
        onChange={sortCurrency}
        options={currencyValue}
      />
      <MyInput
        type='number'
        placeholder='ответ'
      />

      <div className="result">
      </div>
    </div>)
    )
  )

}

export default MyForm