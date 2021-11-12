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

const CountryGrid = styled.div`
  justify-items: center;
  margin: auto 10px;
  display: grid;
  @media ${device.mobile}{
    grid-template-columns: 1fr;
  }
  @media ${device.tablet}{
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop}{
    grid-template-columns: 1fr 1fr 1fr;
    
  }
  @media ${device.desktop}{
    margin: auto 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export default CountryGrid