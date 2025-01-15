import Pages from "./pages/Pages";
import Section from "./components/Section";
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Section />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
