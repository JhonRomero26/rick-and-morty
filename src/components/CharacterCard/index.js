import "./styles.css";

/**
 * Generates a CharacterCard component with the given properties.
 *
 * @param {object} props - The properties for the CharacterCard component.
 * @param {string} props.image - The URL of the image for the card.
 * @param {string} props.name - The name of the character.
 * @param {string} props.species - The species of the character.
 * @param {string} props.origin - The origin of the character.
 * @param {string} props.status - The status of the character.
 */
export function CharacterCard({ image, name, species, origin, status }) {
  this.card = document.createElement("article");
  this.card.classList.add("card");

  this.card.innerHTML = `
  <div class="card-image">
    <img loading="lazy" class="img-fluid" src="${image}" alt="imagen de ${name}">
    <span class="badge-top">${origin}</span>
  </div>
  <div class="card-body">
    <h3 class="card-title">${name}</h3>
    <p>${species}</p>
    <span class="${status.toLowerCase()}">${status}</span>
  </div>
  `;
}

/**
 * Render the character card to a specified root element.
 *
 * @param {HTMLElement} root - The root element to append the character card to.
 * @return {void}
 */
CharacterCard.prototype.render = function (root) {
  root.appendChild(this.card);
};
