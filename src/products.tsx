import ProductsComponents from './components/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  thumbnail: string;
  images: string[];
};

export type APIData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export default function ProductsContainer(): JSX.Element {
  const [apiData, setAPIData] = useState<APIData>();
  const [skip, setSkip] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchEnable, setIsSearchEnable] = useState<boolean>(true);
  const { categoryId } = useParams();

  const selectedFields =
    'title,description,price,discountPercentage,brand,thumbnail,images';

  async function fetchData(skip: number, limit: number, searchTerm: string) {
    try {
      const skipNumbers = (skip - 1) * limit;

      const API_URL = (function name() {
        if (categoryId) {
          setIsSearchEnable(false);
          return `https://dummyjson.com/products/category/${categoryId}?skip=${skipNumbers}&limit=${limit}&select=${selectedFields}`;
        } else {
          return `https://dummyjson.com/products/search?q=${searchTerm}&skip=${skipNumbers}&limit=${limit}&select=${selectedFields}`;
        }
      })();
      setIsLoading(true);
      const response = await (await fetch(API_URL)).json();
      setAPIData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(skip, limit, searchTerm);
  }, []);

  return (
    <ProductsComponents
      isSearchEnable={isSearchEnable}
      apiData={apiData}
      isLoading={isLoading}
      skip={skip}
      setSkip={setSkip}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      limit={limit}
      setLimit={setLimit}
      fetchData={fetchData}
    />
  );
}
