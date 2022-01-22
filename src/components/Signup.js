import { useState } from "react";
import Logo from "./Logo";
import UserDetails from "./UserDetails";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="box">
            <Logo />
            <UserDetails />
                <button className="workspace">Create Workspace</button>
        </div>
    )
}

export default Signup;