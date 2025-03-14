document.getElementById("searchBar").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let memes = document.querySelectorAll(".meme");

    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    memes.forEach(meme => {
        let title = meme.querySelector("h3").innerText.toLowerCase();
        if (title.includes(query)) {
            let result = document.createElement("p");
            result.innerText = title;
            searchResults.appendChild(result);
        }
    });
});
