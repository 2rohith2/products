import { Breadcrumb, Skeleton } from 'antd';
import { CodeSandboxOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import './index.scss';

export default function CategoryComponent({
  category,
  isLoading
}: {
  category: string[];
  isLoading: boolean;
}): JSX.Element {
  return (
    <main>
      <div className='category-page'>
        <header>
          <h1 className='header'>Product categories</h1>
        </header>
        <nav>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to='/' className='to-category'>
                Home
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Categories</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
        {isLoading && (
          <section>
            <Skeleton.Node active={isLoading}>
              <CodeSandboxOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
            </Skeleton.Node>
            <br />
            <br />
            <Skeleton.Node active={isLoading}>
              <CodeSandboxOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
            </Skeleton.Node>
            <br />
            <br />
            <Skeleton.Node active={isLoading}>
              <CodeSandboxOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
            </Skeleton.Node>
          </section>
        )}
        {!isLoading && (
          <section>
            <div className='categories'>
              {category.map((aCategory, index) => (
                <NavLink
                  className={`category color-${index % 4}`}
                  key={index}
                  to={`/category/${aCategory}`}>
                  {aCategory}
                </NavLink>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
