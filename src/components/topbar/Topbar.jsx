import React from 'react'
import logo from '../../images/logo.png'
import searchIcon from '../../images/searchIcon.png'
import dropDownIcon from '../../images/dropDownIcon.png'
import {
    Link
} from "react-router-dom";
import './topbar.css'
import mobileIcon1 from '../../images/mobileIcon1.png'
import mobileIcon2 from '../../images/mobileIcon2.png'
import mobileIcon3 from '../../images/mobileIcon3.png'
import MyModal from '../myModal/MyModal';
import { useState } from 'react';

export default function Topbar() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container-fluid topbar d-flex align-items-center bg-light">
            <div className="container topbarLogo">
                <Link className="link" to="/">
                    <img src={logo} alt="" className="" />
                </Link>
            </div>
            <div className="container topbarSearch d-flex align-items-center">
                <img id="topbarSearchImg" src={searchIcon} alt="" />
                <input type="text" placeholder="Search for your favourite groups in ATG" />
            </div>
            <div className="container topbarCreate d-flex align-items-center">
                <span id="topbarCreateTitle" onClick={() => setModalShow(true)}>Create account. It's free!</span>
			<MyModal show={modalShow} 
                onHide={() => setModalShow(false)}/>
                <img id="topbarCreateImg" src={dropDownIcon} alt="" />

                <div className="topbarCreateImgContainer d-flex">
                    <img src={mobileIcon1} alt="" />
                    <img className="mx-3" src={mobileIcon2} alt="" />
                    <img src={mobileIcon3} alt="" />
                </div>
            </div>
        </div>
    )
}
