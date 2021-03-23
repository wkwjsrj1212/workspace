function printDate(){

    let message = '메세지1 ';
    let type_boolean = false;
    document.getElementById("date").innerHTML = Date();
    //alert(`alert ${message}`+message);//역따옴표
    let a = document.getElementById("date");

    let r,g,b;
    setInterval(() => {

        r=getRandomInt(33, 188)
        g=getRandomInt(33, 188)
        b=getRandomInt(33, 188)
        a.style.color = `rgb(${r},${g},${b})`;
        document.getElementById("date").innerHTML = `${r}${g}${b}`;

        
        console.log(r,g,b);
    }, 1000);

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

function sleep(ms) {
    const wakeUpTime = Date.now() + ms
    while (Date.now() < wakeUpTime) {}
  }