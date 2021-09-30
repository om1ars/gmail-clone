import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
      e.preventDefault();
    console.log(data);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="to"
          placeholder="to"
          type="text"
          ref={register("to", { required: true })}
        />
        <input
          name="subject"
          placeholder="subject"
          type="text"
          ref={register("subject", { required: true })}
        />
        <input
          placeholder="Message..."
          className="sednMail__message"
          type="text"
          ref={register("message", { required: true })}
        />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
