"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroll = function Scroll(el) {
	var _this = this;

	_classCallCheck(this, Scroll);

	this.handleEvents = function () {
		_this.el.on('click', function (e) {
			e.preventDefault();
			_this.action(e);
		});
	};

	this.getMesureDistance = function (e) {
		var a_link = $(e.currentTarget);
		var current_pos = a_link.offset().top;
		return current_pos;
	};

	this.getLink = function (e) {
		var a_link = $(e.currentTarget);
		var href = a_link.attr('href');
		console.log(a_link);
		if (!href.match(/^#/)) {
			return;
		}
		return href;
	};

	this.getScrollPos = function (e) {
		var target = _this.getLink(e);
		_this.topos = $(target).offset().top;
		return _this.topos;
	};

	this.action = function (e) {
		var target_pos = _this.getScrollPos(e);
		var current_pos = _this.getMesureDistance(e);
		var dest = Math.abs(target_pos - current_pos);

		if (dest > _this.distance) {
			$('html, body').animate({
				scrollTop: target_pos
			}, _this.destSpeed, 'swing');
		} else {
			$('html, body').animate({
				scrollTop: target_pos
			}, _this.Speed, 'swing');
		}
	};

	this.el = $(el);
	this.speed = 500;
	this.destSpeed = 1000; //距離が遠い場合のスピード
	this.distance = 3000; //どのくらいの距離でスピードかえるか
	this.handleEvents();
};

var hoge = new Scroll('.pagescroll');
