import "http://code.jquery.com/jquery-1.10.2.js"

function fullboximg(a, b, c, d, e){
    winheight = $(window).height();
    ratio = b/c;
    cornice = (d + e)* 2;
    if (winheight < (c+cornice)){
    c = winheight - cornice - 20;
    b = ratio * c;
    }
    $('div#fullbox').html('<div><img alt="" class="imgfullbox" height="'+c+'" src="'+a+'" style="border-width: '+e+'px; margin-left: -'+(b/2+cornice/2)+'px; margin-top: -'+(c/2+cornice/2)+'px; padding: '+d+'px;" width="'+b+'" /></div>').fadeIn();
    $('div#fullbox').click(function(){
    $(this).fadeOut();
    });
}