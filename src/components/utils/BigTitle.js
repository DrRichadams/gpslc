import React from "react"

const BigTitle = ({title, size, color}) => {
    return(
        <h1 style={{
            color: color,
            fontSize: size === "sm" 
                ? "20px"
                : size === "md" 
                ? "25px": size ==="bg" ? "30px": "10px",
            fontFamily: "Oswald, sans-serif",
            textTransform: "uppercase",
            fontWeight: 900
        }}>
            {title}
        </h1>
    )
}

export default BigTitle