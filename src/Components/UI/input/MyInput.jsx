import React, { useState } from "react";
import classes from "./MyInput.module.css"


const MyInput = (props) => {

    
    return(     
        <input key={Date.now()} {...props} className={classes.myInput}/>

    );
};

export default MyInput