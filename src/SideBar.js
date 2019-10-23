import React from "react";

function SideBar (){
    return(
        <>
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
                <img src="/raed.jpg" width="150"  className="rounded-lg"/>
            </div>

            <div style={{
                marginTop:50
            }}>
                <h3 style={{
                    color:"white"
                }}>Raed Ouerfelli</h3>
                <p style={{
                    color:"#ddd6cc",
                    marginTop:20
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris 
                </p>

                
            </div>
        </>
    )
}

export default SideBar;