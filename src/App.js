import NavBar from './components/NavBar/NavBar'; // const NavigationBar = require('./components/NavigationBar.jsx')
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
