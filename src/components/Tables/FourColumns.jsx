const FiveColums = ({col1, col2, col3, col4, data}) => {

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
            <td>{row.data.name}</td>
            <td>{row.data.contactDetails.phone}</td>
            <td>{row.data.contactDetails.email ? row.data.contactDetails.email : 'johndoe@gmail.com'}</td>
            <td>{row.data.deliveryAddress}</td>
          </tr>
        ))}
      </table>
    </div>
    );
};

export default FiveColums;
