import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TasksForm from './pages/TasksForm';
import NotFound from './pages/NotFound'
import TasksPage from './pages/TasksPage';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path='/' element={<TasksPage />} />
          <Route path='/new' element={<TasksForm />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
