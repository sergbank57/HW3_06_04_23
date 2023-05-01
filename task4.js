
const movies = [
    {
      name: 'Кавказская пленница',
      year: 1967
    },
    {
      name: 'Бриллиантовая рука',
      year: 1968
    },
    {
      name: 'Джентльмены удачи',
      year: 1971
    },
    {
      name: 'Иван Васильевич меняет профессию',
      year: 1973
    },
   
  ];
  
  const list = document.createElement('ul');
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const item = document.createElement('li');
    item.textContent = `${movie.name} (${movie.year})`;
    list.appendChild(item);
  }
  
  document.body.appendChild(list);
  