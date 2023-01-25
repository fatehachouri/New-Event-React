import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const NavbarWrapper= styled.section`
label:NavbarWrapper;
background-color:${theme.secondary};
padding:1.5rem 0;
color:${theme.white};
`;
export const NavContainer= styled.div`
label:NavContainer;
display:flex;
justify-content:space-between;
align-items:center;
`;
export const NavTitle= styled.span`
label:NavTitle;
font-size:1.5rem;
`;
export const Event= styled.span`
label:Event;
color:${theme.primary};

`;
export const Link= styled.a`
label:Link;
text-decoration:none;
color:${theme.white};
font-size:1rem
`;
export const LinksWrapper= styled.div`
label:LinksWrapper;
display:flex;
gap:2rem;
align-items:center;

`;