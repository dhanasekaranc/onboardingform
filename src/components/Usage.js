import Signup from "./Signup";
import "./Onboarding.css";
import Group from "../assets/Group.PNG";
import Person from "../assets/Person.PNG";
import { DataContext } from "./DataProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Usage = () => {

    const navigate = useNavigate();
    const {data,setData} = useContext(DataContext);

    const handleClick = () => {
        if(data.usage.length) {
            navigate("/success");
        }
        else {
            alert("Select the Usage type");
        }
    }

    return (
        <Signup stage={3}>
            <div className="title">How are you planning to use Eden?</div>
            <div className="sub-title">We,ll streamline your setup experience accordingly</div>
            <div className="select-usage">
                <div className={`usage ${data.usage==="myself"?"selected":""}`} 
                     onClick={() => setData(data => ({...data,usage: "myself"}))}>
                    <img src={Person} alt="Person"/>
                    <h4 style={{margin: "0.5rem 0"}}>For Myself</h4>
                    <p style={{color: "#87918a"}}>Write better. Think more clearly. Stay organized.</p>
                </div>
                <div className={`usage ${data.usage==="team"?"selected":""}`} 
                    onClick={() => setData(data => ({...data,usage: "team"}))}>
                    <img src={Group} alt="Group"/>
                    <h4 style={{margin: "0.5rem 0"}}>With my Team</h4>
                    <p style={{color: "#87918a"}}>Wikis,docs,tasks & projects, all in one place.</p>
                    
                </div>
            </div>
            <div>
                <button className="button" onClick={handleClick}>
                    Create Workspace
                </button>
            </div>
        </Signup>
    )
}

export default Usage;