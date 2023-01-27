import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Design, FooterWrapper, Li, Span, Ul } from "./styles";
import { faClock, faDashboard, faGasPump, faMapMarker, faTShirt } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <FooterWrapper>
        <div className="container">
        <div>
            <Span>Copyright © 2023 Your Company | Design: </Span>
            <Design>Fateh Achouri</Design>
        </div>
        <div>
            <Ul>
                <Li>
                    <FontAwesomeIcon  icon={faClock}/>
                </Li>
                <Li>
                    <FontAwesomeIcon  icon={faTShirt}/>
                </Li>
                <Li>
                    <FontAwesomeIcon  icon={faGasPump}/>
                </Li>
                <Li>
                    <FontAwesomeIcon  icon={faMapMarker}/>
                </Li>
                <Li>
                    <FontAwesomeIcon  icon={faDashboard}/>
                </Li>
            </Ul>
        </div>
        </div>
        </FooterWrapper>
  )
}
