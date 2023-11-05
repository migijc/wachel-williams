
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';
import Home from './pages/Home';
import wachelWilliams from './wachelInfo.json'
function App() {
  return (
    <div className="App">
      <div>
        <HeaderSection />
      </div>
      <div style={{ poasition:'relative'}}>
        <Home />
        {/* <FooterSection /> */}
      </div>
      {/* <HeaderSection />
      <Home />
      <FooterSection /> */}
    </div>
  );
}

export default App;
