import React, {useState, useEffect} from 'react'
import Axios from "../../utils//axios"
import Main from "../Main/Main"
import Sidebar from "../Sidebar/Sidebar"
import Error from "../Main/Error"
import { useParams } from 'react-router-dom'



export default function Body() {
    const {id} = useParams();
    const [parentData, setParentData] = useState(null)
    const [childData, setChildData] = useState([])
    const [childId, setChildId] = useState(null)
    const [countUser, setCountUser] = useState(null)

    const getChildId = (child_id) => {
        setChildId(child_id)
    }

    console.log(parentData,'parentData')

    useEffect(() => {
        Axios.get(`/get/parent/${id}`).then(res => {
    
            setParentData(res.data[0])
            setChildId(res.data[0].user[0].id)

            if(res.data[0].user.length === 1){
                setCountUser(1)
            }
        })
        .catch(err => {
            console.log(err)
        }) 
    },[])

    useEffect(() => {
        Axios.get(`/get/getuserdata/${childId}`)
        .then(res => {
            setChildData(res.data)
            console.log(res.data, 'childi')
           
        })
        .catch(err => console.log(err))
    },[childId])

    return (
        <>
        {parentData !== undefined ? 
            <>
            <div className="intro">
                <h1>{`Hello ${parentData?.fname + " " + parentData?.lname}, see how ${childData.fullname}  is doing`}</h1>
            </div>
            <div className="main"> 
                 <Main parentData={parentData} childData={childData}/>  

                { countUser !== 1 ? <Sidebar childList={parentData} childId={(id) => getChildId(id)} /> : null  }
            </div>
            </>
        : 
        <Error />
        }

        </>

    )
}
