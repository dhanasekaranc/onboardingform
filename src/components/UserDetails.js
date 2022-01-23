import Signup from "./Signup"

const UserDetails = () => {
    return (
        <Signup>
            <div className="title">Welcome! First things first...</div>
            <div className="sub-title">You can always change them later</div>
            <div className="input-div">
                <div className="label"><label>Full Name</label></div>
                <input className="input" type="text" id="fullName" placeholder="Steve Jobs">
                </input>
                <div className="label"><label>Display Name</label></div>
                <input className="input" type="text" id="displayName" placeholder="Steve">
                </input>
            </div>
            <div>
                <button className="button">Create Workspace</button>
            </div>
        </Signup>
    )
}

export default UserDetails;