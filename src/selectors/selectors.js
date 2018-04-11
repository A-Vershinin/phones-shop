import R from 'ramda';

/* Описание
  phonesReducer - общий редюсер для всех объектов phones в магазине;
  phonesPageReducer - редюсер для показа телефонов на одной странице;
*/

// возвращает объект phone по переданому id
export const getPhoneById = (state, id) => R.prop(id, state.phonesReducer);

// возвращает массив объектов phones
export const getPhones = (state, ownProps) => {

  // фильтр - поиск по строке из search
  const applySearch = item => R.contains(
    state.phonesPageReducer.search,
    R.prop('name', item)
  )

  // возвращает id активной категории
  const activeCategoryId = getActiveCategoryId(ownProps);

  // фильтр - сортироврка по категориям.
  const applyCategory = item => R.equals(
    getActiveCategoryId(ownProps),
    R.prop('categoryId', item)
  )

  // приминяет все фильтры и возвращает map-ом новый массив
  const phones = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getPhoneById(state, id))
  )(state.phonesPageReducer.ids)

  return phones
}

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

/* Получает id-к из собственных пропсов из match выбранную категорию*/
export const getActiveCategoryId = ownProps => {
  return ownProps.match.params.id;
}
