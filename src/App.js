import Pages from "./pages/Pages";
import Section from "./components/Section";
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Section />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
