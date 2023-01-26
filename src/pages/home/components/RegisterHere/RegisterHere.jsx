import { ColoredTitle, FormWrapper, RegisterButton, RegisterContainer, RegisterHereWrapper, RegisterInput, Text, TextTWO, Title } from "./styles";

export default function RegisterHere() {
  return (
    <RegisterHereWrapper>
<div className="container">
    <RegisterContainer>
        <div style={{width:"60%"}}>
    <Title>Register</Title>
    <ColoredTitle>Here</ColoredTitle>
    <Text>Find quick answers to your questions and get the most out of Font Awesome with our step-by-step docs and troubleshooting tips.</Text>
    <TextTWO>Find quick answers to your questions and get the most out of Font Awesome with our step-by-step docs and troubleshooting tips.</TextTWO>
        </div>
    <FormWrapper style={{width:"35%"}}>
    <RegisterInput type="text" placeholder="First Name"/>
    <RegisterInput type="text" placeholder="Last Name"/>
    <RegisterInput type="number" placeholder="Phone Number"/>
    <RegisterInput type="email" placeholder="Email Address" />
    </FormWrapper>
    </RegisterContainer>
    <div style={{textAlign:"right"}}>
    <RegisterButton>Register</RegisterButton>
    </div>
    </div>        
    </RegisterHereWrapper>
  )
}
