import React from "react";

function contact() {
  return (
    <form className="contact">
      <h3>Contact Details</h3>
      <div class="form-group">
        <label for="exampleInputName1"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Name"
        />
        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1"></label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputMessage1"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Message"
        />
      </div>

      {/* <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1"></label>
    </div> */}
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default contact;
