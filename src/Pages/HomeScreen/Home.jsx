import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import Loader from "../../Components/Loader/Loader";
import Endpoints from "../../constants/endpoints";
function Home() {
  const [blogdata, setBlogdata] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const SUMMARY_LENGTH = 50;

  const navigate = useNavigate();

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${Endpoints.BASE_URL}/getallpost`)
      .then((res) => setBlogdata(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }, []);

  return (
    <main>
      {isloading && <Loader />}
      <section className="d-flex flex-wrap gap-5 py-4 justify-content-center">
        {blogdata.map((blog) => (
          <button
            onClick={() => navigate(`/post/${blog._id}`)}
            className="btn btn-dark col-md-3 px-2 py-5 "
          >
            <h1>{blog.title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: blog.content.slice(0, SUMMARY_LENGTH),
              }}
              className="text-muted"
            />
          </button>
        ))}
      </section>
      <section className="d-flex justify-content-end">
        <Link to="/newblog">
          <button className="p-3 floating-button ">
            <h5>
              <AiOutlineFileAdd />
            </h5>
          </button>
        </Link>
      </section>
    </main>
  );
}
export default Home;
