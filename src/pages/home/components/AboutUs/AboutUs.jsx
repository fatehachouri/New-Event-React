import { AboutUsWrapper, Div, DivT, P, Span } from "./styles";
import about from "../../../../shared/assets/imags/overview-img.jpg"
export default function AboutUs() {
  return (
    <div className="container">
        <AboutUsWrapper>
<Div>
    <Span>Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.</Span>
    <P>Find quick answers to your questions and get the most out of Font Awesome with our step-by-step docs and troubleshooting tips.</P>
    <P>We've gathered some of our most frequently asked questions and links to help answer any questions you may have below.</P>
</Div>
<DivT>
    <img width="100%" src={about} alt="about"/>
</DivT>

        </AboutUsWrapper>
        
        </div>
  )
}
