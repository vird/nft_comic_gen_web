(function() {
  var com_name, conf, __iced_k, __iced_k_noop;

  __iced_k = __iced_k_noop = function() {};

  com_name = "Page_explorer";

  conf = React.createClass(CKR.react_key_map(com_name, {
    state: {
      selected_comic_idx: -1,
      selected_comic: null,
      load_in_progress: false,
      id2title_hash: {}
    },
    mount: function() {
      ev.on("storage_load", this.handler = (function(_this) {
        return function() {
          _this.force_update();
          return _this.title_refresh();
        };
      })(this));
      this.title_refresh();
      return this.comic_select(0);
    },
    unmount: function() {
      return ev.off("storage_load", this.handler);
    },
    title_refresh: function() {
      var content, content_arr, content_json, def, encoded, err, k, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          var _i, _len, _ref, _ref1, _results, _while;
          _ref = ((_ref1 = window.storage) != null ? _ref1.assets.metadata.token_defs : void 0) || [];
          _len = _ref.length;
          k = 0;
          _while = function(__iced_k) {
            var _break, _continue, _next;
            _break = __iced_k;
            _continue = function() {
              return iced.trampoline(function() {
                ++k;
                return _while(__iced_k);
              });
            };
            _next = _continue;
            if (!(k < _len)) {
              return _break();
            } else {
              def = _ref[k];
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral
                });
                window.storage.assets.metadata.metadata.get(def).cb(__iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      err = arguments[0];
                      return encoded = arguments[1];
                    };
                  })(),
                  lineno: 18
                }));
                __iced_deferrals._fulfill();
              })(function() {
                content = encoded.token_info.get("content");
                content_arr = hex2uint8_array(content);
                try {
                  content_json = comic_decode(content_arr);
                  _this.state.id2title_hash[k] = content_json.script_text.split("\n")[0];
                  _this.force_update();
                } catch (_error) {
                  err = _error;
                  perr(err);
                }
                return _next();
              });
            }
          };
          _while(__iced_k);
        });
      })(this)((function(_this) {
        return function() {};
      })(this));
    },
    comic_select: function(idx) {
      var content, content_arr, content_json, def, encoded, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      this.set_state({
        selected_comic_idx: idx,
        load_in_progress: true
      });
      def = window.storage.assets.metadata.token_defs[idx];
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral
          });
          window.storage.assets.metadata.metadata.get(def).cb(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return encoded = arguments[1];
              };
            })(),
            lineno: 33
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          if (err) {
            perr(err);
          } else {
            content = encoded.token_info.get("content");
            content_arr = hex2uint8_array(content);
            try {
              content_json = comic_decode(content_arr);
              _this.set_state({
                selected_comic: content_json
              });
            } catch (_error) {
              err = _error;
              perr(err);
              _this.set_state({
                selected_comic: {
                  width: 700,
                  script_text: "\"Something wrong\"\n\nPANEL with light openspace and office\nLucy busted starving mouth SAYS TO SELF \"...\"\n"
                }
              });
            }
          }
          return _this.set_state({
            load_in_progress: false
          });
        };
      })(this));
    },
    render: function() {
      return Page_wrap({
        com: this,
        title: "Explorer"
      }, (function(_this) {
        return function() {
          var comic_count, _ref;
          comic_count = ((_ref = window.storage) != null ? _ref.assets.metadata.token_defs.length : void 0) || 0;
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
                  span("Total comics deployed : " + comic_count);
                  return table({
                    "class": "table",
                    style: {
                      width: "100%"
                    }
                  }, function() {
                    return tbody(function() {
                      var is_selected, k, v, _i, _len, _ref1, _ref2, _results;
                      _ref2 = ((_ref1 = window.storage) != null ? _ref1.assets.metadata.token_defs : void 0) || [];
                      _results = [];
                      for (k = _i = 0, _len = _ref2.length; _i < _len; k = ++_i) {
                        v = _ref2[k];
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
                            }, _this.state.id2title_hash[k] || k);
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

  define_com("Page_explorer", conf);

}).call(this);
