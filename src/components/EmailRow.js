import { IconButton } from "@material-ui/core";
import {
  CheckBox,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./EmailRow.css";

function EmailRow({ title, description, subject, time, id }) {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow__options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__description">
          <h4>{description}</h4>
        </span>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
