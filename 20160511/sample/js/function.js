(function(window, undefined){
	// $(function(){
	// 	$.ajax({
	// 		type : "GET",
	// 		url : "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?format=json&genreId=553524&applicationId=1017613136716791304"
	// 	}).then(function(data){
	// 		var vm = new Vue({
	// 			el: "#app",
	// 			data: {
	// 				all_data: data.Items
	// 			}
	// 		});
	// 	});
	// });

	$(function(){
		new Vue ({
			el: "#app",
			data: {
				result: [],
				search_txt: 'キーワードを入力してください'
			},
			created: function(){
				var that = this;
				$.ajax({
					type : "GET",
					url : "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?format=json&keyword=%E6%B0%B4&applicationId=1017613136716791304"
				}).then(function(data){
						data: {
							that.result = data.Items;
						}
				});
			},
			methods: {
				enter: function(){
					console.log('hi');
				},
				callAjax: function(keyword){
					var keyword = encodeURIComponent(keyword);
					var that = this;
					$.ajax({
						type : "GET",
						url : "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?format=json&keyword="+ keyword + "&applicationId=1017613136716791304"
					}).then(function(data){
							data: {
								that.result = data.Items;
							}
					});
				}
			}
		});


		// function callAjax(keyword){
		// 	var keyword = encodeURIComponent(keyword);
		// 	var that = this;
		// 	console.log(this);
		// 	$.ajax({
		// 		type : "GET",
		// 		url : "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?format=json&keyword="+ keyword + "&applicationId=1017613136716791304"
		// 	}).then(function(data){
		// 			data: {
		// 				that.result = data.Items;
		// 			}
		// 	});
		// }
	});
})(this);