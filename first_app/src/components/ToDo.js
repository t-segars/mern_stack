const ToDo = (props) => {
  const todoClasses = [];

        if (props.todo){
          todoClasses.push("bold");
        }
        if (props.todo.complete) {
          todoClasses.push("strike");
        }
  return (
  <div>
          <input 
          onChange={(event) => {
            props.handleToggleComplete(props.i);
          }} 
          checked={props.todo.complete}
          type="checkbox"
          />
          <span className={todoClasses.join(" ")
          }>{props.todo.text}</span>
          <button 
          type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(event) => (
            props.handleTodoDelete(props.i)
          )}
          style={{marginLeft: "5px"}}
          >delete
          </button>
        </div>
        );
}

export default ToDo;