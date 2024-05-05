const buttons = document.querySelectorAll('.btnblink');
        for (var index = 0; index < buttons.length; index++) {
            buttons[index].addEventListener('click', (event) => {
                event.preventDefault();

                var overlay = document.createElement('span');
                overlay.classList.add("overlay");

                let x = event.clientX - event.target.offsetLeft;
                let y = event.clientY - event.target.offsetTop;
                overlay.style.left = x + "px";
                overlay.style.top = y + "px";

                event.target.appendChild(overlay);

                setTimeout(() =>{
                    overlay.remove();
                }, 500);

                console.log(overlay);
            });
            
}

var cards = document.querySelectorAll(".ctn-fakeimg");
cards.forEach(card => {
    card.onmousemove = function(e){
        console.log("card")
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
}
});
