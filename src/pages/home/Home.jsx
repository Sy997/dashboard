import List from "../../components/table/Table";
import React from "react"
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import './home.scss'

const Home = ({ type }) => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Trọn vẹn của năm 2021" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Các đơn hàng mới nhất</div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Home;

