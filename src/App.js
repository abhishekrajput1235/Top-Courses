
import './App.css';
import NavBar from './components/NavBar';

import CourseList from './components/CourseList';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
      <CourseList></CourseList>
      </div>
    </div>
  );
}

export default App;
