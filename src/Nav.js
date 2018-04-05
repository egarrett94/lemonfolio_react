import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
var myName = <span className='myname'>Emily Garrett</span>

class Nav extends Component {

	render() {
		return(

			<div className="nav">
				<div className='links'>
					<Link activeClassName="active" to='/'>HOME</Link>
				    <Link activeClassName="active" to='/projects'>PROJECTS</Link>
				    <Link activeClassName="active" to='/design'>DESIGN</Link>
				    <Link activeClassName="active" to='/about'>ABOUT</Link>
				</div>
			</div>
		)
	}
}

export default Nav;