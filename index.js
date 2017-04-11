var config = $$config$$;
function show(ele, id) {
    ifrm.src = ele.getAttribute('url');
    ele.className = 'btn2';
}
var oldIndexPanel = 0;
function showPanel(ele, idx) {
    if (oldIndexPanel === idx) {
        return;
    }
    btnPanel[idx].className = 'active';
    tabBoxtitle[idx].style.display = '';
    btnPanel[oldIndexPanel].className = '';
    tabBoxtitle[oldIndexPanel].style.display = 'none';
    if (idx === 0) {
        for (var i = 0; i < tabBoxleftJS.length; i++) {
            $(tabBoxleftJS[i]).removeClass('uhide');
            // .classList.add('uhide');
        }
        for (var i = 0; i < tabBoxleftDOM.length; i++) {
            $(tabBoxleftDOM[i]).addClass('uhide');
            // tabBoxleftDOM[i].classList.remove('uhide');
        }
    }
    else {
        for (var i = 0; i < tabBoxleftJS.length; i++) {
            $(tabBoxleftJS[i]).addClass('uhide');
            // tabBoxleftJS[i].classList.remove('uhide');
        }
        for (var i = 0; i < tabBoxleftDOM.length; i++) {
            $(tabBoxleftDOM[i]).removeClass('uhide');
            // tabBoxleftDOM[i].classList.add('uhide');
        }
    }
    oldIndexPanel = idx;
}
var oldIndexJS = 0;
function showJSPage(ele, idx) {
    if (oldIndexJS === idx) {
        return;
    }
    tabTitleJS[idx].className = 'active';
    tabBoxleftJS[idx].style.display = '';
    tabTitleJS[oldIndexJS].className = '';
    tabBoxleftJS[oldIndexJS].style.display = 'none';
    oldIndexJS = idx;
}
var oldIndexDOM = 0;
function showDOMPage(ele, idx) {
    if (oldIndexDOM === idx) {
        return;
    }
    tabTitleDOM[idx].className = 'active';
    tabBoxleftDOM[idx].style.display = '';
    tabTitleDOM[oldIndexDOM].className = '';
    tabBoxleftDOM[oldIndexDOM].style.display = 'none';
    oldIndexDOM = idx;
}
function setjs() {
    var html = '';
    var htmlTitle = '';
    var index = 0;
    var jsconfig = config.js;
    for (var path in jsconfig) {
        var data = jsconfig[path];
        var jsArr = data.files;
        htmlTitle += "<a id='tabTitleJS' onclick='showJSPage(this," + index + ")' data-description=\"" + data.config.description + "\">" + data.config.name + "</a>";
        html += "\n\n    <div id=\"tabBoxleftJS\" class=\"tabBox-left\" style=\"display:none;\">\n        <div style='border-bottom:1px solid #555;margin-bottom:5px;'>\u672C\u9875\u7B80\u8FF0:[" + data.config.description + "]</div>";
        for (var i = 0; i < jsArr.length; i++) {
            var id = Math.random().toString().substring(2);
            var jsPath = path + '/' + jsArr[i];
            html += "\n        <div>\n            <span class='btn' url='./js/" + jsPath + "' onclick='show(this,\"" + id + "\");'>\n                " + jsArr[i] + "\n            </span>\n        </div>";
        }
        html += "\n    </div>";
        index++;
    }
    tabBoxtitle[0].innerHTML = htmlTitle + '<a></a>';
    document.write(html);
    tabTitleJS[oldIndexJS].className = 'active';
    tabBoxleftJS[oldIndexJS].style.display = '';
}
function setdom() {
    var html = '';
    var htmlTitle = '';
    var index = 0;
    var domconfig = config.dom;
    for (var path in domconfig) {
        var data = domconfig[path];
        var domArr = data.files;
        htmlTitle += "<a id='tabTitleDOM' onclick='showDOMPage(this," + index + ")' data-description=\"" + data.config.description + "\">" + data.config.name + "</a>";
        html += "\n\n    <div id=\"tabBoxleftDOM\" class=\"tabBox-left\" style=\"display:none;\">\n        <div style='border-bottom:1px solid #555;margin-bottom:5px;'>\u672C\u9875\u7B80\u8FF0:[" + data.config.description + "]</div>";
        for (var i = 0; i < domArr.length; i++) {
            var id = Math.random().toString().substring(2);
            var domPath = path + '/' + domArr[i];
            html += "\n        <div>\n            <span class='btn' url='./" + domPath + "' onclick='show(this,\"" + id + "\");'>\n                " + domArr[i] + "\n            </span>\n        </div>";
        }
        html += "\n    </div>";
        index++;
    }
    tabBoxtitle[1].innerHTML = htmlTitle + '<a></a>';
    document.write(html);
    tabTitleDOM[oldIndexDOM].className = 'active';
    tabBoxleftDOM[oldIndexDOM].style.display = '';
}
setjs();
setdom();
