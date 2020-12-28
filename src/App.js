import './App.css';
import DashboardLayout from '../src/layout/DashboardLayout'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <DashboardLayout />
      </Router>

    </>
  )
}


export default App;
