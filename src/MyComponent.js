import React from "react";

function MyComponent (){
    return(
        <div 
        className="col-3 offset-1"      
        style={{
            width:"270px",
            height:330,
            backgroundColor : "#ec407a",
            padding: 30,
            borderRadius : 8
        }}>
            <h2 style={{
                color : "white",
                fontSize: 35
            }}>
                My Title
            </h2>
            <p style={{
                marginTop:20,
            }}>
                lorem ipsum yo yo lorem ipsum yo yo lorem ipsum yo yo lorem ipsum yo yo
                lorem ipsum yo yo lorem ipsum yo yo lorem ipsum yo yo lorem ipsum yo yo
                lorem ipsum yo yo lorem ipsum yo yo lorem ipsum yo yo
            </p>
            <hr/>
            <div style={{
                width:90,
                height:40,
                display : "flex",
                justifyContent:"center",
                alignItems : "center",
                backgroundColor:"white",
                borderRadius : 5,
                color: "#ec407a"
            }}>
                Read more
            </div>
        </div>
    )
}


export default MyComponent;