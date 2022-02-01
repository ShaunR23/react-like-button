
function Button({addLikes, count}) {

  
    return (
      <button onClick = {addLikes} type="submit" className= "likeButton"> {count} likes</button>
    );
  }
  
  export default Button;
  