(function() {
  var com_name, conf;

  com_name = "Page_wrap";

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
            return Page_nav({
              com: _this.props.com
            });
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
                paddingTop: 100,
                display: "table-cell",
                textAlign: "center"
              }
            }, function() {
              div({
                style: {
                  fontSize: 50
                }
              }, _this.props.title);
              return _this.props.children;
            });
          });
        };
      })(this));
    }
  }));

  define_com("Page_wrap", conf);

}).call(this);
