const getSwornMember = async (memberId) => {
  const url = `http://localhost:3001/api/v1/character/${memberId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const results = await fetch(url, options);
    const member = await results.json();
    return member;
  } catch (error) {
    throw error.message;
  }
};

export default getSwornMember;