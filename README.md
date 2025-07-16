# Emailer Project

lauch link : https://emailer-cyan.vercel.app

This project demonstrates how to use [EmailJS](https://www.emailjs.com/) to send emails directly from HTML and JavaScript without a backend server.

## What is EmailJS?
EmailJS is a service that allows you to send emails using client-side technologies only. It connects your email service (like Gmail, Outlook, etc.) to your web application via their API.

---

## How to Use EmailJS in This Project

### 1. Sign Up and Set Up EmailJS
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2. Add an email service (e.g., Gmail, Outlook) in the Email Services section.
3. Create an email template in the Email Templates section.
4. Note your **Service ID**, **Template ID**, and **Public Key** (found in Account > API Keys).

---

### 2. Add EmailJS to Your HTML
Add the EmailJS SDK to your HTML file, before your script:

```html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
```

---

### 3. Initialize EmailJS in JavaScript
Initialize EmailJS with your Public Key:

```js
(function() {
  emailjs.init('YOUR_PUBLIC_KEY');
})();
```

---

### 4. Send an Email from a Form
Example HTML form:

```html
<form id="contact-form">
  <input type="text" name="user_name" placeholder="Your Name" required />
  <input type="email" name="user_email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>
```

Example JavaScript to send the form:

```js
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('Email sent successfully!');
    }, function(error) {
      alert('Failed to send email: ' + error);
    });
});
```

---

### 5. Replace Placeholders
- Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with your actual values from the EmailJS dashboard.

---

## Useful Links
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS CDN](https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js)

---

## License
This project is for demonstration purposes only. 
