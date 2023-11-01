import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function NewsList({id,task,setUpdateUI,updateMode }) {
  return (
    <li>
      {task}
      <div className='icon_holder'>
        <EditIcon style={{cursor:"pointer"}}/>
        <DeleteIcon style={{cursor:"pointer"}}/>
      </div>
    </li>
  )
}

export default NewsList
