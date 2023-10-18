document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem) => {
        const popout = gridItem.querySelector(".popout");
        const closePopoutBtn = gridItem.querySelector(".close-popout");

        // Show the popout when the grid item is clicked
        gridItem.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click event from propagating to the container
            popout.style.display = "flex";
        });

        // Close the popout when the "Close" button is clicked
        closePopoutBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click event from propagating to the container
            popout.style.display = "none";
        });
    });

    // Close popouts when clicking anywhere outside of them
    document.addEventListener("click", (e) => {
        gridItems.forEach((gridItem) => {
            const popout = gridItem.querySelector(".popout");
            if (popout && e.target !== gridItem && !gridItem.contains(e.target)) {
                popout.style.display = "none";
            }
        });
    });
});