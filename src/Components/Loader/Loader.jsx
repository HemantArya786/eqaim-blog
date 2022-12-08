import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader border border-5">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
