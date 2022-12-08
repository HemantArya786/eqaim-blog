import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import { RiHome2Line } from "react-icons/ri";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function BlogPost() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`http://localhost:3500/getpost/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }, [id]);
  return (
    <main>
      {isloading && <Loader />}
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
        <div className="col-8 border rounded ">
          <div className="d-flex justify-content-center p-3">
            <h1>{post.title}</h1>
          </div>
          <hr />
          <div className="p-3">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>
    </main>
  );
}
export default BlogPost;
