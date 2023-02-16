import { useEffect, useState } from 'react';
import CategoryComponent from './components/category';

export default function CategoryContainer(): JSX.Element {
  const [category, setCategory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData() {
    try {
      const API_URL = 'https://dummyjson.com/products/categories';
      setIsLoading(true);
      const response = await (await fetch(API_URL)).json();
      setCategory(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <CategoryComponent category={category} isLoading={isLoading} />;
}
