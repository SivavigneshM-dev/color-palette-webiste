document.addEventListener("DOMContentLoaded", () => {
    const colorDivs = document.querySelectorAll(".list2 div");
    alert("Press Any Key to Change the colors!");
    function getRandomColor() {
        const letter = "0123456789ABCDEF"; 
        let color = "#"
        for (let i = 0; i < 6; i++){
            color += letter[Math.floor(Math.random() * 16 )];
        }

        return color;
    }

    function changeColors() {
        colorDivs.forEach(div => {
            div.style.backgroundColor = getRandomColor();
        });
    }
        

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        changeColors();
    });
});
