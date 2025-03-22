document.addEventListener('DOMContentLoaded name'), function() {
    // DOM Elements
    const nameInputContainer = document.getElementById('nameInputContainer');
    const mainContent = document.getElementById('mainContent');
    const nameInput = document.getElementById('nameInput');
    const startButton = document.getElementById('startButton');
    const personalGreeting = document.getElementById('personalGreeting');
    const jokeButton = document.getElementById('jokeButton');
    const complimentButton = document.getElementById('complimentButton');
    const soundButton = document.getElementById('soundButton');
    const confettiButton = document.getElementById('confettiButton');
    const memeButton = document.getElementById('memeButton');
    const nameFireworksButton = document.getElementById('nameFireworksButton');
    const dancingButton = document.getElementById('dancingButton');
    const surpriseButton = document.getElementById('surpriseButton');
    const jokeDisplay = document.getElementById('jokeDisplay');
    const jokeText = document.getElementById('jokeText');
    const complimentDisplay = document.getElementById('complimentDisplay');
    const complimentText = document.getElementById('complimentText');
    const memeDisplay = document.getElementById('memeDisplay');
    const memeImage = document.getElementById('memeImage');
    const dancingDisplay = document.getElementById('dancingDisplay');
    const danceFloor = document.getElementById('danceFloor');
    const pet = document.getElementById('pet');
    const petHearts = document.getElementById('petHearts');
    const fireworksContainer = document.getElementById('fireworksContainer');
    
    // Audio elements
    const laughSound = document.getElementById('laughSound');
    const popSound = document.getElementById('popSound');
    const applauseSound = document.getElementById('applauseSound');
    const tadaSound = document.getElementById('tadaSound');
    const boingSound = document.getElementById('boingSound');
    
    // Data arrays
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Why don't eggs tell jokes? They'd crack each other up!",
        "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
        "I used to play piano by ear, but now I use my hands.",
        "Why did the bicycle fall over? Because it was two-tired!"
    ];
    
    const compliments = [
        "Your smile lights up the room!",
        "You're amazing just the way you are!",
        "You have the best laugh ever!",
        "You're more fun than bubble wrap!",
        "You're even better than a unicorn because you're real!",
        "You're awesome! Remember that.",
        "You make the world a better place just by being in it!",
        "You have the courage of a lion and the wisdom of an owl!",
        "Your creative potential seems limitless!",
        "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener!"
    ];
    
    const memes = [
        "https://i.imgur.com/DKUR9Tk.png",
        "https://i.imgur.com/TpLrSGk.jpg",
        "https://i.imgur.com/kCUIyuL.jpg",
        "https://i.imgur.com/ZwDRN3e.jpg",
        "https://i.imgur.com/GnhBhNv.jpg",
        "https://i.imgur.com/O5EGY0M.jpg",
        "https://i.imgur.com/kYl7kNz.jpg",
        "https://i.imgur.com/AjHGqZg.jpg",
        "https://i.imgur.com/P1voZ9O.jpg",
        "https://i.imgur.com/W3KtF4J.jpg"
    ];
    
    const emojis = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", 
        "🥰", "😍", "🤩", "🎉", "✨", "🌈", "🦄", "🍕", "🍦", "🎈", 
        "🎸", "🎮", "🚀", "🌟", "🔥", "💯", "🏆", "🎯", "🎪", "🎭"
    ];
    
    const dancers = [
        "🕺", "💃", "🐒", "🦁", "🐯", "🐼", "🐨", "🦊", "🦖", "🐙", 
        "🦩", "🦄", "🐝", "🦋", "🐢", "🐬", "🦔", "🦦", "🦥", "🐿️"
    ];
    
    const pets = ["🐶", "🐱", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮"];
    
    // Initialize the page
    createBubbles();
    
    // Initial confetti explosion
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 500);
    
    // Event Listeners
    startButton.addEventListener('click', startApp);
    jokeButton.addEventListener('click', showJoke);
    complimentButton.addEventListener('click', showCompliment);
    soundButton.addEventListener('click', playRandomSound);
    confettiButton.addEventListener('click', triggerConfetti);
    memeButton.addEventListener('click', showMeme);
    nameFireworksButton.addEventListener('click', createNameFireworks);
    dancingButton.addEventListener('click', startDanceParty);
    surpriseButton.addEventListener('click', surpriseMe);
    pet.addEventListener('click', petTheAnimal);
    
    // Functions
    function startApp() {
        const name = nameInput.value.trim();
        if (name) {
            personalGreeting.textContent = `Hello, ${name}!`;
            nameInputContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Welcome animation
            triggerConfetti();
            tadaSound.play();
            
            // Change pet randomly
            changePet();
        } else {
            // Shake the input if empty
            nameInput.classList.add('shake');
            setTimeout(() => nameInput.classList.remove('shake'), 500);
        }
    }
    
    function createBubbles() {
        const bubbleContainer = document.querySelector('.bubble-container');
        const bubbleCount = 20;
        
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random size
            const size = Math.random() * 100 + 50;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay
            bubble.style.animationDelay = `${Math.random() * 8}s`;
            
            // Random color
            const hue = Math.floor(Math.random() * 360);
            bubble.style.backgroundColor = `hsla(${hue}, 100%, 70%, 0.3)`;
            
            bubbleContainer.appendChild(bubble);
        }
    }
    
    function showJoke() {
        hideAllDisplays();
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeText.textContent = randomJoke;
        jokeDisplay.classList.remove('hidden');
        
        // Animation
        jokeDisplay.classList.add('pop-in');
        setTimeout(() => jokeDisplay.classList.remove('pop-in'), 500);
        
        // Sound
        laughSound.play();
    }
    
    function showCompliment() {
        hideAllDisplays();
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        complimentText.textContent = randomCompliment;
        complimentDisplay.classList.remove('hidden');
        
        // Animation
        complimentDisplay.classList.add('pop-in');
        setTimeout(() => complimentDisplay.classList.remove('pop-in'), 500);
        
        // Sound
        tadaSound.play();
        
        // Mini confetti
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.7 }
        });
    }
    
    function playRandomSound() {
        const sounds = [laughSound, popSound, applauseSound, tadaSound, boingSound];
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        randomSound.play();
        
        // Visual feedback
        soundButton.classList.add('pulse');
        setTimeout(() => soundButton.classList.remove('pulse'), 300);
    }
    
    function triggerConfetti() {
        confetti({
            particleCount: 200,
            spread: 180,
            origin: { y: 0.6 }
        });
        
        applauseSound.play();
    }
    
    function showMeme() {
        hideAllDisplays();
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        memeImage.src = randomMeme;
        memeDisplay.classList.remove('hidden');
        
        // Animation
        memeDisplay.classList.add('pop-in');
        setTimeout(() => memeDisplay.classList.remove('pop-in'), 500);
        
        // Sound
        popSound.play();
    }
    
    function createNameFireworks() {
        const name = nameInput.value.trim() || "Friend";
        fireworksContainer.innerHTML = '';
        
        // Create firework for each letter
        for (let i = 0; i < name.length; i++) {
            setTimeout(() => {
                createFirework(name[i]);
                popSound.cloneNode(true).play();
            }, i * 300);
        }
    }
    
    function createFirework(letter) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.textContent = letter;
        
        // Random position
        const x = Math.random() * 80 + 10; // 10% to 90% of screen width
        const y = Math.random() * 60 + 20; // 20% to 80% of screen height
        
        firework.style.left = `${x}%`;
        firework.style.top = `${y}%`;
        
        // Random color
        const hue = Math.floor(Math.random() * 360);
        firework.style.color = `hsl(${hue}, 100%, 60%)`;
        
        fireworksContainer.appendChild(firework);
        
        // Remove after animation completes
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
    
    function startDanceParty() {
        hideAllDisplays();
        danceFloor.innerHTML = '';
        dancingDisplay.classList.remove('hidden');
        
        // Create dancers
        for (let i = 0; i < 10; i++) {
            const dancer = document.createElement('div');
            dancer.classList.add('dancer');
            dancer.textContent = dancers[Math.floor(Math.random() * dancers.length)];
            
            // Random animation delay
            dancer.style.animationDelay = `${Math.random() * 0.5}s`;
            
            danceFloor.appendChild(dancer);
        }
        
        // Play sound
        applauseSound.play();
    }
    
    function surpriseMe() {
        // Pick a random action
        const actions = [
            showJoke, 
            showCompliment, 
            playRandomSound, 
            triggerConfetti, 
            showMeme, 
            createNameFireworks, 
            startDanceParty,
            changePet,
            rainbowText,
            bounceElements
        ];
        
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        randomAction();
    }
    
    function petTheAnimal() {
        // Show hearts
        petHearts.classList.remove('hidden');
        
        // Reset animation
        petHearts.style.animation = 'none';
        setTimeout(() => {
            petHearts.style.animation = 'float-up 2s ease-out forwards';
        }, 10);
        
        // Play sound
        popSound.play();
        
        // Wiggle pet
        pet.classList.add('wiggle');
        setTimeout(() => pet.classList.remove('wiggle'), 500);
    }
    
    function changePet() {
        const randomPet = pets[Math.floor(Math.random() * pets.length)];
        pet.textContent = randomPet;
        
        // Animation
        pet.classList.add('bounce');
        setTimeout(() => pet.classList.remove('bounce'), 500);
        
        // Sound
        boingSound.play();
    }
    
    function rainbowText() {
        const text = personalGreeting.textContent;
        personalGreeting.innerHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            
            // Random color
            const hue = Math.floor(Math.random() * 360);
            span.style.color = `hsl(${hue}, 100%, 60%)`;
            
            // Animation
            span.style.display = 'inline-block';
            span.style.animation = `bounce 0.5s ease ${i * 0.05}s`;
            
            personalGreeting.appendChild(span);
        }
        
        // Sound
        tadaSound.play();
    }
    
    function bounceElements() {
        // Add bounce animation to various elements
        const elements = document.querySelectorAll('.bounce-button, .display-box, #personalGreeting');
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('bounce');
                setTimeout(() => element.classList.remove('bounce'), 500);
            }, index * 100);
        });
        
        // Sound
        boingSound.play();
    }
    
    function hideAllDisplays() {
        jokeDisplay.classList.add('hidden');
        complimentDisplay.classList.add('hidden');
        memeDisplay.classList.add('hidden');
        dancingDisplay.classList.add('hidden');
    }
    
    // Add some dynamic styles
    // Add some dynamic styles
const style = document.createElement('style');
style.textContent = `
    .hidden {
        display: none !important;
    }
    
    .pop-in {
        animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes pop-in {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

// Append the style to the document head
document.head.appendChild(style);
}