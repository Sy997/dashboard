import React from "react"
import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert" 
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Tổng thu nhập</h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p className="title">Tổng số tiền kiếm được trong hôm nay</p>
                <p className="amount">19.000.000Vnđ</p>
                <p className="desc">
                    Các giao dịch được tính toán trước đó
                </p>
                <div className="sumary">
                    <div className="item">
                        <div className="itemTitle">Mục Tiêu</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">2.000.000Vnđ</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Tuần trước</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">15.000.000Vnđ</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Tháng trước</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">36.000.Vnđ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;