const getResourse = async (url) => {
  const res = await fetch(url);

  if (!res.ok) { // в случае ошибки функция не сработает
    throw new Error(`получена ошибка, ${res.status}`)
  }
  const body = await res.json();
  return body;
};

getResourse('https://swapi.co/api/people/a1/')
  .then((body) => {
    console.log(body); 
  })
  .catch((err) => {
    console.log('Ошибка', err);
  });

// fetch('https://swapi.co/api/people/1/')
//   .then((res) => {
//     console.log('Ответ сервера', res.status);
//     return res.json(); //для того чтобы получить тело ответа
//   })
//   .then((body) => {  // начинаем работать с телом ответа
//     console.log(body); 
//   });