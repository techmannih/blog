import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My Blog</h1>
      <div className={styles.post}>
        <h2>Post Title</h2>
        <p>Post content...</p>
        <Image
          src="/image.jpg"
          alt="Post image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
