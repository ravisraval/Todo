import React from 'react'
import merge from 'lodash/merge';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo} removeTodo={removeTodo}/>
      )
    );

    return(
      <div>
        test
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }

}

export default TodoList;
