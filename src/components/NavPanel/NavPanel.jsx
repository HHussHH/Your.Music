import React from "react";
import styled from "../../style/panel.module.scss";
import { IoLogoSlack } from "react-icons/io";
import { IoRadio } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiMusicSpell } from "react-icons/gi";
import { BiPodcast } from "react-icons/bi";
import { RiFolderMusicLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
const NavPanel = () => {
  return (
    <div className={styled.panel}>
      <div className={`${styled.item} ${styled.logo}`}>
        <IoLogoSlack color="white" size={30} />
      </div>
      <div className={styled.item}>
        <RxHamburgerMenu size={30} color="white" />
      </div>
      <div className={styled.music}>
        <div className={styled.item}>
          <GiMusicSpell color="white" size={30} />
        </div>
        <div className={styled.item}>
          <IoRadio color="white" size={30} />
        </div>
        <div className={styled.item}>
          <BiPodcast size={30} color="white" />
        </div>
      </div>
      <div className={styled.actions}>
        <div className={styled.item}>
          <RiFolderMusicLine size={30} color="white" />
        </div>
      </div>

      <div className={styled.info}>
        <div className={styled.item}>
          <AiOutlineSetting size={30} color="white" />
        </div>
        <div className={styled.item}>
          <CgProfile size={30} color="white" />
        </div>
      </div>
    </div>
  );
};

export default NavPanel;
