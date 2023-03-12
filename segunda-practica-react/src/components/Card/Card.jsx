import imagen from '../../assets/imagen.png';

export const Card = ({title = 'Titulo de card', description, image, color})=>{
    return (
<div>
    <h2>{title} </h2>
    <img src={image || imagen} alt=""  width="200"/>
    <p>Descripcion: {description}</p>
    <button style={{backgroundColor: color}}>Descargar</button>
</div>
    )
}

