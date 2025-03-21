document.addEventListener("DOMContentLoaded", () => {
    const cu = document.getElementById("contactus");
    cu.addEventListener("click", async function addfetch() {
        const uri = "/contactus";
        await fetch(uri).then(response => response.text()).then((doc) => {
            const anchor = document.createElement("div");
            document.body.append(anchor);
            anchor.innerHTML = doc;
            anchor.scrollIntoView({ behavior: "instant", block: "end" });
        });
        await fetch("js/form.js").then(response => response.text()).then((doc) => {
            const scriptx = new Function(doc);
            scriptx();
        });
    });
})