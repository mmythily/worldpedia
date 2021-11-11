import styled from 'styled-components'
const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1460px'
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const Details = styled.div`
  .image{
    max-width: 300px;
  }
  justify-items: center;
  margin: 10px 10px;
  display: grid;
  @media ${device.mobile}{
    grid-template-rows: 40% 60%;
    .image{
    max-width: 300px;
    }
  }
  @media ${device.tablet}{
    grid-template-rows: 40% 60%;
    .image{
    max-width: 500px;
  }
  }
  @media ${device.laptop}{
    grid-template-columns: 40% 60%;
    margin: 20px 100px;
    .image{
    max-width: 550px;
    }
  }
  @media ${device.desktop}{
    grid-template-columns: 40% 60%;
    margin: 20px 100px;
    .image{
    max-width: 700px;
    }
  }
`;


export default Details;

