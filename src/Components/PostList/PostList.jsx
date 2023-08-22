
const PostList = (props) => {
    return ( 

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {props.parentEntries.map((entry, index) => {
          return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.Name}</td>
                <td>{entry.Post}</td>
              </tr>
          );
        })}
      </tbody>
    </table>

    );

     
}
 
export default PostList; 