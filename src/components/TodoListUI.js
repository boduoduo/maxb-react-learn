import React from 'react'
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'

const TodoListUI = (props) => {
    return (
      <div>
        <div style={{ margin: '10px' }}>
          <Input 
            placeholder='Write Something' 
            style={{ width: '250px', marginRight: '10px' }} 
            onChange={props.changeInputValue}
            value={props.inputValue}
          />
          <Button 
            type="primary"
            onClick={props.buttonClicked}
          >增加</Button>
        </div>
        <div>
          <List 
            bordered
            dataSource={props.list}
            renderItem={(item, index)=>(<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
          />
        </div>
      </div>
    )
}

export default TodoListUI