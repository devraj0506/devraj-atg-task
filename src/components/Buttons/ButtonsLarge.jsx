import React from 'react'
import './ButtonsLarge.css'
import { useState } from 'react';
import MyModal from '../myModal/MyModal'

const STYLES = ['btn--orange', 'btn--green'];

export default function ButtonsLarge({text, btnColor,br2, Color,image,onclicks}) {

    const checkButtonStyle = STYLES.includes(btnColor) ? btnColor : STYLES[0];

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container-fluid btncontainer">
            
            <button onClick={() => setModalShow(onclicks)} className={`btn ${checkButtonStyle} ${Color} ${br2}`}> <img src={image} alt="" /> {text}</button>
            
            <MyModal show={modalShow} 
            onHide={() => setModalShow(false)}/>
        </div>
    )
}
