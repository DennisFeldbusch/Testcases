// Test case for event handler URL detection

// Case 1: addEventListener with inline arrow function
document.addEventListener("click", () => {
    fetch("https://api.example.com/click");
});

// Case 2: addEventListener with named function variable
function handleMouseOver() {
    fetch("https://analytics.example.com/hover");
}
element.addEventListener("mouseover", handleMouseOver);

// Case 3: Direct property assignment
button.onclick = function() {
    fetch("https://tracking.com/button-click");
};

// Case 4: Multiple listeners on same element
const element = document.getElementById("myElement");
element.addEventListener("mouseover", () => {
    fetch("https://api.example.com/mouse-in");
});

element.addEventListener("mouseout", () => {
    fetch("https://api.example.com/mouse-out");
});

// Case 5: Event handler with conditional URLs
document.addEventListener("scroll", () => {
    if (userLoggedIn) {
        fetch("https://analytics.com/scroll-authenticated");
    } else {
        fetch("https://analytics.com/scroll-anonymous");
    }
});

// Case 6: Event handler with dynamic URLs
button.addEventListener("click", (event) => {
    const url = event.target.dataset.trackingUrl;
    fetch(url);
});
