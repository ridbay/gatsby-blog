import React, { Component } from 'react'
import Header from '../components/header'
import {Link} from 'gatsby'

export class about extends Component {
    render() {
        return (
            <div style={{ color: 'teal' }}>
                <Header headerTitle="This is about page"/>
                <Link to="/">Home</Link>
                <h1>About Gatsby</h1>
                <p>Such wow. Very React.</p>
            </div>
        )
    }
}

export default about
