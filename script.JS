document.getElementById("memeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    let title = document.getElementById("title").value;
    let imageFile = document.getElementById("image").files[0];

    // Validate input
    if (!title || !imageFile) {
        alert("Please enter a title and upload an image.");
        return;
    }

    // Create a file reader to display the image
    let reader = new FileReader();
    reader.onload = function(event) {
        let memeContainer = document.createElement("div");
        memeContainer.classList.add("meme");

        let memeTitle = document.createElement("h3");
        memeTitle.innerText = title;

        let memeImage = document.createElement("img");
        memeImage.src = event.target.result;
        memeImage.alt = title;

        // Create voting section
        let voteSection = document.createElement("div");
        voteSection.classList.add("vote-section");

        let upvoteButton = document.createElement("button");
        upvoteButton.innerText = "👍";
        upvoteButton.classList.add("upvote");
        upvoteButton.onclick = function() {
            let count = this.nextElementSibling;
            count.innerText = parseInt(count.innerText) + 1;
        };

        let voteCount = document.createElement("span");
        voteCount.innerText = "0";

        let downvoteButton = document.createElement("button");
        downvoteButton.innerText = "👎";
        downvoteButton.classList.add("downvote");
        downvoteButton.onclick = function() {
            let count = this.previousElementSibling;
            count.innerText = parseInt(count.innerText) - 1;
        };

        // Append elements
        voteSection.appendChild(upvoteButton);
        voteSection.appendChild(voteCount);
        voteSection.appendChild(downvoteButton);

        memeContainer.appendChild(memeTitle);
        memeContainer.appendChild(memeImage);
        memeContainer.appendChild(voteSection);

        document.getElementById("memeGallery").appendChild(memeContainer);
    };

    reader.readAsDataURL(imageFile);

    // Reset form
    document.getElementById("memeForm").reset();
    document.getElementById("message").innerText = "Meme submitted successfully!";
});
