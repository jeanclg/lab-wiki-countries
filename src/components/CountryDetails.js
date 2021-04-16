const CountryDetails = () => {
  return (
    <div>
      <table className="table">
        <h1>France</h1>
        <tbody>
          <tr>
            <td scope="row" style={{ width: '30%' }}>
              Capital
            </td>
            <td>Paris</td>
          </tr>
          <tr>
            <td scope="row">Area</td>
            <td>551695 km 2</td>
          </tr>
          <tr>
            <td scope="row">Borders</td>
            <td colspan="2">
              <ul>
                <li>
                  <a href="#">Abcde</a>
                </li>
                <li>
                  <a href="#">Abcde</a>
                </li>
                <li>
                  <a href="#">Abcde</a>
                </li>
                <li>
                  <a href="#">Abcde</a>
                </li>
                <li>
                  <a href="#">Abcde</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
