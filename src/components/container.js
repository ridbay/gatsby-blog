import React from 'react'
import containerStyle from './container.module.css'
const container = ({children}) => {
    return (
        <div className={containerStyle.container}>
            {children}
        </div>
    )
}

export default container
