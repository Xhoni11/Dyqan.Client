const API_BASE_URL = "http://localhost:5273/clothing";

const storeHttp = {
    async getAll() {
        const res = await fetch(API_BASE_URL);
        if (!res.ok) throw new Error(`Gabim gjatë ngarkimit: ${res.status}`);
        return res.json();
    },
    async getById(id) {
        const res = await fetch(`${API_BASE_URL}/${id}`);
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`Gabim gjatë ngarkimit të artikullit: ${res.status}`);
        return res.json();
    },
    async add(clothing) {
        const res = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(clothing)
        });
        if (!res.ok) throw new Error(`Gabim gjatë shtimit: ${res.status}`);
        return res.json();
    },
    async update(id, clothing) {
        const res = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...clothing, id })
        });
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(`Gabim gjatë përditësimit: ${res.status}`);
        return true;
    },
    async delete(id) {
        const res = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(`Gabim gjatë fshirjes: ${res.status}`);
        return true;
    }
};
