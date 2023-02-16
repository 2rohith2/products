import { APIData } from '../../products';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './index.scss';

import {
  Breadcrumb,
  Carousel,
  Input,
  Modal,
  Pagination,
  Skeleton,
  Tooltip
} from 'antd';

type Props = {
  apiData: APIData | undefined;
  isLoading: boolean;
  isSearchEnable: boolean;
  skip: number;
  searchTerm: string;
  limit: number;
  setSkip: (skip: number) => void;
  setSearchTerm: (searchTerm: string) => void;
  setLimit: (limit: number) => void;
  fetchData: (skip: number, limit: number, searchTerm: string) => void;
};

export default function ProductsComponents({
  apiData,
  isLoading,
  skip,
  searchTerm,
  limit,
  isSearchEnable,
  setSkip,
  setSearchTerm,
  setLimit,
  fetchData
}: Props): JSX.Element {
  const { Search } = Input;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categoryId } = useParams();
  const [productInfo, setProductInfo] = useState<{
    title: string;
    images: string[];
  }>({
    title: '',
    images: []
  });

  function showProducts(apiData: APIData): JSX.Element {
    const products = apiData.products;

    if (products.length === 0) {
      return (
        <div className='no-records'>
          No data found
          {searchTerm ? ` for the search criteria - "${searchTerm}"` : ''}
        </div>
      );
    }

    const productDetails = products.map((product) => {
      const discount = (product.price / 100) * product.discountPercentage;
      const discountedPrice = (product.price - discount).toFixed(2);

      return (
        <article key={product.id}>
          <div
            className='product'
            onClickCapture={() => {
              setProductInfo({
                title: product.title,
                images: product.images
              });
            }}>
            <img loading='lazy' src={product.thumbnail} alt='' />
            <section>
              <div className='flex-column'>
                <div className='info-container'>
                  <div>{product.brand}</div>
                  <div className='title'>{product.title}</div>
                </div>
                <Tooltip placement='bottom' title={product.description}>
                  <div className='description'>{product.description}</div>
                </Tooltip>
                <div className='price-container'>
                  <div className='price'>$ {discountedPrice}</div>
                  <div className='original-price'>$ {product.price}</div>
                  <div className='discount-price'>
                    ({Math.round(product.discountPercentage)}% off)
                  </div>
                </div>
                <div>You save $ {Math.ceil(discount)}</div>
              </div>
            </section>
          </div>
        </article>
      );
    });

    return <div className='products'>{productDetails}</div>;
  }

  useEffect(() => {
    productInfo.images.length !== 0 && setIsModalOpen(true);
  }, [productInfo]);

  return (
    <main>
      <div className='products-page'>
        <header>
          <div className='header'>
            <h1>Products</h1>
            <div>
              {isSearchEnable && (
                <Search
                  placeholder='Search products by name'
                  allowClear
                  enterButton
                  onSearch={(value) => {
                    setSearchTerm(value);
                    setLimit(10);
                    setSkip(1);
                    fetchData(1, 10, value);
                  }}
                />
              )}
            </div>
          </div>
        </header>
        <nav>
          <div className='nav'>
            {!isSearchEnable && (
              <Breadcrumb>
                <Breadcrumb.Item>
                  <NavLink to='/' className='to-category'>
                    Home
                  </NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to='/categories' className='to-category'>
                    Categories
                  </NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{categoryId}</Breadcrumb.Item>
              </Breadcrumb>
            )}
            {isSearchEnable && (
              <Breadcrumb>
                <Breadcrumb.Item>
                  <NavLink to='/' className='to-category'>
                    Home
                  </NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
              </Breadcrumb>
            )}
          </div>
        </nav>
        {isLoading && (
          <section>
            <Skeleton
              paragraph={{
                rows: 4
              }}
              active
            />
          </section>
        )}

        {!isLoading && apiData && (
          <section>
            <section>{showProducts(apiData)}</section>
            <footer>
              <div className='pagination'>
                <Pagination
                  defaultCurrent={skip}
                  defaultPageSize={limit}
                  total={apiData.total}
                  onChange={(skip, limit) => {
                    setSkip(skip);
                    setLimit(limit);
                    fetchData(skip, limit, searchTerm);
                  }}
                />
              </div>
            </footer>
          </section>
        )}
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        title={`${productInfo.title} Photos`}>
        <figure>
          <Carousel pauseOnDotsHover autoplay className='my-carousel'>
            {productInfo.images.map((image, index) => (
              <img loading='lazy' key={index} src={image} />
            ))}
          </Carousel>
        </figure>
      </Modal>
    </main>
  );
}
