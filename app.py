from flask import Flask, request, jsonify
from chatbot import ChatBot
from image_recognition import recognize_image
from recommendation import recommend
from doodle_recognizer import recognize_doodle
from sentiment_analyzer import analyze_sentiment

app = Flask(__name__)

# Example routes
@app.route('/')
def home():
    return "Welcome to the AI-Driven App!"

@app.route('/chatbot', methods=['POST'])
def chatbot_route():
    data = request.get_json()
    user_input = data.get("input")
    bot = ChatBot()
    response = bot.get_response(user_input)
    return jsonify({"response": response})

@app.route('/image_recognition', methods=['POST'])
def image_recognition_route():
    image_file = request.files.get('image')
    result = recognize_image(image_file)
    return jsonify({"result": result})

@app.route('/recommend', methods=['POST'])
def recommend_route():
    user_preferences = request.get_json().get("preferences")
    recommendations = recommend(user_preferences)
    return jsonify({"recommendations": recommendations})

@app.route('/doodle_recognizer', methods=['POST'])
def doodle_route():
    doodle_image = request.files.get('doodle')
    result = recognize_doodle(doodle_image)
    return jsonify({"result": result})

@app.route('/sentiment', methods=['POST'])
def sentiment_route():
    text = request.get_json().get("text")
    polarity = analyze_sentiment(text)
    return jsonify({"sentiment": polarity})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
