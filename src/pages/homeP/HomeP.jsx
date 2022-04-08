import React from 'react'
import CenterCont from '../../components/centerContent/CenterCont'
import Side from '../../components/sidebar/Side'
import './home.css'

export default function HomeP() {
    return (
        <div className="container p-0" id="contain">
            <CenterCont />
            <Side />
        </div>
    )
}

