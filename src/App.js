import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss'
import Auth from './Pages/LoginPage/Auth';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
