import { configureStore } from '@reduxjs/toolkit';
import quizProgramming from '../assets/questions.json';


const initialState = {
    correctAnswers: 0,
    currentQuestion: 1,
    selectedAnswer: false,
    questions: quizProgramming.questions,
  }


const setAnswerReducer = (state = initialState, action) => {

    switch(action.type){
        case 'setAnswer':  
            return  {...state, currentQuestion: state.currentQuestion + 1, selectedAnswer: false}
 
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