import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route exact path='/chats' Component={ChatPage} />
      </Routes>
    </div>
  );
}

export default App;
