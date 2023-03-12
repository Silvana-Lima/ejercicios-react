export const Task = ({task}) =>{

    const { title, done } = task;

    if(done){
        return <li className="itemList" style={{textDecoration: "line-through"}} >{title} </li>
    }

    return <li className="itemList" >{title} </li>

}