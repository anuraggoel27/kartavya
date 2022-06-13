import { TableBody } from '@material-ui/core';
import React,{useContext} from 'react'
import { RiFileDownloadLine } from 'react-icons/ri';
import { MaterialContext } from '../../pages/Study Material/StudyMaterialContent'
import * as RiIcons from 'react-icons/ri';
import "./styles.css"
const Tables = () => {
    const material=useContext(MaterialContext);
  return (
    <div className="custom-table">
        <table className="table">
        <TableBody>
        <tr className="table-title-row">
            <td className="table-title-cell-name">Name</td>
            <td className="table-title-cell">Open</td>
            <td className="table-title-cell">Download</td>
        </tr>
        {material.map((m,index)=>{
            return <tr key={index} className="table-data-row">
                <td className="table-data-cell">{m.name}</td>
                <td className="table-data-cell"><a href={m.webViewLink}>View</a></td>
                <td className="table-data-cell"><a href={m.webContentLink}><RiIcons.RiDownloadLine/></a></td>
            </tr>
        })}
        </TableBody>
        </table>
    </div>
  )
}

export default Tables