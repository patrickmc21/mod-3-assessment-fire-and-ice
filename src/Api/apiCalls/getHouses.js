const getHouses = async () => {
  const url = 'http://localhost:3001/api/v1/houses';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const results = await fetch(url, options);
  const houses = await results.json();
  return houses;
};


export default getHouses;