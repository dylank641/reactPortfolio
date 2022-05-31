import React from "react";

function Resume() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <a
        href={require("./resume.pdf")}
        download="Dylan-Killelea-Res"
        className="col-12 text-center"
      >
        Download PDF
      </a>

      <div className="col-lg-6 col-md-10 justify-content-center my-4">
        <img src={require(`./resumee.PNG`)} alt="" />
      </div>
    </div>
  );
}

export default Resume;