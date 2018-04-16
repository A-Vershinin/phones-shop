import React from 'react';
import { expect as expectChai, assert, should } from 'chai';
import enzyme, { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import Adapter from 'enzyme-adapter-react-16';
import { renderIntoDocument, findRenderedDOMComponentWithClass, scryRenderedComponentsWithType,
	findRenderedComponentWithType, isElementOfType, Simulat } from 'react-dom/test-utils';

import { random, lorem, commerce, image } from 'faker';

import PageTemplate from '../PageTemplate';
import Phones from '../Phones';

enzyme.configure({ adapter: new Adapter() });

const item = {
	"id": random.uuid(),
	"categoryId": random.number(),
	"name": lorem.word(),
	"description": lorem.paragraph(),
	"price": commerce.price(),
	"image": image.image(),
	"cpu": lorem.words(),
	"camera": lorem.words(),
	"size": lorem.words(),
	"weight": lorem.words(),
	"display": lorem.words(),
	"battery": lorem.words(),
	"memory": lorem.words()
};

// describe.skip('<Phones> by Jest', () => {
// 	it('should render layout with Phones component', function () {
// 		const isLayoutComponent = isElementOfType(<Phones/>, Phones);
// 		expect(isLayoutComponent).toBe(true);
// 	});
// });

describe.skip('<Phones> dump', function () {
		let wrapper;
	  const phones = [item];
		const loadMorePhones = [item];

		beforeEach(() => {
			wrapper = shallow(<Phones phones={phones} loadMorePhones={loadMorePhones}/>)
		});

		it('should render DUMB component', () => {
			expectChai(wrapper.length).equal(1)
	 });

		// it('should render layout', function () {

			// const phones = shallow(<Phones/>);
			// 	should.equal(phones, Phones);
			// 	expect(wrapper).to.equal(Phones);
		// });

		// it('+++ contains output', () => {
    //     expect(wrapper.find('button').prop('onClick')).toEqual(output)
    // });

		it('snapshot of Phones', () => {
			const renderedValue = renderer.create(<Phones phones={phones} loadMorePhones={loadMorePhones}/>).toJSON();
			expect(renderedValue).toMatchSnapshot();
	 	});

});






// 		it('should have props for phone and loadMorePhones', function () {
// 			const wrapper = shallow(<Phones phone={phone} loadMorePhones={loadMorePhones}/>)
// 	    // const wrapper = shallow();
// 	    expect(wrapper.props().phones).to.be.defined;
// 	    expect(wrapper.props().loadMorePhones).to.be.defined;
// 	  });
