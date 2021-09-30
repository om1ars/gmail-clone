import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  Inbox,
  LocalOffer,
  MoreVert,
  People,
  Redo,
} from "@material-ui/icons";
import React from "react";
import "./EmailList.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyBoardHideIcon from "@material-ui/icons/KeyboardHide";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyBoardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__section">
        <Section Icon={Inbox} title="Primary" color="red" selected={true} />
        <Section Icon={People} title="Social" color="yellow" />
        <Section Icon={LocalOffer} title="Promotions" color="black" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="Hey follow stramoit"
          description="This is test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey follow stramoit"
          description="This is test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey follow stramoit"
          description="This is test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
