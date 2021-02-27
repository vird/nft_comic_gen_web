(function() {
  var com_name, conf;

  com_name = "Page_todo_links";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "Afterparty todo list + links"
      }, (function(_this) {
        return function() {
          return div({
            style: {
              textAlign: "left",
              paddingLeft: 100,
              lineHeight: "30px"
            }
          }, function() {
            return tbody(function() {
              return tr(function() {
                td({
                  style: {
                    width: "50%",
                    verticalAlign: "top"
                  }
                }, function() {
                  var section_offset;
                  section_offset = 20;
                  div("like/dislike");
                  div("Удаление плагиата (уже есть, но можно лучше)");
                  div("Средство от front-running'а");
                  div({
                    style: {
                      paddingLeft: section_offset
                    }
                  }, function() {
                    div("2-ступенчатая схема публикации");
                    div("Сначала залог + hash");
                    div("Потом контент и возвращается залог");
                    return div("Если не опубликовал - твой залог сгорает");
                  });
                  div({
                    style: {
                      height: 20
                    }
                  });
                  div("Доп функциональность NFT");
                  return div({
                    style: {
                      paddingLeft: section_offset
                    }
                  }, function() {
                    div("Донаты автору");
                    return div("Донаты правообладателю");
                  });
                });
                return td({
                  style: {
                    width: "50%",
                    verticalAlign: "top"
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
              });
            });
          });
        };
      })(this));
    }
  }));

  define_com("Page_todo_links", conf);

}).call(this);
