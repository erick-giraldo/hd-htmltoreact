
export const getProducts = async () => {
    const response = await fetch('http://172.159.10.180:3001/modelos')
    //const response = await fetch('http://190.42.196.211:3001/modelos')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    const data = await response.json()
    return data
  };