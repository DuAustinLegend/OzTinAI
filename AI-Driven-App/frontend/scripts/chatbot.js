async function sendChat() {
    const userInput = document.getElementById("chatInput").value;
    const response = await fetch("/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();
    document.getElementById("chatOutput").innerText = data.response;
}