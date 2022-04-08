import React from 'react'
import SideBarGroups from '../sideBarGroups/SideBarGroups'
import SideBarLocation from '../sideBarLocation/SideBarLocation'
import SideBarNote from '../sideBarLocation/SideBarNote'
import './sidebar.css'

export default function SideBar() {
    return (
        <div className="sideBar mt-3 px-3">
            <SideBarLocation />
            <SideBarNote />
            <SideBarGroups />
        </div>
    )
}
