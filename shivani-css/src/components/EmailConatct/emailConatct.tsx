import React from "react";

const EmailContact = () => {
  return (
    <div className="bg-secondary p-5">
      <div className="display-flex justify-center">
        <div className="p-5 width-50">
          <div className="Tcenter mb-3 ">
            <h2 className="Stitle px-5 mb-4">
              <span className="px-2 position-relative bg-secondary">
                Stay Updated
              </span>
            </h2>
            <p>
              Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
              labore at justo ipsum eirmod duo labore labore.
            </p>
          </div>
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Email Goes Here"
              />
              <div className="">
                <button className="btn btn-primary px-4 height-100">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;
