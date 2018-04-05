import R from 'ramda';

/* Из главного редюсера phonesReducer, где храняться все телефоны:
- вытаскиваем все телефоны,
- отрезаем и показываем первые 6
- сортируем по id и отдаём в phonesPageReducer
*/
const limit = 6;

export const getPhones = state => {
  const phones = Object.values(state.phonesReducer);
  const availablePhones = Array.isArray(phones) ? Object.values(phones) : [];
  const slicePhones = availablePhones.slice(0, limit);
  slicePhones.sort((itemA, itemB) => (itemA.id - itemB.id));
  
  return slicePhones;
};




/* добавляем новый метод, который будет возвращать количество отрендереных товаров.*/
// export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids)
