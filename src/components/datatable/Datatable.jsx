import Navbar from "../navbar/Navbar"
import "./datatable.scss"
import { Link } from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
    const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell:() => {
        return (
            <div className="cellAction">
                <Link to="/users" style={{ textDecoration: "none" }}>
                    <div className="viewButton">Xem</div>
                </Link>
                <div className="deleteButton">Xóa</div>
            </div>
        )
    } }]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Thêm user
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
                    Thêm user
                </Link>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Datatable;