import React from 'react'
import './buttons.css'
import MyModal from '../myModal/MyModal'
import { useState } from 'react';

export default function Buttons({ source, text, btnStyle, width, borderRadius, mainbtn }) {

    const [modalShow, setModalShow] = useState(false);


    return (
        <div className={`buttons ${mainbtn}`}>
            {
                btnStyle ? <button className={`${width} ${borderRadius}`}>{text} <img src={source} alt="" /></button> : <button onClick={() => setModalShow(true)} style={{ color: "white", backgroundColor: "#2F6CE5" }}><img src={source} className="me-2" alt="" />{text}</button>
            }
            <MyModal show={modalShow} 
                onHide={() => setModalShow(false)}/>


        </div>
    )
}
