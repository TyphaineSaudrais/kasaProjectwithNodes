import { AppartList } from "../../Datas/AppartList"
import AppartCard from "../Card"
import styled from 'styled-components';


const WrapperCard = styled.div `
display: flex;
flex-direction: row; 
flex-wrap: wrap;
margin: 50px auto; 
justify-content: center;
background-color: #F6F6F6; 
padding: 20px 0px; 
border-radius: 15px; 
width: 85%;
@media (max-width: 941px) {
	width: 90%; 

}
@media (max-width: 941px) {
	display: flex;
	flex-direction: column;
	width: 90%; 
	
	

}
`


function AppartRecap() {
	
	return (
		<div>
			<WrapperCard >
				{AppartList.map(({ id, title, cover }) => (
					<AppartCard key={id}
						id={id}
						title={title}
						cover= {cover}
					/>
				))}
			</WrapperCard>
		</div>
	)
}

export default AppartRecap