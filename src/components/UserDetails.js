const UserDetails = () => {
    return (
        <div>
            <div className="title">Welcome! First things first...</div>
            <div className="sub-title">You can always change them later</div>
            <div>
              <div className="label">Full Name</div>
              <input className="input" type="text" id="fullName" placeholder="Steve Jobs">
              </input>
              <div className="label">Display Name</div>
              <input className="input" type="text" id="displayName" placeholder="Steve">
              </input>
            </div>
        </div>
    )
}

export default UserDetails;