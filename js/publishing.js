document.addEventListener('DOMContentLoaded', function() {
    const gameData = {
        'pocket-squad': {
            title: 'Pocket Squad',
            description: 'Увлекательная мобильная игра в жанре экшен-RPG, где вы собираете команду уникальных героев и сражаетесь с противниками в динамичных боях. Развивайте персонажей, открывайте новые способности и станьте лучшим командиром!',
            downloads: '500,000+ загрузок',
            backgroundVideo: 'img/Pocket_Squad_vid.mp4',
            platforms: [
                { 
                    name: 'Google Play', 
                    icon: 'img/Mobile app store badge.svg', 
                    url: 'https://play.google.com/store/apps/details?id=com.TheoreticalStudio.Regrow&referrer=utm_source%3Dwebsite%26utm_medium%3Dwebsite%26utm_term%3Dregrow%26utm_content%3Dofficial%2520website%26utm_campaign%3DPlay%2520Regrow!' 
                },
                { 
                    name: 'App Store', 
                    icon: 'img/appstore-button.svg', 
                    url: 'https://apps.apple.com/app/apple-store/id1609515393?pt=124105089&ct=Website&mt=8' 
                }
            ]
        },
        'save-fluffy': {
            title: 'Save the Fluffy',
            description: 'Увлекательная головоломка, в которой вы помогаете милому существу по имени Флаффи найти путь домой. Решайте сложные загадки, избегайте опасностей и открывайте новые способности в этом красочном приключении.',
            downloads: '100,000+ загрузок',
            backgroundVideo: 'img/Save the Fluffy android trailer.mp4',
            platforms: [
                { 
                    name: 'Google Play', 
                    icon: 'img/Mobile app store badge.svg', 
                    url: 'https://play.google.com/store/apps/details?id=com.TheoreticalStudio.SaveTheFluffyPremium' 
                },
                { 
                    name: 'App Store', 
                    icon: 'img/appstore-button.svg', 
                    url: 'https://apps.apple.com/app/save-the-fluffy-premium/id1637232302' 
                }
            ]
        },
        'rise-monster': {
            title: 'Rise Monster Master',
            description: 'Захватывающая игра в жанре Monster Tamer, где вы собираете и тренируете уникальных монстров, участвуете в эпических сражениях и исследуете огромный мир. Создайте свою команду монстров и станьте величайшим Monster Master!',
            downloads: '50,000+ загрузок',
            backgroundVideo: 'img/Rise Monster Masters.mp4',
            platforms: [
                { 
                    name: 'Google Play', 
                    icon: 'img/Mobile app store badge.svg', 
                    url: '#' 
                },
                { 
                    name: 'App Store', 
                    icon: 'img/appstore-button.svg', 
                    url: 'https://apps.apple.com/at/app/rise-monster-masters/id1609515393' 
                }
            ]
        },
        'unreleased': {
            title: 'Проект не анонсирован',
            description: 'Мы работаем над новым захватывающим проектом, который скоро будет представлен публике. Следите за обновлениями!',
            downloads: 'В разработке',
            backgroundVideo: null,
            platforms: []
        }
    };

    const gameIcons = document.querySelectorAll('.game-icon-item');
    const gameTitle = document.getElementById('game-title');
    const gameDescription = document.getElementById('game-description');
    const gameDownloads = document.getElementById('game-downloads');
    const gamePlatforms = document.getElementById('game-platforms');
    const backgroundVideo = document.getElementById('background-video');

    function updateGameInfo(gameId) {
        // Remove active class from all games
        gameIcons.forEach(item => item.classList.remove('active'));
        
        // Add active class to selected game
        const selectedGame = document.querySelector(`[data-game="${gameId}"]`);
        if (selectedGame) {
            selectedGame.classList.add('active');
        }

        const game = gameData[gameId];
        if (!game) return;

        // Update game info
        gameTitle.textContent = game.title;
        gameDescription.textContent = game.description;
        gameDownloads.textContent = game.downloads;

        // Update platforms with SVG buttons
        gamePlatforms.innerHTML = game.platforms.map(platform => `
            <a href="${platform.url}" class="store-button" target="_blank">
                <img src="${platform.icon}" alt="${platform.name}">
            </a>
        `).join('');

        // Update background video
        if (game.backgroundVideo) {
            backgroundVideo.src = game.backgroundVideo;
            backgroundVideo.play().catch(function(error) {
                console.log("Video autoplay failed:", error);
            });
        } else {
            backgroundVideo.src = '';
        }
    }

    // Add click handlers to game icons
    gameIcons.forEach(item => {
        item.addEventListener('click', () => {
            const gameId = item.dataset.game;
            updateGameInfo(gameId);
        });
    });

    // Show Pocket Squad by default
    updateGameInfo('pocket-squad');

    // Animate stats numbers when they come into view
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number[data-target]');
        const animationDuration = 1500; // 1.5 seconds
        const fps = 60;
        const totalFrames = (animationDuration / 1000) * fps;

        stats.forEach(stat => {
            if (stat.dataset.animated === 'true') return;
            
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / totalFrames;
            let current = 0;
            let frame = 0;

            const updateNumber = () => {
                frame++;
                current = Math.min(Math.round(increment * frame), target);
                stat.textContent = current.toLocaleString();

                if (frame < totalFrames) {
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.dataset.animated = 'true';
                }
            };

            updateNumber();
        });
    }

    // Create Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe hero stats section for animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});
