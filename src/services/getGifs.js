const apiKey = "AvZ5Ir9KotueqyFssMAuY0SrCFl5NNoq";

//como parametro recibe un objeto, si no recibe un objeto el
//valor por defecto es un objeto vacio
//y si el objeto no contiene el keyword lo pone por defecto como giles
export default function getGifs({ keyword = "bird" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifs = data.map(image => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
