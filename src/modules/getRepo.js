
export const getRepo = async (request) => {

  let search = encodeURIComponent(request);

  let res = await fetch(`https://api.github.com/search/repositories?q=${request}&per_page=1`);
  let data = await res.json();

  let arrData = data.items;

  console.log(arrData);
};
