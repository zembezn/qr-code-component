import qrimage from "./images/image-qr-code.png";



function App() {
  return (
    <div className="App">
      <>
      <img src={qrimage} alt="" width={300} height={300} />
      </>
      <p>
        <h1>Improve your front-end skills by building projects</h1>
        <h4>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h4>
      </p>

    </div>
  );
}

export default App;
