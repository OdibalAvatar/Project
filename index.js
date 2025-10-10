export default {
  async fetch(request, env, ctx) {
     let headersObject = Object.fromEntries(request.headers);
     let requestHeaders = JSON.stringify(headersObject, null, 2);
     let headerData = JSON.parse(requestHeaders);
     let email = headerData['cf-access-authenticated-user-email'];     
     let country = headerData['cf-ipcountry'];
     let lowerCountry = country.toLowerCase();
     let countryHTML = `<a href=https://tunnel.neoak.io/secure/${lowerCountry}.png>${country}</a>`;
     let now = new Date();
     
     let HTMLResponse = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cloudflare Project for Jeremy Simmerman</title>
      </head>
      <body>
        <p>${email} authenticated at ${now} from ${countryHTML}</p>
      </body>
      </html>
    `;

    return new Response(HTMLResponse, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },

    
    //return new Response (newResponse, env, ctx);
  //},

};
