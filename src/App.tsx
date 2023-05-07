import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Auth from './Pages/LoginPage/Auth';

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

function App() {
  return (
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
  );
}

export default App;
