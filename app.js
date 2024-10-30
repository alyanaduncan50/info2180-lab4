document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value.trim();
    const resultDiv = document.getElementById("result");

    const url = `superheroes.php?query=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            resultDiv.innerHTML = data;
            document.getElementById("search-input").value = '';
        })
        .catch(error => {
            console.error("Error:", error);
            resultDiv.innerHTML = '<p class="error">An error occurred. Please try again later.</p>';
        });
});
