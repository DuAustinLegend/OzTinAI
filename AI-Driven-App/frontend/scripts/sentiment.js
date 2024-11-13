async function analyzeSentiment() {
    const sentimentInput = document.getElementById("sentimentInput").value;
    const response = await fetch("/sentiment_analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: sentimentInput })
    });
    const data = await response.json();
    document.getElementById("sentimentResult").innerText = `Sentiment score: ${data.sentiment}`;
}