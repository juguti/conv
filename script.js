
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
        else{puiss-=1} }
    console.log(de)
    resubi.textContent=de

    
};
function dihe(params) {
    let co=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let chhe=document.getElementById("chhe").value
    let q=~~(chhe/16)
    let r=chhe-q*16
    let resu=(co[q]+co[r])
    console.log(q)
    console.log(r)
    console.log(resu)
    document.getElementById("resuhe").textContent=resu
    

    
};
function hedi(params) {
    let ch=0;
    let coinv={"A":10,"B":11,"C":12,"D":13,"E":14,"F":15};
    let number=["0","1","2","3","4","5","6","7","8","9"];
    let chhe=document.getElementById("chhe").value;
    let puiss =chhe.length-1;
    console.log(chhe)
    for (const n of chhe) {
        
        if (!(n in number)) {
            let nn=coinv[n];
            console.log(nn);
            console.log("out");
            ch+=nn*16**puiss;
            puiss-=1; 
            continue;}
            ch+=n*16**puiss;
            puiss-=1; 
            
            
        }
    console.log(ch)
    document.getElementById("resuhe").textContent=ch

}
