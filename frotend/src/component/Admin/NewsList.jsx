import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { baseURL } from "../utils/constant";
function NewsList({ id, task, setUpdateUI, updateMode }) {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };
  return (
    
    <li>
      {task}
      <div className="icon_holder">
        <EditIcon style={{ cursor: "pointer" }} onClick={()=>updateMode(id,task)}/>
        <DeleteIcon style={{ cursor: "pointer" }} onClick={removeTask} />
      </div>
    </li>
  );
}

export default NewsList;
