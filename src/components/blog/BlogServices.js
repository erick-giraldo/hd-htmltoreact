
export const getPost = async () => {
    const response = await fetch('https://api-harley-davidson.herokuapp.com/posts')
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    const data = await response.json()
    return data
  };