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
  const sortPhones = slicePhones.sort((itemA, itemB) => (itemA.id - itemB.id));
  return sortPhones;
};


/* добавляем новый метод, который будет возвращать количество отрендереных товаров.*/
export const getRenderedPhonesLength = state => {
  return R.length(state.phonesPageReducer.ids)
}
