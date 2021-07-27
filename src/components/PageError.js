import React from "react";

import "./styles/PageError.css";

import err from "../images/err.svg";

export default function PageError(props) {
  return (
    <div className="container1">
      <div className="ErrorText__cont d-flex">
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <div className="ErrorText__cont">
              <img src={err} alt="404" className="Image__err" />
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <p className="ErrorText__info fw-bold">{props.error.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
