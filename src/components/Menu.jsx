import React, { PureComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Menu extends PureComponent {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1"
					aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		     	<Link className="navbar-brand" to="/">Brand</Link>
		    </div>
		    <div className="collapse navbar-collapse" id="#navbar-collapse-1">
		      <ul className="nav navbar-nav">

		        <li><NavLink to='/contacs' activeClassName='active-item'>Contacs</NavLink></li>
		        <li><NavLink to="/phones" activeClassName='active-item'>Phones inner</NavLink></li>
		      </ul>
		    </div>
			</nav>
		)
	}
}

export default Menu;
