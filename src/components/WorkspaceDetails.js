import Signup from "./Signup"

const WorkspaceDetails = () => {
    return (
        <Signup>
            <div className="title">Let's setup a home for all your work</div>
            <div className="sub-title">You can always create another workspace later</div>
            <div className="input-div">
                <div className="label"><label>Workspace Name</label></div>
                <input className="input" type="text" id="fullName" placeholder="Eden">
                </input>
                <div className="label"><label>Workspace URL<span style={{color: "gray"}}>(optional)</span></label></div>
                <div className="workspace-input">
                   <input className="url" disabled placeholder="www.eden.com/" />
                   <input className="input" type="text" id="displayName" placeholder="Example" />                
                </div>
            </div>
            <div>
                <button className="button">Create Workspace</button>
            </div>
        </Signup>
    )
}

export default WorkspaceDetails;