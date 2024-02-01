function generateOTP() {
    const otpDisplay = document.getElementById('otpDisplay');
    
    // Generate a random 4-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Display the OTP
    otpDisplay.innerText = otp;
}