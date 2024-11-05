const baseURL = 'https://430ayesddh.execute-api.ap-south-1.amazonaws.com/dev'; 

async function getAuthToken(username, password) {
  const tokenEndpoint = `${baseURL}/auth/token`;
  const data = {
    grant_type: 'password',
    client_id: 'client-id',       
    client_secret: 'client-secret', 
    username: username,
    password: password
  };

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }

    const tokenData = await response.json();
    console.log("Token Data:", tokenData);
    return tokenData;  
  } catch (error) {
    console.error("Error fetching token:", error);
  }
}

