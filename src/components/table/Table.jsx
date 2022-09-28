import "./table.scss"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
const List = () => {
    const rows = [
        {
          id: 1143155,
          product: "Món mỳ Ý truyền thống",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Cao Bá Quát",
          date: "6/8",
          amount: 1,
          method: "Trả tiền mặt",
          status: "Đã nhận",
        },
        {
          id: 2235235,
          product: "Lẩu thập cẩm",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Phan Bội Châu",
          date: "20/5",
          amount: 1,
          method: "Trả bằng momo",
          status: "Chưa thanh toán",
        },
        {
          id: 2342353,
          product: "Gà rán Wtf",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Trần Quốc Tuấn",
          date: "5/6",
          amount: 1,
          method: "Trả tiền mặt",
          status: "Chưa thanh toán",
        },
        {
          id: 2357741,
          product: "Lẩu tôm hùm",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Phạm Ngũ Lão",
          date: "6/9",
          amount: 1,
          method: "Trả bằng ZaloPay",
          status: "Đã thanh toán",
        },
        {
          id: 2342355,
          product: "Kem Tràng Tiền",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "8/8",
          amount: 100,
          method: "Trả bằng ViettelPay",
          status: "Chưa thanh toán",
        }
    ]
    return (
    <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Sản Phẩm</TableCell>
            <TableCell className="tableCell">Khách Hàng</TableCell>
            <TableCell className="tableCell">Ngày Đặt</TableCell>
            <TableCell className="tableCell">Số Lượng</TableCell>
            <TableCell className="tableCell">Phương thức thanh toán</TableCell>
            <TableCell className="tableCell">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default List;