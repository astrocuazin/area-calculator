const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    const base = Number(frm.Sbase.value);
    const BASE = Number(frm.Bbase.value);
    const height = Number(frm.height.value);
    var calc = ((BASE + base) * height) / 2
    const cm = frm.cm.checked;
    if(cm) {
        resp.innerHTML = `Area: ${calc.toFixed(2)} (cm2)`
    }
    else{
        resp.innerHTML = `Area: ${calc.toFixed(2)} (m2)`
    }
    e.preventDefault();
})