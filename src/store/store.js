import { configureStore } from '@reduxjs/toolkit';
import quizProgramming from '../assets/questions.json';


const initialState = {
    correctAnswers: 0,
    currentQuestion: 1,
    questions: quizProgramming.questions,
  }


const setAnswerReducer = (state = initialState, action) => {

    switch(action.type){
        case 'setAnswer':  
            if (state.questions[state.currentQuestion - 1].correct === action.selected)
                return  {...state, currentAnswers: state.currentAnswers + 1, currentQuestion: state.currentQuestion + 1}
            else 
            return  {...state, currentQuestion: state.currentQuestion + 1}
 
        case 'submitQuiz': return state;
        default: return state;
    }


}


const storeQuiz = configureStore({
    reducer: { answer: setAnswerReducer},
    preloadedState: initialState
}
)

export default storeQuiz;