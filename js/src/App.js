import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Home from './pages/Home'
import NewAccount from './pages/NewAccount'
import User from './pages/User';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/NewAccount' element={<NewAccount />}/>
        <Route path='/user/:email' element={<User />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
