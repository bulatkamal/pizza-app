import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';

import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Routes>
  );
}

export default App;
