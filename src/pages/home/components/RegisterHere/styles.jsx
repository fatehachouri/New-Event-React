import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import register from "../../../../shared/assets/imags/register-bg.jpg"

export const RegisterHereWrapper= styled.section`
label:RegisterHereWrapper;
background-size:cover;
background-repeat:no-repeat;
background: url(${register}) fixed;
height:450px;
padding: 4rem 0 2rem 0;


`;
export const Title= styled.span`
label:Title;
color:${theme.white};
font-size:2rem;
padding-right:0.3rem;
`;
export const ColoredTitle= styled.span`
label:ColoredTitle;
color:${theme.primary};
font-size:2rem;

`;
export const Text= styled.p`
label:Text;
color:${theme.white};
font-size:1.5rem;

`;
export const RegisterContainer= styled.div`
label:RegisterContainer;
display:flex;
justify-content:space-between;
align-items:flex-start;

`;
export const TextTWO= styled.p`
label:TextTWO;
color:${theme.gray};

`;
export const FormWrapper= styled.div`
label:FormWrapper;
display:flex;
flex-direction:column;
gap: 1rem;
`;
export const RegisterInput= styled.input`
label:FormWrapper;
padding: 0.6rem;
border-radius:5px;
color:${theme.white};

background-color:transparent;
border: 2px solid ${theme.white};
::placeholder{
    font-size:1rem;
}
`;

export const RegisterButton= styled.button`
label:RegisterButton;
text-align:right;
color: ${theme.white};
font-size: 1rem;
background:${theme.primary};
border: 1px solid ${theme.white};
padding: 1rem 3rem;
border-radius:25px;
cursor:pointer;
transition: all 0.3s ease-in-out;
margin-top:2rem;

:hover{
    color: ${theme.white};
background:transparent;
}
`;
