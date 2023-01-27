import { FormWrapper } from "../RegisterHere/styles";
import { ContactWrapper, DownloadNow, Have,  Input,  InputWrapper,  P,  Question, SendNow, Textarea, Wrapper } from "./styles";

export default function ContactUs() {
  return (
    <ContactWrapper>
      <div className="container">
        <Wrapper>
        <div style={{width:"50%"}}>
        <div style={{textAlign:"center" }}>
        <Have>New</Have>
        <Question>Event</Question> 
    </div>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum id corrupti maiores non doloribus labore et vero nesciunt numquam eligendi consequuntur, laborum porro similique fugit ullam eaque saepe asperiores voluptatibus.</P>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum id orrupti maiores non doloribus labore et vero nesciunt numquam eligendi consequuntur </P>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum id orrupti maiores non doloribus labore et vero nesciunt numquam eligendi consequuntur </P>
     <DownloadNow>
     Download Now
     </DownloadNow>
        </div>
        <FormWrapper style={{background:"white",padding: "6rem",borderRadius:"13%"}}>

        <div style={{textAlign:"center" }}>
        <Have>Keep</Have>
        <Question>In Touche</Question> 
        </div>

        <form >
          <InputWrapper>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message"></Textarea>
          </InputWrapper>
          <div>
            <SendNow>Send Now</SendNow>
          </div>
        </form>
        </FormWrapper>
        </Wrapper>
      </div>
      </ContactWrapper>
  )
}
