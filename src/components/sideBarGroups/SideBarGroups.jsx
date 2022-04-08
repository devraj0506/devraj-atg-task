import React from 'react'
import './sideBarGroups.css'
import Group from './Group'
import thumbUp from '../../images/thumbUp.png'
import groupPic1 from '../../images/groupPic1.png'
import groupPic2 from '../../images/groupPic2.png'
import groupPic3 from '../../images/groupPic3.png'
import groupPic4 from '../../images/groupPic4.png'

export default function SideBarGroups() {
    return (
        <div className="sideGroups">
            <div className="sideBarGroupsTitle d-flex mb-1">
                <img src={thumbUp} alt="" />
                RECOMMENDED GROUPS
            </div>

            <Group groupPic={groupPic1}
                groupName="Leisure" />
            <Group groupPic={groupPic2}
                groupName="Activism" />
            <Group groupPic={groupPic3}
                groupName="MBA" />
            <Group groupPic={groupPic4}
                groupName="Philosophy" />
        </div>
    )
}
