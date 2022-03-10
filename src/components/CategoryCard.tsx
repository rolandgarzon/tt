import { Category } from "../interface/Category.interface";

interface Props{
  category: Category;
}


export default function CategoryCard({category}: Props) {
  return (
    <div className="bg-secundary rounded-0 text-white">
       <div className=""><h2>{category.name}</h2></div>
   </div>
  );
}