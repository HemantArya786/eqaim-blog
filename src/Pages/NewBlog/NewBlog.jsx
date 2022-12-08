import React, { useState } from "react";
import "./NewBlog.css";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function NewBlog() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const createPost = (e) => {
    e.preventDefault();
    setIsloading(true);

    if (title === "" || editorState === "") {
      alert("Please fill all the required fields");
      setIsloading(false);
    } else {
      axios
        .post(`http://localhost:3500/newpost`, {
          title: title,
          author: "hemant",
          content: convertToHTML(editorState.getCurrentContent()),
        })
        .then((res) => {
          if (res.status === 200) {
            alert(res.data.message);
            navigate("/");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsloading(false));
    }
  };

  return (
    <main>
      {isloading && <Loader />}
      <form onSubmit={createPost} className="p-3">
        <div className="my-3">
          <label>Enter Title Here</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            className="w-100 form-control"
          />
        </div>
        <Editor
          // editorState={editorState}
          toolbarClassName="toolbarClassName  border border-3 rounded shadow-sm "
          wrapperClassName="wrapperClassName "
          editorClassName="editorClassName  border rounded mb-3 p-3"
          onEditorStateChange={setEditorState}
          toolbar={{
            inline: true,
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
        <button className="btn btn-outline-dark" type="submit">
          submit
        </button>
      </form>
    </main>
  );
}
export default NewBlog;
