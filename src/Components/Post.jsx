import React, { useState } from 'react';


const Post = (props) => {

    const [Name, setName] = useState('');
    const [Post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            Name: Name,
            Post: Post
        }
        console.log(newEntry)
        props.addNewPostProperty(newEntry)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text'value={Name} onChange={(event) => setName(event.target.value)}/>
            <br></br>
            <br></br>
            <label>Post</label>
            <input type='text' value={Post} onChange={(event) => setPost(event.target.value)}/>
            <br></br>
            <br></br>
            <input class="btn btn-primary btn-lg" type="submit" value="Post"/>
        </form>
    );
}
 
export default Post;









//commented out is from a lexture, May be viable later on 

//<form action="" method="post">
    //<label for="first_name">First Name:</label>
    //<input type="text" name="first_name">
    //<label for="last_name">Last Name:</label>
   // <input type="text" name="last_name">
//</form>