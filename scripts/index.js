const tbody = document.getElementById("clothing-body");

async function render() {
    const items = await storeHttp.getAll();
    tbody.innerHTML = "";

    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-3">Nuk ka artikuj në dyqan</td></tr>`;
        return;
    }

    for (const c of items) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${c.emri}</td>
            <td>${c.brandi}</td>
            <td>${c.madhesia}</td>
            <td>${c.cmimi.toFixed(2)} L</td>
            <td>${c.kategoria}</td>
            <td>
                <span class="badge ${c.neStoq ? 'bg-success' : 'bg-danger'}">
                    ${c.neStoq ? 'Po' : 'Jo'}
                </span>
            </td>
            <td class="text-end">
                <div class="btn-group btn-group-sm" role="group">
                    <a class="btn btn-outline-secondary" href="edit-clothing.html?id=${c.id}">Ndrysho</a>
                    <button class="btn btn-outline-danger" data-action="delete" data-id="${c.id}">Fshi</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

tbody.addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-action='delete']");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (confirm("Jeni i sigurt që doni të fshini këtë artikull?")) {
        await storeHttp.delete(id);
        render();
    }
});

render();
