var List = '';
var arr = [];
var ListContent = document.getElementById("emailList")
var Content = document.getElementById("email")

if (Content && ListContent && (List = ListContent.innerHTML) !== '') {    
    // 得到后缀
    arr = [].slice.call(ListContent.getElementsByTagName("option")).map(function(option) {
        return option.value.replace("*@", "");    
    });
    Content.fnListReplace = function() {
        var arrValue = this.value.trim().split("@");
        if (arrValue.length !== 2 || arr.indexOf(arrValue[1]) === -1) {
            ListContent.innerHTML = List.replace(/\*/g, arrValue[0]);
        }        
        return this;
    };
    Content.addEventListener("input", function() {
        this.fnListReplace.call(this);        
    }, false);
    Content.fnListReplace.call(Content).focus();
} 