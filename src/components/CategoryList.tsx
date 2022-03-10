import { Category } from '../interface/Category.interface'
import CategoryCard from './CategoryCard';

interface Props{
  categories: Category[];
}

export default function CategoryList({categories}:Props) {
  return (
    <>
    {categories.map((category) =>(
      <div className='col-md-8'>
        <CategoryCard category={category}></CategoryCard>
      </div>
    ))}
    </>
  );
}