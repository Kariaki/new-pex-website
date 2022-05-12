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
        {data?.map(row => (
          <tr>
            <td>{row?.name}</td>
            <td>{row?.contactDetails?.phone}</td>
            <td>{row?.contactDetails?.email ? row?.contactDetails?.email : 'johndoe@gmail.com'}</td>
            <td>{row?.deliveryAddress}</td>
          </tr>
        ))}
      </table>
    </div>
    );
};

export default FiveColums;
