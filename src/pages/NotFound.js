import React from "react";

import notfoundimage from "../images/404.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <React.Fragment>
      <div className="container1">
        <div className="NotFound__cont d-flex">
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="NotFound__cont">
                <img
                  src={notfoundimage}
                  alt="404"
                  className="Image__notfound"
                />
              </div>
            </div>
            <div className="p-2 bd-highlight">
              <p className="NotFound__info fw-bold">
                Seems like the content you are looking for does not exist :(
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
