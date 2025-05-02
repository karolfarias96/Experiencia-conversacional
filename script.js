// DOM Elements
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');
const loginForm = document.getElementById('login-form');
const notification = document.getElementById('notification');
const notificationTitle = document.getElementById('notification-title');
const notificationMessage = document.getElementById('notification-message');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('nav ul');
const roomOptions = document.querySelectorAll('.room-option');

// App State
let currentUser = {
    loggedIn: false,
    name: '',
    avatar: '/api/placeholder/30/30'
};

// Sample Messages for Chat
const sampleMessages = [
    {
        user: 'FuriaFan123',
        avatar: '/api/placeholder/30/30',
        content: 'Vamos FURIA! Esse round é nosso!',
        time: '14:32'
    },
    {
        user: 'CSGOLover',
        avatar: '/api/placeholder/30/30',
        content: 'O arT tá jogando muito hoje!',
        time: '14:33'
    },
    {
        user: 'BrasilCS',
        avatar: '/api/placeholder/30/30',
        content: 'KSCERATO é o melhor jogador do Brasil, sem dúvidas.',
        time: '14:35'
    },
    {
        user: 'Torcedor2025',
        avatar: '/api/placeholder/30/30',
        content: 'Precisamos fechar esse primeiro half com pelo menos 9 rounds.',
        time: '14:37'
    },
    {
        user: 'GuerreirosCS',
        avatar: '/api/placeholder/30/30',
        content: 'Alguém vai no major em Berlim?',
        time: '14:40'
    }
];

// Game Events for Notifications
const gameEvents = [
    {
        title: 'Clutch do KSCERATO!',
        message: '1v3 sensacional para vencer o round!'
    },
    {
        title: 'ACE do arT!',
        message: 'Entrou na bomba e eliminou todo o time adversário!'
    },
    {
        title: 'Round vencido!',
        message: 'FURIA vence mais um round e está liderando por 14-9!'
    },
    {
        title: 'Momento tático',
        message: 'FURIA pede timeout para discutir estratégia.'
    },
    {
        title: 'Clutch incrível!',
        message: 'yuurih vence um 1v3 com apenas 12 HP!'
    },
    {
        title: 'Domínio total',
        message: 'FURIA controla o mapa com estratégia perfeita'
    }
];

// Typing animation effect
function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Chat with Sample Messages
function initChat() {
    chatMessages.innerHTML = '';
    sampleMessages.forEach(message => {
        appendMessage(message);
    });
}

// Add Message to Chat
function appendMessage(message) {
    const isOwnMessage = message.user === currentUser.name;
    
    const messageEl = document.createElement('div');
    messageEl.classList.add('message');
    if (isOwnMessage) {
        messageEl.classList.add('own-message');
    }
    
    messageEl.innerHTML = `
        <div class="message-header">
            <img src="${message.avatar}" alt="${message.user}" class="message-avatar">
            <div class="message-user">${message.user}</div>
            <div class="message-time">${message.time}</div>
        </div>
        <div class="message-content">
            ${message.content}
        </div>
    `;
    
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add subtle animation effect
    setTimeout(() => {
        messageEl.style.opacity = 0;
        messageEl.style.opacity = 1;
    }, 10);
}

// Handle Chat Form Submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const content = chatInput.value.trim();
    if (!content) return;
    
    // If not logged in, show login modal
    if (!currentUser.loggedIn) {
        loginModal.style.display = 'flex';
        return;
    }
    
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const message = {
        user: currentUser.name,
        avatar: currentUser.avatar,
        content,
        time
    };
    
    appendMessage(message);
    chatInput.value = '';
    
    // Simulate random response after some delay
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sampleMessages.length);
        const responseMessage = {...sampleMessages[randomIndex]};
        responseMessage.time = `${now.getHours()}:${(now.getMinutes() + 1).toString().padStart(2, '0')}`;
        appendMessage(responseMessage);
        
        // 30% chance to trigger a game event notification after a message
        if (Math.random() < 0.3) {
            setTimeout(() => {
                const randomEvent = gameEvents[Math.floor(Math.random() * gameEvents.length)];
                showNotification(randomEvent.title, randomEvent.message);
            }, 2000);
        }
    }, 1000 + Math.random() * 2000);
});

// Handle Login Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username && password) {
        currentUser.loggedIn = true;
        currentUser.name = username;
        
        // Close modal with animation
        loginModal.style.opacity = 0;
        setTimeout(() => {
            loginModal.style.display = 'none';
            loginModal.style.opacity = 1;
        }, 300);
        
        // Update login button
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${username}`;
        
        // Show welcome notification
        showNotification('Login Realizado', `Bem-vindo à FURIA Connect, ${username}!`);
    }
});

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    setTimeout(() => document.getElementById('username').focus(), 100);
});

// Close Login Modal
closeLogin.addEventListener('click', () => {
    loginModal.style.opacity = 0;
    setTimeout(() => {
        loginModal.style.display = 'none';
        loginModal.style.opacity = 1;
    }, 300);
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.opacity = 0;
        setTimeout(() => {
            loginModal.style.display = 'none';
            loginModal.style.opacity = 1;
        }, 300);
    }
});

// Show Notification
function showNotification(title, message) {
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    notification.classList.add('show');
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Simulate Game Events
function simulateGameEvents() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const randomEvent = gameEvents[Math.floor(Math.random() * gameEvents.length)];
            showNotification(randomEvent.title, randomEvent.message);
        }
    }, 45000);
}

// Update Game Score
function updateGameScore() {
    const scoreEl = document.querySelector('.score');
    let [furiaScore, opponentScore] = scoreEl.textContent.split(':').map(num => parseInt(num));
    
    setInterval(() => {
        const random = Math.random();
        
        if (random > 0.7) {
            // FURIA scores
            furiaScore++;
            showNotification('FURIA Marca!', `FURIA ${furiaScore}:${opponentScore} Team Liquid`);
            
            // Add animation to score
            scoreEl.classList.add('highlight-score');
            setTimeout(() => scoreEl.classList.remove('highlight-score'), 1000);
        } else if (random > 0.5 && random <= 0.7) {
            // Opponent scores
            opponentScore++;
            
            // Don't highlight opponent scores
        }
        
        scoreEl.textContent = `${furiaScore}:${opponentScore}`;
    }, 60000);
}

// Toggle Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-mobile-menu');
});

// Handle Room Option Selection
roomOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove active class from all options
        roomOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        option.classList.add('active');
        
        // Update chat messages based on selected room
        // For demo purposes, we'll just show different sets of messages
        if (option.textContent === 'Partida') {
            initChat(); // Reset to original messages
            
            // Add a match-specific message
            setTimeout(() => {
                appendMessage({
                    user: 'Moderador',
                    avatar: '/api/placeholder/30/30',
                    content: 'Bem-vindos ao chat da partida FURIA vs Team Liquid! Respeitem as regras e torçam muito!',
                    time: '15:00'
                });
            }, 300);
        } else {
            initChat();
        }
    });
});

// Add subtle parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    }
});

// Add hover effects to player-stats
const playerStats = document.querySelectorAll('.player-stat');
playerStats.forEach(stat => {
    stat.addEventListener('mouseenter', () => {
        stat.style.transform = 'translateX(5px)';
    });
    
    stat.addEventListener('mouseleave', () => {
        stat.style.transform = 'translateX(0)';
    });
});

// Function to handle QR code emphasis effect
function emphasizeQRCode() {
    const qrCode = document.querySelector('.bot-qrcode');
    if (qrCode) {
        qrCode.classList.add('emphasized');
        setTimeout(() => {
            qrCode.classList.remove('emphasized');
        }, 2000);
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chat
    initChat();
    
    // Set up game event simulation
    simulateGameEvents();
    
    // Set up score updates
    updateGameScore();
    
    // Show welcome notification after a short delay
    setTimeout(() => {
        showNotification('Bem-vindo à FURIA Connect', 'Acompanhe a partida FURIA vs Team Liquid ao vivo!');
    }, 2000);
    
    // Emphasize QR code periodically
    setTimeout(() => {
        emphasizeQRCode();
        setInterval(emphasizeQRCode, 30000); // Repeat every 30 seconds
    }, 5000);
    
    // Add CSS class for page loaded animation
    document.body.classList.add('loaded');
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Add neon pulse effect to important elements
function addNeonPulse() {
    const elements = document.querySelectorAll('.score, .live-indicator, .feature-icon');
    elements.forEach(el => {
        el.classList.add('neon-pulse');
        setTimeout(() => {
            el.classList.remove('neon-pulse');
        }, 2000);
    });
    
    setTimeout(addNeonPulse, 10000);
}

// Start neon pulse effect after page load
setTimeout(addNeonPulse, 3000);