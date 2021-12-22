const apiRequest = async (url = '', optionsObj = null, err = null) => {
     try {
          const response = await fetch(url, optionsObj);
          if (!response.ok) throw Error('Could not fetch data.');
     } catch (e) {
          err = e;
     } finally {
          return err;
     }
};

export default apiRequest;
