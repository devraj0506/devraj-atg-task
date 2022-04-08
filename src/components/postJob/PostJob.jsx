import React from 'react'
import './postJob.css'
import { Card } from 'react-bootstrap';
import views from '../../images/views.png'
import PostOptions from '../../images/postOptions.png'
import share from '../../images/share.png'
import locationIcon from '../../images/locationIcon.png'
import ButtonsLarge from '../Buttons/ButtonsLarge';
import { useState } from 'react';

export default function PostJob({ postImage, postType, postTitle, profilePic, username, jobDescLogo, jobDescTag, jobLocationName, btnTxt, btnColor }) {

    const [options, setOptions] = useState(false)

    const [c, setC] = useState('none')

    const box = () => {
        setC('d')
    }
    const closebox = () => {
        setC('none')
    }


    const optionsHandler = () => {
        setOptions(!options)
        if (options) {
            box();
            setOptions(false)
        } else {
            closebox();
        }
    }

    return (
        <div className="postJob mt-3">
            <Card>
                <Card.Img variant="top" src={postImage} />
                <Card.Body className="d-flex flex-column">
                    <div id="myPostType" className="container position-absolute">
                        <img src={postType} alt="" />
                    </div>
                    <div className="title d-flex align-items-center justify-content-between">
                        <div className="container JpostTitle p-0">
                            {postTitle}
                        </div>
                        <div className="postOptions">
                            <img onClick={optionsHandler} src={PostOptions} alt="" />
                            <div className={`${c} p-2`}>
                                <div className="containOpt p-2">
                                    <div className="bb p-1">Edit</div>
                                    <div className="bb my-2 p-1">Report</div>
                                    <div className="bb p-1">Option 3</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="container postDesc">
                        <div className="container-fluid detailContainer">
                            <div className="container jobDetail d-flex align-items-center justify-content-between">
                                <div className="jobDesc d-flex align-items-center">
                                    <img src={jobDescLogo} alt="" />
                                    <div className="jobDescTag">
                                        {jobDescTag}
                                    </div>
                                </div>
                                <div className="jobLocation d-flex align-items-center">
                                    <img src={locationIcon} alt="" />
                                    <div className="jobLocationName">
                                        {jobLocationName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ButtonsLarge
                        text={btnTxt}
                        btnColor={btnColor} onclicks={false} />
                    <div className="mydiv d-flex align-items-center">
                        <div className="container-fluid detail d-flex align-items-center">
                            <div className="Jleft d-flex align-items-center">
                                <img id="profilePic" src={profilePic} alt="" />
                                <div id="userName" className="username">
                                    {username}
                                </div>
                            </div>
                            <div className="postDetails container-fluid d-flex align-items-center justify-content-end">
                                <div className="right d-flex align-items-center">
                                    <div className="postViews">
                                        <img src={views} alt="" />
                                        1.4k views
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="share bg-gray d-flex justify-content-center align-items-center">
                            <img src={share} alt="" />
                        </div>
                    </div>


                </Card.Body>
            </Card>
        </div>
    )
}
