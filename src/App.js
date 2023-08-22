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
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-12'>
      <NavBar />
        </div>

        <div className='col-md-6'>
        <div className='border-box'>
          
        <Post addNewPostProperty={addNewPost}/>
        </div>
        </div>
      </div>
      <div className='col-md-6'>
      <div className='border-box'>
      <PostList parentEntries={entries} />
     
      
      </div>
</div>
  
 
  
  
  </div>

  );
  
}

export default App;
