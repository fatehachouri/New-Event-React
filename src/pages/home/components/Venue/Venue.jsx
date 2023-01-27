import { P, Span, Title, VenueWrapper } from "./styles";

export default function Venue() {
  return (
    <VenueWrapper>
        <div className="container">
            <Title>Venue</Title>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et totam, voluptatum nam, optio deserunt enim, autem consequuntur debitis non facere minima ab beatae tenetur dignissimos architecto eligendi maxime earum sunt.</P>
        <Span>New Event</Span>
        <Span>120 Market Street, Suite 110</Span>
        <Span>San Francisco, CA 10110</Span>
        <Span>Tel: 010-020-0120</Span>
        </div>
    </VenueWrapper>
  )
}
