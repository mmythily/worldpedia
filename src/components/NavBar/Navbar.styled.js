import styled from 'styled-components'

const Navbar = styled.nav`
  max-width:100%;
  color:#000;
  display: flex;
  border-bottom: 1px solid hsl(207, 26%, 17%, 0.1);
  .dark-theme {
  background-color: #333333;
  color: whitesmoke;
  }
  .light-theme {
    background-color: whitesmoke;
    color: #333333;
  }
`
export default Navbar