import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar'
import PostList from './Components/PostList/PostList'
import Post from './Components/Post/Post'



function App() {

const [entries, setEntries] = useState([{Name: 'Benjamin Lane', Post: 'My first post!'}, {Name: 'Kyra Mourey', Post: 'I love SocialFeed!'}])



function addNewPost(entry){
  let tempEntries = [...entries, entry];
  setEntries(tempEntries);
}


  return (
    <div className='container-fluid'>

      <div className='col-md-12'>
      <NavBar />
        </div>
        <section className='main-container'>

              <div className='post-container'>
                <Post addNewPostProperty={addNewPost}/>
                <br></br>
                <PostList parentEntries={entries} />
              </div>

        </section>

</div>
  

  );
  
}

export default App;
