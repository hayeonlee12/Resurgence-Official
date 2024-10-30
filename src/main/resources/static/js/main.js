// Selecting elements
const addPostBtn = document.getElementById("addPostBtn");
const postFormContainer = document.getElementById("postFormContainer");
const postForm = document.getElementById("postForm");
const postContainer = document.getElementById("postContainer");

// Toggle form display
addPostBtn.addEventListener("click", () => {
    console.log("Add Post Button Clicked");
    postFormContainer.style.display = postFormContainer.style.display === "none" ? "block" : "none";
});

// Fetch all posts and display them
function fetchPosts() {
    fetch("/api/blog")
        .then(response => response.json())
        .then(posts => {
            postContainer.innerHTML = "";
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "col";
                postElement.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="blog-post-title" data-post-id="${post.id}" style="cursor: pointer; color: blue; text-decoration: underline;">
                                ${post.title}
                            </h5>
                            <p class="blog-post-meta">${new Date(post.date).toLocaleDateString()} by ${post.author}</p>
                            <p>${post.content}</p>
                            ${post.media ? `<img src="${post.media}" class="img-fluid mt-2" alt="Media">` : ""}
                        </div>
                    </div>
                `;
                postContainer.appendChild(postElement);

                // Add click event to the title
                const titleElement = postElement.querySelector(".blog-post-title");
                titleElement.addEventListener("click", () => {
                    // Redirect to individual post page with the post ID
                    window.location.href = `/resurgence/Blog/${post.id}`;
                });
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
}

// Handle new post submission
postForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");

    // Collect form data
    const post = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        date: document.getElementById("date").value,
        content: document.getElementById("content").value
    };

    // If a file is selected, add it to the post object (simplified for text handling only here)
    const mediaInput = document.getElementById("media");
    if (mediaInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
            post.media = event.target.result;  // Base64 encoded image
            submitPost(post);
        };
        reader.readAsDataURL(mediaInput.files[0]);
    } else {
        submitPost(post);
    }
});

// Function to submit post and refresh the list
function submitPost(post) {
    fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(data => {
            fetchPosts(); // Refresh posts
            postForm.reset(); // Clear form
            postFormContainer.style.display = "none"; // Hide form
            console.log("Post submitted and form hidden");
        })
        .catch(error => console.error("Error submitting post:", error));
}

// Load posts on page load
window.onload = fetchPosts;