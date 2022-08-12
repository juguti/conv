
function dibi(params) {
    let deci=document.getElementById("chbi").value
    let resubi=document.getElementById("resubi")
    let ch=""
    let divi=128
    
    console.log(deci);
    for (let index = 0; index < 8; index++) {
        if (deci>=divi) {
            ch+="1"
            deci-=divi
            divi=divi/2
        }
        else{
            ch+="0"
            divi=divi/2}
       
    }
    console.log(ch)
    resubi.textContent=ch
};
function bidi(params) {
    let resubi=document.getElementById("resubi")
    let  bi=String(document.getElementById("chbi").value);
    console.log(typeof bi)
    let puiss=bi.length
    puiss-=1
    console.log(puiss)
    let de=0
    for (const n of bi) {
        if (n=='1') {
            de+=2**puiss;
            puiss-=1;}
        else{puiss-=1}

    }
    console.log(de)
    resubi.textContent=de

    
};
