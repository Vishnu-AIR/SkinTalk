from flask import Flask, request, jsonify
import json
from ultralytics import YOLO
from PIL import Image



app = Flask(__name__)

model = YOLO("ML/best (2) .pt")

# Define a route to process image data
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the uploaded image file
        image_file = request.files['image']

        # Save the image with the new format (JPG)
        new = Image.open(image_file)
        new.save('public/'+image_file.filename.split('.')[0]+'.jpg')

        image_file = 'public/image.jpg'

        if not image_file:
            return jsonify({'error': 'No image provided'}), 400

        # Make predictions with your model
        results = model.predict(source=image_file)

        # Process the results and create a response
        l = []
        names = {0: 'blackheads', 1: 'dark spot', 2: 'nodules', 3: 'papules', 4: 'pustules', 5: 'whiteheads'}

        for idx, result in enumerate(results[0].boxes.xyxy):
            l.append(names[results[0].boxes.cls[idx].item()])

        d = {}
        for key, value in names.items():
            d[value] = l.count(value)

        response_data = {
            'predictions': d,
            'message': 'Prediction successful'
        }

        return jsonify(response_data)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
