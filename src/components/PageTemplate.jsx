import React, { PureComponent } from 'react';

import SideBarContainer from '../containers/SideBar/index';
import MenuContainer from '../containers/Menu/index';

class PageTemplate extends PureComponent {
	render() {
		return (
			<div className='container view-container'>
				<h1>Layout</h1>
				<MenuContainer/>
				<div className='row'>
					<SideBarContainer/>
					<div className='col-md-9'>{this.props.children}</div>
				</div>
			</div>
		);
	}

}

export default PageTemplate;
