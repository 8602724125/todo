import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AddTodo from './Components/AddTodo/AddTodo';
import Todos from './Components/Todos/Todos';
import NoPage from './Components/NoPage/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<AddTodo />} />
          <Route path="show-todo" element={<Todos />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
