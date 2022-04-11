import React from "react";
import classes from "./MySelect.module.css"

const MySelect = ({options, value, onChange}) => {

    return(
        <select className={classes.MySelect} value={value}
                onChange={event => onChange(event.target.value)}
        >
            {options.map(option => 
                <option key={option.ccy} value={option.ccy}>
                    {option.ccy}
                </option>
            )}
        </select>

    )
}

export default MySelect