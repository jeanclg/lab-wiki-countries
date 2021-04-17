import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
  // state = {
  //   name: {
  //     common: '',
  //   },
  //   cca3: '',
  //   capital: '',
  //   area: '',
  //   borders: [],
  // };

  // componentDidMount() {
  //   const foundCountry = countries.find((country) => {
  //     return country.cca3 === this.props.match.params.cca3;
  //   });

  //   if (foundCountry) this.setState({ ...foundCountry });
  // }

  render() {
    const foundCountry = countries.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    });

    if (foundCountry.cca3) {
      return (
        <div>
          <table className="table">
            <h1>{foundCountry.name.common}</h1>
            <tbody>
              <tr>
                <td scope="row" style={{ width: '30%' }}>
                  Capital
                </td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td scope="row">Area</td>
                <td>{foundCountry.area} km&sup2;</td>
              </tr>
              <tr>
                <td scope="row">Borders</td>
                <td colspan="2">
                  <ul>
                    {foundCountry.borders.map((x) => {
                      return (
                        <li>
                          <Link to={x}>{x}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>ERRO</h1>;
    }
  }
}

export default CountryDetails;
