import React from "react";

function TimeLine(props){
    return(
        <>
           {
               props.timeLine.map((item)=>{
                   return <p>
                    {item}</p>
               })
           }
        </>
    )
}

export default TimeLine;