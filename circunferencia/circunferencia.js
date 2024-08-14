const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const radius = Number(frm.radius.value);
    var calc = Number(Math.PI * (Math.pow(radius, 2)));
    const cm = frm.cm.checked;
    if(cm){
        resp.innerHTML = `Area: ${calc.toFixed(2)} (cm2)`
    }
    else{
        resp.innerHTML = `Area: ${calc.toFixed(2)} (m2)`
    }
})

frm.addEventListener("submit", (e) => {
    console.log("Form submitted");
    // Rest of your code...
});