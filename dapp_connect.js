(function() {
  var err, network, node_url, __iced_deferrals, __iced_k, __iced_k_noop;

  __iced_k = __iced_k_noop = function() {};

  if (localStorage.use_prod || /github\.io/.test(location.hostname)) {
    node_url = "https://api.tez.ie/rpc/delphinet";
    network = beacon.NetworkType.DELPHINET;
    window.contract_address = "KT1Jj8pCZ6YWCG14EoAUVTVCuDH2R3smKt1X";
  } else {
    node_url = "http://" + location.hostname + ":8732";
    network = beacon.NetworkType.DELPHINET;
    window.contract_address = "KT1LpYunv2yDapf1yYMPKGm3o3NNp6KMdyiK";
  }

  window.Tezos = new taquito.TezosToolkit(node_url);

  window.ev = new Event_mixin;

  window.contract_refresh = function(on_end) {
    var contract, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          funcname: "contract_refresh"
        });
        Tezos.wallet.at(contract_address).cb(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              err = arguments[0];
              return contract = arguments[1];
            };
          })(),
          lineno: 15
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        if (err) {
          return on_end(err);
        }
        window.contract = contract;
        ev.dispatch("contract_load");
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            funcname: "contract_refresh"
          });
          contract_storage_refresh(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 19
          }));
          __iced_deferrals._fulfill();
        })(function() {
          if (err) {
            return on_end(err);
          }
          return on_end();
        });
      };
    })(this));
  };

  window.contract_storage_refresh = function(on_end) {
    var err, storage, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          funcname: "contract_storage_refresh"
        });
        contract.storage().cb(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              err = arguments[0];
              return storage = arguments[1];
            };
          })(),
          lineno: 23
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        if (err) {
          return on_end(err);
        }
        window.storage = storage;
        ev.dispatch("storage_load");
        return on_end();
      };
    })(this));
  };

  (function(_this) {
    return (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {});
      contract_refresh(__iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return err = arguments[0];
          };
        })(),
        lineno: 29
      }));
      __iced_deferrals._fulfill();
    });
  })(this)((function(_this) {
    return function() {
      if (err) {
        throw err;
      }
      window.wallet = null;
      window.wallet_address = null;
      return window.wallet_connect = function() {
        var err, opt, user_address, wallet, ___iced_passed_deferral, __iced_deferrals, __iced_k;
        __iced_k = __iced_k_noop;
        ___iced_passed_deferral = iced.findDeferral(arguments);
        opt = {
          name: "NFT + комиксы",
          preferredNetwork: network,
          disableDefaultEvents: true,
          eventHandlers: {}
        };
        opt.eventHandlers[beacon.BeaconEvent.PAIR_INIT] = {
          handler: beacon.defaultEventCallbacks.PAIR_INIT
        };
        opt.eventHandlers[beacon.BeaconEvent.PAIR_SUCCESS] = {
          handler: (function(_this) {
            return function(data) {
              ev.dispatch("wallet_public_token");
              return puts(data.publicKey);
            };
          })(this)
        };
        wallet = new BeaconWallet(opt);
        Tezos.setWalletProvider(wallet);
        opt = {
          network: {
            type: network,
            rpcUrl: node_url
          }
        };
        (function(_this) {
          return (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              funcname: "wallet_connect"
            });
            wallet.requestPermissions(opt).cb(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return err = arguments[0];
                };
              })(),
              lineno: 59
            }));
            __iced_deferrals._fulfill();
          });
        })(this)((function(_this) {
          return function() {
            if (err) {
              throw err;
            }
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                funcname: "wallet_connect"
              });
              wallet.getPKH().cb(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    err = arguments[0];
                    return user_address = arguments[1];
                  };
                })(),
                lineno: 60
              }));
              __iced_deferrals._fulfill();
            })(function() {
              if (err) {
                throw err;
              }
              window.wallet = wallet;
              window.wallet_address = user_address;
              return ev.dispatch("wallet_connect");
            });
          };
        })(this));
      };
    };
  })(this));

}).call(this);
