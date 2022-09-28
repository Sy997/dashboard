export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
    field: "user", headerName: "User", width: 230, renderCell: (params)=>{
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230
    },
    {
      field: "age",
      headerName: "Age",
      width: 100
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
      }
    }
]
//temporary data
export const userRows = [
    {
      id: 1,
      username: "Nguyễn Công Trứ",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "Phs@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Lê Xuân Sơn",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Phamsy@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Trần Quốc Tuấn",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Phạm Thành Danh",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "hoangsy@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Trần Công Đinh",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sypham@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Phạm Thị Tứ",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "syhoang@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Lý Công Uẩn",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "phamhoang@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Võ Tòng",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "hoangpham@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Lâm Xung",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "phampham@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Ngô Quần",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "hoanghoang@gmail.com",
      status: "active",
      age: 65,
    },
];