import style from "@/app/(afterLogin)/_component/trend.module.css";
import Link from "next/link";

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <div className={style.count}>실시간 트렌드</div>
      <div className={style.title}>러닝워터</div>
      <div className={style.count}>1,524 posts</div>
    </Link>
  );
}
