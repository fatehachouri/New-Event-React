import styled from "@emotion/styled";
import header from '../../../../shared/assets/imags/intro-bg.jpg'
import theme from "../../../../design-system/config";

export const HeaderWrapper= styled.section`
label:HeaderWrapper;
height:700px;
background-size:cover;
background-repeat:no-repeat;
background: url(${header}) fixed;
padding:20% 0;
text-align:center;
`;

export const H3= styled.h3`
label:H3;
color: ${theme.white};
font-size: 1.5rem;
`;
export const Title= styled.h1`
label:Title;
color: ${theme.white};
font-size: 3rem;
`;
export const LearnMore= styled.button`
label:LearnMore;
color: ${theme.white};
font-size: 1rem;
background:transparent;
border: 1px solid ${theme.white};
margin-right: 2rem;
padding: 1rem 3rem;
border-radius:5px;
cursor:pointer;
transition: all 0.3s ease-in-out;
:hover{
    color: ${theme.white};
background:${theme.primary};
border: 1px solid transparent;

}

`;
export const Register= styled.button`
label:Register;
color: ${theme.white};
font-size: 1rem;
background:${theme.primary};
border: 1px solid ${theme.white};
padding: 1rem 3rem;
border-radius:5px;
cursor:pointer;
transition: all 0.3s ease-in-out;

:hover{
    color: ${theme.white};
background:transparent;
}
`;
