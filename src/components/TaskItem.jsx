export default function TaskItem ({ task, onToggle, onDelete }) {
    return (
        <div className={task.completed ? "task-item completed" : "task-item"}>
            <div>
                <input type="checkbox" className="check-box" onChange={() => onToggle(task.id)} checked={task.completed}/>
                <span>{task.text}</span>
            </div>
            <button className="delete-btn" onClick= {() => onDelete(task.id)} >Delete</button>
        </div>   
    )
}