(function() {
  var com_name, conf;

  com_name = "App";

  conf = React.createClass(CKR.react_key_map(com_name, {
    mount: function() {
      var route, route_list, v, _i, _len;
      route_list = ["", "2", "explorer", "editor", "use_case", "south_africa", "extra_use_case", "todo_links", "wtf", "wtf2"];
      window.route2com_hash = {
        "": {
          com: "Page_intro",
          title: "Привет"
        },
        "2": {
          com: "Page_glossary",
          title: "Что в проекте"
        },
        "explorer": {
          com: "Page_explorer",
          title: "Explorer"
        },
        "editor": {
          com: "Page_editor",
          title: "Editor"
        },
        "use_case": {
          com: "Page_use_case",
          title: "Use case"
        },
        "south_africa": {
          com: "Page_south_africa",
          title: "ЮАР"
        },
        "extra_use_case": {
          com: "Page_extra_use_case",
          title: "Extra use case"
        },
        "todo_links": {
          com: "Page_todo_links",
          title: "TODO + Links"
        },
        "wtf": {
          com: "Page_wtf",
          title: "wtf"
        },
        "wtf2": {
          com: "Page_wtf2",
          title: "wtf2"
        }
      };
      window.map_hash = {};
      for (_i = 0, _len = route_list.length; _i < _len; _i++) {
        route = route_list[_i];
        v = route2com_hash[route];
        window.map_hash[v.com] = v.title;
      }
      return document.onkeydown = (function(_this) {
        return function(e) {
          var idx;
          switch (e.keyCode) {
            case Keymap.PAGEDOWN:
              e.preventDefault();
              idx = route_list.idx(_this.path);
              if ((route = route_list[idx + 1]) != null) {
                route_go(route);
              }
          }
          if (e.altKey) {
            switch (e.keyCode) {
              case Keymap.LEFT:
                e.preventDefault();
                idx = route_list.idx(_this.path);
                if ((route = route_list[idx - 1]) != null) {
                  route_go(route);
                }
                break;
              case Keymap.RIGHT:
                e.preventDefault();
                idx = route_list.idx(_this.path);
                if ((route = route_list[idx + 1]) != null) {
                  route_go(route);
                }
            }
          }
        };
      })(this);
    },
    render: function() {
      return Router_multi({
        render: (function(_this) {
          return function(hash) {
            var com, path, _ref;
            _this.path = path = ((_ref = hash[""]) != null ? _ref.path : void 0) || "";
            if (com = window.route2com_hash[path]) {
              return window[com.com]({});
            } else {
              return div("404");
            }
          };
        })(this)
      });
    }
  }));

  define_com("App", conf);

}).call(this);
