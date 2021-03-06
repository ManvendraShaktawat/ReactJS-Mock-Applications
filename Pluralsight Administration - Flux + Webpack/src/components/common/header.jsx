import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src="assets/images/pluralsight-logo.png"/>
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="authors" ref={(comp) => { window.authorsTab=comp }}>Authors</Link></li>
						<li><Link to="about">About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
