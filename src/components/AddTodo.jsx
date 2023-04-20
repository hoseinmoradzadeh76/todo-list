import { useState } from "react"

const AddTodo = ({todoNew}) => {
  
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();

        if (!title) {
            alert("لطفا یه کار اضافه کن...");
            return;
        }
        
        setTitle("");
        todoNew(title);

    };

    return (
        <div className="mt-3 container ">
            <form className="py-2 mx-auto form-tesk w-75" onSubmit={submitForm}>
                <input type="text" name="task-title" value={title} onChange={handleChange} placeholder="کارت را اضاقه کن..."
                    className="w-75 addinput" data-testid="task-input-field" />
                <button type="submit" className="addButton border-0" ><i class="bi bi-pencil-square"></i></button>
            </form>
          
        </div>
    )

}
export default AddTodo;