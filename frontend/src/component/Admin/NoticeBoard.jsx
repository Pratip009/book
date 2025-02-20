import React from "react";

function NoticeBoard({ id, task, setUpdateUI, updateMode }) {
  return (
    <ul>
    <li style={{ textAlign: "left", padding: "5px 5px"  }}>
      {task}
   
    </li></ul>
  );
}

export default NoticeBoard;
