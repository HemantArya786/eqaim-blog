import React, { useState } from "react";
import "./NewBlog.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import axios from "axios";
import { Link } from "react-router-dom";

function NewBlog() {
  const [editorState, setEditorState] = React.useState("");
  const [title, setTitle] = useState("");
  const createPost = () => {
    axios
      .post(`http://localhost:3500/newpost`, {
        title: title,
        author: "hemant",
        content: editorState,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        className="w-100 text-center "
      />
      <Editor
        toolbarClassName="toolbarClassName text-editor-bg "
        wrapperClassName="wrapperClassName "
        editorClassName="editorClassName  text-input-bg "
        onEditorStateChange={(e) =>
          setEditorState(convertToHTML(e.getCurrentContent()))
        }
      />
      <Link to="/">
        <button onClick={createPost}>submit</button>
      </Link>
    </main>
  );
}
export default NewBlog;
