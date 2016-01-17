$(document).ready(function(e) {
    
var genislik=$(document).width();
genislik=(genislik-1093)/2;
$(".duvar").css({
	'margin-left':genislik
	});
	
		
    $(".ajaxa").hover(function(){
		$(this).css("border-bottom","3px ridge  #F00");
		},function(){
			$(this).css("border-bottom","none");
			});
			var a=0;
	
	
	$(document).scroll(function(){			
			if($(this).scrollTop()>74 && a==0){
				a++;
				$(".ust_orta").animate({
					top:0,
					height:"55px",
				 backgroundColor:"#f6f6f6",
					},100);
				$(".ust_orta").css({
					"position":"fixed",
					},100);
				$(".c_resmi").animate({
					height: "60px",
					width: "60px",
					},100);	
				$(".sayfa_gecisi").animate({paddingTop:"12px"
					},100);	
				}else if($(this).scrollTop()<74 && a==1){
					a--;
				$(".ust_orta").animate({
					height:"100px",
				 backgroundColor:"#FFF",
					},1);
					$(".ust_orta").css({
						"position":"relative",
						});
						$(".c_resmi").animate({
					height: "100px",
					width: "100px",
					},1);	
					$(".sayfa_gecisi").animate({paddingTop:"30px"
					},1);	
					}
			});  
			
			
			
			
			
			
			
			
			
			$.ajaxLoad= function(href){
					 $.ajax({
					 type:"POST",
					 url:"icerik/"+href+".php",
					 data:{"href":href},
					 dataType:"json",
					 success: function(donen){
						 	$(".sayfa_icerik").fadeOut(1000).slideDown(1000);
							$("body").animate({scrollTop:0}, '500', 'swing');
					setTimeout(function() {
						$(".sayfa_icerik").html(donen.icerik);
						$("title").text(donen.baslik);
						history.pushState('','',href)
							}, 1000);	 
							path=href;	
						
					
																
						 }
					 });
				}
					$.ajaxLoad2= function(href){
					 $.ajax({
					 type:"POST",
					 url:"icerik/"+href+".php",
					 data:{"href":href},
					 dataType:"json",
					 success: function(donen){
							$("body").animate({scrollTop:0}, '500', 'swing');
						$(".sayfa_icerik").html(donen.icerik);
						$("title").text(donen.baslik);
						history.pushState('','',href)
							path=href;	
														
						 }
					 });
				}
			
			
			
							
				var path=location.pathname.replace('/','');
					if(!path){
					
					$.ajaxLoad2("anasayfa");	
					}else if(path){
						$.ajaxLoad(path);
						}
				
			
		$('.sayfa_icerik ').on('click', '.ajaxb', function(){
								var c=$(this).attr('href');
								$.ajaxLoad(c); 
								
   							return false;
								}); 
								
		$(".ajaxa").click(function(){
				var href=$(this).attr('href');	
				if(path=="" && href=="anasayfa"){
					}else if(path==href){
						$("body").animate({scrollTop:0}, '500', 'swing');
						}
				else if(path!=href){		
			$.ajaxLoad(href);
				}
				return false;
				});
			
			window.onpopstate=function(){
								var path=location.pathname.replace('/','');
								$.ajaxLoad(path);
				}
	
				   
				
			
});