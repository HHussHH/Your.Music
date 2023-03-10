import styled from "../../style/input.module.scss";
import { ImSearch } from "react-icons/im";
const Input = () => {
  return (
    <div className={styled.form}>
      <ImSearch color="#b3b1b1" size={16} className={styled.logo} />
      <input type="text" placeholder="Поиск" className={styled.search} />
    </div>
  );
};

export default Input;
