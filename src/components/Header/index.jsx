
import img from '../../assets/img.svg';
import styled from 'styled-components';


const BannerWrapper = styled.div `

    width: 85%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    line-height: 50%;
    margin: 50px auto;
    @media (max-width: 768px) {
        justify-content: space-between;
       
    }
    @media (max-width: 500px), (max-width: 700px){
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 20px;
    }
   
    `



const KasaLogo =  styled.img `
    margin-left: 10px;
    @media (max-width: 768px) {
        margin-right: 80px;
        
        
    }
    @media (max-width: 500px), (max-width: 700px)  {
        width: 60%; 
        height: 60%;
    }
    
`


const BannerNavigation = styled.nav `
    width : 35% ; 
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 68px;
    @media (max-width: 768px) {
        justify-content: space-around;
        width: 50%;
       
    
    }
    @media (max-width: 500px), (max-width: 700px) {
       
        width: 100%;
        margin :20px ;
     
    
    }
    
  `



const BannerLink = styled.a `

    width: 120%;
    height: 34px;
    text-decoration: none;
    &: hover { text-decoration-line: underline} 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 130%;
    /* or 34px */
    display: flex;
    align-items: center;
    ftext-align: revert;
    line-height: 60%;
    color: #FF6060;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 15px;
        text-transform: uppercase;
    
    }
    
  
`



function Header() {

	return (<BannerWrapper>
			 <KasaLogo src={img} alt="logo kasa"/>
			 <BannerNavigation>
				<BannerLink href='/'>Accueil</BannerLink>
				<BannerLink  href='/Apropos'>A Propos</BannerLink>
			 </BannerNavigation>
	       </BannerWrapper>)
}

export default Header