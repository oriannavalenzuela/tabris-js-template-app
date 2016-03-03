var googleResize = 'http://images1-focus-opensocial.googleusercontent.com/gadgets/proxy';
var weservResize = 'https://images.weserv.nl/';


function resizeImageURLByWidth(url, width){
  if(!url || url.length === 0 ){
    return url;
  }

  // return googleResize+'?url='+encodeURIComponent(url)+'&resize_w='+ ( tabris.device.get("screenWidth") * tabris.device.get("scaleFactor") ) +'&container=focus';

  var newUrl;
  if(url.indexOf('https://') === 0){
    newUrl = url.slice(8);
  }
  else if(url.indexOf('http://') === 0){
    newUrl = url.slice(7);
  }
  return weservResize+'?url='+encodeURIComponent(newUrl)+'&w='+ ( tabris.device.get("screenWidth") * tabris.device.get("scaleFactor") );
}

//handlers = {
//  google : function(url, actualWidth){
//    return googleResize+'?url='+encodeURIComponent(url)+'&resize_w='+ ( actualWidth ) +'&container=focus';
//  }
//}


module.exports = {
  resizeImageURLByWidth: resizeImageURLByWidth
};
