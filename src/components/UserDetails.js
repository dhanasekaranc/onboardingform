import Signup from "./Signup";
import "./Onboarding.css";
import { DataContext } from "./DataProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {

    const navigate = useNavigate();
    const {data,setData} = useContext(DataContext);

    const handleClick = () => {
        if(data.fullName.length && data.displayName.length) {
            navigate("/workspace");
        }
        else {
            alert("All Fields are required");
        }
    }

    return (
        <Signup stage={1}>
            <div className="title">Welcome! First things first...</div>
            <div className="sub-title">You can always change them later</div>
            <div className="input-div">
                <div className="label"><label>Full Name *</label></div>
                <input className="input" type="text" id="fullName" 
                     placeholder="Steve Jobs"  value={data.fullName} 
                    onChange={(e) => setData(data => ({...data,fullName: e.target.value}))} >
                </input>
                <div className="label"><label>Display Name *</label></div>
                <input className="input" type="text" id="displayName"
                       placeholder="Steve" value={data.displayName} 
                       onChange={(e) => setData(data => ({...data,displayName: e.target.value}))}>
                </input>
            </div>
            <div>
                <button className="button" onClick={handleClick}>
                    Create Workspace
                </button>
            </div>
        </Signup>
    )
}

export default UserDetails;