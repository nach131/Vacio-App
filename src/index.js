import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// EL ORIGINAL
// https://www.codeply.com/p/hdDJRBmE8I

var todoItems = [];
todoItems.push({ index: 1, value: "Learn React", done: false })
todoItems.push({ index: 2, value: "Go shopping", done: true })
todoItems.push({ index: 3, value: "Buy flowers", done: true })
todoItems.push({ index: 4, value: "Visit Codeply", done: false })
todoItems.push({ index: 5, value: "Go poop", done: false })

class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose () {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone () {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ?
      "done" : "undone";
    return (
      <li className="list-group-item text-dark">
        <div className={todoClass}>
          <button type="button" className="btn btn-sm btn-outline-dark mr-2" onClick={this.onClickDone}>
            <i className="mdi mdi-check"></i>
          </button>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount () {
    this.refs.itemName.focus();
  }
  onSubmit (event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form mt-3">
        <div className="input-group input-group-lg">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
          <div class="input-group-append">
            <button type="submit" className="btn btn-outline-info">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

class TodoHeader extends React.Component {
  render () {
    return <h1>Todo list</h1>;
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem (todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone (itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render () {
    return (
      <div id="main" className="container py-3">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp initItems={todoItems} />,
  document.getElementById('root')
)