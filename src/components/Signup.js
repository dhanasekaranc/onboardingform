import { Navigate } from "react-router-dom";
import Logo from "./Logo";
import "./Signup.css";
import { DataContext } from "./DataProvider";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const stages = ["1","2","3","4"];

const Signup = ({stage,children}) => {

    const navigate = useNavigate();
    const {data} = useContext(DataContext);

   useEffect(() => {
    if(!data.fullName) { 
        navigate("/",{ replace: true });
    };
   },[])

    return (
        <div className="outer">
        <div className="box">
            <div className="container">
                <Logo />
                <div className="stage">
                    {stages.map((item,index) => {
                        return (
                            // {`${index <= 2? "stage-value current-stage":"stage-value"}`}
                            <div className={`${(index < stage)?"stage-value current-stage" :"stage-value"}`} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div>
                {children}
            </div>
        </div>
        </div>
    )
}

export default Signup;