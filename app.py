from flask import Flask, render_template, request

app = Flask(__name__)

# Portfolio Data (Optional: Move this to a separate file if needed)
portfolio_data = {
    "name": "Punna Divya",
    "email": "divyapunna2507@gmail.com",
    "phone": "+91 75076 73276",
    "linkedin": "https://www.linkedin.com/in/punnadivya1234/",
    "github": "https://github.com/divya2507punna",
    "portfolio": "https://divya2507punna.github.io",
    "profile_summary": "Aspiring Python Backend Developer with hands-on experience in Python, SQL, and data automation.",
    "technical_skills": ["Python", "SQL", "Pandas", "NumPy", "MySQL", "Data Analysis", "Excel", "Git"],
    "projects": [
        {
            "title": "Exploratory Data Analysis (EDA) on Customer Churn",
            "technologies": "Python, Pandas, Matplotlib",
            "description": "Analyzed customer churn trends using Python and visualized insights with Matplotlib.",
            "github_link": "https://github.com/divya2507punna/customer-churn-analysis"
        },
        {
            "title": "E-commerce Data Analysis",
            "technologies": "Python, MySQL",
            "description": "Developed a command-line-based inventory tracking system with MySQL.",
            "github_link": "https://github.com/divya2507punna/ecommerce-data-analysis"
        }
    ]
}

# Route for Home Page
@app.route("/")
def home():
    return render_template("index.html", data=portfolio_data)

# Route for Contact Form Submission
@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        print(f"New Message: {name} ({email}) - {message}")  # Debugging
    return render_template("index.html", thank_you=(request.method == "POST"))

if __name__ == "__main__":
    app.run(debug=True)
