import Signup from "./Signup";
import "./Onboarding.css";
import { DataContext } from "./DataProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const WorkspaceDetails = () => {

    const navigate = useNavigate();
    const {data,setData} = useContext(DataContext);

    const handleClick = () => {
        if(data.workspaceName.length) {
            navigate("/usage");
        }
        else {
            alert("All Fields are required");
        }
    }

    return (
        <Signup stage={2}>
            <div className="title">Let's setup a home for all your work</div>
            <div className="sub-title">You can always create another workspace later</div>
            
            <div className="input-div">
                <div className="label"><label>Workspace Name *</label></div>
                <input className="input" type="text" id="workspaceName" placeholder="Eden"
                  onChange={(e) => setData(data => ({...data,workspaceName: e.target.value}))}>
                </input>
                <div className="label">
                    <label>Workspace URL
                        <span style={{color: "gray"}}>(optional)</span>
                    </label>
                </div>
                <div className="workspace-input">
                   <input className="url" disabled placeholder="www.eden.com/" />
                   <input className="input" type="text" id="workspaceURL" 
                      placeholder="Example" 
                      onChange={(e) => setData(data => ({...data,workspaceURL: e.target.value}))}>
                   </input>              
                </div>
            </div>
            <div>
                <button className="button" onClick={handleClick}>Create Workspace</button>
            </div>
        </Signup>
    )
}

export default WorkspaceDetails;