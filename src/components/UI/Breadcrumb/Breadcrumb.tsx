import { useId } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const dummyData = [
  { path: '#', title: '독서토론' },
  { path: '#', title: '미드나잇 라이브러리' },
  { path: '#', title: '미드나잇 라이브러리' },
];

interface BreadcrumbItem {
  path: string;
  title: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

function Breadcrumb({ items = dummyData }: BreadcrumbProps) {
  return (
    <Ol>
      {items.map((item, index) => (
        <li key={useId()}>
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

export default Breadcrumb;

const Ol = styled.ol`
  display: flex;
  font-weight: 600;

  li + li {
    margin-left: 5px;
  }
`;
