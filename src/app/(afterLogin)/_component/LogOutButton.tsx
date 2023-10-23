"use client";

import style from "@/app/(afterLogin)/layout.module.css";

export default function LogoutButton() {
  const me = {
    id: "runningwater",
    nickname: "runningwater",
    image:
      "https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg",
  };

  const onLogout = () => {};
  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me?.image} alt={me?.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me?.nickname}</div>
        <div className="">@{me?.id}</div>
      </div>
    </button>
  );
}
