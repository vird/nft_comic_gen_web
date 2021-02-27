(function() {
  var com_name, conf;

  com_name = "Page_south_africa";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "ЮАР"
      }, (function(_this) {
        return function() {
          return div({
            style: {
              textAlign: "left",
              paddingLeft: 100,
              paddingRight: 100,
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
                  }, function() {
                    img({
                      src: "img/south_africa_comics.jpg",
                      style: {
                        display: "block",
                        width: "600",
                        objectFit: "cover",
                        marginLeft: "auto",
                        marginRight: "auto"
                      }
                    });
                    return div({
                      style: {
                        textAlign: "center"
                      }
                    }, function() {
                      span("Подробнее ");
                      return a({
                        href: "https://adv-simfi.ru/dogovor-komiks.html"
                      }, "https://adv-simfi.ru/dogovor-komiks.html");
                    });
                  });
                  return td({
                    style: {
                      width: "50%",
                      verticalAlign: "top",
                      paddingLeft: 50
                    }
                  }, function() {
                    var section_offset;
                    section_offset = 20;
                    div("История");
                    div({
                      style: {
                        paddingLeft: section_offset
                      }
                    }, function() {
                      div("2014 Первая идея");
                      return div("2016 Первая реализация");
                    });
                    div("Почему работает");
                    div({
                      style: {
                        paddingLeft: section_offset
                      }
                    }, function() {
                      div("В ЮАР 10 разных языков");
                      return div("Малограммотное население");
                    });
                    div("Для DeFi. \"Просто объясните по-нормальному как работает ваш проект и мы вложим деньги\"");
                    return div({
                      style: {
                        paddingLeft: section_offset
                      }
                    }, function() {
                      return div("Хотя бы как у finematics");
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

  define_com("Page_south_africa", conf);

}).call(this);
