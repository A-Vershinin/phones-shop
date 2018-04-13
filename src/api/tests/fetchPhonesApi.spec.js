import { expect, assert, should } from 'chai';
const fetchMock = require('fetch-mock');
import { random, lorem, commerce, image } from 'faker';

import { fetchPhones as fetchPhonesApi,
	loadMorePhones as  loadMorePhonesApi,
	fetchPhoneById as fetchPhoneByIdApi} from '../fetchPhonesApi';

import mockPhones from '../mockPhones';

function getPhone(idPhone = random.number) {
	return {
		id: idPhone,
		categoryId: random.number,
		name: lorem.word,
		description: lorem.paragraph,
		price: commerce.price,
		image: image.image,
		cpu: lorem.words,
		camera: lorem.words,
		size: lorem.words,
		weight: lorem.words,
		display: lorem.words,
		battery: lorem.words,
		memory: lorem.words
	};;
}

describe('fetchPhonesApi method', () => {

	const phonesUrl = 'http://www.mocky.io/v2/5accd2a73200005c00776564';

	const obj = {
		"error": false,
		"loading": false,
		"phones": [getPhone()]
	}

	beforeEach(() => {
		fetchMock.getOnce(phonesUrl, obj);
  });

  afterEach(() => {
		fetchMock.restore();
  });

  it('should return a collection object from fetchPhonesApi', async function() {
    const result = await fetchPhonesApi(phonesUrl);
    assert.deepEqual(result, [{}]);
  });

	it('should return a collection object from loadMorePhonesApi', async function() {
		const result = await loadMorePhonesApi();
		assert.isArray(result, "it's collection object");
	});

	it('should return a object by some id from fetchPhoneByIdApi', async function() {
		const mockID = 1;
		const somePhone = getPhone(mockID)

		const result = await fetchPhoneByIdApi(mockID);
		assert.equal(somePhone, somePhone);
	});
});
