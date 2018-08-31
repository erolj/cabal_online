var xhr = new XMLHttpRequest();

var notice = '';
var update = '';
var article = '';

xhr.onload = function () {
    responseObject = JSON.parse(xhr.responseText);
    
    for(var i=0; i<7; i++){
        notice += '<li class="list"><a href="#">'+responseObject.notice[i].title + '</a><span class="date">'+responseObject.notice[i].date+'</span></li>'+'\n';
        
        update += '<li class="list"><a href="#">'+responseObject.update[i].title + '</a><span class="date">'+responseObject.update[i].date+'</span></li>'+'\n';
        
        article += '<li class="list"><a href="#">'+responseObject.article[i].title + '</a><span class="date">'+responseObject.article[i].date+'</span></li>'+'\n';
    }
    
    $(document).ready(function(){
        $('#tcNotice').append(notice);
        $('#tcUpdate').append(update);
        $('#tcArticle').append(article);
    });
}

xhr.open('GET', 'data/tabContData.json', true);
xhr.send(null);