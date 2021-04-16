import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '80vh', overflow: 'scroll' }}
          >
            <CountriesList />
          </div>
          <div className="col-7">
            <CountryDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
