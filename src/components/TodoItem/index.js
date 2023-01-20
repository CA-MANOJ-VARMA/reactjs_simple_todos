// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, updateListFunction} = props
  const deleteFunction = eqId => {
    updateListFunction(eqId)
  }

  return (
    <li className="css-li-container">
      <p>{todoList.title}</p>
      <button
        type="button"
        className="css-button-itself"
        onClick={() => deleteFunction(todoList.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
