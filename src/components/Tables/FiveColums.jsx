const FiveColums = ({col1, col2, col3, col4, col5, data, click, icon}) => {
  return (
    <div className="table_container">
      <table>
        <tr className="table_header">
          <th>{col1}</th>
          <th>{col2}</th>
          <th>{col3}</th>
          <th>{col4}</th>
          <th>{col5}</th>
        </tr>
        <div className="hr"></div>
        {data.map(row => (
          <tr onClick={click} className={click ? 'clickable' : ''}>
            <td>{icon}{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
            <td>{row.col5}</td>
          </tr>
        ))}
      </table>
    </div>
    );
};

export default FiveColums;
