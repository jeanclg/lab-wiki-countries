import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link
            key={country.cca3}
            to={`/${country.cca3}`}
            className="list-group-item list-group-item-action"
          >
            {country.flag} {country.name.common}
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
