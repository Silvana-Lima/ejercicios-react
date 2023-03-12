export const Button = ({color, children})=>{
    const style = {
        backgroundColor : color,
    }
    
    return (
     <button style={style} >{children}</button>
    )
}