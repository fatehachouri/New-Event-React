import Slider from "./Slider";
import { Creative, CreativeSpeakersWrapper, P, SliderWrapper, Speakers } from "./styles";

export default function CreativeSpeakersComponent() {
  return (
    <CreativeSpeakersWrapper>
      <div className="container">
        <div>
          <Creative>Creative</Creative>
          <Speakers>Speakers</Speakers> 
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. </P>
        </div>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
      </div>
    </CreativeSpeakersWrapper>
  )
}
