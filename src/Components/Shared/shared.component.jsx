import { CheckBox } from '@mui/icons-material';
import './shared.component.css';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { MdMode } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";



const SharedComponent = (props) => {

//create function for edit

    return (
        <div>
            <h3></h3>
            <table className="table table-bordered table-hover">
                <thead className="table-dangerj">
                    <tr>
                        <th><div className='ch'><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='pt-5'/></div></th>
                        {
                         props.headers.map((header) => <th>{header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.body.map((row) => <tr>
                            <td>  <div className='ch'><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='p-5'/> </div></td>
                            {
                                Object.values(row).map((row) => <td className='tf'>{row}</td>)
                            }
                            <td>
                                {/* <button className='btn btn-success'>Edit</button> &nbsp;
                                <button className='btn btn-danger'>Delete</button> */}
                              <a href='#' onClick={() => {props.UpdatePropertyGrid(row)}}><MdMode className='bomma'/> </a>
                              <a href='#' onClick={() => {props.deleteItemGrid(row)}}><MdDelete className='bomma1'/> </a>
                              <a href='#' onClick={() => {}}><MdPictureAsPdf className='bomma2'/></a>
                               
                            </td>
                        </tr>
                        )
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
   
}

export default SharedComponent;





































