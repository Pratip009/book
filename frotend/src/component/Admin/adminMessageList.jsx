import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { baseURL } from "../utils/constant";
function AdminMessageList({ id, task,secondtasks ,createdAt, setUpdateUI, updateMode }) {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };
  return (
    <ul>
      <li style={{ display: "inline" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#F5F7F8",
            justifyContent: "space-between",
            maxWidth: "800px",
            padding: "10px",
          }}
        >
          <span style={{ fontWeight: "500" }}>{task}</span>
          <span style={{ fontWeight: "500" }}>{secondtasks}</span>
          <div className="icon_holder" style={{ justifyContent: "center" }}>
            <EditIcon
              style={{
                cursor: "pointer",
                marginTop: "-10px",
                marginLeft: "20px",
                color: "green",
              }}
              onClick={() => updateMode(id, task, secondtasks,createdAt)}
            />
            <DeleteIcon
              style={{
                cursor: "pointer",
                marginTop: "-10px",
                marginLeft: "20px",
                color: "red",
              }}
              onClick={removeTask}
            />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default AdminMessageList;
