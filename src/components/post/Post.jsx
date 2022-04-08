import React from 'react'
import './post.css'
import { Card } from 'react-bootstrap';
import postOptions from '../../images/postOptions.png'
import views from '../../images/views.png'
import share from '../../images/share.png'
import { useState } from 'react';

export default function Post({ postImage, postType, postTitle, postDesc, profilePic, username }) {

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
        <div className="post mt-3">
            <Card>
                <Card.Img variant="top" src={postImage} />
                <Card.Body className="d-flex flex-column">
                    <div id="myPostType" className="container position-absolute">
                        <img src={postType} alt="" />
                    </div>
                    <div className="title d-flex align-items-center justify-content-between">
                        <div className="container postTitle">
                            {postTitle}
                        </div>
                        <div className="postOptions">
                            <img onClick={optionsHandler} src={postOptions} alt="" />
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
                        {postDesc}
                    </div>



                    <div className="mydiv d-flex align-items-center">


                        <div className="container-fluid detail d-flex align-items-center">
                            <div className="Pleft d-flex align-items-center">
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
