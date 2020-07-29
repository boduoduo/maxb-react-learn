import React, { Component } from 'react'
import store from '../store/store'
import { changeInputAction, addItemAction, deleteItemAction, getMyList } from '../store/actionCreators'
import TodoListUI from './TodoListUI'
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    // this.changeInputValue = this.changeInputValue.bind(this)
    // this.buttonClicked = this.buttonClicked.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // 订阅Store
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    store.dispatch(getMyList())
  }

  // changeInputValue(e) {
  //   store.dispatch(changeInputAction(e.target.value))
  // }

  // buttonClicked() {
  //   store.dispatch(addItemAction())
  // }

  deleteItem(index) {
    store.dispatch(deleteItemAction(index))
  }

  storeChange() {
    this.setState(store.getState())
  }

  render() {
    let { inputValue, list, inputChange, buttonClicked } = this.props
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        changeInputValue={inputChange}
        buttonClicked={buttonClicked}
        deleteItem={this.deleteItem}
      />
    )
  }
}

// 将state里的值映射成props
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// 映射dispatch
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      dispatch(changeInputAction(e.target.value))
    },
    buttonClicked() {
      dispatch(addItemAction())
    }
  }
}
export default connect(stateToProps, dispatchToProps)(TodoList)