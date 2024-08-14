const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    const base = Number(frm.base.value);
    const height = Number(frm.height.value);
    const cm = frm.cm.checked;
    const calc = base * height;
    if(cm) {
    resp.innerHTML = `Area: ${calc.toFixed(2)} (cm2)`
    }
    else{
    resp.innerHTML = `Area: ${calc.toFixed(2)} (m2)`
    }
    e.preventDefault();
})