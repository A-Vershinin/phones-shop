import { FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../constans/categoriesTypes';
import { fetchCategories as fetchCategoriesApi } from '../api/fetchCategoriesApi';


export const fetchCategoriesStartAction = () => ({
  type: FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccessAction = (phones) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: phones
});

export const fetchCategoriesFailureAction = err => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: err,
  error: true
});

export const fetchCategoriesAction = () => async dispatch => {
  dispatch(fetchCategoriesStartAction())

  try {
    /* т.к. запрос в методе эмулируется и данные берутся из файла, для понимания,
      делаю сам ошибку от сервера. Если запрос был бы на реальный url, в тесте
      симулированили бы ответ от сервера с 500 ошибкой.
      Чтобы проверить тест на фейл, раскоментировать throw*/
    // throw ({ status: 500 })

    const phones = await fetchCategoriesApi();
    dispatch(fetchCategoriesSuccessAction(phones));

  } catch (err) {
    dispatch(fetchCategoriesFailureAction(err));
  }
}












// export const fetchCategoriesAction = () => async dispatch => {
//
//   dispatch({type: FETCH_CATEGORIES_START})
//
//   try {
//     const phones = await fetchCategoriesApi()
//     dispatch({
//       type: FETCH_CATEGORIES_SUCCESS,
//       payload: phones
//     })
//   } catch (err) {
//     dispatch({
//       type: FETCH_CATEGORIES_FAILURE,
//       payload: err,
//       error: true
//     })
//   }
// }
