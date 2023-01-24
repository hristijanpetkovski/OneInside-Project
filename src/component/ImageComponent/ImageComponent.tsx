import firstImg from "../../assets/Images/galerie-teaser (1).png"
import secondImage from "../../assets/Images/galerie-teaser (2).png"
import thirdImage from "../../assets/Images/galerie-teaser (3).png"


import "./ImageComponent.scss"


export const ImageComponent = () => {

    return (
        <div className="image-component">
            <div className="content">
            <h1 className="img-component-title">Fokusthemen Finanzen</h1>
            <div className="conatiner">
                <div className="first-item">
                    <img src={firstImg} width="100%" height="470px"/>
                </div>
                <div className="second-item">
                <img src={secondImage} width="100%" height="470px"/>
                </div>
                <div className="third-item">
                <img src={thirdImage} width="100%" height="470px"/>
                </div>
            </div>
            </div>
        </div>
    )
}