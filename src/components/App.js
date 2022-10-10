import React from "react";
import BlogPost from "./BlogPost";

function BlogContent(props) {
  return <div>{props.articleText}</div>;
}

function App() {
  return <BlogPost />;
}

export default App;
