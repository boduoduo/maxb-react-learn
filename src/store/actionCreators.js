import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    setTimeout(() => {
      const data = ['D', 'E', 'F', 'G', 'H']
      const action = getListAction(data)
      dispatch(action)
    }, 5);
  }
}

export const getMyList = () => ({
  type: GET_MY_LIST
})