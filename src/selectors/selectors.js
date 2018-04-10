import R from 'ramda';

/* Из главного редюсера phonesReducer, где храняться все телефоны:
- вытаскиваем все телефоны,
- отрезаем и показываем первые 6
- сортируем по id и отдаём в phonesPageReducer
*/
const limit = 3;

export const getPhones = state => {
  const phones = Object.values(state.phonesReducer);
  const arrays = phones.reduce((a, b) => a.concat(b), []);
  const availablePhones = Array.isArray(arrays) ? arrays : [];
  const slicePhones = availablePhones.slice(0, limit);
  // const sortPhones = slicePhones.sort((itemA, itemB) => (itemA.id - itemB.id));
  return slicePhones;
};


/* добавляем новый метод, который будет возвращать количество отрендереных товаров.*/
export const getRenderedPhonesLength = state => {
  return R.length(state.phonesPageReducer.ids)
}

export const getPhoneById = (state, id) => {
  const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})
  const phonesObject = arrayToObject(state.phonesReducer.phones, "id")
  return R.prop(id, phonesObject)
}


/* Считает общее количество товаров в корзине. Берём length от массива id-шников в корзине*/
export const getTotalBasketCount = state => {
  return R.length(state.basketReducer)
}


/* Находит все телефоны по id-шникам в корзине и берет из каждого обьекта только цену и
потом суммируем ее с помощью метода sum.*/
export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getPhoneById(state, id))
  )(state.basketReducer)
  return totalPrice;
}

/* Получает все категории */
export const getCategories = state => {
  return R.values(state.categoriesReducer)
}

/* Получает id-ки из собственных пропсов из match*/
export const getActiveCategoryId = ownProps => {
  return ownProps.match.params.id;
}
