export const creatNote = (title, body) => {
  return fetch('http://localhost:7891/api/v1/notes', {
    methos: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => {
      if(!res.ok) throw 'Could not';

      return res.json();
    });
};
