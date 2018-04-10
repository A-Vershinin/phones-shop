import { FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../constans/categoriesTypes';
import { fetchCategories as fetchCategoriesApi } from '../api/fetchCategoriesApi';

export const fetchCategoriesAction = () => async dispatch => {
  dispatch({type: FETCH_CATEGORIES_START})

  try {
    const phones = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
}
