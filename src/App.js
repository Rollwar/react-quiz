import Quiz from './components/Quiz';
import { Provider } from 'react-redux';
import storeQuiz from './store/store';
import './App.css';

const App = () => {
  return (
    <Provider store={storeQuiz}>
    <div className="App">
      <Quiz></Quiz>
    </div>
    </Provider>
  );
}

export default App;
