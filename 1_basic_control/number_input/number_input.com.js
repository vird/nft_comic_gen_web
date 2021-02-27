(function() {
  var com_name, conf;

  com_name = "Number_input";

  conf = React.createClass(CKR.react_key_map(com_name, {
    text: "",
    mount: function() {
      this.set_text(this.props);
      this.force_update();
    },
    render: function() {
      return input({
        id: this.props.id,
        "class": this.props["class"],
        style: this.props.style,
        disabled: this.props.disabled,
        type: "number",
        value: this.text,
        on_change: this.on_change,
        placeholder: this.props.placeholder,
        pattern: "-?[0-9]*([\.,][0-9]*)?",
        step: this.props.step,
        onKeyPress: (function(_this) {
          return function(event) {
            var _base;
            if (event.nativeEvent.which === 13) {
              if (typeof (_base = _this.props).on_enter === "function") {
                _base.on_enter();
              }
            }
          };
        })(this),
        onFocus: (function(_this) {
          return function() {
            var _base;
            return typeof (_base = _this.props).on_focus === "function" ? _base.on_focus() : void 0;
          };
        })(this),
        onBlur: (function(_this) {
          return function() {
            var _base;
            return typeof (_base = _this.props).on_blur === "function" ? _base.on_blur() : void 0;
          };
        })(this),
        on_hover: (function(_this) {
          return function() {
            var _base;
            return typeof (_base = _this.props).on_hover === "function" ? _base.on_hover() : void 0;
          };
        })(this),
        on_mouse_out: (function(_this) {
          return function() {
            var _base;
            return typeof (_base = _this.props).on_mouse_out === "function" ? _base.on_mouse_out() : void 0;
          };
        })(this)
      });
    },
    props_change: function(props) {
      if (props.value === this.props.value) {
        return;
      }
      if (props.value === parseFloat(this.text)) {
        return;
      }
      return this.set_text(props);
    },
    set_text: function(props) {
      if (props.value != null) {
        if (isNaN(props.value)) {
          this.text = "";
          return;
        }
        this.text = props.value.toString();
      }
    },
    on_change: function(event) {
      var num_value, value, _base;
      value = event.target.value;
      this.text = value;
      this.force_update();
      num_value = parseFloat(value);
      if (this.props.can_empty && value === "") {
        this.props.on_change(num_value);
        return;
      }
      if (isNaN(num_value)) {
        return;
      }
      if (typeof (_base = this.props).on_change === "function") {
        _base.on_change(num_value);
      }
    }
  }));

  define_com("Number_input", conf);

}).call(this);
