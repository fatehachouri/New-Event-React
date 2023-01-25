import NavItems from "./NavItems";
import { Event, LinksWrapper, NavContainer, NavTitle, NavbarWrapper } from "./style";

export default function Navbar() {
  return (
    <NavbarWrapper>
    <div className="container">
        <NavContainer>
        <div>
        <NavTitle>New
        <Event>Event</Event>
        </NavTitle>
        </div>
        <LinksWrapper>
<NavItems />

</LinksWrapper>
        
        </NavContainer>
        </div>
    </NavbarWrapper>
  )
}
