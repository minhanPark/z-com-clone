"use client";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import styles from "../page.module.css";

export default function Login() {
  // return이나 이런걸 사용하지 않고 그냥 redirect를 사용하면 된다.
  // 이게 서버 컴포넌트라서 가능한 것 같다.
  // redirect("/i/flow/login");
  // 서버 컴포넌트에서는 저렇게 리다이렉트

  const router = useRouter();
  router.replace("/i/flow/login");
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
