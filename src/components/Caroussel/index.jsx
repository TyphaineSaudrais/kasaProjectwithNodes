import { useState } from "react"
import VectorLeft from "../../assets/VectorLeft.png"
import VectorRight from "../../assets/VectorRight.png"
import styled from 'styled-components';


const CarousselWrap = styled.div `
    position: relative; 
    height:450px; 
    width: 85%; 
    margin: auto; 
    
`

const CarousselCover = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
`
const Arrows = styled.div `
    position: absolute; 
    top: 45%;
    width: 100%;
    
`

const ArrowsImg = styled.div `
    display: flex; 
    justify-content: space-between; 
    margin: 10px; 
    

`




function Caroussel(props) {

const [displayedImg, setCurrentDisplayedImg] = useState(0);

const endOfPictures = props.length -1 
const startOfPictures = props.indexOf(props[0])

function switchforward () {


    if (displayedImg < endOfPictures) {
        setCurrentDisplayedImg(displayedImg + 1)
       
        
    } else {
        setCurrentDisplayedImg(startOfPictures)
    }
  }
  
  
   const switchback = () => {
   if (displayedImg > startOfPictures) {
          setCurrentDisplayedImg(displayedImg - 1)
    } else {
               setCurrentDisplayedImg(endOfPictures)
    }
  }

return (

    <CarousselWrap>
        <CarousselCover src={props[displayedImg]} alt="Carousel cover"/>
        <Arrows>
            <ArrowsImg>
                <img src={VectorLeft} alt="arrow left"  onClick={switchback}/>
                <img src={VectorRight} alt="arrow right" onClick={switchforward}/>
            </ArrowsImg>
        </Arrows>
    </CarousselWrap>
)

}

export default Caroussel