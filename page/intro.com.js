(function() {
  var com_name, conf;

  com_name = "Page_intro";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return div({
        style: {
          height: "100%",
          width: "100%"
        }
      }, (function(_this) {
        return function() {
          div({
            style: {
              marginBottom: -50
            }
          }, function() {
            Page_nav({
              com: _this
            });
            return div({
              style: {
                color: theme.GRAY_OPT,
                fontSize: 20
              }
            }, "для навигации используйте alt+стрелочки или панель вверху");
          });
          return div({
            style: {
              display: "table",
              height: "100%",
              width: "100%"
            }
          }, function() {
            return div({
              style: {
                display: "table-cell",
                verticalAlign: "middle",
                textAlign: "center"
              }
            }, function() {
              div({
                style: {
                  fontSize: 100
                }
              }, "Дичь");
              div({
                style: {
                  color: theme.GRAY_OPT,
                  fontSize: 20
                }
              }, "Теперь с комиксами");
              return div({
                style: {
                  paddingTop: 20,
                  fontSize: 30
                }
              }, "Изначальная идея: интерактивные комиксы с use case'ами для смарт контрактов");
            });
          });
        };
      })(this));
    }
  }));

  define_com("Page_intro", conf);

}).call(this);
