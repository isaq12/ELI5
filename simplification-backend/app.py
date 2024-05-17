from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)
openai.api_key = ''

@app.route('/simplify', methods=['POST'])
def simplify():
    data = request.get_json()
    input_text = data['text']

    # Estimating that one word is roughly equivalent to 4 tokens on average.
    word_limit = 75
    token_estimate = word_limit * 4  # This is a rough estimate.

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant for children. Use simple language, be concise, and remember to keep answers under 75 words. Be cheerful and use emojis to make explanations more engaging."},
                {"role": "user", "content": f"Can you explain the concept of {input_text} to a 5-year-old? Try to keep your explanation within 75 words and use emojis whenever possible to make it fun! 🌟📘. Also, you are an expert PHd teacher of 5 year olds that undnerstand children's brain and answers appropriately."}
            ],
            max_tokens=token_estimate  # Limit the number of tokens in the response
        )
        simplified_text = response['choices'][0]['message']['content']
        
        # Further processing to strictly enforce the word limit
        # Split the response into words, and join the first 10 words only
        simplified_words = simplified_text.split()
        strict_word_limit_text = ' '.join(simplified_words[:word_limit])
        
        return jsonify({"simplifiedText": strict_word_limit_text})
    except Exception as e:
        app.logger.error(f"An error occurred: {str(e)}")
        return jsonify({"error": "An error occurred while simplifying the text"}), 500

if __name__ == '__main__':
    app.run(debug=True)