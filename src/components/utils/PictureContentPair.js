import React from "react"

const PictureContentPair = ({picDir, imgSrc}) => {
    return(
        <div 
            className={picDir === "right" 
            ? "picture_content_pair_container right_aligned"
            : picDir === "left" 
            ? "picture_content_pair_container left_aligned"
            : "picture_content_pair_container"
        }>
            <div className="pcp_first">
                <img 
                    src={process.env.PUBLIC_URL + `${imgSrc}.png`} 
                    alt="" />
            </div>
            <p>Left</p>
        </div>
    )
}

export default PictureContentPair