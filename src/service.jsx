const queryStrings = {
    app_id: import.meta.env.VITE_REACT_APP_APP_ID,
    app_key: import.meta.env.VITE_REACT_APP_APP_KEY,
  };
  
  export const fetchData = async (defaultQuery) => {
    const { app_id, app_key } = queryStrings;
  
    try {
      const data =
        await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}
      `);
      const response = await data.json();
      return response;
    } catch (e) {
      console.log("Something went wrong");
      return e;
    }
  };
  
  export const fetchTabData = async (defaultQuery) => {
    const { app_id, app_key } = queryStrings;
  
    try {
      const data =
        await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}
  
        `);
      const response = await data.json();
      return response;
    } catch (e) {
      console.log("Something went wrong");
      return e;
    }
  };