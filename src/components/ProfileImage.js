import React from 'react'

function ProfileImage(props) {

    const {image} = props
    return (
        <div>
            <img src={image} className="profile" alt="profileimage" />
</div> )}

export default ProfileImage