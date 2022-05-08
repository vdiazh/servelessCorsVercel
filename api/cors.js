
export default async function handler(request, response) {
  
  const https = require('https');
  
  console.log(request);
  
  let url = 'https://apple.com'
  //const {status, data} = await getRequest(decodeURIComponent(request.query.url));
  const {status, data} = await getRequest(decodeURIComponent(url));
  
  response.status(status).send(data);
  
  
  function getRequest(url) {
  
    return new Promise(resolve => {
      
      const req = https.get(url, (resp) => {
        
        let data = '';
        
        resp.on('data', (chunk) => {
          
          data += chunk;
          
        });
        
        resp.on('end', () => {
          
          resolve({status: resp.statusCode, data: data});
          
        });
        
      });
      
    });
    
  }
  
}