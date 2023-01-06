import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Timestamp(props) {
    const {timestamp} = props
    return (
        <div> <span className="timestamp" key={uuidv4()}>{timestamp}</span></div> )}

export default Timestamp