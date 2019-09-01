import React from 'react'
import { Link } from "gatsby"


const navbar = () => {
    return (
        <div>
            <Link to="/contact/">Contact</Link>
            <Link to="/about/">About</Link>
        </div>
    )
}

export default navbar
