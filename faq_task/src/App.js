import './App.css';
import Frequent from './components/Frequent/Frequent';
import Faq from './components/query/Faq';
import Support from './components/Support/support';

function App() {
  return (
    <div className="App">
      <Faq/>
      <Frequent/>
      <Support/>
    </div>
  );
}

export default App;
