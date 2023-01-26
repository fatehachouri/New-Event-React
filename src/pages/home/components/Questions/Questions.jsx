import Accordion from "./Accordion";
import { Have, P, Question, QuestionsWrapper } from "./styles";

export default function Questions() {
  return (
    <QuestionsWrapper>
    <div className="container">
      <div>
        <Have>Do You Have</Have>
        <Question>Questions</Question> 
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. </P>
    </div>
    <Accordion />
    </div>
  </QuestionsWrapper>
  )
}
