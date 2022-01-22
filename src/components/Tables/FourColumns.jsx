const FiveColums = ({col1, col2, col3, col4, data, click}) => {
  return (
    <div className="table_container">
      <table>
        <tr className="table_header">
          <th>{col1}</th>
          <th>{col2}</th>
          <th>{col3}</th>
          <th>{col4}</th>
        </tr>
        <div className="hr"></div>
        {data.map(row => (
          <tr>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td onClick={click} className="form-btn">{row.col4}</td>
          </tr>
        ))}
      </table>
    </div>
    );
};

export default FiveColums;
