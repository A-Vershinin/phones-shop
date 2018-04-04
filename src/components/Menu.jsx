import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Menu extends PureComponent {
	render() {
		return (
			<div style={{ border: '1px solid red'}}>
				<p>Меню</p>
				<ul style={{ display: 'flex', justifyContent: 'flex-start', marginRight: '30px'}}>
					<li style={{ marginRight: '30px'}}>
						<Link to='/home'>Home page</Link>
					</li>
					<li style={{ marginRight: '30px'}}>
						<Link to='/page'>Page inner</Link>
					</li>
					<li style={{ marginRight: '30px'}}>
						<Link to='/phones'>Phones inner</Link>
					</li>
				</ul>
			</div>
		);
	}

}

export default Menu;
