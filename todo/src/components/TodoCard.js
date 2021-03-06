import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { addTodo, removeTodo, toggleTodo} from '../actions/actions'

const TodoCard = (props) => {
  return (
    <div>
     {props.todos.map((todo, index) => <Todo key={index} 
      todo={todo.task}
      completed={todo.completed}
      index={index}
      deleteTodo={props.deleteTodo}
      toggleTodo={props.toggleTodo}
      id={todo.id}
     />)}
    </div>
  )
}

const mapStateToProps = (state) => {
 console.log("State is: ",state)
 return {todos: state}
}

export default connect(mapStateToProps, { addTodo, removeTodo, toggleTodo})(TodoCard) 
