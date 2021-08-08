import React,{useState, useEffect} from 'react'
import "./Sidebar.scss"

export default function Sidebar(props) {
    const {childList,childId} = props;

    const [activeIndex, setActiveIndex] = useState(0);


    const handleOnClick = (index, id) => {
        childId(id)
        setActiveIndex(index);
      };
    
    return (
        <>
        <div className="sidebar">
            <h4>Children List</h4>
            <ul>
                {
                    childList?.user.map((child, index) => {
               
                        return(
                            <li  className={activeIndex === index ? "active" : "unactive"} key={index}><input type="button" value={child?.fname + ' ' + child.lname}  onClick={() => handleOnClick(index, child.id) }/></li>
                        )
                    })
                }
            
            </ul>
        </div>
        </>
    )
}
