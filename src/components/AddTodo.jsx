function AddTodo() {
  return (
    <div className="containerText">
      <div className="row kg-row">
          <div className="col-6 kg-input">
            <input type="text" placeholder="Enter to-do here" />
          </div>
          <div className="col-4 kg-input">
            <input type="date" />
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-success kg-button">Add</button>
          </div>
      </div>
    </div>
  )
}

export default AddTodo;