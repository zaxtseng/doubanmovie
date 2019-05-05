$('footer>div').click(function(){
    var index = $(this).index()
    $('section').hide().eq(index).fadeIn()
})