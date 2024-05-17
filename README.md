# ELI5: AI-Powered Simplification Tool

Welcome to the ELI5 repository! 🎉 This project leverages the power of GPT-3.5 Turbo to transform complex concepts into simple, child-friendly explanations. Designed with young learners in mind, ELI5 aims to make learning intuitive, engaging, and accessible for everyone.

## 🌟 Features

- **User-Friendly Interface**: A vibrant and interactive frontend built with React.
- **Real-Time Simplifications**: Complex queries are simplified on-the-fly using GPT-3.5 Turbo.
- **Kid-Friendly Design**: The UI/UX is tailored to young children with playful animations and easy-to-understand instructions.
- **Scalable Backend**: Developed using Flask, ensuring robust performance and easy scalability.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Python and Flask installed
- An OpenAI API key

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/isaq12/eli5.git
    cd eli5
    ```

2. **Install frontend dependencies**:
    ```bash
    cd ../simplification-frontend
    npm install
    ```

3. **Install backend dependencies**:
    ```bash
    cd ../simplification-backend
    pip install -r requirements.txt
    ```

4. **Set up your OpenAI API key**:
    - Create a `.env` file in the backend directory:
        ```bash
        touch .env
        ```
    - Add your OpenAI API key to the `.env` file:
        ```
        OPENAI_API_KEY=your_openai_api_key
        ```

### Running the Application

1. **Start the backend server**:
    ```bash
    cd ../simplification-backend
    python app.py
    ```

2. **Start the frontend development server**:
    ```bash
    cd ../simplification-frontend
    npm start
    ```

3. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## 🎥 Demo

![ELI5 Working](https://github.com/isaq12/ELI5/blob/master/simplification-frontend/ELI5.gif)

## 📚 Usage

1. **Enter a query** in the input box.
2. **Submit your query** by clicking the "Simplify" button.
3. **View the simplified explanation** generated by GPT-3.5 Turbo.

## 🛠️ Technology Stack

- **Frontend**: React, Axios
- **Backend**: Flask, Python
- **AI Model**: OpenAI GPT-3.5 Turbo

## 📈 Future Enhancements

- **Voice Output**: Integrating text-to-speech functionality for auditory learners.
- **Image Generation**: Adding visual aids to accompany textual explanations.
- **User Feedback**: Implementing a feedback mechanism.

## 👥 Contributing

Contributions are welcome to make ELI5 even better!

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

A special thank you to Dr. Sotak for guidance and invaluable insights throughout the development of this project.

---

Feel free to reach out if you have any questions or need further assistance. Happy learning! 🎓✨