const getHouses = async () => {
  const url = 'http://localhost:3001/api/v1/houses';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const results = await fetch(url, options);
    const houses = await results.json();
    return houses;
  } catch (error) {
    throw error.message;
  }
};


export default getHouses;