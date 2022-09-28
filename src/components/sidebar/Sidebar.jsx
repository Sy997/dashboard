import React from "react"
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import CampaignIcon from '@mui/icons-material/Campaign';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FaceIcon from '@mui/icons-material/Face';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}} >
                    <span className="logo">Pham Hoang Sy</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Trang chính</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <p className="title">DANH SÁCH</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupIcon className="icon"/>
                            <span>SẢN PHẨM</span>
                        </li>
                    </Link>
                    <li>
                        <CategoryIcon className="icon"/>
                        <span>ĐƠN HÀNG</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon"/>
                        <span>ĐANG GIAO</span>
                    </li>
                    <div className="title">UseFul</div>
                    <li>
                        <BabyChangingStationIcon className="icon"/>
                        <span>SỐ LIỆU THỐNG KÊ</span>
                    </li>
                    <li>
                        <CampaignIcon className="icon"/>
                        <span>THÔNG BÁO</span>
                    </li>
                    <p className="title">DỊCH VỤ</p>
                    <li>
                        <SystemSecurityUpdateGoodIcon className="icon"/>
                        <span>SỨC TẢI CỦA HỆ THỐNG</span>
                    </li>
                    <li>
                        <PinterestIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>CÀI ĐẶT</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <FaceIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <MeetingRoomIcon className="icon"/>
                        <span>ĐĂNG XUẤT</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;