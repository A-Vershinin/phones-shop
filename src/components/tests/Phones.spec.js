import React from 'react';
import { expect as expectChai, assert, should } from 'chai';
import { sinon, spy } from 'sinon';
import enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { renderIntoDocument, findRenderedDOMComponentWithClass, scryRenderedComponentsWithType,
	findRenderedComponentWithType, isElementOfType, Simulat } from 'react-dom/test-utils';

import PageTemplate from '../PageTemplate';
import Phones from '../Phones';
//
enzyme.configure({ adapter: new Adapter() });

// describe.skip('<Phones> by Jest', () => {
//
// 	it('should render layout with Phones component', function () {
// 		const isLayoutComponent = isElementOfType(<Phones/>, Phones);
// 		expect(isLayoutComponent).toBe(true);
// 	});
//
// });
//
describe('<Phones> dump', function () {
// 		// beforeEach(() => {
// 		// 	wrapper = shallow(<Phones phone={phone} loadMorePhones={loadMorePhones}/>)
// 		// });

		it('should render layout', function () {
			// const phones = shallow(<Phones/>);
			// 	should.equal(phones, Phones);
			// 	expect(wrapper).to.equal(Phones);
		});

// 		it('should have props for phone and loadMorePhones', function () {
// 			const wrapper = shallow(<Phones phone={phone} loadMorePhones={loadMorePhones}/>)
// 	    // const wrapper = shallow();
// 	    expect(wrapper.props().phones).to.be.defined;
// 	    expect(wrapper.props().loadMorePhones).to.be.defined;
// 	  });

});
