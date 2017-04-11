interface IPathConfig{
    [index:string]:{
        config:{
            name:string
            description:string
        }
        files:string[]
    }
}
declare let $$config$$:{
    dom:IPathConfig
    js:IPathConfig
}
declare let tabBoxleftJS:HTMLDivElement[];
declare let tabBoxleftDOM:HTMLDivElement[];
declare let tabBoxtitle:HTMLDivElement[];
declare let tabTitleJS:HTMLAnchorElement[];
declare let tabTitleDOM:HTMLAnchorElement[];
declare let ifrm:HTMLIFrameElement;
declare const tabBox:HTMLDivElement
let config = $$config$$;
function show(ele:HTMLElement, id:string) {
    ifrm.src = ele.getAttribute('url')!;
    ele.className='btn2';
}
declare const btnPanel:HTMLAnchorElement[];
let oldIndexPanel=0;
function showPanel(ele:HTMLAnchorElement,idx:number){
    if(oldIndexPanel===idx){
        return;
    }
    btnPanel[idx].className='active';
    tabBoxtitle[idx].style.display='';

    btnPanel[oldIndexPanel].className='';
    tabBoxtitle[oldIndexPanel].style.display='none';

    if(idx===0){
        
        for(let i=0;i<tabBoxleftJS.length;i++){      
            $(tabBoxleftJS[i]).removeClass('uhide');  
            // .classList.add('uhide');
        }
        for(let i=0;i<tabBoxleftDOM.length;i++){     
            $(tabBoxleftDOM[i]).addClass('uhide');      
            // tabBoxleftDOM[i].classList.remove('uhide');
        }
    }else{
        
        for(let i=0;i<tabBoxleftJS.length;i++){          
            $(tabBoxleftJS[i]).addClass('uhide');  
            // tabBoxleftJS[i].classList.remove('uhide');
        }
        for(let i=0;i<tabBoxleftDOM.length;i++){    
            $(tabBoxleftDOM[i]).removeClass('uhide');     
            // tabBoxleftDOM[i].classList.add('uhide');
        }
    }

    oldIndexPanel=idx;
}
let oldIndexJS=0;
function showJSPage(ele:HTMLAnchorElement,idx:number){
    if(oldIndexJS===idx){
        return;
    }
    tabTitleJS[idx].className='active';
    tabBoxleftJS[idx].style.display='';

    tabTitleJS[oldIndexJS].className='';
    tabBoxleftJS[oldIndexJS].style.display='none';

    oldIndexJS=idx;
}
let oldIndexDOM=0;
function showDOMPage(ele:HTMLAnchorElement,idx:number){
    if(oldIndexDOM===idx){
        return;
    }
    tabTitleDOM[idx].className='active';
    tabBoxleftDOM[idx].style.display='';

    tabTitleDOM[oldIndexDOM].className='';
    tabBoxleftDOM[oldIndexDOM].style.display='none';

    oldIndexDOM=idx;
}
function setjs(){
    let html = '';
    let htmlTitle = '';
    let index=0;
    let jsconfig=config.js;
    for (let path in jsconfig) {
        let data = jsconfig[path];
        let jsArr = data.files;
        htmlTitle+=`<a id='tabTitleJS' onclick='showJSPage(this,${index})' data-description="${data.config.description}">${data.config.name}</a>`;
            html += `

    <div id="tabBoxleftJS" class="tabBox-left" style="display:none;">
        <div style='border-bottom:1px solid #555;margin-bottom:5px;'>本页简述:[${data.config.description}]</div>`;
        for (let i = 0; i < jsArr.length; i++) {
            let id = Math.random().toString().substring(2);
            let jsPath = path + '/' + jsArr[i];
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
    tabBoxtitle[0].innerHTML=htmlTitle+'<a></a>';
    document.write(html);
    tabTitleJS[oldIndexJS].className='active';
    tabBoxleftJS[oldIndexJS].style.display='';
}
function setdom(){
    let html = '';
    let htmlTitle = '';
    let index=0;
    let domconfig=config.dom;
    for (let path in domconfig) {
        let data = domconfig[path];
        let domArr = data.files;
        htmlTitle+=`<a id='tabTitleDOM' onclick='showDOMPage(this,${index})' data-description="${data.config.description}">${data.config.name}</a>`;
            html += `

    <div id="tabBoxleftDOM" class="tabBox-left" style="display:none;">
        <div style='border-bottom:1px solid #555;margin-bottom:5px;'>本页简述:[${data.config.description}]</div>`;
        for (let i = 0; i < domArr.length; i++) {
            let id = Math.random().toString().substring(2);
            let domPath = path + '/' + domArr[i];
            html += `
        <div>
            <span class='btn' url='./${domPath}' onclick='show(this,"${id}");'>
                ${domArr[i]}
            </span>
        </div>`;
        }
            html += `
    </div>`;
        index++;
    }
    tabBoxtitle[1].innerHTML=htmlTitle+'<a></a>';
    document.write(html);
    tabTitleDOM[oldIndexDOM].className='active';
    tabBoxleftDOM[oldIndexDOM].style.display='';
}
setjs();
setdom();
