let hearts = 0
let coins = 100
var copies = 0

let h = document.getElementsByClassName("heart-count-text")
let c = document.getElementsByClassName("coin-count-text")
let cp = document.getElementsByClassName("copy-count-num")

let hi = document.getElementsByClassName("heart-icon")
for(let i=0;i<hi.length;i++){
    hi[i].onclick=function(){
        hearts = hearts+1;
        for(let j=0;j<h.length;j++){
            h[j].innerHTML=hearts;
        }
    }
}

let cb = document.getElementsByClassName("btn-copy")
for(let i=0;i<cb.length;i++){
    cb[i].onclick=function(){
        let card=this.parentNode.parentNode
        let num=card.getElementsByClassName("helpline-number")[0].innerText
        copies = copies+1
        for(var j=0;j<cp.length;j++){
            cp[j].innerHTML=copies
        }
        navigator.clipboard.writeText(num)
        alert("copied "+num)
    }
}

let callb = document.getElementsByClassName("btn-call")
let hist = document.querySelector(".call-history-list")

for(let i=0;i<callb.length;i++){
    callb[i].onclick=function(){
        let card=this.parentNode.parentNode
        let n=card.getElementsByTagName("h3")[0].innerText
        let num=card.getElementsByClassName("helpline-number")[0].innerText

        if(coins<20){
            alert("no coins")
        }else{
            coins=coins-20
            for(let j=0;j<c.length;j++){
                c[j].innerHTML=coins
            }
            alert("calling "+n+" "+num)

            let li=document.createElement("li")
            li.className="call-history-item"

            let now=new Date()
            let t=now.getHours()+":"+now.getMinutes()

            li.innerHTML="<div class='history-item-left'><p class='history-item-title'>"+n+"</p><p class='history-item-number'>"+num+"</p></div><div class='history-item-right'><p class='call-history-time'>"+t+"</p></div>"

            hist.appendChild(li)
        }
    }
}

document.querySelector(".clear-btn").onclick=function(){
    hist.innerHTML=""
}
