// Generated by CoffeeScript 1.9.3
(function() {
  var Bresenham, Line, Sprite, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sprite = require('./sprite');

  Bresenham = require('./bresenham');

  utils = require('./lib/utils');

  Line = (function(superClass) {
    extend(Line, superClass);

    function Line(options) {
      Line.__super__.constructor.call(this, options);
      this._deps = options;
      this._points = [];
    }

    Line.prototype._drawPt = function(x, y) {
      var dimensions;
      dimensions = this._deps.config.get('scale');
      this._deps.viewport.get('context').fillRect(x * dimensions - dimensions / 2, y * dimensions - dimensions / 2, dimensions, dimensions);
      return void 0;
    };

    Line.prototype.setPoints = function(a, b) {
      return this._points = [a, b];
    };

    Line.prototype.render = function() {
      var i, j, len, nextPt, point, ref;
      Line.__super__.render.call(this);
      ref = this._points;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        point = ref[i];
        nextPt = this._points[i + 1];
        if (nextPt != null) {
          point = utils.clone(point);
          nextPt = utils.clone(nextPt);
          Bresenham.calculate(point, nextPt, this._drawPt.bind(this));
        }
      }
      return void 0;
    };

    return Line;

  })(Sprite);

  module.exports = Line;

}).call(this);
