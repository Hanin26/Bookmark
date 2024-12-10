var bookmarks=[];
if (localStorage.getItem('all marks')!=null){
    bookmarks = JSON.parse(localStorage.getItem('all marks'))
    display();
}

function validationUrl(){
    var siteURL=document.getElementById('site').value;
    var regex=/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?(\/[a-zA-Z0-9]{2,})?/;
    var myUrl=siteURL;
    return regex.test(myUrl);
}

function add(){
   var siteNameInput=document.getElementById('name').value;
   var siteURL=document.getElementById('site').value;
   if (!validationUrl(siteURL)) {
    alert("Invalid URL");
    return;
}
   var Bookmark={
    siteName:siteNameInput,
    url:siteURL
   }
   bookmarks.push(Bookmark);
   localStorage.setItem('all marks',JSON.stringify(bookmarks))
   console.log(bookmarks);  
   clear();
   display();

}
function display(){
    var sites=``
    for(var i=0;i<bookmarks.length;i++){
        sites+=`<tr class="mt-5">
                <td class="db">${i+1}</td>
                <td class="db">${bookmarks[i].siteName}</td>
                <td><button onclick="visitSite(${i})" class="btn btn-warning">Visit</button></td>
                <td><button onclick="deleteBookmark(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`
    }
    document.getElementById('last').innerHTML=sites;
}
function visitSite(index) {
    window.open(bookmarks[index].url, '_blank');
}
function deleteBookmark(index){
    bookmarks.splice(index,1);
    localStorage.setItem('all marks',JSON.stringify(bookmarks));
    display(); 
}
function clear(){
    var siteNameInput=document.getElementById('name');
   var siteURL=document.getElementById('site');
    siteNameInput.value="";
    siteURL.value="";
}
