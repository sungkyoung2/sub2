$(document).ready(function(){
    $(window).scroll(function(){
        sc=$(window).scrollTop();
        if(sc>=0 && sc<6700){
            $('#slide_left').css({'left':(sc)*0.08})
            $('#slide_right').css({'bottom':-(sc/0.55)+1000,'right':(sc)*0.06})
        }
        if(sc>=6700){
            $('#slide_left').fadeOut()
            $('#slide_right').fadeOut()
            
            
        }

        
    })

})