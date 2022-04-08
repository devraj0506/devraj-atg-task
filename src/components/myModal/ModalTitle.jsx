import React from 'react'
import './modaltitle.css'
import { Link } from 'react-router-dom'

export default function ModalTitle({ title, util, linker, linkerPath }) {
    return (
        <div className="container modalTitle d-flex justify-content-between">
            <div className="modalTitleLeft">
                {title}
            </div>
            <div className="modalTitleRight d-flex align-items-center">
                {util} <Link to={linkerPath}>{linker}</Link>
            </div>
        </div>
    )
}
