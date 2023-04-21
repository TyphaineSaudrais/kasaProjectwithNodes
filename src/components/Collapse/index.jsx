import { useState } from "react"
import VectorArrowUp from "../../assets/VectorArrowUp.png"
import VectorArrowDown from "../../assets/VectorArrowDown.png"
import styled from 'styled-components';



const Toggle = styled.div `

    color: #FFFF; 
    background-color:#FF6060; 
    height: 40px;
    display: flex; 
    justify-content: space-between; 
    border-radius: 5px; 
    
`

const RuleTitle = styled.h3 `
margin: 8px 0px 1.1% 15px; 
font-weight: 500; 
font-size: 19px; 

`

const Description = styled.div `
background-color: #F7F7F7;
color: #FF6060; 
border-radius: 5px; 
padding: 10px 10px 10px 10px; 
line-height: 150%; 
`

const Vector = styled.img `
 height: 30%;
 display: block;  
 margin: 13px 20px 1.4% 0px; 
`

export default function Collapse(props){

    const [isOpen, setIsOpen] = useState(false); 

   return (

        <div>
           <Toggle onClick={() => setIsOpen(!isOpen)}>
                <RuleTitle className="Collapse-title">{props.label}</RuleTitle>
                {!isOpen? <Vector src={VectorArrowDown} alt=" arrow down "/>: <Vector src={VectorArrowUp} alt="Arrow up "/>}
           </Toggle>
           { isOpen && 
                <Description className="text_content">
                    {props.children}
                </Description>
           }
     
        </div>
   )
         }


