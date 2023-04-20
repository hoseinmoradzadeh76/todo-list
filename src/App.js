
import './App.css';

import AppHeader from './components/AppHeader';


import { Outlet } from 'react-router-dom';
import TodoList from './components/TodoList';

const App=()=>{

  
  return (
    <div className="App">
      <AppHeader/>
      <TodoList/>
      <Outlet/>
    </div>
  );
}

export default App;
