import React from 'react'
import noteIcon from '../../images/noteIcon.png'
import './sideBarNote.css'

export default function SideBarNote() {
    return (
        <div className="sideNote mt-5 d-flex justify-content-between">
            <img src={noteIcon} alt="" />
            <div className="sideNoteDesc ps-2">
                Your location will help us server better and extend a personalised experience.
            </div>
        </div>
    )
}
