
window.onload = function() {
   
  
    $('.sect').on('click', function(e) {
        console.log(this.id)

        let idValue = this.id
        $('.' + idValue).show().siblings().hide();
        $('.sect').removeClass( "mSel" );
        $('#' + idValue).addClass('mSel');
        


    });

 
};
