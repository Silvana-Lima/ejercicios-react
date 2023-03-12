import { useState } from "react";
import { questionsAndAnswers } from "./arrayQuestions"
import "./preguntas.css"

export const Preguntas = ()=>{

    const [optionSelected, setOptionSelected] = useState("");
    const [currentCuestion, setcurrentQuestion] = useState(0);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [finish, setFinish] = useState(false);
    const { question, answers } = questionsAndAnswers[currentCuestion];

    const actualizar = ()=>{
        setOptionSelected("");
        setSuccess("");
        setError("");

        setTimeout(()=>{setSuccess("")}, 2000);
    }

    const validateAnswer = ()=>{
        actualizar();
        if (!optionSelected) {
            setError("seleccione una respuesta");
            return;
        }

        const answer = answers.find((a)=> a.id === optionSelected);
        

        if (answer.correct && currentCuestion + 1 < questionsAndAnswers.length) {
            console.log("correcto");
            setcurrentQuestion(currentCuestion + 1)
            setSuccess("su respuesta es correcta!! 😁")
          
            
        }
        
        if (answer.correct && currentCuestion + 1 === questionsAndAnswers.length){

         setFinish(true)
        }
        
        if (!answer.correct) {
            console.log("incorrecto");
            setError("su respuesta es incorrecta 😒")
        }
    }

return( 
<div>
{finish ? <h3> "Termino el juego "</h3> :
<form action="" onSubmit={(e)=>{
        e.preventDefault();
        validateAnswer();
    }}>
        <label>{question}</label>

        <select name="respuesta" id="" onChange={(e)=>{
            console.log((e.target.value));
                setOptionSelected(e.target.value);
            }} value={optionSelected} >
                <option>Seleccionar...</option>
                {answers.map((answer)=> (
                    <option value={answer.id} key={answer.id} >{answer.text}</option>
                )) }
            
            
        </select>
        {Boolean(success) && <h3>{success}</h3> }
        {Boolean(error) && <h3>{error}</h3> }
        
        <button type="submit" >Enviar</button>

    </form>  }

</div>
    
)
}