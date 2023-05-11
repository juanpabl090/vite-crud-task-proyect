import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TaskContextProvider } from './context/TasksProvider';

import NavBar from './Components/Navbar';
import NotFound from './pages/NotFound'
import TasksForm from './pages/TasksForm';
import TasksPage from './pages/TasksPage';



export default function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index path='/' element={<TasksPage />} />
            <Route path='/new' element={<TasksForm />} />
            <Route path='/edit/:id' element={<TasksForm />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TaskContextProvider>
  )
}