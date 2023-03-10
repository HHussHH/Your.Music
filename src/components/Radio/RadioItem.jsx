import React from "react";
import styled from "../../style/radio.module.scss";
import {
  BsSoundwave,
  BsFillEmojiHeartEyesFill,
  BsFillMoonStarsFill,
  BsChatDots,
} from "react-icons/bs";
const cat = [
  {
    color: "#3AAE67",
    name: "Моя волна",
    icon: <BsSoundwave size={150} color="#fff" />,
  },
  {
    color: "#E43C31",
    name: "Новое",
    icon: <BsFillEmojiHeartEyesFill size={100} color="#fff" />,
  },
  {
    color: "#6FC3E0",
    name: "Отдыхаю",
    icon: <BsFillMoonStarsFill size={100} color="#fff" />,
  },
  {
    color: "#FD9060",
    name: "Работаю",
    icon: <BsChatDots size={100} color="#fff" />,
  },
];
const RadioItem = () => {
  return (
    <div className={styled.category}>
      {cat.map(({ color, name, icon }) => {
        return (
          <div key={name}>
            <div className={styled.circle} style={{ backgroundColor: color }}>
              <div className={styled.icon}>{icon}</div>
            </div>
            <h2 className={styled.name}>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RadioItem;
