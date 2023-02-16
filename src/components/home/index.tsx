import { NavLink } from 'react-router-dom';
import { DropboxOutlined, ProfileOutlined } from '@ant-design/icons';
import './index.scss';

export default function HomeComponent(): JSX.Element {
  return (
    <main>
      <div className='home-page'>
        <nav>
          <NavLink to='/products' className='labels color-1'>
            <div className='icon'>
              <DropboxOutlined />
            </div>
            <h1 className='description'>Explore all the products</h1>
          </NavLink>
        </nav>
        <nav>
          <NavLink to='/categories' className='labels color-2'>
            <div className='icon'>
              <ProfileOutlined />
            </div>
            <h1 className='description'>Explore products by categories</h1>
          </NavLink>
        </nav>
      </div>
    </main>
  );
}
