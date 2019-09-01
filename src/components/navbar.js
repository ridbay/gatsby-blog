import React from 'react'
import { Link } from "gatsby"


const navbar = (props) => {
    const {toLink, pageName} = props;
    return (
        <div>
            <Link to="/contact/">Contact</Link>
            <br />
            <Link to="/about/">About</Link>
        </div>
    )
}

export default navbar
