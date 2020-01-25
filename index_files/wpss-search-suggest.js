jQuery(document).ready(function ($){  
	
	if($('#search-outer.nectar').length > 0){
		
	    var acs_action = 'myprefix_autocompletesearch';  
	    $("body").on('focus','#s',function(){
	    	
	    	if(!$(this).hasClass('ui-autocomplete-input')) {
		    	$(this).autocomplete({ 
			    	delay: 50,
			    	position: {of: "#search-outer #search .container" },
			    	appendTo: $("#search-box"), 
			        source: function(req, response){  
			            $.getJSON(MyAcSearch.url+'?callback=?&action='+acs_action, req, response);  
			        },  
			        select: function(event, ui) {  
			            window.location.href=ui.item.link;  
			        },  
			        minLength: 2,  
			    }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
					return $( "<li>" )
					.append( "<a>" + item.image + "<span class='title'>" + item.label + "</span><br/><span class='desc'>" + item.post_type + "</span> </a>" )
					.appendTo( ul );
				}; 
			}

	    });
		 
	}
    
});  
/*
     FILE ARCHIVED ON 03:52:13 Jan 08, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:59:16 Jan 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.011
  load_resource: 134.069
  exclusion.robots.policy: 0.19
  RedisCDXSource: 136.936
  captures_list: 288.735
  CDXLines.iter: 13.21 (3)
  PetaboxLoader3.resolve: 59.621
  PetaboxLoader3.datanode: 182.896 (4)
  LoadShardBlock: 135.512 (3)
  exclusion.robots: 0.214
*/