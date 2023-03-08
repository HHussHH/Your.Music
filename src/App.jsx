import styled from "./style/home.module.scss";

function App() {
  return (
    <div className={styled.home}>
      <div className={styled.panel}></div>
      <h1 className={styled.company}>Твоя.Музыка</h1>
      <div className={styled.container}>
        <input type="text" placeholder="Поиск" className={styled.search} />
      </div>
    </div>
  );
}

export default App;
