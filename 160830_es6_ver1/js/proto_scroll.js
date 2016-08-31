var Scroll = function(el){
	this.el = $(el);
	this.speed = 500;
	this.destSpeed = 1000;//距離が遠い場合のスピード
	this.distance = 3000;//どのくらいの距離でスピードかえるか
	this.handleEvents();
};
Scroll.prototype = {
	handleEvents : function(){
		var self = this;
		this.el.click(function(e){
			e.preventDefault();
			self.action(e);
		});
	},

	getMesureDistance : function(e){
		var a_link = $(e.currentTarget);
		var current_pos = a_link.offset().top;
		return current_pos;
	},

	getLink : function(e){
		var a_link = $(e.currentTarget);
		var href = a_link.attr('href');
		if (!href.match(/^#/)) { return; }
		return href;
	},

	getScrollPos : function(e){
		var target = this.getLink(e);
		this.topos = $(target).offset().top;
		return this.topos;
	},

	action : function(e){
		var self = this;
		var target_pos = self.getScrollPos(e);
		var current_pos = self.getMesureDistance(e);
		var dest = Math.abs(target_pos - current_pos);

		if(dest > self.distance ) {
			$('html, body').animate({
				scrollTop: target_pos
			}, self.destSpeed, 'swing');
		}else {
			$('html, body').animate({
				scrollTop: target_pos
			}, self.Speed, 'swing');
		}
	}
};
