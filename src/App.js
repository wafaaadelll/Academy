import './App.css';
import Pages from './Components/Pages/Pages';
import ScrollToTop from './Shared/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Pages/>
      </ScrollToTop>
    </div>
  );
}

export default App;
