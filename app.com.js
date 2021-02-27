(function() {
  var com_name, conf;

  com_name = "App";

  conf = React.createClass(CKR.react_key_map(com_name, {
    state: {
      width: 720,
      script_text: "\"Первый день хакатона\"\n\nPANEL\nLucy happy SAYS \"Пишите в треде, как прошла ночь\"\n\nPANEL\nstephen SAYS TO SELF \"Что-бы такого рассказать\"\n\nPANEL\nETH SAYS \"даже не знаю чувак\"\nTEZ sad SAYS \"вообще как-то скучно ночь прошла\"\n\nPANEL\nUNISWAP happy SAYS \"У-и-и-и-и\"\nnarrator says \"Еще 4M$ fee за день\"\n\nPANEL\nATOMEX SAYS \"Я всю ночь работал\"\nQUIPUSWAP SAYS \"Я всю ночь готовился\"\nDEXTER busted mouth SAYS \"Я всю ночь отдыхал\"\n\nPANEL\nSERUM\nOPENSEA SAYS \"А кто мы вообще такие?\"\n\nPANEL\nDYNAMOKYIV SAYS \"Я вообще не знаю, что я здесь делаю\"\nTHANOS busted mouth SAYS \"А я вообще устареть успел как логотип\""
    },
    render: function() {
      return div((function(_this) {
        return function() {
          span("width ");
          Number_input(bind2(_this, "width"));
          div({}, function() {
            return Textarea(bind2(_this, "script_text", {
              style: {
                width: 900,
                height: 300
              }
            }));
          });
          return div({
            style: {
              background: "#f2f4f8",
              padding: 20
            }
          }, function() {
            return div({
              style: {
                width: _this.state.width,
                marginLeft: "auto",
                marginRight: "auto"
              }
            }, function() {
              return Comic_render({
                value: _this.state.script_text
              });
            });
          });
        };
      })(this));
    }
  }));

  define_com("App", conf);

}).call(this);
