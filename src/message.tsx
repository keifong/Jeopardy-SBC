// im going to be building function based components
// recommended approach for new projects

// Pascal Casing (follow this convention for react function)
function Message() {
  let myName = "keifong";
  if (myName == "keifong") {
    return <h1>Hello {myName}</h1>;
  } else {
    return <h1>Hello world</h1>;
  }
}

export default Message;
