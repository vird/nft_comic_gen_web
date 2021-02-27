(function() {
  var com_name, conf;

  com_name = "Extended_textarea";

  conf = React.createClass(CKR.react_key_map(com_name, {
    render: function() {
      return div({
        style: this.props.style
      }, (function(_this) {
        return function() {
          return textarea({
            ref: "textarea"
          });
        };
      })(this));
    },
    mount_done: function() {
      var editor_options, keymap;
      keymap = clone(CodeMirror.keyMap.sublime);
      keymap = {};
      obj_set(keymap, {
        "Ctrl-Space": "autocomplete",
        "Ctrl-Q": "toggleComment",
        "Ctrl-D": function(cm) {
          var current_cursor, i, line_count, selected_lines, selected_text, _i, _ref, _ref1;
          current_cursor = cm.doc.getCursor();
          selected_text = cm.doc.getSelection();
          line_count = selected_text.split("\n").length;
          if (current_cursor.xRel === 1) {
            current_cursor.line -= line_count - 1;
          }
          selected_lines = [];
          for (i = _i = _ref = current_cursor.line, _ref1 = current_cursor.line + line_count; _ref <= _ref1 ? _i < _ref1 : _i > _ref1; i = _ref <= _ref1 ? ++_i : --_i) {
            selected_lines.push(cm.doc.getLine(i));
          }
          cm.doc.setCursor(current_cursor.line + line_count - 1, selected_lines.last().length);
          cm.doc.replaceSelection("\n" + selected_lines.join("\n"));
          cm.doc.setSelection({
            line: current_cursor.line + line_count,
            ch: 0
          }, {
            line: current_cursor.line + line_count + line_count - 1,
            ch: selected_lines.last().length
          });
        },
        "Shift-Tab": "indentLess",
        "Tab": function(cm) {
          var spaces, spacesPerTab, spacesToInsert;
          if (cm.doc.somethingSelected()) {
            return CodeMirror.Pass;
          }
          spacesPerTab = cm.getOption("indentUnit");
          spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);
          spaces = Array(spacesToInsert + 1).join(" ");
          cm.replaceSelection(spaces, "end", "+input");
        },
        "Ctrl-S": (function(_this) {
          return function() {
            var _base;
            return typeof (_base = _this.props).on_save === "function" ? _base.on_save() : void 0;
          };
        })(this),
        "Enter": function(cm) {
          var current_cursor, line, selected_text, spacer;
          selected_text = cm.doc.getSelection();
          if (selected_text.length > 0) {
            cm.doc.replaceSelection("");
          }
          current_cursor = cm.doc.getCursor();
          line = cm.doc.getLine(current_cursor.line);
          spacer = /^\s*/.exec(line)[0];
          cm.doc.replaceSelection("\n" + spacer);
        }
      });
      editor_options = {
        lineNumbers: true,
        lineWrapping: true,
        showTrailingSpace: true,
        styleActiveLine: true,
        placeholder: this.props.placeholder,
        tabSize: 2,
        indentWithTabs: false,
        hintOptions: {
          hint: function(cm) {
            var base, list, lists, ret, v, _i, _len;
            lists = [CodeMirror.hint.anyword(cm)];
            list = [];
            base = null;
            for (_i = 0, _len = lists.length; _i < _len; _i++) {
              v = lists[_i];
              if (!v) {
                continue;
              }
              base = v;
              list.append(v.list);
            }
            return ret = {
              from: base.from,
              to: base.to,
              list: list
            };
          }
        },
        mode: "css",
        extraKeys: keymap
      };
      this.cm = CodeMirror.fromTextArea(this.refs.textarea, editor_options);
      this.cm.on("change", (function(_this) {
        return function() {
          var value;
          value = _this.cm.getValue();
          if (_this.props.value === value) {
            return;
          }
          _this.props.on_change(value);
        };
      })(this));
      this.cm.setValue(this.props.value || "");
    },
    props_change: function(new_props) {
      var value;
      value = this.cm.getValue();
      if (new_props.value !== value) {
        this.cm.setValue(new_props.value || "");
      }
    },
    unmount: function() {
      this.cm.toTextArea();
    }
  }));

  define_com("Extended_textarea", conf);

}).call(this);
