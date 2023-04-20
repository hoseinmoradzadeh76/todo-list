const TodoItem = ({ todo ,deleteTodo,chengColor}) => {

    let colorClass = todo.compeleted ?"text-success ":"text-gray";
    let textDecoration=todo.compeleted?"line-through":"no-underline";

    const handeleDelete=()=>{
        alert("ایا مطمعنی؟")
     deleteTodo(todo.id);
    }
    const handleCheck=()=>{
        chengColor(todo.id)
    }

    return (
        <li className={`d-flex py-2 align-items-center justify-content-between w-75 mx-auto ${colorClass} ${textDecoration}`} data-testid="todo-item">
            <div>
                <input type="checkbox" className="mx-1 " onClick={handleCheck} />
                <span className='addinput' >{todo.title}</span>
            </div>
            <button type="submit" className="addButton border-0"  onClick={handeleDelete}><i class="bi bi-trash btn btn-outline-danger"></i></button>

        </li>
    )
}
export default TodoItem;