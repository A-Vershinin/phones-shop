import { random, lorem, commerce, image } from 'faker';

// "id": random.uuid(),

const number = 1;

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
