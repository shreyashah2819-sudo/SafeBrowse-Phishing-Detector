SafeBrowse - Phishing Detector

Overview

SafeBrowse - Phishing Detector is a browser-based cybersecurity extension developed to help users identify potentially suspicious websites. The extension analyzes the URL of the currently opened website and calculates a risk score based on predefined phishing indicators.

The project aims to improve user awareness and provide a simple mechanism for detecting suspicious websites before sensitive information is entered.

Features

- URL scanning and analysis
- Risk score generation (0–100)
- Detection of suspicious keywords
- Detection of IP address-based URLs
- Detection of excessive subdomains
- Detection of unusual URL patterns
- Color-coded threat status display
- Simple and user-friendly browser extension interface

Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extension API

Project Structure

SafeBrowse-Phishing-Detector/

├── manifest.json

├── popup.html

├── popup.js

├── style.css

├── README.md

└── screenshots/

How It Works

1. The user opens a website.
2. The user clicks the SafeBrowse extension.
3. The extension retrieves the current URL.
4. The URL is analyzed using multiple security checks.
5. A risk score is generated.
6. The website is classified as:
   - SAFE
   - SUSPICIOUS
   - HIGH RISK

Security Checks Implemented

- Presence of special characters (@)
- Suspicious keywords such as:
  - login
  - verify
  - secure
  - update
  - account
  - bank
  - payment
  - wallet
  - signin
  - confirm
- Long URL detection
- IP address URL detection
- Excessive subdomain detection
- URL structure analysis

Example Output

Risk Score: 0/100
Status: SAFE

Risk Score: 70/100
Status: HIGH RISK

Limitations

- The extension uses rule-based URL analysis.
- It does not analyze webpage content.
- It does not use machine learning models.
- It does not connect to external phishing databases.
- Some phishing websites may not be detected if their URLs appear legitimate.

..Future Scope..

- Machine Learning-based phishing detection
- Real-time threat intelligence integration
- Blacklist and reputation checking
- Content-based webpage analysis
- Browser notification system
- Cloud-based threat detection

Conclusion

SafeBrowse - Phishing Detector is a cybersecurity-focused browser extension that helps users identify potentially suspicious websites through URL analysis and risk scoring. The project demonstrates practical application of web security concepts and phishing detection techniques in a browser environment.

Author

Shah Shreya A
Diploma in Information Technology Engineering
Cybersecurity Internship Project
