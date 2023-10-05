import { CharacterCard } from "./components/CharacterCard";
import { getCharacters } from "./services/characters";

const $cardsContent = document.getElementById("cards-content");
const $contentInfinteReference = document.getElementById(
  "content-infinte-reference"
);
let page = 1;

const nextPageLoad = async (page) => {
  const { results } = await getCharacters({ query: { page } });
  return results;
};

document.addEventListener("DOMContentLoaded", async () => {
  const charactersRes = await getCharacters({ page });
  const characters = charactersRes.results;

  characters.map(({ name, origin, status, image, species }) => {
    new CharacterCard({
      name,
      origin: origin.name,
      status,
      image,
      species,
    }).render($cardsContent);
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        if (page > charactersRes.info.pages) observer.disconnect();

        page++;
        nextPageLoad(page)
          .then((res) => {
            res.map(({ name, origin, status, image, species }) => {
              new CharacterCard({
                name,
                origin: origin.name,
                status,
                image,
                species,
              }).render($cardsContent);
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    { rootMargin: "180px" }
  );
  observer.observe($contentInfinteReference);
});
