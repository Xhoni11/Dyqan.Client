const form = document.getElementById("clothing-form");
const emri = document.getElementById("emri");
const brandi = document.getElementById("brandi");
const madhesia = document.getElementById("madhesia");
const cmimi = document.getElementById("cmimi");
const kategoria = document.getElementById("kategoria");
const neStoq = document.getElementById("neStoq");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await storeHttp.add({
        emri: emri.value.trim(),
        brandi: brandi.value.trim(),
        madhesia: madhesia.value.trim(),
        cmimi: parseFloat(cmimi.value),
        kategoria: kategoria.value.trim(),
        neStoq: neStoq.checked
    });
    window.location.href = "index.html";
});
