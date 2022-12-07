import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import { RiHome2Line } from "react-icons/ri";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3500/getpost/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <main>
      <section className="d-flex my-3">
        <div className="col-2 d-flex justify-content-center ">
          <div>
            <Link to={"/"}>
              <button className="px-3">
                <big>
                  <RiHome2Line />
                </big>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-10 ">
          <div className="d-flex justify-content-center border">
            <h1>{post.title}</h1>
          </div>
          <div className=" border">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>
    </main>
  );
}
export default BlogPost;
