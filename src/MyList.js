import React, {Component} from 'react'
import ListItem from './ListItem'
import './App.css'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index}/>    
    ))
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList