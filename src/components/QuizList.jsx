import React from "react"
import { useSelector } from "react-redux"

const QuizList = () => {

    const answers = useSelector(state => state.answer.questions[state.answer.currentQuestion].answers)
    console.log(answers)
    return (
        <ul>
            {
                answers.map((element) => {
                    return (
                        <li>
                            <input type="radio" name="answer" id="a" class="answer"></input>
                            <label for="a" id="a_text">{element}</label>
                        </li>)
                })
            }
        </ul>
    )


}

export default QuizList;