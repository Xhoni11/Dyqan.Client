const form = document.getElementById("clothing-form");
const emri = document.getElementById("emri");
const brandi = document.getElementById("brandi");
const madhesia = document.getElementById("madhesia");
const cmimi = document.getElementById("cmimi");
const kategoria = document.getElementById("kategoria");
const neStoq = document.getElementById("neStoq");

const id = Number(new URLSearchParams(window.location.search).get("id"));

async function load() {
    const clothing = await storeHttp.getById(id);
    if (!clothing) {
        alert("Artikulli nuk u gjet.");
        window.location.href = "index.html";
        return;
    }
    emri.value = clothing.emri;
    brandi.value = clothing.brandi;
    madhesia.value = clothing.madhesia;
    cmimi.value = clothing.cmimi;
    kategoria.value = clothing.kategoria;
    neStoq.checked = clothing.neStoq;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await storeHttp.update(id, {
        emri: emri.value.trim(),
        brandi: brandi.value.trim(),
        madhesia: madhesia.value.trim(),
        cmimi: parseFloat(cmimi.value),
        kategoria: kategoria.value.trim(),
        neStoq: neStoq.checked
    });
    window.location.href = "index.html";
});

load();
