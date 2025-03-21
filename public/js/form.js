const submit = document.getElementById("submit");
submit.addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const data = new FormData();
                
    data.append("email",email);
    data.append("text",message);

    const options = {
        method: "POST",
        body: data
    }
    const uri = "/form";
    fetch(uri, options).then(response => response.text()).then((doc) => {

        const oldanchor = document.getElementById("anchor");
        oldanchor.remove();

        const newanchor = document.createElement("div");
        newanchor.setAttribute("id","nanchor");
        newanchor.innerHTML = doc;
        document.body.append(newanchor);

        setTimeout(() => {
            newanchor.remove();
        }, 5000);
    })
});