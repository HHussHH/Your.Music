import CurrentPage from "./Pages/CurrentPage";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Input from "./components/Input/Input";
import NavPanel from "./components/NavPanel/NavPanel";

import styled from "./style/home.module.scss";

function App() {
  return (
    <div className={styled.home}>
      <NavPanel />
      <h1 className={styled.company}>Твоя.Музыка</h1>
      <div className={styled.container}>
        <Input />
        <CurrentPage />
      </div>
      <AudioPlayer />
    </div>
  );
}

export default App;
