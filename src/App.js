
import './App.css';
import { Home, About, Attractions} from "../src/pages/index";
import { Footer, Navbar } from './components';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About/>}/>
        <Route path='/attraction' exact element={<Attractions/>}/>
        </Routes>
        <Footer/>
        </Router>
   </>
  );
}

export default App;
