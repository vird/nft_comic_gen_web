(function() {
  var com_name, conf, __iced_k, __iced_k_noop;

  __iced_k = __iced_k_noop = function() {};

  com_name = "Page_editor";

  conf = React.createClass(CKR.react_key_map(com_name, {
    state: {
      width: 720,
      script_text: "\"Первый день хакатона\"\n\nPANEL\nLucy happy SAYS \"Пишите в треде, как прошла ночь\"\n\nPANEL\nstephen SAYS TO SELF \"Что-бы такого рассказать\"\n\nPANEL\nETH SAYS \"даже не знаю чувак\"\nTEZ sad SAYS \"вообще как-то скучно ночь прошла\"\n\nPANEL\nUNISWAP happy SAYS \"У-и-и-и-и\"\nnarrator says \"Еще 4M$ fee за день\"\n\nPANEL\nATOMEX SAYS \"Я всю ночь работал\"\nQUIPUSWAP SAYS \"Я всю ночь готовился\"\nDEXTER busted mouth SAYS \"Я всю ночь отдыхал\"\n\nPANEL\nSERUM\nOPENSEA SAYS \"А кто мы вообще такие?\"\n\nPANEL\nDYNAMOKYIV SAYS \"Я вообще не знаю, что я здесь делаю\"\nTHANOS busted mouth SAYS \"А я вообще устареть успел как логотип\"\n      ",
      publish_in_progress: false
    },
    mount: function() {
      return ev.on("wallet_connect", this.handler = (function(_this) {
        return function() {
          return _this.force_update();
        };
      })(this));
    },
    unmount: function() {
      return ev.off("wallet_connect", this.handler);
    },
    publish: function() {
      var ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      this.set_state({
        publish_in_progress: true
      });
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral
          });
          _this._publish(__iced_deferrals.defer({
            lineno: 13
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return _this.set_state({
            publish_in_progress: false
          });
        };
      })(this));
    },
    _publish: function(on_end) {
      var buf, comic, err, metadata, op, owners, token_def, token_id_offset, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      comic = {
        width: this.state.width,
        script_text: this.state.script_text
      };
      buf = comic_encode(comic);
      token_id_offset = storage.assets.metadata.next_token_id.toNumber();
      token_def = {
        from_: token_id_offset,
        to_: token_id_offset + 1
      };
      metadata = {
        token_id: token_id_offset,
        token_info: taquito.MichelsonMap.fromLiteral({
          "content": uint8_array2hex(buf)
        })
      };
      owners = [wallet_address];
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral
          });
          contract.methods.mint_tokens(token_def.from_, token_def.to_, metadata.token_id, metadata.token_info, owners).send().cb(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return op = arguments[1];
              };
            })(),
            lineno: 35
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          if (err) {
            return on_end(err);
          }
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral
            });
            op.confirmation().cb(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return err = arguments[0];
                };
              })(),
              lineno: 36
            }));
            __iced_deferrals._fulfill();
          })(function() {
            if (err) {
              return on_end(err);
            }
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral
              });
              contract_storage_refresh(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return err = arguments[0];
                  };
                })(),
                lineno: 37
              }));
              __iced_deferrals._fulfill();
            })(function() {
              if (err) {
                return on_end(err);
              }
              return on_end();
            });
          });
        };
      })(this));
    },
    render: function() {
      return Page_wrap({
        com: this,
        title: "Editor"
      }, (function(_this) {
        return function() {
          div({
            style: {
              color: theme.GRAY_OPT,
              fontSize: 20
            }
          }, function() {
            span("Для справки по движку ");
            return a({
              href: "http://www.kesiev.com/stripthis/stripthis/comic-studio.html"
            }, "http://www.kesiev.com/stripthis/stripthis/comic-studio.html");
          });
          return div({
            style: {
              textAlign: "left",
              lineHeight: "30px"
            }
          }, function() {
            return table(function() {
              return tbody(function() {
                return tr(function() {
                  td({
                    style: {
                      verticalAlign: "top"
                    }
                  }, function() {
                    span("width ");
                    Number_input(bind2(_this, "width"));
                    div({
                      style: {
                        border: "1px solid black"
                      }
                    }, function() {
                      return Extended_textarea(bind2(_this, "script_text"));
                    });
                    return div({
                      style: {
                        width: "100%",
                        paddingTop: 20
                      }
                    }, function() {
                      var comic, res;
                      comic = {
                        width: _this.state.width,
                        script_text: _this.state.script_text
                      };
                      res = comic_encode(comic);
                      div({
                        style: {
                          textAlign: "center"
                        }
                      }, "publish size : " + res.length);
                      if (!window.wallet) {
                        return Button({
                          label: "Connect wallet",
                          on_click: function() {
                            return wallet_connect();
                          },
                          style: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                          }
                        });
                      } else {
                        if (_this.state.publish_in_progress) {
                          return Spinner({});
                        } else {
                          return Button({
                            label: "Publish as " + wallet_address,
                            style: {
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto"
                            },
                            on_click: function() {
                              return _this.publish();
                            }
                          });
                        }
                      }
                    });
                  });
                  return td({
                    style: {
                      verticalAlign: "top"
                    }
                  }, function() {
                    return div({
                      style: {
                        width: "100%",
                        paddingTop: 20
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
                  });
                });
              });
            });
          });
        };
      })(this));
    }
  }));

  define_com("Page_editor", conf);

}).call(this);
