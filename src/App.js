import ChangeButtonColor from './class/ChangeButtonColor';
import ChangeButtonColorH from './hook/ChangeButtonColorH';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Class vs Hook</h3>
      <ChangeButtonColor />
      <hr />
      <ChangeButtonColorH />
    </div>
  );
}

export default App;
