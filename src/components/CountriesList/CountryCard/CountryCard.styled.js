import styled from 'styled-components'
const CountryCard = styled.div`
  background-color: #fff;
  border: .5px solid #eee;
  border-radius:4px;
  box-shadow: 2px 2px 7px 1px #eee;
  width:300px;
  height: auto;
  margin:20px 15px;
  img{
    width:300px;
    height: 175px;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    border-bottom: 1px solid #eee;
    object-fit: cover;
  }
  .card{
    padding-left:10px;
    
  }
`

export default CountryCard