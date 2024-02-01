function generateOTP() {
    const otpDisplay = document.getElementById('otpDisplay');
    
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Display the OTP
    otpDisplay.innerText = otp;
}
