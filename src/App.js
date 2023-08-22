import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar'
import PostList from './Components/PostList/PostList'
import Post from './Components/Post'



function App() {

const [entries, setEntries] = useState([{Name: 'Benjamin Lane', Post: 'My first post!'}, {Name: 'Kyra Mourey', Post: 'I love SocialFeed!'}])

function addNewPost(entry){
  let tempEntries = [...entries, entry];
  setEntries(tempEntries);
}


  return (
    <div>
  <NavBar />
  <PostList parentEntries={entries} />
  <Post addNewPostProperty={addNewPost}/>
  
  </div>

  );
  
}

export default App;
