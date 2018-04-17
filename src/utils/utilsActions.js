import { random, lorem, commerce, image } from 'faker';

export const number = 1;

export const item = {
	"id": number,
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

export const mockID = random.number();


export const dumpItem = {
	"id": 1,
	"name": lorem.word()
};

export const dumpPhones = [item];


export const itemPhone = {
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

export const phonesArray = [itemPhone];

export const strPhone = "1";

export const itemPhoneMock = {
	id: '1',
	categoryId: '1',
	name: 'Apple iPhone 5c',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta',
	price: 823,
	image: '/uploads/iphone5c-selection-hero-2013.png',
	cpu: '1.3GHz Apple A6',
	camera: '8mp (3264x2448)',
	size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
	weight: '132 grams (4.7 ounces) with battery',
	display: '4.0 326 pixel density',
	battery: '1480 mAh',
	memory: '16GB, 32GB and RAM 1 GB'
}
