const apiRequest = async (url = '', optionsObj= null, errMsg = '') => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Error: ' + response.statusText);
  } catch(err){
    errMsg = err.message ;
  } finally {
    return errMsg;
  }
}

export default apiRequest;