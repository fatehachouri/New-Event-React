import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import contact from "../../../../shared/assets/imags/contact-bg.jpg"

export const ContactWrapper= styled.section`
label:ContactWrapper;
height:600px;
padding: 4rem 0 2rem 0;
background-size:cover;
background-repeat:no-repeat;
background: url(${contact}) fixed;
`;
export const Wrapper= styled.div`
label:Wrapper;
display:flex;
align-items:center;
justify-content:flex-start;
gap:1rem;
`;
export const Have= styled.span`
label:Have;
color: ${theme.primary};
font-size:2.3rem;
padding-right:0.5rem;
`;
export const Question= styled.span`
label:Question;
color: ${theme.secondary};
font-size:2.3rem;
padding-right:1rem;
`;
export const P= styled.p`
label:P;
color: ${theme.gray};
display:block;
width:80%;
line-height:1.1;
`;
export const DownloadNow= styled.button`
label:DownloadNow;
text-align:right;
color: ${theme.white};
font-size: 1rem;
background:${theme.primary};
border: 1px solid ${theme.white};
padding: 1rem 3rem;
margin-top: 1rem;
border-radius:25px;
cursor:pointer;
transition: all 0.3s ease-in-out;
margin-top:2rem;

:hover{
    color: ${theme.white};
background:${theme.black};
}
`;
export const FormWrapper= styled.div`
label:FormWrapper;
background-color: white;
border-radius:13%;
padding: 6rem;
`;
export const InputWrapper= styled.div`
label:InputWrapper;
display:flex;
flex-direction:column;
gap:1rem;
margin-top:3rem
`;
export const Input= styled.input`
label:Input;
background: ${theme.white};
outline:none;
border:none;
font-size:1.2rem;
`;
export const Textarea = styled.textarea`
label:Textarea ;
background: ${theme.white};
outline:none;
border:none;
resize:none;
font-size:1.2rem;

`;
export const SendNow= styled.button`
label:SendNow;
text-align:right;
color: ${theme.white};
font-size: 1rem;
background:${theme.primary};
border: 1px solid ${theme.white};
padding: 1rem 3rem;
margin-top: 3rem;
border-radius:25px;
cursor:pointer;
transition: all 0.3s ease-in-out;
margin-top:2rem;

:hover{
    color: ${theme.white};
background:${theme.black};
}
`;