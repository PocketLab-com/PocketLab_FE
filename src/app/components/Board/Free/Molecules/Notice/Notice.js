import styles from "./Notice.module.css"

export default function Notice() {
  return (
    <section className={styles.noticeSection}>
      <h2 className={styles.noticeTitle}>이용안내</h2>
      <p className={styles.noticeContent}>이용안내</p>
    </section>
  )
}