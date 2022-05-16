import React from "react"
import { useSelector } from "react-redux"

const QuizList = () => {

    const quizElement = useSelector(state => state.answer.questions[state.answer.currentQuestion])

    return (
        <div className="quiz-header">
            <h2 id="question">{quizElement.question}</h2>
            <ul>
                {
                    quizElement.answers.map((element, index) => {
                        return (
                            <li>
                                <input type="radio" name={"q_" + quizElement.currentQuestion} id={"an_" + (index + 1)} className="answer"></input>
                                <label htmlFor={"an_" + (index + 1)} id="text">{element}</label>
                            </li>)
                    })
                }
            </ul>
        </div>
    )

}

export default QuizList;