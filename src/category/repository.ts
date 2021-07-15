import { Category } from './category';
import { db } from '../myDatabase';

const categories: Category[] = [
  {
    id: 1,
    name: 'First category',
    description: 'test',
  },
  {
    id: 2,
    name: 'Second category',
  },
];

const arrCat = db.get('categories') as Array<[]>;

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categories);
}

export function getCategoryById(categoryId: number): Promise<[]> {
  console.log(arrCat);
  return Promise.resolve(arrCat[categoryId]);
}

export function createCategory(category: Category): Promise<Category> {
  const isExist = typeof categories.find((cat) => cat.name.toLowerCase() === category.name.toLowerCase()) !== 'undefined';

  if (isExist) {
    return Promise.reject(new Error(`Category with name ${category.name} is already exists`));
  }

  const id = categories.length + 1;
  const model = { ...category, id };
  categories.push(model);
  return Promise.resolve(model);
}

export function deleteCategory(id: number): Promise<void> {
  if (Number(id) < 0) {
    Promise.reject(new Error('Category not found'));
  }
  arrCat.splice(id, 1);
  db.set('categories', arrCat);
  console.log(arrCat);
  return Promise.resolve();
}
