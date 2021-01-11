import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
// import App from "./App";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const APP = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 5:32PM"
          comment="Amazing"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:03PM"
        comment="nice"
        avatar={faker.image.avatar}
      />
      <CommentDetail
        author="Jay"
        timeAgo="Yesterday at 8:40PM"
        comment="Inspiring"
        avatar={faker.image.avatar}
      />
    </div>
  );
};

ReactDOM.render(<APP />, document.querySelector("#root"));
