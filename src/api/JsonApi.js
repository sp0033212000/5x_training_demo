const JsonApi = () => {};
JsonApi.prototype = {
  ...JsonApi.prototype,
  ...{
    get: async url => {
      let data = null;
      try {
        data = await fetch(`https://jsonplaceholder.typicode.com${url}`, {
          method: "GET",
          headers: { "Access-Control-Allow-Origin": "*" }
        }).then(res => res.json());
      } catch (error) {
        //handle error
        console.error(error.message);
      }
      return data;
    }
  }
};

export default new JsonApi();
