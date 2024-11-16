import React from 'react'
import './index.css'
function Tr(props) {
  return (
    <div>
     
        <tr>
            <td>{props.title}</td>
            <td>{props.budget}</td>
            <td>{props.deadline}</td>
            <td>{props.client}</td>
        </tr>
        
    </div>
  )
}

export default Tr