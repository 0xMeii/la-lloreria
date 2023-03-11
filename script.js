document.addEventListener("DOMContentLoaded", function () {
    const reasonForm = document.getElementById("reason-form");
    const reasonParagraph = document.getElementById("reason-paragraph");
    const reasonSection = document.getElementById("reason-section");
    const danceSection = document.getElementById("dance-section");

    reasonForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const reasonInput = document.getElementById("reason");
      const reason = reasonInput.value;
      reasonParagraph.innerText = reason;
      reasonInput.value = "";
      danceSection.style.display = "block";
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });
});
