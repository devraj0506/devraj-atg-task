import React from 'react'
import Post from '../post/Post'
import PostJob from '../postJob/PostJob'
import './center.css'
import postImage1 from '../../images/postImage1.png'
import postImage2 from '../../images/postImage2.png'
import postImage3 from '../../images/postImage3.png'
import postType1 from '../../images/postType1.png'
import postType2 from '../../images/postType2.png'
import postType3 from '../../images/postType3.png'
import postType4 from '../../images/postType4.png'
import profilePic1 from '../../images/profilePic1.png'
import profilePic2 from '../../images/profilePic2.png'
import profilePic3 from '../../images/profilePic3.png'
import profilePic4 from '../../images/profilePic4.png'
import jobDescLogo1 from '../../images/jobDescLogo1.png'
import jobDescLogo2 from '../../images/jobDescLogo2.png'


export default function CenterCont() {
    return (
        <div className="center">
            <Post postImage={postImage1}
                postType={postType1}
                postTitle="What if famous brands had regular fonts? Meet RegulaBrands!"
                postDesc="I've worked in UX for the better part of a decade. From now on, I plan to rei..."
                profilePic={profilePic1}
                username="Sarthak Karma" />
            <Post postImage={postImage2}
                postType={postType2}
                postTitle="Tax Benefits for Investment under National Pension Scheme launched by Government"
                postDesc="I've worked in UX for the better part of a decade. From now on, I plan to rei..."
                profilePic={profilePic2}
                username="Sarah West" />
            <PostJob postImage={postImage3}
                postType={postType3 } 
                postTitle="Finance & Investment Elite Social Mixer @Lujiazui"
                jobDescLogo={jobDescLogo1}
                jobDescTag ="Fri, 12 Oct, 2018"
                jobLocationName="Ahemdabad, India"
                btnTxt="Visit Website"
                btnColor="btn--orange"
                profilePic={profilePic3}
                username="Ronal Jones"/>
            <PostJob
                postType={postType4 } 
                postTitle="Software Developer"
                jobDescLogo={jobDescLogo2}
                jobDescTag ="Innovaccer Analytics Private Ltd."
                jobLocationName="Noid, India"
                btnTxt="Apply on Timesjobs"
                btnColor="btn--green"
                profilePic={profilePic4}
                username="Joseph Gray"/>
        </div>
    )
}
