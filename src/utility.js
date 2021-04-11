export const client = (endpoint, customConfig = {}) => {
  const config = {
    method: 'GET',
    ...customConfig
  };
  return window
    .fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, config)
    .then(async res => {
      const data = await res.json();
      if (!res.ok) {
        return Promise.reject(data);
      }
      return data;
    });
};
