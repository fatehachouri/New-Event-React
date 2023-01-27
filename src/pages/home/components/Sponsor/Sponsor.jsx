import OurSponsor from "../../../../design-system/components/OurSponsor/OurSponsor";
import OurSponsorData from "../../../../design-system/components/OurSponsor/OurSponsorData";
import { Have, P, Question, SponsorWrapper, Wrapper } from "./styles";

export default function Sponsor() {
  return (
    <SponsorWrapper>
      <div className="container">
      <div style={{textAlign:"center" }}>
        <Have>Our</Have>
        <Question>Sponsors</Question> 
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. </P>
    </div>
    <Wrapper>
      {OurSponsorData.map(item=>{
        return <OurSponsor key={item.id} {...item} />
      })}
      
    </Wrapper>
      </div>
    </SponsorWrapper>
  )
}
