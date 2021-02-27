(function() {
  var com_name, conf;

  com_name = "Comic_render";

  conf = React.createClass(CKR.react_key_map(com_name, {
    mount_done: function() {
      this.render_comics();
    },
    props_change: function(new_props) {
      if (new_props.value !== this.props.value) {
        this.render_comics(new_props);
      }
    },
    render_comics: function(props) {
      if (props == null) {
        props = this.props;
      }
      comicgenerator.fromScriptToElement(props.value, this.refs.comics_container, {
        donttranslate: true
      });
    },
    render: function() {
      return div({
        ref: "comics_container"
      });
    }
  }));

  define_com("Comic_render", conf);

}).call(this);
