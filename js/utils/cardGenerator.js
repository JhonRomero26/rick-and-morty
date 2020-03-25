export const cardGenerator = object => {
  const card = document.createElement('article');
  card.classList.add('card')

  card.innerHTML = `
  <div class="card-image">
    <img class="img-fluid" src="${object.image}" alt="Rick and Morty">
    <span class="badge-top">${object.origin.name}</span>
  </div>
  <div class="card-body">
    <h3>${object.name}</h3>
    <p>${object.species}</p>
    <span class="${object.status}">${object.status}</span>
  </div>
  `;

  return card;
}