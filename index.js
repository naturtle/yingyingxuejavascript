var config = $$config$$;
var oldIndex = 0;
function show(ele, id) {
    ifrm.src = ele.getAttribute('url');
    ele.className = 'btn2';
}
function showPage(ele, idx) {
    if (oldIndex === idx) {
        return;
    }
    tabTitle[idx].className = 'active';
    tabBoxleft[idx].style.display = '';
    tabTitle[oldIndex].className = '';
    tabBoxleft[oldIndex].style.display = 'none';
    oldIndex = idx;
}
var html = '';
var htmlTitle = '';
var index = 0;
for (var path in config) {
    var data = config[path];
    var jsArr = data.files;
    // htmlTitle+='<a class="tabTitle">'+path+'. '++'</a>';
    htmlTitle += "<a id='tabTitle' onclick='showPage(this," + index + ")' data-description=\"" + data.config.description + "\">" + data.config.name + "</a>";
    html += "\n\n<div id=\"tabBoxleft\" class=\"tabBox-left\" style=\"display:none;\">\n    <div style='border-bottom:1px solid #555;margin-bottom:5px;'>\u672C\u9875\u7B80\u8FF0:[" + data.config.description + "]</div>";
    for (var i = 0; i < jsArr.length; i++) {
        var id = Math.random().toString().substring(2);
        var jsPath = path + '/' + jsArr[i];
        html += "\n    <div>\n        <span class='btn' url='./js/" + jsPath + "' onclick='show(this,\"" + id + "\");'>\n            " + jsArr[i] + "\n        </span>\n    </div>";
    }
    html += "\n</div>";
    index++;
}
tabBoxtitle.innerHTML = htmlTitle + '<a></a>';
document.write(html);
tabTitle[oldIndex].className = 'active';
tabBoxleft[oldIndex].style.display = '';
