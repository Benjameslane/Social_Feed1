import React, { useState } from "react";
// import cn from "classnames";

// import { ReactComponent as Hand } from "./hand.svg";
import './StatusButton.css';


const StatusButton = () => {
  const [userliked, setuserLiked] = useState(false);
  const [userdislike, setuserDislike] = useState(false);
  //Function for likes
  function liked(){
   //we initially set like to false.Else we set like to true. If liked is true set dislike to false. 
    if(userliked){
      setuserLiked(false)
    } else {
      setuserLiked(true)
      if(userdislike){
        setuserDislike(false)
      }
    }
  }
  function disliked(){
    if(userdislike){
      setuserDislike(false)
    } else {
      setuserDislike(true)
      if(userliked){
        setuserLiked(false)
      }
    }
  }
   
  

//Function for dislikes


  return (
      <><div>
      <button className={[userliked ? 'like' : null, ''].join('')} type="submit" onClick={liked}>
        Like
      </button>



    </div><div>  <button className={[userdislike ? 'dislike' : null, ''].join('')} type="submit" onClick={disliked}>
      Disike
    </button></div></>

    // <button
    //   onClick={() => setLiked(!liked)}
    //   onAnimationEnd={() => setClicked(false)}
    //   className={cn("like-button-wrapper", {
    //     liked,
    //   })}
    // >
    //   <div className="like-button">
    //     <Hand />
    //     <span>Like</span>
    //     <span className={cn("suffix", { liked })}>d</span>
    //   </div>
    // </button>
  );
};

export default StatusButton;