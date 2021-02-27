(function() {
  var com_name, conf;

  com_name = "Page_wtf";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "whitepaper madness"
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
            div("Работаем как DreamTeam");
            div({
              style: {
                paddingLeft: section_offset
              }
            }, function() {
              div("Сначала собираем ICO");
              return div("Потом уже ищем техдира и начинаем делать реализацию");
            });
            div("like/dislike пока нет, но можно выставить токены на продажу как в ICO");
            return div("challenge'ы хакатона. \"Не з’їм, так понадкусую\"");
          });
        };
      })(this));
    }
  }));

  define_com("Page_wtf", conf);

}).call(this);
