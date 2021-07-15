import { Password } from './password';

const passwords: Password[] = [
  {
    username: 'admin',
    password: 'admin',
  },
];

export function checkPassword(p: Password): Promise<Password[]> {
  const isTrue = typeof passwords.find((pass) => pass.username === p.username && pass.password === p.password) !== 'undefined';
  if (!isTrue) {
    return Promise.reject(new Error('Wrong password!!!!!!!!!!!!!'));
  }
  return Promise.resolve<Password[]>(passwords);
}

// export function updateItem(password: Item): Promise<Item> {
//   const itemIndex = i.findIndex((it) => it.name.toLowerCase() === item.name.toLowerCase());
//   if (itemIndex < 0) {
//     return Promise.reject(new Error('Item not found'));
//   }
//   const existsItem = items.splice(itemIndex, 1)[0];
//   const newItem: Item = {
//     ...existsItem,
//     ...item,
//   };
//   items.push(newItem);
//   return Promise.resolve(newItem);
// }

// export function deleteItem(name: string): Promise<void> {
//   const index = items.findIndex((it) => it.name.toLowerCase() === name.toLowerCase());
//   if (index < 0) {
//     Promise.reject(new Error('Item not found.'));
//   }
//   items.splice(index, 1);
//   return Promise.resolve();
// }
