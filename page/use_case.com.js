(function() {
  var com_name, conf;

  com_name = "Page_use_case";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "Use case"
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
            div("Хранилище комиксов + App для декодирования и просмотра");
            div({
              style: {
                paddingLeft: section_offset
              }
            }, function() {
              return div("Почти как любой другой сайт с комиксами, только децентрализованный");
            });
            div("Коллекционные карточки-комиксы для Динамо-Киев");
            div({
              style: {
                paddingLeft: section_offset
              }
            }, function() {
              return div("Почти так же тупо как криптокотики (потому может работать)");
            });
            return div("И еще один интересный вариант");
          });
        };
      })(this));
    }
  }));

  define_com("Page_use_case", conf);

}).call(this);
