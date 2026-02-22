/*
=====================================
    JAVASCRIPT DOM COMPLETE PRACTICE
=====================================

This file demonstrates:
✔ Selecting elements
✔ Modifying content
✔ Styling elements
✔ Creating new elements
✔ Removing elements
✔ Event handling
✔ Traversing DOM
✔ Attributes handling
✔ Timers
*/

console.log("DOM Learning Script Started 🚀");

/* =========================
   1️⃣ SELECTING ELEMENTS
========================= */

// Select by ID
const title = document.getElementById("main-title");
console.log("Title Element:", title);

// Select by Class
const paragraphs = document.getElementsByClassName("description");
console.log("Paragraphs:", paragraphs);

// Select by Query Selector (modern way)
const firstParagraph = document.querySelector(".description");
console.log("First Paragraph:", firstParagraph);

// Select all using querySelectorAll
const allParagraphs = document.querySelectorAll(".description");
console.log("All Paragraphs:", allParagraphs);


/* =========================
   2️⃣ MODIFYING CONTENT
========================= */

// Change text
title.innerText = "DOM Manipulation in Action 🔥";

// Change HTML
firstParagraph.innerHTML = "<strong>This text is bold now!</strong>";


/* =========================
   3️⃣ STYLING ELEMENTS
========================= */

title.style.color = "blue";
title.style.fontSize = "30px";


/* =========================
   4️⃣ ADD / REMOVE CLASS
========================= */

title.classList.add("highlight");

// Remove class after 3 seconds
setTimeout(() => {
    title.classList.remove("highlight");
    console.log("Highlight removed");
}, 3000);


/* =========================
   5️⃣ CREATING NEW ELEMENT
========================= */

// Create new list item
const newItem = document.createElement("li");
newItem.innerText = "Item 3 (Created by JS)";

// Append to list
document.getElementById("list").appendChild(newItem);


/* =========================
   6️⃣ REMOVING ELEMENT
========================= */

setTimeout(() => {
    newItem.remove();
    console.log("Item removed after 5 seconds");
}, 5000);


/* =========================
   7️⃣ EVENT LISTENER
========================= */

const button = document.getElementById("clickBtn");

button.addEventListener("click", function () {
    alert("Button Clicked!");
    console.log("Button was clicked!");
});


/* =========================
   8️⃣ DOM TRAVERSING
========================= */

const box = document.getElementById("box1");

// Parent element
console.log("Parent of Box:", box.parentElement);

// First child of body
console.log("First child of body:", document.body.firstElementChild);


/* =========================
   9️⃣ ATTRIBUTE HANDLING
========================= */

// Set attribute
box.setAttribute("data-info", "custom-data");

// Get attribute
console.log("Custom Attribute:", box.getAttribute("data-info"));


/* =========================
   🔟 TIMER EXAMPLE
========================= */

let counter = 0;

const interval = setInterval(() => {
    counter++;
    console.log("Counter:", counter);

    if (counter === 5) {
        clearInterval(interval);
        console.log("Timer stopped");
    }
}, 1000);


/* =========================
   END OF FILE
========================= */

console.log("All DOM operations executed ✅");