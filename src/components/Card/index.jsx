import { Link } from "react-router-dom";
import styled from 'styled-components';



const AppartName = styled.p `
   
    width: 60%;
    overflow-wrap: break-word;
    line-height: center; 
    margin-left: 15px;
   
`
  



const Card = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 30px;
   /*  background: linear-gradient(
        rgba(0, 0, 0, 0.3), 
        rgba(0, 0, 0, 0.3)
      ); */
    @media (max-width: 941px)  {
        width: 80%; 
        margin: auto;
        margin-bottom: 20px;
    
    }
    @media (max-width: 768px) {
        width: 90%; 
        margin: auto;
        margin-bottom: 20px;
    
    }
   
`


    




function AppartCard ({ id, title , cover }) {

  const LinkAppardCard = styled(Link) `
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: #FFFFFF; 
  text-decoration: none; 
  & visited {color: #FFFFFF}; 
  height: 300px;
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  background-image: linear-gradient(180deg, 
    rgba(0, 0, 0, 0), 
    rgba(0, 0, 0, 0.6)
  ),  url(${cover});
  background-size: cover;
  @media  (max-width: 941px) {
    width: 80%; 
    margin: auto;
    margin-bottom: 20px;

}
  @media (max-width: 768px) {
    width: 100%; 
    margin: 10px auto;

}
  
  `
  

    return (
    <Card key={id} className='appart-card'>
         <LinkAppardCard to={`/Logements/${id}`}>
            <AppartName>{title}</AppartName>
        </LinkAppardCard>
    </Card>
)

    
}

export default AppartCard
