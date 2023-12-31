import useFadeIn from "./hooks/useFadeIn";

function App() {
  const h1 = useFadeIn();
  return (
    <div className="App">
      <h1 {...h1}>Hi</h1>
    </div>
  );
}

export default App;
