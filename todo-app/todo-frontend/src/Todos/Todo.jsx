const Todo = ({ todoText, todoInfo }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}>
      <span>{todoText}</span>
      {todoInfo}
    </div>
  )
}

export default Todo
