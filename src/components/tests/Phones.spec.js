// import 'jsdom-global/register';
import React from 'react';
import { expect, assert } from 'chai';
import { sinon, spy } from 'sinon';
import enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PageTemplate from '../PageTemplate';
import Phones from '../Phones';

enzyme.configure({ adapter: new Adapter() });

// describe('<Phones>', () => {
// 	it('contains an component <PageTemplate>', function () {
// 		const wrapper = mount();
// 		// const wrapper = shallow();
// 		expect(wrapper.find(PageTemplate)).to.have.length(1);
// 	});
//
// 	it('renders without exploding', () => {
//     expect(shallow(<Phones/>).length).toEqual(1);
//   });
// });
