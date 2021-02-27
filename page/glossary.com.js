(function() {
  var com_name, conf;

  com_name = "Page_glossary";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "Что в проекте?"
      }, (function(_this) {
        return function() {
          return div({
            style: {
              whiteSpace: "pre-wrap",
              textAlign: "left",
              paddingLeft: 100,
              lineHeight: "30px"
            }
          }, function() {
            return table({
              style: {
                width: "100%"
              }
            }, function() {
              return tbody(function() {
                return tr(function() {
                  td({
                    style: {
                      width: "50%",
                      verticalAlign: "top"
                    }
                  }, "NFT\nДвижок для комиксов\nРедактор\n...\n???\n!!!\nPROFIT");
                  return td({
                    style: {
                      width: "50%",
                      verticalAlign: "top"
                    }
                  }, function() {
                    var section_offset;
                    section_offset = 20;
                    div("Что храним");
                    div({
                      style: {
                        paddingLeft: section_offset
                      }
                    }, function() {
                      return div("gzip(text)");
                    });
                    div({
                      style: {
                        height: 20
                      }
                    });
                    div("Отличия");
                    div({
                      style: {
                        paddingLeft: section_offset
                      }
                    }, function() {
                      div("mint может делать не только admin");
                      return div("пофикшена уязвимость maxrange soft lock");
                    });
                    div({
                      style: {
                        height: 20
                      }
                    });
                    div("Источники вдохновения");
                    return div({
                      style: {
                        paddingLeft: section_offset
                      }
                    }, function() {
                      div("База");
                      div(function() {
                        return a({
                          href: "https://github.com/tqtezos/smart-contracts"
                        }, "tqtezos/smart-contracts");
                      });
                      div(function() {
                        return a({
                          href: "https://github.com/truffle-box/tezos-example-box"
                        }, "truffle-box/tezos-example-box");
                      });
                      div({
                        style: {
                          height: 20
                        }
                      });
                      div("Отдельные рецепты для реализации");
                      return div(function() {
                        return a({
                          href: "https://github.com/madfish-solutions/quipuswap-core"
                        }, "madfish-solutions/quipuswap-core");
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

  define_com("Page_glossary", conf);

}).call(this);
