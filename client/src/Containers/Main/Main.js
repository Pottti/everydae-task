import React,{useState, useEffect} from 'react'
import Widget from "../../Components/Widgets/Widget"
import "./main.scss"
import Exam from "../../images/calendar.svg"
import SatScore from "../../images/target.svg"
import Challenges from "../../images/trophy.svg"
import TotalScore from "../../images/clock.svg"
import Sidebar from "../Sidebar/Sidebar"

export default function Main(props) {
    const {childData} = props
    return (
       <>
    
       <div className="row">
        <Widget utility={""} image={Exam} data={childData?.sat_days_left} text={"Days until exam"} />
        <Widget utility={"+"} image={SatScore} data={childData?.target_sat_score} text={"Target sat score"} />
        <Widget utility={""} image={Challenges} data={childData?.challenges_completed} text={"Challenges completed this week"} />
        <Widget utility={"hrs"} image={TotalScore} data={childData?.total_hours_spent} text={"Total study time on everydae"} />
       </div>
    
       </>
    )
}
