/* Redux */
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/userSlice';

/* Components */
import Login from './Components/Login';
import Logout from './Components/Logout';

import './App.css';

function App() {
  const user = useSelector(selectUser) // This imports the state for this case

  return (
    
      <div className="App">
        {user ? <Logout selectUser={selectUser}/> : <Login />}
      </div>
    
  );
}

export default App;
