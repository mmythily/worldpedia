import styled from 'styled-components'

const Forms = styled.div`
position: relative;
  display: flex;
  flex-wrap:wrap;
  margin: 20px 100px;
  place-content: space-between;
  align-items:center;
  align-content:center;


  @media (max-width: 750px) {
    margin: 20px 10px;
    flex-direction: column;
    padding: 10px;
    align-items: start;
  }
  .searchInput{
    font-size: 20px;
    padding:15px 30px; 
    border: 1px solid #eee;
    border-radius: 6px;
    box-shadow: 1px 1px 10px 10px #eee;
  }
  .dropDown{
    font-size: 20px;
    border: 1px solid #eee;
    padding:15px 30px; 
    margin:10px;
    border-radius: 6px;
    box-shadow: 1px 1px 10px 10px #eee;
  }
`
export default Forms