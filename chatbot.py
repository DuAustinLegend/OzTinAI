import random

class ChatBot:
    def get_response(self, user_input):
        responses = ["Hello!", "How can I help?", "I'm here to assist!"]
        return random.choice(responses)

