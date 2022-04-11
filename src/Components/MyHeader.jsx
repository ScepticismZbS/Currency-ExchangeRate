import React from "react";
import "../Style/MyHeader.css";

function MyHeader({ currencyValue }) {

  return (
    <header className="header">
      {currencyValue.map(element => (

        <h2 key={element.ccy}>
          {element.ccy} {element.base_ccy} {element.buy} {element.sale}
        </h2>
        
      ))}
    </header>
  );
}

export default MyHeader;