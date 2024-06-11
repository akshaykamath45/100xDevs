import "./App.css";

function App() {
  return (
    <>
      <div>Wrapper components</div>
      <WrapperComponent innerComponent={<TextComponent />}></WrapperComponent>
    </>
  );

  function TextComponent() {
    return <div>hi i am learning about wrapper components</div>;
  }
  function WrapperComponent({ innerComponent }) {
    return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
  }
}

export default App;
