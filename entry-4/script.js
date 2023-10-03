document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".grid-item");

    items.forEach((item) => {
        const popout = item.querySelector(".popout");
        const closeBtn = item.querySelector(".close-popout");

        // Show the popout when the item is clicked
        item.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click event from propagating to the container
            popout.style.display = "block";
        });

        // Close the popout when the "Close" button is clicked
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click event from propagating to the container
            popout.style.display = "none";
        });
    });

    // Close popouts when clicking anywhere outside of them
    document.addEventListener("click", (e) => {
        items.forEach((item) => {
            const popout = item.querySelector(".popout");
            if (popout && e.target !== item && !item.contains(e.target)) {
                popout.style.display = "none";
            }
        });
    });
});