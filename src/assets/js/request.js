import config from '../../../config';

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2tleSI6ImMyOGM2OTI0YTg4ZDQxOWQ5MmVkZmQ3ZjgxNzg5MmQ2IiwiZXhwIjoxNTE1NjQwMTc3fQ.2oPDY6_fDuWdYhx9J2kwWnS94F_rD567xXeCEi3XyqM';

//封装fetch
function sendRequest(url,customOptions){
  let self = this;
  let defaultOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'GoldToken': token
    }
  };

  let options = Object.assign({},defaultOptions,customOptions);

  // build body data
  if(options['method'] != 'GET') {
    options.body = JSON.stringify(options.data);
  }

  return fetch(config.goldHost + url, options)
        .then(response => response.json())
        .then(json => {
          return json
        })
        .catch(err =>{
          console.log('err:',err);
        })

}

export default {
  getBanner(){
    let url = '/pro/v1/consultant';
    return sendRequest(url);
  }
}