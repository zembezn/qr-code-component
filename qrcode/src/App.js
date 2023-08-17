import qrimage from "./images/image-qr-code.png";
import GlobalStyles from "./Components/Styled/GlobalStyle";
import { Container } from "./Components/Styled/Container.styled";



function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
      <img src={qrimage} alt="qr code" />
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </Container>


    </>
  );
}

export default App;
