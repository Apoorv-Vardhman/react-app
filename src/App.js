import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact'; 
import { PropsDrilling } from './pages/PropsDrilling';
import { ReactQuery } from './pages/ReactQuery';
import { ReactForm } from './pages/ReactForm';
import { Frontend } from './layouts/frontend/Frontend';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="/props-drilling" element={<PropsDrilling />}></Route>
          <Route path="/about" element={<About  />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/react-query" element={<ReactQuery />}></Route>
          <Route path="/react-form" element={<ReactForm />}></Route>
        </Route>
        
        
        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
