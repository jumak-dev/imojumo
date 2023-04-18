import { Link } from 'react-router-dom';
import styled from 'styled-components';

const dummyData = [
  { id: 0, path: '#', title: '독서토론' },
  { id: 1, path: '#', title: '미드나잇 라이브러리' },
  { id: 2, path: '#', title: '미드나잇 라이브러리' },
];

interface BreadcrumbItem {
  id: number;
  path: string;
  title: string;
}

// 현재 dummyData를 쓰기 위해 option으로 해 놓았지만 추후 제거할 예정
interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

function Breadcrumb({ items = dummyData }: BreadcrumbProps) {
  return (
    <Ol>
      {items.map((item, index) => (
        <li key={item.id}>
          {index !== items.length - 1 ? (
            <Link to={item.path}>{item.title}</Link>
          ) : (
            <div>{item.title}</div>
          )}
          {index < items.length - 1 && ' > '}
        </li>
      ))}
    </Ol>
  );
}

const Ol = styled.ol`
  display: flex;
  font-weight: 600;

  li + li {
    margin-left: 5px;
  }
`;

export default Breadcrumb;
