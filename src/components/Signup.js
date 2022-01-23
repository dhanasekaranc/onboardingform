import { useState } from "react";
import Logo from "./Logo";
import "./Signup.css";

const stages = ["1","2","3","4"];

const Signup = ({stage,children}) => {

    return (
        <div className="box">
            <div className="container">
                <Logo />
                <div className="stage">
                    {stages.map((item,index) => {
                        return (
                            // {`${index <= 2? "stage-value current-stage":"stage-value"}`}
                            <div className={`${(index < 2)?"stage-value current-stage" :"stage-value"}`} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Signup;