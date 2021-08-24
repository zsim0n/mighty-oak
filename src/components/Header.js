import React from 'react'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Timu.io</strong> <span>the next thing</span></Link>
    </header>
)

export default Header
