import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from 'uuid/v1'
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

//github commit Test



class App extends Component {
  state = {
    items : [],
    id:uuid(),
    item:'',
    editItem:false
  };

handleChange = (e) =>{
  this.setState({
    item: e.target.value
  });
};
handleSubmit = (e) =>{
  e.preventDefault();
  const newItem = {
    id: this.state.id,
    title: this.state.item
  };
  const updatedItems =
  [...this.state.items, newItem];

  this.setState({
    items: updatedItems,
    item:'',
    id: uuid(),
    editItem: false
  }, () => console.log(this.state))
}
clearlist = () =>{
  console.log('clear List')
}
handleDelete = (id) =>{
  console.log(`handle Delete ${id}`)
}
handleEdit = (id) =>{
  console.log(`handle Edit ${id}`)
}


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItem={this.state.editItem}/>
        <TodoList 
        items={this.state.items}
        clearlist={this.clearlist}
        handleDelete={this.handleDelete}
        handleEdit ={this.handleEdit}
        />
          </div>
        </div>
      </div>
       
      
    )
  }
}

export default App;

