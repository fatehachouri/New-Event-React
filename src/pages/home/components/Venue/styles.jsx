import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import venue from "../../../../shared/assets/imags/venue-bg.jpg"

export const VenueWrapper= styled.section`
label:VenueWrapper;
height:400px;
padding: 4rem 0 2rem 0;
background-size:cover;
background-repeat:no-repeat;
background: url(${venue}) fixed;
`;
export const Title= styled.h2`
label:Title;
color:${theme.primary};
font-size: 2rem;
font-weight: bold;

`;
export const P= styled.p`
label:P;
color:${theme.gray};
font-size: 1rem;
margin-bottom:2rem;
display:block;
width:400px;
line-height:1.5;
`;
export const Span= styled.span`
label:Span;
display:block;
color:${theme.black};
font-weight: bold;
font-size: 1rem;
padding: 0.5rem 0
display:block;
width:400px;
`;

