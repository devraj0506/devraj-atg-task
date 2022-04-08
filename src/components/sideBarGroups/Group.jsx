import React from 'react'
import Buttons from '../Buttons/Buttons'
import './group.css'

export default function Group({ groupPic, groupName }) {



    return (
        <div className="groups d-flex justify-content-between align-items-center">

            <div className="rightGroup d-flex justify-content-between align-items-center">
                <img src={groupPic} className="me-3" alt="" />
                {groupName}
            </div>

            <div className="left">
                <Buttons text="follow" btnStyle={true} width="w25" borderRadius="b14" mainbtn="w60" />
            </div>
        </div>
    )
}
