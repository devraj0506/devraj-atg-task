import React from 'react'
import location from '../../images/locationIcon.png'
import closeIcon from '../../images/closeIcon.png'
import './sideBarLocation.css'
import { useState } from 'react'

export default function SideBarLocation() {

    const [text, setText] = useState('');
    const [click, setClick] = useState('false')

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        setClick(!click)
        setText('')
    }

    return (
        <div className="sideBarLocation d-flex align-items-center pb-2">
            <img src={location} alt="" />
            <input type="text" placeholder="Enter your location" id="location" value={text} onChange={handleInput} />
            <img src={closeIcon} alt="" id="close" onClick={handleClick} />
        </div>
    )
}
