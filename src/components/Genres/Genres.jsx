import React from "react";
import styled from "../../style/genres.module.scss";
import { FiArrowRightCircle, FiHeart } from "react-icons/fi";

const genresDATA = [
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
  {
    genre: "Жанр",
    color: "#FFBB5A",
    icon: <FiHeart className={styled.icon} fontSize={35} color="white" />,
  },
];

const item = () =>
  genresDATA.map(({ genre, color, icon }, id) => (
    <div className={styled.item} key={id}>
      <div className={styled.genre}>
        <div className={styled.genre_icon} style={{ backgroundColor: color }}>
          {icon}
        </div>
        <h3 className={styled.genre_name}>{genre}</h3>
      </div>
      <FiArrowRightCircle fontSize={20} color="white" />
    </div>
  ));
const Genres = () => {
  return (
    <div className={styled.genres}>
      <h2 className={styled.title}>Жанры</h2>
      <div className={styled.inner}>{item()}</div>
    </div>
  );
};

export default Genres;
