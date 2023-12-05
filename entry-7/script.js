function generateAura() {
    const favoriteDish = document.getElementById("favoriteDish").value;
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    let auraColor = "#f0f0f0";
    const colors = [];

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            const selectedColor = getRandomColor();
            colors.push(selectedColor);
            auraColor = selectedColor;
        }
    }

    const polaroidBox = document.querySelector(".polaroid-box");
    polaroidBox.style.display = "block";

    // Auto-scroll to the bottom of the box
    const scrollBox = document.querySelector(".scroll-box");
    scrollBox.scrollTop = scrollBox.scrollHeight;

    setTimeout(() => {
        polaroidBox.style.opacity = 1;
        polaroidBox.style.transform = "translateY(0)";
        polaroidBox.style.animation = "polaroidAppear 1s forwards"; // Apply the animation
    }, 10);

    const auraColorDiv = document.querySelector(".aura-color");
    auraColorDiv.style.background = `radial-gradient(circle at 50% 75%, ${auraColor}, transparent)`;
}

function getRandomColor() {
    const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#ff7d00", "#90e0ef", "#f72585", "#780000"];
    return colors[Math.floor(Math.random() * colors.length)];
}
