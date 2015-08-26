// Generated by CoffeeScript 1.9.3
(function() {
  var Base, Viewport,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Base = require('./base');

  Viewport = (function(superClass) {
    extend(Viewport, superClass);

    function Viewport(options) {
      var dimensions;
      Viewport.__super__.constructor.call(this);
      this._deps = options;
      dimensions = this._deps.config.get('scale');
      this._canvas = document.getElementById(this._deps.config.get('canvasId'));
      this._context = this._canvas.getContext('2d');
      this._canvas.width = this._deps.config.get('width') * dimensions;
      this._canvas.height = this._deps.config.get('height') * dimensions;
    }

    Viewport.prototype.clear = function() {
      return this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };

    return Viewport;

  })(Base);

  module.exports = Viewport;

}).call(this);
