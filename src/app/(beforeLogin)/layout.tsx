import styles from "./page.module.css";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3000 일 때 children -> page.tsx, modal -> @modal/default
// 모달을 사용 하지 않을 때 보여줄게 없어서 default를 만들어준 것
// 주소가 localhost:3000/i/flow/login 일 때 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/signup/page
