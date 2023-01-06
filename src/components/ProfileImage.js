import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ProfileImage(props) {

    const {image} = props
    return (
        <div>
            <img src={image} className="profile" alt="profileimage" key={uuidv4()} />
</div> )}

export default ProfileImage