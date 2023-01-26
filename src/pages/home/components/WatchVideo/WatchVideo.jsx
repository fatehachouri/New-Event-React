import { Div, DivT, P, Span, SubTitle, WatchVideoWrapper } from "./styles";

export default function WatchVideo() {
  return (
    <div className="container">
        <WatchVideoWrapper>
<Div>
    <Span>WATCH VIDEO</Span>
    <SubTitle>Find quick answers to your questions and get the most out of Font Awesome with our step-by-step docs and troubleshooting tips.</SubTitle>
    <P>We've gathered some of our most frequently asked questions and links to help answer any questions you may have below.</P>
</Div>
<DivT>
<iframe width="560" height="315" src="https://www.youtube.com/embed/XDPwXQjAlB0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</DivT>

        </WatchVideoWrapper>
        
        </div>
  )
}
