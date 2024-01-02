function createGameSection(header, games) {
    // Create the section element
    const section = document.createElement('section');
    section.className = 'games-section';

    // Create the header
    const h3 = document.createElement('h3');
    h3.textContent = header;
    section.appendChild(h3);

    // Create the game row
    const gameRow = document.createElement('div');
    gameRow.className = 'game-row';

    games.forEach((game, index) => {
        const gameDiv = document.createElement('div');
    
    
        // Create the icon container
        const iconContainer = document.createElement('div');
        iconContainer.className = 'icon-container';
    
        // Add the icon
        const icon = document.createElement('img');
        icon.src = game.icon;
        icon.alt = 'Icon';
        icon.className = 'icon';
        iconContainer.appendChild(icon);
    
        // Add the badges
        game.links.forEach(link => {
            const badge = document.createElement('a');
            badge.href = link.url;
            badge.className = link.badge.includes('apple') ? 'app-store-badge' : 'google-play-badge';
            const badgeImg = document.createElement('img');
            badgeImg.src = link.badge;
            badgeImg.alt = link.badge.includes('apple') ? 'Download on the App Store' : 'Get it on Google Play';
            badge.appendChild(badgeImg);
            iconContainer.appendChild(badge);
        });
    
        // Add the game description
        const gameDescription = document.createElement('p');
        gameDescription.className = 'game-description';
        gameDescription.textContent = game.description;
    
        // If the game is the second one, reverse the order of the icon and description
        if(games.length === 1) {
            gameDiv.appendChild(gameDescription);
            gameDiv.appendChild(iconContainer);
            gameDiv.className = 'game-div-center';
        }else if (index % 2 === 1) {
            gameDiv.appendChild(gameDescription);
            gameDiv.appendChild(iconContainer);
            gameDiv.className = 'game-div-left';
        } else {
            gameDiv.appendChild(iconContainer);
            gameDiv.appendChild(gameDescription);
            gameDiv.className = 'game-div-right';
        }
    
        gameRow.appendChild(gameDiv);
    });

    section.appendChild(gameRow);

    return section;
}

// Use the function
const recent_games = [
    {
        icon: 'assets/twisty-link.png',
        links: [
            {
                url: 'https://apps.apple.com/us/app/twisty-link/id6473529921?itsct=apps_box_badge&amp;itscg=30200',
                badge: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1702339200'
            },
            {
                url: 'https://play.google.com/store/apps/details?id=com.reboot.twistemall&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                badge: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
            }
        ],
        description: 'Twisty Link is a link puzzle games with satisfying feeling'
    },
    {
        icon: 'assets/blast-towers.png',
        links: [
            {
                url: 'https://apps.apple.com/us/app/blast-towers/id6469806907?itsct=apps_box_link&itscg=30200',
                badge: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1702339200'
            }
        ],
        description: 'Blast Towers is a blast game with a unique twist mechanic. Blasts are used as bullets to destroy castles. It is an addictive game with arcade style gameplay.'
    }

];

// Use the function
const old_games = [
    {
        icon: 'assets/build-roads.png',
        links: [
            {
                url: 'https://apps.apple.com/us/app/build-roads/id1502839598?itsct=apps_box_link&itscg=30200',
                badge: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1702339200'
            },
            {
                url: 'https://play.google.com/store/apps/details?id=com.reboot.buildroads&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                badge: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
            }
        ],
        description: 'Build roads is a simulation game where you build roads to improve your town. It has multiple layers of gameplay. You can build roads, upgrade your tools, create another town with idle gameplay, and more.'
    },
    {
        icon: 'assets/lick-runner.png',
        links: [
            {
                url: 'https://apps.apple.com/us/app/lick-runner/id1557687589?itsct=apps_box_link&itscg=30200',
                badge: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1702339200'
            }
        ],
        description: 'A viral game with surreal gameplay. A giant head licks all good stuff on the table avoiding the bad stuff. It has been watched over 20 million on TikTok.'
    }
];

const ancient_games = [
    {
        icon: 'assets/the-nose.png',
        links: [
            {
                url: 'https://store.steampowered.com/app/667410/The_Nose/',
                badge: 'assets/steam-badge.png'
            }
        ],
        description: 'The Nose is my indie game that help me to start my game development journey. It is a game based on Nikolai Gogol\'s short story.'
    }

];








