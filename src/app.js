document.addEventListener('DOMContentLoaded', function () {
    const postBtn = document.getElementById('post');
    const tweetText = document.getElementById('textArea');
    const responseDiv = document.getElementById('response');
    postBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const tweet = tweetText.value;
        console.log(tweet)
        // Make an HTTP POST request to the backend
        fetch(`https://one00x-data-analysis.onrender.com/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ post: { content: tweet } }),
            })
            .then((response) => {
                if (response.ok) {
                return response.json(); // Parse response as JSON
                } else {
                throw new Error("Tweet posting failed"); // Handle failure
                }
            })
            .then((data) => {
                // Handle successful tweet post
                responseDiv.innerText = `Tweet posted successfully! Tweet ID: ${data.id}`;
            })
            .catch((error) => {
                // Handle error
                responseDiv.innerText = `Error: ${error.message}`;
        });
    });
});

const textArea = document.getElementById('textArea');
const charCountElement = document.getElementById('charCount');

textArea.addEventListener('input', updateCharacterCount);

function updateCharacterCount() {
    const text = textArea.value;
    const characterCount = text.length;
    if(characterCount > 280) {
        console.log("greater than 280")
        charCountElement.classList.remove("text-neutral-500");
        charCountElement.classList.add("text-error");
    }else{
        console.log("less than 280")
        charCountElement.classList.remove("text-error");
        charCountElement.classList.add("text-neutral-500");
    }
    charCountElement.textContent = characterCount + "/280";
}