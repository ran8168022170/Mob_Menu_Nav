const  contents=document.querySelectorAll(".content");
const listtItems=document.querySelectorAll("nav ul li");


listtItems.forEach((item, idx)=>{
    item.addEventListener('click',()=>{

        hideallcontents();
        hideallItem();
        item.classList.add('active');
        contents[idx].classList.add('show')


    })
});

function hideallcontents(){
    contents.forEach(content=>content.classList.remove('show'))
}

function hideallItem(){
    listtItems.forEach(item=>item.classList.remove('active'));
}