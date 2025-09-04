import "./App.css";

function App() {
  const webSock = new WebSocket("ws://localhost:3000/api/v1/ws");
  webSock.onopen = (m) => {
    console.log("Conected");
    webSock.send(
      JSON.stringify({
        type: "subscribe",
        payload: { gateId: "gate_1" },
      })
    );
  };

  webSock.onmessage = (message) => {
    let x = JSON.parse(message.data);
    console.log(x.payload);
  };

  return <></>;
}

export default App;
