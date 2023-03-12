import { Task } from "./task";

export const Card = ({list}) =>{
    if (!list) {
		return <span>No hay tareas, vuelva mas tarde.</span>;
	}

    return (
        <div className="card">
            <h1>Todo App</h1>
            <form action="">
                <input type="text" />
                <button>+</button>
                <ul>

                {list.map((task)=>(
                <Task key={task.id} task={task} done={task.done} />
            ) ) } 

                </ul>
                <div>
                <p>You have {list.length} pending tasks</p>
                <button>Clear All</button>

                </div>
                
            </form>
        </div>
    )
}