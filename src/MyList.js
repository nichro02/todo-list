import React, {Component} from 'react'
import ListItem from './ListItem'
import './App.css'

class MyList extends Component {
  
  state = {
    toDoItemArray: this.props.theList,
    newItem: ''
  }

  newItemChange = (event) => {
    console.log('NEW ITEM RECEIVED', event.target.value)
    this.setState({
      newItem: event.target.value
    })
  }

  addItem = (event) => {
    console.log('NEW ITEM ADDED TO ARRAY', this.state.newItem)
    event.preventDefault()
    this.setState({
      toDoItemArray: [...this.state.toDoItemArray, this.state.newItem],
      newItem: ''
    })
  }

  clearList = () => {
    console.log('Clear list fired')
    this.setState({
      toDoItemArray: []
    })
  }
  
  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index}/>    
    ))
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the list!</button>
        <form>
          <input type='text'
            placeholder='Add an item here'
            onChange={(event) => this.newItemChange(event)}
            value={this.state.newItem}
          />
          <button onClick={(event) => this.addItem(event)}>Add to list</button>
        </form>
      </div>
    )
  }
}

export default MyList