// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Initialize radio player
    initRadioPlayer();
    
    // Initialize WhatsApp button
    initWhatsAppButton();
});

// Radio player functionality
function initRadioPlayer() {
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const albumArt = document.getElementById('albumArt');
    const trackTitle = document.getElementById('trackTitle');
    const trackArtist = document.getElementById('trackArtist');
    
    // Sample tracks data
    const tracks = [
        {
            title: "Summer Vibes",
            artist: "DJ Music Pro",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Midnight City",
            artist: "Electro Beats",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Chillout Lounge",
            artist: "Relaxation Radio",
            image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Urban Beats",
            artist: "City Sounds Collective",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Deep House Session",
            artist: "Club Masters",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ];
    
    let currentTrack = 0;
    let isPlaying = false;
    
    // Function to update track info
    function updateTrackInfo() {
        if (trackTitle && trackArtist && albumArt) {
            trackTitle.textContent = tracks[currentTrack].title;
            trackArtist.textContent = tracks[currentTrack].artist;
            const albumArtImg = albumArt.querySelector('img');
            if (albumArtImg) {
                albumArtImg.src = tracks[currentTrack].image;
                albumArtImg.alt = `${tracks[currentTrack].title} - ${tracks[currentTrack].artist}`;
            }
        }
    }
    
    // Play/Pause functionality
    if (playBtn && playIcon) {
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
                if (albumArt) albumArt.classList.add('playing');
                // In a real implementation, this would connect to an actual audio stream
                console.log("Reproduciendo radio en vivo...");
                
                // Simulate connecting to a real stream
                simulateStreamConnection();
            } else {
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
                if (albumArt) albumArt.classList.remove('playing');
                console.log("Pausado");
            }
        });
    }
    
    // Previous track
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
            updateTrackInfo();
            console.log("Canción anterior: " + tracks[currentTrack].title);
        });
    }
    
    // Next track
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrack = (currentTrack + 1) % tracks.length;
            updateTrackInfo();
            console.log("Siguiente canción: " + tracks[currentTrack].title);
        });
    }
    
    // Volume control
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value;
            console.log("Volumen ajustado a: " + volume + "%");
            // In a real implementation, this would adjust the audio volume
        });
    }
    
    // Initialize with first track
    updateTrackInfo();
    
    // Simulate live updates for track info (in a real app this would come from the server)
    setInterval(() => {
        if (isPlaying) {
            // Simulate track change every 30 seconds for demo purposes
            const shouldChange = Math.random() < 0.05; // 5% chance every 5 seconds
            
            if (shouldChange) {
                currentTrack = (currentTrack + 1) % tracks.length;
                updateTrackInfo();
            }
        }
    }, 5000);
    
    // Simulate stream connection (for demo purposes)
    function simulateStreamConnection() {
        console.log("Conectando al servidor de streaming...");
        
        // Simulate connection delay
        setTimeout(() => {
            console.log("✅ Conectado al servidor de streaming");
            console.log("📡 Transmitiendo a 128 kbps");
            console.log("👥 Oyentes conectados: " + Math.floor(Math.random() * 1000));
        }, 1000);
    }
}

// WhatsApp button functionality
function initWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if (whatsappBtn) {
        // Add click tracking
        whatsappBtn.addEventListener('click', function() {
            console.log("Redirigiendo a WhatsApp para contacto");
            
            // Track the click (in a real app, you might send this to analytics)
            const clickTime = new Date().toLocaleString();
            console.log(`WhatsApp click registrado: ${clickTime}`);
            
            // You could also use localStorage to track clicks
            try {
                let whatsappClicks = localStorage.getItem('whatsappClicks') || 0;
                whatsappClicks = parseInt(whatsappClicks) + 1;
                localStorage.setItem('whatsappClicks', whatsappClicks);
                console.log(`Total de clicks en WhatsApp: ${whatsappClicks}`);
            } catch (e) {
                console.log("No se pudo guardar el registro de clicks");
            }
        });
        
        // Show notification after 30 seconds if user hasn't clicked
        setTimeout(() => {
            // Check if user has already clicked
            try {
                const hasClicked = localStorage.getItem('whatsappClicked');
                if (!hasClicked && Math.random() > 0.5) { // 50% chance to show notification
                    console.log("💡 ¿Necesitas ayuda? ¡Contáctanos por WhatsApp!");
                }
            } catch (e) {
                // Silently fail if localStorage is not available
            }
        }, 30000);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add current year to copyright
document.addEventListener('DOMContentLoaded', function() {
    const copyrightElements = document.querySelectorAll('.copyright');
    const currentYear = new Date().getFullYear();
    
    copyrightElements.forEach(element => {
        if (element.textContent.includes('2023')) {
            element.textContent = element.textContent.replace('2023', currentYear);
        }
    });
});