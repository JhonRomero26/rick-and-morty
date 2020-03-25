const cardsContent = document.getElementById('cards-content');

const API = 'https://rickandmortyapi.com/api/character/';
const maxPageForAPI = 25;
const apiPage = '?page=:page';
const characters = [];

const getDataRickAndMorty = async (page) => {
  try {
      const { results } = await fetchData(`${API}${apiPage.replace(':page', `${page}`)}`)
      results.map(character => {
        const card = cardGenerator(character);
        cardsContent.appendChild(card);
      });
  } catch (error) {
    console.error(error);
  }
}

(function() {
  for (let i = 1; i <= maxPageForAPI; i++) {
    getDataRickAndMorty(i);
  }
})();