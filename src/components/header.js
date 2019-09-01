import React from 'react'

const header = (props) =>  {
    const {headerTitle, headerSubTitle} = props;
    return (
        <div>
            <h1>{headerTitle}</h1>
            <h2>{headerSubTitle}</h2>
        </div>
    )
}

export default header;