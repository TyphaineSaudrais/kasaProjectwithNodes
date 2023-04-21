import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import styled from 'styled-components';

const FooterWrapper = styled.div `
 
    height: 209px;
    border-radius: 0px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;

`





const LogoFooter = styled.div `

   width: 120px;
   height: 49px;
    color: #FFFFFF;
    display: block;
    margin: auto;
    
`



const ParagraphFooter = styled.p `

    

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    /* or 34px */
    margin: auto;
    color: #FFFFFF;

`

function Footer() {

	return (<FooterWrapper>
			<LogoFooter >
			  <img className='logo-1' src={logo1} alt="logo kasa lettre 1"  />
			  <img className='logo-2' src={logo2} alt="logo kasa lettre 2"  />
			  <img className='logo-3' src={logo3} alt="logo kasa lettre 3"  />
			  <img className='logo-4' src={logo4} alt="logo kasa lettre 4"  />
			</LogoFooter >
			 <ParagraphFooter className='paragraph-footer'>
             © 2020 Kasa. All rights reserved
			 </ParagraphFooter>
	       </FooterWrapper>)
}

export default Footer