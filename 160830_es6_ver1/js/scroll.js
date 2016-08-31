"use strict";

class Scroll {
	constructor(el){
		this.el = $(el);
		this.speed = 500;
		this.destSpeed = 1000;//距離が遠い場合のスピード
		this.distance = 3000;//どのくらいの距離でスピードかえるか
		this.handleEvents();
	}

	handleEvents = () => {
		this.el.on('click', e =>  {
			e.preventDefault();
			this.action(e);
		});
	}

	getMesureDistance = (e) => {
		var a_link = $(e.currentTarget);
		var current_pos = a_link.offset().top;
		return current_pos;
	}

	getLink = (e) => {
		var a_link = $(e.currentTarget);
		console.log(e);
		var href = a_link.attr('href');
		if (!href.match(/^#/)) { return; }
		return href;
	}

	getScrollPos = (e) => {
		var target = this.getLink(e);
		this.topos = $(target).offset().top;
		return this.topos;
	}

	action = (e) => {
		var target_pos = this.getScrollPos(e);
		var current_pos = this.getMesureDistance(e);
		var dest = Math.abs(target_pos - current_pos);

		if(dest > this.distance ) {
			$('html, body').animate({
				scrollTop: target_pos
			}, this.destSpeed, 'swing');
		}else {
			$('html, body').animate({
				scrollTop: target_pos
			}, this.Speed, 'swing');
		}
	}


}

var hoge = new Scroll('.pagescroll');
// hoge.handleEvents();
