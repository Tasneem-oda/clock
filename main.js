
function gettime(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let secion = 'AM';
    if (h==0){
        h=12
    }
    else if (h >12){
        h =h-12
        secion  = 'PM';
    }
    h =(h<10)? '0'+h:h;
    m =(h<10)? '0'+m:m;
    s =(h<10)? '0'+s:s;
    let clock = h + ':' + m + ':' + s+' '+ secion;
    document.querySelector('.clock').innerHTML = clock;
    setTimeout(gettime, 1000);
}
gettime();
