import styled from 'styled-components';

const Wrapper = styled.div `
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
/* or 51px */
display: flex;
flex-direction: column;
align-items: center;
color:#FF6060;
`

const ErrorTitle = styled.h1 `
font-size: 170px;
margin-bottom: 10px;
`

const Annonce = styled.p `
font-size: 25px;
margin-bottom: 150px; 
`

const AccueilLink = styled.a `
font-size: 15px;
margin-bottom: 150px; 
color:#FF6060;
&:visited {color:#FF6060;}
`

function Error() {
    return (
        <Wrapper className='Error-page'>
            <ErrorTitle>404</ErrorTitle>
            <Annonce>Oups! La page que vous demandez n'existe pas.</Annonce>
            <AccueilLink href="/">Retourner sur la page d’accueil</AccueilLink>
        </Wrapper>
    )
}
 
export default Error