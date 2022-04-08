import React from 'react'
import './hero.css'
import ButtonsLarge from '../Buttons/ButtonsLarge';
import backArrow from '../../images/backArrow.png'

export default function Hero() {
    return (
        <div className="hero">

            <div className="mt-4 heroNav container-fluid d-flex align-items-center justify-content-between">
                <img id="backArrowimg" src={backArrow} alt="" />
                <div className="heroBtnContainer">
                    <ButtonsLarge
                        text="Join Group"
                        Color={"sign2"}
                        onclicks={true}
                        modalPath='/create' />
                </div>
            </div>

            <div className="heroTextBox d-flex flex-column">
                <span className="heroTitle">Computer Engineering</span>
                <span className="heroTag">142,765 Computer Engineers follow this</span>
            </div>
        </div>
    )
}
