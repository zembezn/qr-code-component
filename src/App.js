import qrimage from "./images/image-qr-code.png";
import GlobalStyles from "./Components/Styled/GlobalStyle";
import { Card } from "./Components/Styled/Card.styled";



function App() {
  return (
    <>
      <GlobalStyles />
      
      <Card>
      <img src={qrimage} alt="qr code" />
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </Card>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/zembezn?tab=repositories">Kanya Zembe</a>.
      </div>
    </>
  );
}

export default App;
