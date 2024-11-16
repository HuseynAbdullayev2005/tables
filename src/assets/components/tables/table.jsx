import React from 'react'
import './index.css'
import Tr from '../tr/tr'
function Table() {
  return (
    <div className='tables'>
      <div className='tables_button'>
        <button>Web design</button>
        <button>Graphics</button>
        <button>Web Coding</button>
      </div>
      <div className='table'>
        <table>
          <tr>
            <th>Project Title</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Client</th>
          </tr>
          <Tr  title="website Redesign"  budget="1500 to 2200"  deadline="2022 dec 12" client="Web Biz"/>
          <Tr  title="Website Renovation"  budget="$2,500 to $3,600"  deadline=" 2022 Dec 10"   client=" Online Ads"/>
          <Tr  title="website"  budget="1500"  deadline="sjsjsjjs"/>
          <Tr  title="website"  budget="1500"  deadline="sjsjsjjs"/>
         
         
        </table>

      </div>
    </div>
  )
}

export default Table