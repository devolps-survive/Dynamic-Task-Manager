
export default function TaskForm ({text, onAdd, onInput }) {
    return (
     <form onSubmit = {onAdd}>
        <input type="text" className="add-task" value= {text} placeholder="Enter your task..." onChange = {onInput}/>
        <button type="submit" className = "add-btn">Add Task</button>
     </form>
    
    );
}