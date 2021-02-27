(function() {
  window.hex2uint8_array = function(hex) {
    var list;
    list = hex.match(/.{1,2}/g).map(function(byte) {
      return parseInt(byte, 16);
    });
    return new Uint8Array(list);
  };

  window.uint8_array2hex = function(buffer) {
    return Array.prototype.map.call(buffer, function(x) {
      return ("00" + x.toString(16)).slice(-2);
    }).join("");
  };

  window.comic_encode = function(json) {
    var str;
    str = JSON.stringify(json);
    return pako.gzip(str);
  };

  window.comic_decode = function(gzip_uint_array) {
    var json, uint_array;
    uint_array = pako.ungzip(gzip_uint_array);
    json = new TextDecoder().decode(uint_array);
    return JSON.parse(json);
  };

}).call(this);
