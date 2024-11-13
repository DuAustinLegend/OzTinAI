function loadChatbot() {
    document.getElementById("content").innerHTML = "<h2>Chatbot</h2><input id='chatInput' type='text'><button onclick='sendChat()'>Send</button><div id='chatOutput'></div>";
}

function loadImageRecognition() {
    document.getElementById("content").innerHTML = "<h2>Image Recognition</h2><input type='file' id='imageUpload' accept='image/*'><button onclick='analyzeImage()'>Analyze</button><div id='imageResult'></div>";
}

function loadRecommendation() {
    document.getElementById("content").innerHTML = "<h2>Recommendations</h2><input id='userInput' type='text'><button onclick='getRecommendations()'>Get Recommendations</button><div id='recommendationOutput'></div>";
}

function loadDoodleRecognizer() {
    document.getElementById("content").innerHTML = "<h2>Doodle Recognizer</h2><canvas id='doodleCanvas' width='200' height='200'></canvas><button onclick='recognizeDoodle()'>Recognize</button><div id='doodleResult'></div>";
}

function loadSentimentAnalyzer() {
    document.getElementById("content").innerHTML = "<h2>Sentiment Analyzer</h2><textarea id='sentimentInput'></textarea><button onclick='analyzeSentiment()'>Analyze</button><div id='sentimentResult'></div>";
}