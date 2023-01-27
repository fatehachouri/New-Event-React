import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const FooterWrapper= styled.footer`
label:FooterWrapper;
padding: 5rem ;
text-align:center;
`;
export const Span= styled.span`
label:Span;
color: ${theme.gray};

`;
export const Design= styled.span`
label:Design;
color: ${theme.primary};
font-weight: bold;
`;
export const Ul= styled.ul`
label:Ul;
padding-top:3rem;
list-style:none;
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
`;
export const Li= styled.li`
label:Li;
display:flex;
width:20px;
height:20px;
padding:1rem;
cursor:pointer;
color: ${theme.gray};
border-radius:50%;
justify-content:center;
align-items:center;
transition: all 0.3s ease-in-out;

:hover{
    color: ${theme.white};
    background-color: ${theme.primary};
}
`;


