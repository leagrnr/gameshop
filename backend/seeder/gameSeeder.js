const sequelize = require('sequelize');
const Game = require('../models/gameModel');

async function seedGames() {
    try {
        await Game.sync({ force: true });
        console.log('Table Game created successfully.');

        const now = new Date();

        const games = [
            {
                name: 'The Legend of Zelda: Breath of the Wild',
                price: 59.99,
                genre: 'Action-Adventure',
                release_date: '2017-03-03',
                store_rating: 9.5,
                description: "Réveille-toi en tant que Link dans un Hyrule dévasté où le passé est oublié et l’avenir incertain. Pars explorer une terre vaste et mystérieuse, affronte des créatures anciennes et découvre les secrets du royaume. Chaque montagne, chaque forêt et chaque ruine t’invite à vivre une aventure inoubliable.",
                platform: 'Nintendo Switch',
                store_review_like: '✅ Exploration libre\n✅ Direction artistique magnifique\n✅ Gameplay inventif et varié',
                store_review_dislike: '❌ Quelques ralentissements techniques\n❌ Scénario discret',
                store_review_global: 'Un jeu révolutionnaire qui redéfinit les codes du monde ouvert avec brio.',
                image: 'zelda-botw.jpg'
            },
            {
                name: 'Super Mario Odyssey',
                price: 59.99,
                genre: 'Platformer',
                release_date: '2017-10-27',
                store_rating: 9.3,
                description: "Mario embarque pour une expédition autour du globe afin de sauver Peach des griffes de Bowser, prêt à se marier de force. Accompagné de Cappy, un chapeau vivant, découvre des mondes ouverts remplis de secrets, de défis et de clins d’œil à l’histoire du plombier moustachu.",
                platform: 'Nintendo Switch',
                store_review_like: '✅ Niveaux créatifs et colorés\n✅ Prise en main immédiate\n✅ Musiques entraînantes',
                store_review_dislike: '❌ Manque de challenge pour les joueurs expérimentés',
                store_review_global: 'Une aventure joyeuse et inventive, parfaite pour tous les publics.',
                image: 'mario-odyssey.jpeg'
            },
            {
                name: 'Dark Souls III',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2016-03-24',
                store_rating: 9.0,
                description: "Dans un monde en ruine où les flammes s’éteignent, tu incarnes un Morteflamme appelé à affronter des seigneurs déchus et des horreurs cauchemardesques. Prépare-toi à mourir souvent dans cette quête implacable, où chaque victoire est arrachée de haute lutte.",
                platform: 'PC, PS4, Xbox One',
                store_review_like: '✅ Univers sombre et captivant\n✅ Combats exigeants mais gratifiants\n✅ Direction artistique remarquable',
                store_review_dislike: '❌ Courbe d’apprentissage abrupte\n❌ Peu accessible aux débutants',
                store_review_global: 'Un incontournable du genre qui récompense les joueurs persévérants.',
                image: 'dark-souls-3.jpg'
            },
            {
                name: 'The Witcher 3: Wild Hunt',
                price: 49.99,
                genre: 'Action RPG',
                release_date: '2015-05-19',
                store_rating: 9.8,
                description: "Incarne Geralt de Riv, sorceleur solitaire, traquant sa fille adoptive à travers un monde ravagé par la guerre et la magie. Rempli de choix moraux, de quêtes humaines et d’êtres surnaturels, ce périple est autant une aventure qu’un récit de destin.",
                platform: 'PC, PS4, Xbox One, Switch',
                store_review_like: '✅ Scénario riche et complexe\n✅ Monde ouvert immense\n✅ Quêtes secondaires de qualité',
                store_review_dislike: '❌ Quelques bugs persistants\n❌ Interface parfois lourde',
                store_review_global: 'Une fresque épique et mature, référence absolue du RPG occidental.',
                image: 'the-witcher-3.jpg'
            },
            {
                name: 'Celeste',
                price: 19.99,
                genre: 'Platformer',
                release_date: '2018-01-25',
                store_rating: 9.4,
                description: "Suis Madeline dans son ascension de la montagne Celeste, un voyage à la fois physique et intérieur. Surmonte des défis de plateforme redoutables tout en affrontant ses propres peurs dans une histoire touchante sur le dépassement de soi.",
                platform: 'PC, Switch, PS4, Xbox One',
                store_review_like: '✅ Gameplay précis et fluide\n✅ Narration émouvante\n✅ Bande-son mémorable',
                store_review_dislike: '❌ Difficile par moments\n❌ Graphismes minimalistes qui ne plairont pas à tous',
                store_review_global: 'Un bijou indépendant aussi exigeant qu’émouvant.',
                image: 'celeste.jpg'
            },
            {
                name: 'Astro Bot',
                price: 39.99,
                genre: 'Platformer',
                release_date: '2024-09-06',
                store_rating: 9.2,
                description: "Plonge dans une aventure colorée avec Astro, le petit robot curieux, à travers des mondes remplis de gadgets et de surprises. Pensé pour exploiter toutes les subtilités de la manette DualSense, chaque niveau est un terrain de jeu sensoriel.",
                platform: 'PS5',
                store_review_like: '✅ Utilisation intelligente de la DualSense\n✅ Univers enchanteur\n✅ Accessible à tous',
                store_review_dislike: '❌ Un peu court\n❌ Peu de rejouabilité',
                store_review_global: 'Un concentré de fun et de bonne humeur, parfait pour la PS5.',
                image: 'astro-bot.jpg'
            },
            {
                name: 'Death Stranding 2',
                price: 79.99,
                genre: 'Action',
                release_date: '2025-06-26',
                store_rating: null,
                description: "Dans un monde fracturé entre vie et mort, reconnecte l’humanité en incarnant Sam Bridges une nouvelle fois. Entre mysticisme, solitude et liens humains, cette suite promet une aventure encore plus étrange et bouleversante.",
                platform: 'PS5',
                store_review_like: null,
                store_review_dislike: null,
                store_review_global: null,
                image: 'death-stranding-2.jpg'
            },
            {
                name: 'Doom The Dark Ages',
                price: 79.99,
                genre: 'FPS',
                release_date: '2025-04-15',
                store_rating: 8.4,
                description: "Retourne à l’âge des ténèbres dans la peau du Doom Slayer, où épées runiques et armes infernales affrontent des hordes démoniaques. Une guerre sans merci t’attend, brutale et sanglante, à la croisée de la fantasy noire et du métal hurlant.",
                platform: 'PC, PS5, Xbox Series',
                store_review_like: '✅ Action frénétique\n✅ Direction artistique originale\n✅ OST puissante',
                store_review_dislike: '❌ Gameplay parfois répétitif\n❌ Scénario en retrait',
                store_review_global: 'Un retour en force brutal et efficace, taillé pour les amateurs de FPS nerveux.',
                image: 'doom.jpg'
            },
            {
                name: 'Elden Ring Nightreign',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2025-05-20',
                store_rating: 8.6,
                description: "Pénètre dans une nouvelle contrée du Royaume Entre-Terres, envahie par les ombres d’une ancienne lignée déchue. Découvre des secrets oubliés et affronte des ennemis redoutables dans cette extension ténébreuse de l’univers d’Elden Ring.",
                platform: 'PC, PS5, Xbox Series',
                store_review_like: '✅ Liberté d’exploration totale\n✅ Lore profond\n✅ Combats épiques',
                store_review_dislike: '❌ Toujours aussi difficile\n❌ Direction parfois floue',
                store_review_global: 'Une extension de qualité qui ravira les fans de l’univers Elden Ring.',
                image: 'elden-ring-nightreign.jpg'
            },
            {
                name: 'Clair Obscur : Expedition 33',
                price: 39.99,
                genre: 'Adventure',
                release_date: '2025-04-20',
                store_rating: 8.5,
                description: "Chaque année, la mystérieuse Peintresse efface un chiffre de l’humanité. Toi, dernier survivant de l’expédition 33, dois percer les secrets d’un monde surréaliste avant que ton tour ne vienne. Un RPG poétique, fataliste et profondément humain.",
                platform: 'PC, PS5, Xbox Series',
                store_review_like: `✅ Direction artistique exceptionnelle :
                Le jeu frappe fort dès les premières minutes avec un style visuel unique, mélangeant peinture surréaliste, ambiance Belle Époque et touches de steampunk. Chaque lieu est soigneusement composé, presque comme une toile vivante.
                
                ✅ Narration poétique et mature :
                L’histoire, centrée sur une malédiction liée à l’âge et au destin, aborde des thèmes profonds comme la mortalité, le sacrifice et l’espoir. L’écriture est soignée, avec des personnages bien développés, notamment Gustave et Lune.
                
                ✅ Système de combat hybride :
                Il mêle combats au tour par tour avec des mécaniques en temps réel (esquives, parades), ce qui évite la monotonie des RPG classiques.
                
                ✅ Ambiance sonore immersive :
                La bande-son est à la fois émotive et envoûtante, renforçant parfaitement les moments dramatiques. Les doublages sont de qualité, notamment en français.`,
                store_review_dislike: `❌ Rythme parfois inégal :
                Certains joueurs peuvent trouver des creux dans la narration ou des phases d’exploration un peu lentes.
                
                ❌ Difficulté variable :
                Les combats peuvent devenir exigeants, voire frustrants pour les joueurs peu familiers avec les mécaniques d’action en temps réel.
                
                ❌ Manque de liberté :
                Le jeu est assez dirigiste, ce qui peut gêner les fans de monde ouvert ou d’exploration libre.`,
                store_review_global: `Clair Obscur: Expedition 33 est un RPG ambitieux, à la fois beau, audacieux et émotionnellement impactant. Il s’adresse autant aux amateurs de récits profonds qu’aux fans de systèmes de combat raffinés. Une belle réussite pour le jeu vidéo français sur la scène internationale.`,
                image: 'expedition-33.jpg'
            },
            {
                name: 'Final Fantasy VII Rebirth',
                price: 59.99,
                genre: 'RPG',
                release_date: '2024-02-29',
                store_rating: 9.7,
                description: "Après s’être échappés de Midgar, Cloud et ses compagnons parcourent le monde à la recherche de Sephiroth. Entre souvenirs fragmentés et destins qui se croisent, le remake poursuit son récit culte avec audace et émotion.",
                platform: 'PS5',
                store_review_like: '✅ Refonte graphique spectaculaire\n✅ Narration enrichie\n✅ Système de combat dynamique',
                store_review_dislike: "❌ Quelques longueurs dans l'histoire\n❌ Certaines libertés prises avec l'original",
                store_review_global: 'Une suite ambitieuse qui sublime le remake tout en élargissant l’univers de FFVII.',
                image: 'ff7-rebirth.jpg'
            },
            {
                name: 'Grand Theft Auto VI',
                price: 69.99,
                genre: 'Action-Adventure',
                release_date: '2026-06-28',
                store_rating: null,
                description: "Bienvenue à Leonida, où le soleil brille sur le vice. Incarne un duo criminel dans un monde ouvert dynamique et imprévisible. Entre trafic, braquages et réseaux sociaux, chaque choix tisse une histoire de pouvoir, de trahison et de liberté.",
                platform: 'PS5, Xbox Series, PC',
                store_review_like: null,
                store_review_dislike: null,
                store_review_global: null,
                image: 'gta6.jpg'
            },
            {
                name: 'Indiana Jones and the Great Circle',
                price: 69.99,
                genre: 'Action-Adventure',
                release_date: '2025-10-15',
                store_rating: 8.1,
                description: "Incarne le légendaire archéologue dans une chasse au trésor planétaire. Entre temples oubliés, énigmes antiques et combats contre les forces du mal, c’est une aventure digne des plus grands films de la saga qui t’attend.",
                platform: 'PC, Xbox Series',
                store_review_like: '✅ Ambiance fidèle aux films\n✅ Bonne mise en scène\n✅ Puzzles intéressants',
                store_review_dislike: "❌ Gameplay parfois rigide\n❌ Phase d'action inégale",
                store_review_global: 'Une aventure classique portée par la nostalgie et le charme d’Indiana Jones.',
                image: 'indiana-jones.jpg'
            },
            {
                name: 'Metal Gear Solid Delta: Snake Eater',
                price: 59.99,
                genre: 'Action-Adventure',
                release_date: '2025-09-26',
                store_rating: null,
                description: "Dans les jungles soviétiques des années 60, incarne Naked Snake en mission d’infiltration. Espionnage, survie et trahisons s’entrelacent dans cette origin story culte du héros de la saga Metal Gear.",
                platform: 'PS5, Xbox Series, PC',
                store_review_like: null,
                store_review_dislike: null,
                store_review_global: null,
                image: 'metal-gear-solid.jpg'
            },
            {
                name: 'Hell is Us',
                price: 49.99,
                genre: 'Action-Adventure',
                release_date: '2025-09-04',
                store_rating: null,
                description: "Dans un pays ravagé par la guerre et isolé du monde, affronte des créatures nées du chaos intérieur des hommes. Armé d’épées et de doutes, ton voyage devient une introspection brutale entre rébellion, peur et vérité.",
                platform: 'PC, PS5, Xbox Series',
                store_review_like: null,
                store_review_dislike: null,
                store_review_global: null,
                image: 'hell-is-us.jpg'
            },
            {
                name: 'Mafia the Old Country',
                price: 39.99,
                genre: 'Action-Adventure',
                release_date: '2025-08-08',
                store_rating: null,
                description: "Retourne aux origines de la famille criminelle dans une Italie fictive du début du siècle. Incarne un jeune homme attiré par l’honneur et le pouvoir, dans un récit cinématographique de loyauté, de sang et d’ascension mafieuse.",
                platform: 'PC, PS5, Xbox Series',
                store_review_like: null,
                store_review_dislike: null,
                store_review_global: null,
                image: 'mafia-the-old-country.jpg'
            }
        ];

        const enrichedGames = games.map(game => ({
            ...game,
            status: new Date(game.release_date) > now ? 'prochaine_sortie' : 'nouveaute'
        }));

        await Game.bulkCreate(enrichedGames);
        console.log('Games seeded successfully.');
    } catch (error) {
        console.error('Error seeding games:', error);
    }
}

seedGames();