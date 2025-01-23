const fetchShortenedURL = async () => {
  const response = await fetch("/links");
  const links = await response.json();
  console.log("links", links);

  const list = document.getElementById("shortened-urls");
  list.innerHTML = ""; // Clear the list before adding new items

  // Corrected: Iterate over the `links` object
  for (const [shortCode, url] of Object.entries(links)) {
    const li = document.createElement("li");
    const truncatedURL = url.length >= 30 ? `${url.slice(0, 30)}...` : url;
    li.innerHTML = `<a href="/${shortCode}" target="_blank">${window.location.origin}/${shortCode}</a> -> ${truncatedURL}`;
    list.appendChild(li);
  }
};

const form = document.getElementById("shorten-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const url = formData.get("url");
  const shortCode = formData.get("shortenCode");

  console.log(url);
  console.log(shortCode);

  try {
    const response = await fetch("/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shortCode }),
    });

    if (response.ok) {
      fetchShortenedURL(); // Fetch and update the list of shortened URLs
      alert("Form Submitted successfully");
      event.target.reset(); // Reset the form after submission
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.log(error);
  }
});
