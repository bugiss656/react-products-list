import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import Dashboard from "./pages/Dashboard/Dashboard"
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
