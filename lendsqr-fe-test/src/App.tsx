import './App.scss';
import AuthLogSign from './Pages/LoginPage/AuthLogSign';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/DashboardPage/dashboard';
import { QueryClientProvider, QueryClient } from 'react-query';
import UserDetails from './Pages/UserDetailsPage/UserDetails';

const queryClient = new QueryClient()


const App: React.FC = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<AuthLogSign/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/userdetails' element={<UserDetails/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    
  );
}

export default App;
