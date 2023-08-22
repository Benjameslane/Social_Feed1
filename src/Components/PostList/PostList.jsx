
const PostList = (props) => {
    return ( 

    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Post</th>
          <th>React</th>
        </tr>
      </thead>
      <tbody>
        {props.parentEntries.map((entry, index) => {
          return (
              <tr>
               
                <td>{entry.Name}</td>
                <td>{entry.Post}</td>
                <td> <button type="button" class="btn btn btn-primary" enabled>Like</button>
                <button type="button" class="btn btn-secondary btn" enabled>Dislike</button></td>
              </tr>
          );
        })}
      </tbody>
    </table>

    );

     
}
 
export default PostList; 