for (let i = 0; i<document.querySelectorAll(".content").length; i++) {
    document.addEventListener("keydown", function(event) {
        buttonAnimation(event.key);

        switch (event.key) {
            case "w":
                const tom1 = new Audio('/assets/assets/sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                const tom2 = new Audio('/assets/assets/sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                const tom3 = new Audio('/assets/assets/sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                const tom4 = new Audio('/assets/assets/sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                const snare = new Audio('/assets/assets/sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                const crash = new Audio('/assets/assets/sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                const kick = new Audio('/assets/assets/sounds/kick-bass.mp3');
                kick.play();
                break;
        }
    });
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(".content-" + currentKey + "-button");

    activeButton.classList.add("buttonPressed");
    setTimeout(function() {activeButton.classList.remove("buttonPressed")},150);
}
