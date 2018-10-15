//https://market.mashape.com/mignify/product-intelligence
const URL = 'https://mignify.p.mashape.com/gtins/v1.0/productsToGtin?gtin=';

/**
 * Example 200 OK Response
{
  status: 'ok',
  payload: {
    results: [
      {
        productName:
          'Conjunto 2 Esferográficas, Marcador Fluorescente, Lapiseira Triplus Mobile Office',
        brand: null,
        languageCode: 'pt'
      },
      {
        productName:
          'Staedtler - Triplus Mobile Office 34 - Etui Chevalet Box 4 Stylos Assortis',
        brand: 'staedtler',
        languageCode: 'fr'
      }
    ],
    gtinType: 'ean13',
    gtinCode: '4007817340004'
  },
  tookMs: 230,
  message: null
}

* Example Invalid  Response
{
  "status": "error",
  "payload": null,
  "tookMs": 1,
  "message": "gtin not valid: 4218479"
}
**/

function getProductData(barcodeNumber = '42184799') {
  return fetch(URL + barcodeNumber, {
    headers: {
      'X-Mashape-Key': 'xKLRwcj89HmshVwnd2mKr2BPS2p3p1LYQiCjsnn7gBvwperwmw',
      Accept: 'application/json'
    }
  }).then(res => res.json());
}

const isErrorResponse = data => data.status === 'error';

function getEnglishResponse(data) {
    let product = null;
    if (!isErrorResponse(data)) {
        const products = data.payload.results;
        // if there is more than one language available
        if (products.length > 1) {
            const en = products.find(product => product.languageCode === 'en');
            product = en ? en : products[0];
        } else {
            product = products[0];
        }
    }
    return product;
}

export async function getProduct(barcodeNumber) {
    let productName = null;
    try {
        const data = await getProductData(barcodeNumber);
        const product = getEnglishResponse(data);
        productName = product.productName;
    } catch (error) {}
    finally {  return productName }
}