# UC Simple Student Help Chatbot (AWS Lex V2)

## 📌 Project Overview
This project is a **student help desk chatbot** built using **AWS Lex V2**, **AWS Lambda**, **JavaScript (HTML/CSS)**, and **index.json**.  
It is designed to assist students with common queries related to university services, such as course registration, campus facilities, and academic resources.

---

## 🔒 Security Considerations

For this academic project, AWS credentials are shown as placeholders in the JavaScript file.  
Due to time limitations and the complexity of securely managing authentication, I was not able to implement full security best practices.  

However, in a **real production environment**, credentials must never be exposed in client-side code. Instead:

1. **Use IAM Roles with restricted permissions**  
   - Provides temporary, limited-scope credentials for interacting with AWS services (such as Lex).  

2. **Move sensitive credentials to server-side code (Lambda or a backend API)**  
   - The frontend should never directly contain AWS keys.  
   - A secure backend service handles requests and communicates with AWS resources.  

3. **Never hardcode credentials in public repositories**  
   - Hardcoding exposes your AWS account to misuse and possible cost/security risks.  

➡️ In this project, keys are replaced with placeholders and comments to demonstrate integration only. No real credentials are published.


## 🚀 Features
- Natural language understanding powered by AWS Lex V2
- AWS Lambda integration for dynamic responses
- Simple and user-friendly HTML/CSS/JavaScript front-end
- Easily configurable utterances and intents
- Scalable and deployable on any platform

## 📥 Download Project
You can download the full project as a ZIP file here:  
[➡️ Download Student_Help_Chat (https://github.com/Cheerstanka2023/UC_Simple_Student_Help_Chatbot_AWSLexV2.git)

---

## ⚙️ Installation & Setup
1. **Clone this repository**:
   ```bash
   git clone https://github.com/Cheerstanka2023/UC_Simple_Student_Help_Chatbot_AWSLexV2.git

---
2. /Open the project folder:
   cd UC_Simple_Student_Help_Chatbot_AWSLexV2

3. Configure AWS Credentials:

   Create an IAM user in AWS with permissions for Lex and Lambda

   Save your AWS Access Key and Secret Key

4. Deploy Lambda Function:

   Upload lambda/index.js in your AWS Lambda function

   Link Lambda to your Lex V2 bot

5. Run locally:

   Open index.html in your browser

## 🛠️ Tech Stack
- **AWS Lex V2** – Chatbot NLP engine
- **AWS Lambda** – Backend fulfillment logic
- **JavaScript (HTML/CSS)** – Front-end interface
- **JSON** – Structured data for responses

---

## 📂 Project Structure
/project-root
│
├── index.html # Front-end UI
├── style.css # Chatbot UI styling
├── script.js # JavaScript for chatbot functionality
├── lambda/index.js # AWS Lambda fulfillment code
├── index.json # JSON data for responses
├── screenshots/ # Project screenshots
└── README.md # Project documentation

---
📷 Screenshots

### Chatbot UI
![Chatbot UI](screenshots/chatbot_ui.png)

### AWS Lex V2 Bot Configuration
![AWS Lex V2 Config](screenshots/lex_config.png)

### AWS Lambda Fulfillment
![AWS Lambda](screenshots/lambda_code.png)


👨‍🎓 Author

Name: Tanka Chapagain

University: University of the Cumberlands

Course: Capstone Project


📜 License

This project is for academic purposes only. Not intended for production use without further enhancement.


