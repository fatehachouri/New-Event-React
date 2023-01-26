import styled from "@emotion/styled";
import theme from "../../config";


export const OurProgramsWrapper= styled.div`
label:OurProgramsWrapper;
display: flex;
align-items: center;

gap: 3rem;

`;
export const Image= styled.img`
label:Image;
border-radius: 50%;
width:100%;
`;
export const ImageWrapper= styled.div`
label:ImageWrapper;
padding:2rem 0;

`;
export const IconWrapper= styled.div`
label:IconWrapper;
display: flex;
gap:2rem;
color:${theme.gray};
`;
export const Title= styled.h2`
label:Title;
color:${theme.gray};
margin:0.4rem;
`;
export const Name= styled.span`
label:Name;
color:${theme.gray}
font-size:0.9rem;
padding: 0.5rem 0;
display:block;
`;
export const P= styled.p`
label:P;
color:${theme.gray}
line-height:1.9;
`;
export const RoomNumber= styled.span`
label:RoomNumber;
padding-left:0.4rem;
`;
