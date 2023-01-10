import {createBrowserRouter ,createRoutesFromElements , Route, RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import NewAccount from './pages/NewAccount'
import User from './pages/User';
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />}/>
      <Route path='/NewAccount' element={<NewAccount />}/>
      <Route path='/user/:email' element={<User />} />
      <Route path='*' element={<NotFound />} />
    </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
