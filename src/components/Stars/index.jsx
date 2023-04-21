import OrangeFlag from "../../assets/Vector.png"
import WhiteFlag from "../../assets/VectorStar.png"
import styled from 'styled-components';


const ImgStar = styled.img `
margin: 5px; 
width: 8%; 
height: 8%;
@media (max-width: 1250px) {
    width: 10%; 
height: 10%;
}
`

function starRanking (props) {

const starValue = [1,2,3,4,5];

return (
   
            <div>
                {starValue.map((starValue ) =>
                    props >= starValue ? <ImgStar key={starValue.toString()} alt="orange start" src={OrangeFlag}/> :  <ImgStar key={starValue.toString()} alt="white start" src={WhiteFlag}/> 
                )}
            </div>
        
)

}

export default starRanking