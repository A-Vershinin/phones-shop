import R from 'ramda';

export const getPhoneById = (state, id) => {
  const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})
  const phonesObject = arrayToObject(state.phonesReducer.phones, "id")
  return R.prop(id, phonesObject)
}

// export const getPhoneById = (state, id) => R.prop(id, state.phonesReducer.phones);


/* Из главного редюсера phonesReducer, где храняться все телефоны:
- вытаскиваем все телефоны,
- отрезаем и показываем первые 6
- сортируем по id и отдаём в phonesPageReducer
*/
const limit = 3;

export const getPhones = (state, ownProps) => {
  const phones = Object.values(state.phonesReducer);
  const arrays = phones.reduce((a, b) => a.concat(b), []);
  const availablePhones = Array.isArray(arrays) ? arrays : [];
  const slicePhones = availablePhones.slice(0, limit);
  // const sortPhones = slicePhones.sort((itemA, itemB) => (itemA.id - itemB.id));

  // const phonesComplete = R.map(id => getPhoneById(state, id), state.phonesPageReducer.ids)
  // console.log(phonesComplete)

  return slicePhones;
};


/* добавляем новый метод, который будет возвращать количество отрендереных товаров.*/
export const getRenderedPhonesLength = state => {
  return R.length(state.phonesPageReducer.ids)
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

/*получает список телефонов, сгруппированых по id и имеющих общее количество каждого товара*/
export const getBasketPhonesWithCount = state => {

  // фильтрует все idшники в basket по текущему id и находит их количество.
  const phoneCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basketReducer);

  // добавляет отфлитрованным телефонам каждому итему поле count
  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone);

  // находит уникальные idшников из корзины и получает все телефоны по ним
  const uniqueIds = R.uniq(state.basketReducer)
   const phones = R.compose(
     R.map(phoneWithCount),
     R.map(id => getPhoneById(state, id))
   )(uniqueIds)
  return phones
}


/* Получает все категории */
export const getCategories = state => {
  return R.values(state.categoriesReducer)
}

/* Получает id-ки из собственных пропсов из match*/
export const getActiveCategoryId = ownProps => {
  return ownProps.match.params.id;
}

/* Правильная функция getPhones*/
/*
export const getPhones = state => {
  const activeCategoryId = getActiveCategoryId(ownProps);

  // фильтр - поиск из search
  const applySearch = item => R.contains(
    state.phonesPageReducer.search,
    R.prop('name', item)
  )

  // фильтр - сортироврка по категориям.
  const applyCategory = item => R.equals(
    getActiveCategoryId(ownProps),
    R.prop('categoryId', item)
  )

  // приминяем все фильтры и используем map
  const phones = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getPhoneById(state, id))
  )(state.phonesPageReducer.ids)
  return phones
}
*/
