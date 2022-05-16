import React from "react";
import { useDispatch } from "react-redux";
import QuizList from "./QuizList";

const Quiz = () => {

    const setAnswer = useDispatch()

    return (

        <div className="quiz-container">
            <QuizList></QuizList>
            <button onClick={() => setAnswer({ type: 'setAnswer' })}>Submit</button>
        </div>
    )

}

export default Quiz;