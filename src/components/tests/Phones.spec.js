import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import chai, { assert, should } from 'chai';
import enzyme, { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'; // +for snapshot
import { Provider } from 'react-redux';
import chaiJestSnapshot from "chai-jest-snapshot";
import Adapter from 'enzyme-adapter-react-16';

import { random, lorem, commerce, image } from 'faker';

import PageTemplate from '../PageTemplate';
import Phones from '../Phones.jsx';
import configureStore from '../../store';
import { itemStatic } from '../../utils/utilsComp';

const expectChai = chai.expect;
enzyme.configure({ adapter: new Adapter() });

const store = configureStore({});

chai.use(chaiJestSnapshot); // for chaiJestSnapshot

describe.only('<Phones> dump', function () {
		let wrapper;
	  const phones = [itemStatic];
		const loadMorePhones = [itemStatic];

		beforeEach(() => {
			wrapper = shallow(<Phones phones={phones} loadMorePhones={loadMorePhones}/>)
		});

		it('should render DUMB component', () => {
			expectChai(wrapper.length).to.equal(1);
	 	});

		// it('should have props for phones and loadMorePhones', function () {
		// 	const wrapperD = shallow(<Phones />);
		// 	expectChai(wrapperD.props().loadMorePhones).to.be.defined;
		// 	expectChai(wrapperD.props().phones).to.be.defined;
		// });


		it.skip('snapshot of Phones with jest', () => {
			const renderer2 = new ShallowRenderer();//+
			const renderedValue = renderer2.render(<Phones phones={phones} loadMorePhones={loadMorePhones}/>);
			expect(renderer2.getRenderOutput()).toMatchSnapshot();
	 	});

		beforeEach(function() {
			chaiJestSnapshot.setFilename(__filename + ".snap");
			chaiJestSnapshot.setTestName("Phones renders correctly");
		});

		it("snapshot of Phones with mocha", () => {
			const renderer2 = new ShallowRenderer();
			const renderedValue = renderer2.render(<Phones phones={phones} loadMorePhones={loadMorePhones}/>);
	    expectChai(renderedValue).to.matchSnapshot();
	  });

});
