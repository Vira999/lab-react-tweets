import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Message(props) {
    const {message} = props
    return (
        <div><p className="message" key={uuidv4()}>{message}</p> </div>
    )}

export default Message