declare var $$config$$:{
    [index:string]:any
}
declare var tabBoxleft:HTMLDivElement[];
declare var tabBoxtitle:HTMLDivElement;
declare var tabTitle:HTMLAnchorElement[];
declare var ifrm:HTMLIFrameElement;
let config = $$config$$;
let oldIndex=0;
function show(ele:HTMLElement, id:string) {
    // var ifrm:HTMLIFrameElement = <any>document.getElementById(id)!;
    ifrm.src = ele.getAttribute('url')!;
    ele.className='btn2';
    // ifrm.style.display = '';
}
function showPage(ele:HTMLAnchorElement,idx:number){
    if(oldIndex===idx){
        return;
    }
    tabTitle[idx].className='active';
    tabBoxleft[idx].style.display='';

    tabTitle[oldIndex].className='';
    tabBoxleft[oldIndex].style.display='none';

    oldIndex=idx;
}
var html = '';
var htmlTitle = '';
var index=0;
for (var path in config) {
    var data = config[path];
    var jsArr = data.files;
    // htmlTitle+='<a class="tabTitle">'+path+'. '++'</a>';
    htmlTitle+=`<a id='tabTitle' onclick='showPage(this,${index})' data-description="${data.config.description}">${data.config.name}</a>`;
        html += `
<div id="tabBoxleft" class="tabBox-left" style="display:none;">`;
    for (var i = 0; i < jsArr.length; i++) {
        var id = Math.random().toString().substring(2);
        var jsPath = path + '/' + jsArr[i];
        html += `
    <div>
        <span class='btn' url='./js/${jsPath}' onclick='show(this,"${id}");'>
            ${jsArr[i]}
        </span>
    </div>`;
    }
        html += `
</div>`;
    index++;
}
tabBoxtitle.innerHTML=htmlTitle+'<a></a>';
document.write(html);
tabTitle[oldIndex].className='active';
tabBoxleft[oldIndex].style.display='';