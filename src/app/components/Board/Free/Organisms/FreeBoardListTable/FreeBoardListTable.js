import styles from './FreeBoardListTable.module.css';
import Notice from '@/app/components/Board/Free/Molecules/Notice/Notice';
import BoardTableHeader from '@/app/components/Board/Free/Molecules/BoardTableHeader/BoardTableHeader';
import BoardTableRow from '@/app/components/Board/Free/Molecules/BoardTableRow/BoardTableRow';

const dummyPosts = [
  { id: 1, title: '첫 번째 글', likes: 11, views: 123, author: '홍길동', createdAt: '2024-05-22' },
  { id: 2, title: '두 번째 글', likes: 8, views: 54, author: '김철수', createdAt: '2024-05-21' },
];

export default function BoardListTable() {
  return (
    <section className={styles.boardSection}>
      <Notice />
      <BoardTableHeader />
      <div className={styles.boardTable}>
        {dummyPosts.map(post => (
          <BoardTableRow key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}