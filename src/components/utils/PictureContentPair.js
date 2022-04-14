import React from "react"
import { TiTick } from "react-icons/ti"

const PictureContentPair = ({picDir, imgSrc, title, story, list}) => {
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
            <div className="pcp_second">
                <h3 className="about_home_title const_title_color">{title}</h3>
                <p className="home_about_message">{story}</p>
                <div className="list_if_any">
                    {
                        list && list.map((item, index) => (
                            <div className="list_any">
                                <TiTick size={26} color="rgb(1,161,231)" />
                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PictureContentPair