const URL =
  'https://contextualwebsearch-search-image-v1.p.mashape.com/api/Search/ImageSearchAPI?autocorrect=true&count=1&q=';

/** 
 * Example Shape of Response
 * Documentation https://market.mashape.com/contextualwebsearch/search-image
 * {
  "_type": "images",
  "value": [
    {
      "url": "https://hothardware.com/ContentImages/NewsItem/45726/content/small_ferrari_monza_sp1_2.jpg",
      "height": 412,
      "width": 626,
      "thumbnail": "https://contextualwebsearch.com/api/thumbnail/get?value=6524397467786117019",
      "thumbnailHeight": 206,
      "thumbnailWidth": 313,
      "base64Encoding": null
    }
  ]
}
*/

/**
 *
 * @param {string} productName the name of the product to search
 */
export async function fetchImage(productName) {
  let image = null;
  try {
    const res = await fetch(URL + productName, {
      headers: {
        'X-Mashape-Key': 'xKLRwcj89HmshVwnd2mKr2BPS2p3p1LYQiCjsnn7gBvwperwmw',
        Accept: 'application/json'
      }
    });
    const data = await res.json();
    image = {
      image: data.value[0].url,
      thumbnail: data.value[0].thumbnail
    };
  } catch (error) {
  } finally {
    return image;
  }
}
