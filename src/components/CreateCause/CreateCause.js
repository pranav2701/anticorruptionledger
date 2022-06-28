import React from "react";

function CreateCause() {
  function createCauseOnSubmit(e) {
    e.preventDefault();

    console.log(e.target.cause_name.value);
  }

  return (
    <div className="createCause">
      <form onSubmit={createCauseOnSubmit}>
        <label htmlFor="cause_name">Enter the cause name</label>
        <input type="text" id="cause_name" />
        <br />
        <br />
        <label htmlFor="cause_target_amount">
          Enter the Target amount for the cause
        </label>
        <input type="text" id="cause_target_amount" />
        <br />
        <br />
        <label htmlFor="cause_description">
          Enter the Description for the cause
        </label>
        <br />
        <br />
        <textarea
          name="cause_description"
          id="cause_description"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <br />
        <label htmlFor="cause_receiver_address">
          Enter the Receiver Address of the cause
        </label>
        <input type="text" id="cause_reciever_address" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateCause;
