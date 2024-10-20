const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     hello: "Hello World",
    },
    actions: {
      hello: async () => {
        console.log(import.meta.env.VITE_API_URL);
        const response = await fetch(import.meta.env.VITE_API_URL + "/api/hello");
        if (!response.ok) {
          return false;
        }
        const data = await response.json();
        console.log(data);
        return data;
      },
      getUsers: async () => {
        const response = await fetch(import.meta.env.VITE_API_URL + "/api/users", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        return data;
      },
    },
    
  }
}

export default getState;
