var data1 = document.getElementById('p1');
var data2 = document.getElementsByClassName('class1');
var data3 = document.getElementsByTagName('h4');


console.log("data1", data1.innerHTML);
// console.log("data2", data2);

for (let index = 0; index < data2.length; index++) {
    const element = data2[index];
    console.log("index", index, "element", element.innerHTML);
}

const tds = document.getElementsByTagName('td'); //=> []
const kq = document.getElementById('kq');
console.log("tds",tds);
if(tds.length > 0) {
    for (let index = 0; index < tds.length; index++) {
        const element = tds[index];
        element.addEventListener('click', function(e) {
            console.log("here", this.innerHTML);
        });
    }
}

document.getElementById('input6').addEventListener('click', function(event) {
    console.log("here", event.target.value);
})
