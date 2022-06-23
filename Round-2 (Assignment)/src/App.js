import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import AddPost from './AddPost';
import Sidenav from './Components/Sidenav';
import EditPost from './EditPost';

function App() {
  return (
    <Router>
      <Sidenav />
       <Routes>
     
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/add-post"  element={<AddPost />} />
          <Route path="/edit-post"  element={<EditPost />} />
       </Routes>
    </Router>
  );
}

export default App;
