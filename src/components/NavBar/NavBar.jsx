import styled from 'styled-components'

import Navbar from './Navbar.styled'
import {ReactComponent as Icon} from './dark.svg'


const DarkIcon = styled(Icon)`
  height: 22px;
  padding:6px 2px 0px 2px;
`
export default function NavBar() {
  return (
    <Navbar>
      <div><h2>Worldpedia</h2></div>
      <div className="darkicon"><DarkIcon />Dark Mode</div>
    </Navbar>
  )
}
