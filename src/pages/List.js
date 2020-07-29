import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {cid: 123, title: 'Maxb Learn React Lession1'},
        {cid: 456, title: 'Maxb Learn React Lession2'},
        {cid: 789, title: 'Maxb Learn React Lession3'}
      ]
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
  }
  render() {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to={'/list/'+item.cid}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default List
