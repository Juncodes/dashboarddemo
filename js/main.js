
$(function(){
	var sendEmaFlag = 0; // on off switch always binary using 0 & 1
	var setProFlag = 0; // on off switch always binary using 0 & 1
	var selectFlag = 0;
	$(".nav").find('a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	}); // add and remove active class on click for nav
	$(".alert").find('b').click(function(){
		$(".alert").hide();
	}); // on click, closes alert 
	$(".on-off").eq(0).click(function(){ //.eq(0) = 相同class的第一个
		if(sendEmaFlag == 1){
			$(".off").eq(0).hide();
			$(".on").eq(0).show();
			$(this).find('em').removeClass('left');
			sendEmaFlag = 0;
			return;
		}
		if(sendEmaFlag == 0){
			$(".on").eq(0).hide();
			$(".off").eq(0).show();
			$(this).find('em').addClass('left');
			sendEmaFlag = 1;
			return;
		}
	});
	$(".on-off").eq(1).click(function(){ //.eq(1) = 相同class的第2个
		if(setProFlag == 1){
			$(".off").eq(1).hide();
			$(".on").eq(1).show();
			$(this).find('em').removeClass('left');
			setProFlag = 0;
			return;
		}
		if(setProFlag == 0){
			$(".on").eq(1).hide();
			$(".off").eq(1).show();
			$(this).find('em').addClass('left');
			setProFlag = 1; 
			return;
		}
	});
	var selsetHeight = $(".select-down").find('li').length * 41; // sets height of the dropdown list 
	$(".select").find('i').click(function(){
		if(selectFlag == 1){
			$(this).removeClass('rotate');
			$(".select-down").animate({
				'height':0
			});
			selectFlag = 0;
			return;
		}
		if(selectFlag == 0){
			$(this).addClass('rotate');
			$(".select-down").animate({
				'height':selsetHeight
			});
			selectFlag = 1;
			return;
		} // drop down list + animation class add/remove
	});
	$(".select-down").find('li').click(function(){
		var _val = $(this).text();
		$(".select-down").animate({
			'height':0
		});
		selectFlag = 0;
		$(".select").find('p').text(_val);
		$(".select").find('i').removeClass('rotate');
	}) // click on list no only selects the item but also retracts the list
});