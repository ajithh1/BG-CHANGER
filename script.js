document.addEventListener('DOMContentLoaded', () => {
    const redButton = document.getElementById('redButton');
    const greenButton = document.getElementById('greenButton');
    const blueButton = document.getElementById('blueButton');
    const orangeButton = document.getElementById('orangeButton');
    const purpleButton = document.getElementById('purpleButton');
    const greyButton= document.getElementById('greyButton');
    const violetButton= document.getElementById('violetButton');

    redButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
    });

    greenButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'green';
    });

    blueButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'blue';
    });

    orangeButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'orange';
    });

    purpleButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'purple';
    });
    greyButton.addEventListener("click",()=>{
        document.body.style.backgroundColor='grey';
    })
    violetButton.addEventListener("click",()=>{
        document.body.style.backgroundColor='violet';
    })
});

