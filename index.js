    // Initialize EmailJS
    (function() {
      emailjs.init("aC9vYqLvG6aTZfx2B"); // Replace with your actual public key
    })();

    const form = document.getElementById('contact-form');
    const button = form.querySelector('button');
    const toast = document.getElementById('toast');
    const successMsg = document.getElementById('success-msg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      button.disabled = true;
      button.textContent = "Sending...";
      successMsg.textContent = "";

      emailjs.sendForm('service_s3hyspk', 'template_w5rfl8g', this)
        .then(() => {
          showToast("✅ Email sent successfully!");
          successMsg.textContent = "Message delivered. We'll get back to you soon!";
          form.reset();
        }, (error) => {
          showToast("❌ Failed to send email: " + error.text);
        })
        .finally(() => {
          button.disabled = false;
          button.textContent = "Send Message";
        });
    });

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }

    function toggleTheme() {
      document.body.classList.toggle("dark");
    }
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    