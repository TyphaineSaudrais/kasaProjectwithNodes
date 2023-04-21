import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import { Navigate, useParams } from "react-router-dom";
import starRanking from "../../components/Stars";
import Caroussel from "../../components/Caroussel";
import Collapse from "../../components/Collapse";
import styled from 'styled-components';


const LogementTitle = styled.h2 `
color: #FF6060; 
font-size: 36px; 
font-weight: 500; 
margin-bottom: 10px; 

`
const LogementLocation = styled.p `
color: #FF6060; 
font-size: 18px; 
font-weight: 500; 
margin-top: 0px; 

`

const Stars = styled.div `
margin: 10px; 
width: 100%;
height: 36px;
@media (max-width: 768px) {
    width: 40%;
    margin: 15px 0px 0px 0px;
}
`



const InfoMore = styled.div `
display: flex; 
justify-content: space-between; 
margin: auto; 
margin-bottom: 15px; 
width: 85%;
@media (max-width: 768px) {
    flex-direction: column; 
}

`

const DescriptionCollapse = styled.div `
 width: 45%; 
 @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 20px;
}



`

const EquipmentCollapse = styled.div `
width: 45%; 
list-style: none; 
@media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 20px;
}


`

const LogementPresentation = styled.div `

display: flex; 
justify-content: space-between; 
margin: auto;
width: 85%; 
@media (max-width: 768px) {
    flex-direction: column; 
    justify-content: space-around; 

}

`

const LogementDescription = styled.div `
    width: 70%; 
    display: flex; 
    flex-direction: column; 
    @media (max-width: 768px) {
        width: 90%;
        
    }
`
const LogementHost = styled.div `
    width: 30%;   
    display: flex; 
    flex-direction: column; 
    margin-top: 35px;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: row-reverse; 
        justify-content: space-between; 
        margin-top: 0px;
    }
    
`
const Host = styled.div `
display: flex; 
justify-content: flex-end;
margin-right: 20px; 
@media (max-width: 768px) {
    width: 40%;
    margin-right: 0px; 
}

`


const HostImg = styled.img `
width: 64px;
height: 64px;
border-radius: 50%;
margin: 5px; 


`


const HostName = styled.h4 `
width: 93px; 
font-size: 18px; 
color: #FF6060; 
font-weight: 500; 

`


const LogementTags = styled.ul `
    display: flex; 
    flex-wrap: wrap;
    list-style: none; 
    padding-inline-start: 0px; 
    

`

const LogementTag = styled.li `
    background: #FF6060;
    border-radius: 15px;
    padding : 10px 20px; 
    color: #FFFFFF; 
    margin: 5px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    vertical-align: center; 
   
`


const CollapseText = styled.p `
margin: 21px 5px; 


`


function Logements() {


    const {id} = useParams();
    console.log(id)
  
    const LogementDisplayed = AppartList.find((Appart) => Appart.id === id);

	if (LogementDisplayed) {

        const equipments = LogementDisplayed.equipments.map((equipments, index) => <li key={index}>{equipments}</li>)
        const tags = LogementDisplayed.tags.map((tags, index) => <LogementTag key={index}>{tags}</LogementTag>)

        return (
            <div key={id}>
                <div>
                    {Caroussel(LogementDisplayed.pictures)}
                </div>
                <LogementPresentation key={LogementDisplayed.id} >
                    <LogementDescription>
                        <LogementTitle>{LogementDisplayed.title}</LogementTitle>
                        <LogementLocation>{LogementDisplayed.location}</LogementLocation>
                        <LogementTags >
                                {tags}
                        </LogementTags>    
                    </LogementDescription>
                    
                   <LogementHost>
                        <Host>
                                <HostName>
                                    {LogementDisplayed.host.name}
                                </HostName>
                                <HostImg src={LogementDisplayed.host.picture} alt="host presentation"/>
                        </Host>
                        <Stars>{starRanking(LogementDisplayed.rating)}</Stars>
                   </LogementHost>
              </LogementPresentation>
              <InfoMore>
                        <DescriptionCollapse>
                                <Collapse label="Description" className="infos_more_title">
                                    <CollapseText>{LogementDisplayed.description}</CollapseText>
                                </Collapse>
                            </DescriptionCollapse>
                        <EquipmentCollapse className='Logement-equipements'>
                                <Collapse label="Equipments" className="infos_more_title">
                                    <CollapseText>{equipments}</CollapseText>
                                    </Collapse>
                        </EquipmentCollapse>
                  </InfoMore>
            </div>
        )
    }
	else {
        <Navigate to= "*"/>
    }
}

export default Logements



