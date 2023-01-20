import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {filteredList: initialTodosList}

  updateList = eqId => {
    const indexValue = initialTodosList.findIndex(
      eachList => eachList.id === eqId,
    )
    initialTodosList.splice(indexValue, 1)
    this.setState({filteredList: initialTodosList})
  }

  render() {
    const {filteredList} = this.state
    return (
      <div className="css-bg-container">
        <div className="css-container">
          <h1>Simple todos</h1>
          <ul className="css-ul-container">
            {filteredList.map(eachList => (
              <TodoItem
                todoList={eachList}
                updateListFunction={this.updateList}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
