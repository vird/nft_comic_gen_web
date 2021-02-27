(function() {
  var com_name, conf;

  com_name = "Page_links";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "Links"
      }, (function(_this) {
        return function() {
          return div({
            style: {
              textAlign: "left",
              paddingLeft: 100,
              lineHeight: "30px"
            }
          }, function() {
            var section_offset;
            section_offset = 20;
            return table(function() {
              return tbody(function() {
                tr(function() {
                  td("source");
                  return td(function() {
                    return a({
                      href: "https://github.com/vird/nft_comic_gen"
                    }, "https://github.com/vird/nft_comic_gen");
                  });
                });
                return tr(function() {
                  td("потрогать");
                  return td(a({
                    href: "https://vird.github.io/nft_comic_gen_web/"
                  }, "https://vird.github.io/nft_comic_gen_web/"));
                });
              });
            });
          });
        };
      })(this));
    }
  }));

  define_com("Page_links", conf);

}).call(this);
