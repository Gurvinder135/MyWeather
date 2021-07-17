export function domCreate(tag,append,content){
    let newElement=document.createElement(tag);
    newElement.textContent=content;
    append.appendChild(newElement);
}