export default function TaskFilter ({ filter, onFilterChange }) {
    return (
        <>
            <button  className = {filter === "all" ? "filter-btn active" : "filter-btn"} onClick={() => onFilterChange("all")}>All</button>
            <button className={filter === "completed" ? "filter-btn active" : "filter-btn"} onClick={() => onFilterChange("completed")}>Completed</button>
            <button  className={filter === "active" ? "filter-btn active" : "filter-btn"}onClick={() => onFilterChange("active")}>Active</button>
        </>
    )
}