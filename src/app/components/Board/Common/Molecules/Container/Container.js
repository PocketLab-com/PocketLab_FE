import ContainerStyle from './Container.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function Container() {
  return (
    <div className={ContainerStyle.container}>
      <Button className={ContainerStyle.button}>이전 글</Button>
      <Button className={ContainerStyle.button}>목록</Button>
      <Button className={ContainerStyle.button}>다음 글</Button>
    </div>
  );
}