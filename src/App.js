import NavBar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div>
      <BrowserRouter>
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
              <Route path="/:cca3" component={CountryDetails} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
