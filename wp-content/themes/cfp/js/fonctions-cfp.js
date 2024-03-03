$(window).load(function() {
  // Le carousel doit etre initialise en premier
  // Carousel homepage
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
	directionNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 110,
    itemMargin: 1,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
  
  
  $('#carouendess').flexslider({
    animation: "slide",
    controlNav: false,
	directionNav: true,
    animationLoop: false,
    slideshow: false,
    itemWidth: 157,
    itemMargin: 26,
    asNavFor: '#sliderendess'
  });
 
  $('#sliderendess').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carouendess",
	smoothHeight: true,
	start: function(slider){
		  $('#sliderendess').removeClass('chargement');
	}
  });
  
  
  $('#slider-actus').flexslider({
	selector: ".slideact > .un-slide",
    animation: "fade",
    controlNav: true,
	directionNav: false
  });
  
  
/** Trie avec Isotope **/

// init Isotope
var $grid1 = $('#liste-dessi').isotope({
  getSortData: {
    pseudo: '.pseudo-dess',
    pays: '.pays-dess',
    continent: '.continent-dess'
  }
});
// filter items on button click

$( "#trie-dessi li:first-child a" ).addClass( "selected" );

$('#trie-dessi a').on( 'click', function(e) {
  e.preventDefault();
  $( "#trie-dessi li a" ).removeClass( "selected" );
  $(this).addClass( "selected" );
  var sortByValue = $(this).attr('data-sort-by');
  console.log(sortByValue )
  $grid1.isotope({ sortBy: sortByValue });
});


$('input.artistname').on( 'keyup change click input', function(e) {
    //console.log('form changed : '+ $(this).val())
    //indep search : empty other field if search is performed
    if( $('input.country').val()!='')
    $('input.country').val('')
     var inputArtist = $(this).val();
    $grid1.isotope({ filter: function() {
  var name = $(this).find('.pseudo-dess').text();
  return name.match( new RegExp(inputArtist, 'i') );
} })
    
})

$('input.country').on( 'keyup change click input', function(e) {
   // console.log('c form changed : '+ $(this).val())
     //e.preventDefault();
        if( $('input.artistname').val()!='')
    $('input.artistname').val('')
     var inputCountry = $(this).val();
    $grid1.isotope({ filter: function() {
  var name = $(this).find('.pays-dess').text();
  return name.match( new RegExp(inputCountry, 'i') );
} })
    
})

$grid1.on( 'arrangeComplete', function( event, filteredItems ) {
        var resultCount = filteredItems.length;
        if(resultCount == 0) {
            
            if($('div.error').length == 0){
            if($('head').attr('lang') =='fr-FR' )
            {
            $grid1.append("<div class='error'>Il n'y a aucun résultat pour votre recherche.</div>"); 
            }else{
            $grid1.append("<div class='error'>Sorry, there is no result for your search.</div>");}
            }
        }
        else{
            $('div.error').remove();
            
        }
    });



// Trie evenements

var $grid = $('#liste-even-cours').isotope({
  getSortData: {
    typeeven: '.nature-even',
	pays: '.pays-even',
    continent: '.pays-even'
  }
});
// filter items on button click

$( "#trie-even li:first-child a" ).addClass( "selected" );

$('#trie-even a').on( 'click', function(e) {
  e.preventDefault();
  $( "#trie-even li a" ).removeClass( "selected" );
  $(this).addClass( "selected" );
  var sortByValue = $(this).attr('data-sort-by');
 // $grid.isotope({ sortBy: sortByValue });
  $grid.isotope({filter:function(){
        var ss = $(this).find('.status-even').text();
        return ss.match( new RegExp( sortByValue, 'i') );
    }})
});


$('input.countryevents').on( 'keyup change click input', function(e) {
     var inputCountry = $(this).val();
    $grid.isotope({ filter: function() {
  var name = $(this).find('.pays-even').text();
  return name.match( new RegExp(inputCountry, 'i') );
} })
    
})


$grid.on( 'arrangeComplete', function( event, filteredItems ) {
        var resultCount = filteredItems.length;
        if(resultCount == 0) {
            
            if($('div.error').length == 0){
            if($('head').attr('lang') =='fr-FR' )
            {
            $grid.append("<div class='error'>Il n'y a aucun résultat pour votre recherche.</div>"); 
            }else{
            $grid.append("<div class='error'>Sorry, there is no result for your search.</div>");}
            }
        }
        else{
            $('div.error').remove();
            
        }
    });
/**Fancybox**/
$(".fancybox").fancybox({
    helpers : {
        title: {
            type: 'inside'
        }
    }
});

//jQuery(".gallery-icon a").fancybox().attr('rel', 'gallery');
/**Fin Fancybox**/
  
});

/*
$.ui.autocomplete.prototype._renderItem = function (ul, item) {        
    var t = String(item.value).replace(
            new RegExp(this.term, "gi"),
            "<strong>$&</strong>");
    return $("<li></li>")
        .data("item.autocomplete", item)
        .append("<div>" + t + "</div>")
        .appendTo(ul);
};*/
