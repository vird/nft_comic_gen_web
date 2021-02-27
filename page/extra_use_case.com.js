(function() {
  var com_name, conf;

  com_name = "Page_extra_use_case";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return Page_wrap({
        com: this,
        title: "Extra use case"
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
            div("Продвигать свой проект на платформе для комиксов");
            div("Выпускать whitepaper'ы в комиксах еще до того как есть реализация");
            div({
              style: {
                paddingLeft: section_offset
              }
            }, function() {
              return div("Привет ICO");
            });
            div("Написать комикс-инструкцию на существующий смарт-контракт и получать аффилиатные бонусы");
            div({
              style: {
                paddingLeft: section_offset
              }
            }, function() {
              div("Такого еще в экосистеме криптовалют, кажется, не было");
              return div("Хотя если бы finematics за деньги делал обзоры...");
            });
            return div("Представьте что пользователи eth лезут в dapp на tezos чтобы узнать про то как работают новые проекты на eth");
          });
        };
      })(this));
    }
  }));

  define_com("Page_extra_use_case", conf);

}).call(this);
