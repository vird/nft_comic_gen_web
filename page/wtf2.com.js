(function() {
  var com_name, conf;

  com_name = "Page_wtf2";

  conf = React.createClass(CKR.react_key_map(com_name, {
    state: {
      selected_comic_idx: -1,
      selected_comic: null
    },
    mount: function() {
      return this.comic_select(0);
    },
    comic_select: function(idx) {
      return this.set_state({
        selected_comic_idx: idx,
        selected_comic: wtf_list[idx]
      });
    },
    render: function() {
      return Page_wrap({
        com: this,
        title: "whitepaper madness"
      }, (function(_this) {
        return function() {
          return table({
            style: {
              width: "100%"
            }
          }, function() {
            return tbody(function() {
              return tr(function() {
                td({
                  style: {
                    width: 300,
                    verticalAlign: "top"
                  }
                }, function() {
                  return table({
                    "class": "table",
                    style: {
                      width: "100%"
                    }
                  }, function() {
                    return tbody(function() {
                      var is_selected, k, v, _i, _len, _results;
                      _results = [];
                      for (k = _i = 0, _len = wtf_list.length; _i < _len; k = ++_i) {
                        v = wtf_list[k];
                        is_selected = _this.state.selected_comic_idx === k;
                        _results.push((function(k, v) {
                          return tr({
                            style: {
                              cursor: "pointer"
                            },
                            on_click: function() {
                              return _this.comic_select(k);
                            }
                          }, function() {
                            return td({
                              style: {
                                fontWeight: is_selected ? "bold" : null
                              }
                            }, v.title);
                          });
                        })(k, v));
                      }
                      return _results;
                    });
                  });
                });
                return td({
                  style: {
                    verticalAlign: "top"
                  }
                }, function() {
                  if (_this.state.load_in_progress) {
                    return Spinner({});
                  } else if (_this.state.selected_comic) {
                    return div({
                      style: {
                        width: "100%",
                        paddingTop: 20
                      }
                    }, function() {
                      return div({
                        style: {
                          width: _this.state.selected_comic.width,
                          marginLeft: "auto",
                          marginRight: "auto"
                        }
                      }, function() {
                        return Comic_render({
                          value: _this.state.selected_comic.script_text
                        });
                      });
                    });
                  }
                });
              });
            });
          });
        };
      })(this));
    }
  }));

  define_com("Page_wtf2", conf);

}).call(this);
