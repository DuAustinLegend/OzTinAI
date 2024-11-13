async function getRecommendations() {
    const userInput = document.getElementById("userInput").value;
    const response = await fetch("/recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences: userInput })
    });
    const data = await response.json();
    document.getElementById("recommendationOutput").innerText = data.recommendations.join(", ");
}