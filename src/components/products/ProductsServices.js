
export const getProducts = async () => {
    const response = await fetch('https://api-harley-davidson.herokuapp.com/modelos')
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    const data = await response.json()
    console.log("🚀 ~ file: ProductsServices.js ~ line 8 ~ getProducts ~ data", data)
    return data
  };