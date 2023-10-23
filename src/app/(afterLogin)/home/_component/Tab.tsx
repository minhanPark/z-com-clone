"use client";

import { useContext } from "react";
import style from "./tab.module.css";
import { TabContext } from "./TabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);
  const handleClick = () => {
    setTab(tab === "rec" ? "fol" : "rec");
  };
  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div className="" onClick={handleClick}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div className="" onClick={handleClick}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
