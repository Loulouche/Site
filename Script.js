$(document).ready(function () {
  const resources = {
    en: {
      translation: {
        menu: {
          introduction: "Introduction",
          characters: "Characters",
          jouabilite: "Gameplay",
          telechargement: "Download",
          requirements: "Requirements",
          manual: "Manual ",
          reports: "Reports",
          timeline: "Timeline",
        },
        header: {
          title: "Etheryx World",
          subtitle: "By Epipower",
        },
        introduction: {
          p: "Welcome to Etheryx World, a fascinating universe where the boundaries between life and death blur to reveal a captivating mystery.<br>Imagine yourself suddenly plunged into a parallel world, disconnected from everything you've known. It's in this intriguing setting that our heroine emerges after an unexpected death, ready to unravel the threads of a complex puzzle.<br><br>Etheryx World is much more than just a game. It's an immersive adventure that transports you on a breathtaking journey through enchanting landscapes and extraordinary encounters.<br>Inspired by the famous webtoon 'Why Raelina ended up at the Duke’s mansion' by Milcha, our game invites you to explore a parallel world filled with mysteries and intrigues.<br><br>You play as the main character, facing unprecedented challenges as you try to understand the circumstances of your own death. Through thrilling investigations and interactions with fascinating characters, you'll uncover the buried secrets of this mysterious realm.<br><br>But beware, because in Etheryx World, nothing is as it seems. Unexpected allies lurk in the shadows, while insurmountable obstacles stand in your way. Why are you here? Who can help you? And above all, who can be trusted?<br><br>Dive into the adventure and prepare to challenge the limits of reality in Etheryx World. You're no longer just a player, but a fearless explorer on the verge of discovering a parallel world where every decision matters and every revelation brings you closer to the ultimate truth. Are you ready to take on the challenge?",
        },
        personnages: {
          p: "Our game is titled Etheryx World. It's a captivating adventure game that will immerse you in a mysterious and enchanting world.<br>\
    You will experience the story of a person who, one morning, wakes up in a world that is no longer theirs and knows nothing about it.<br><br><br>\
    In this new universe, they will have to meet different characters to find answers to their questions: Where are they and how did they get there?<br>\
    Being in a new world, they don't know who to trust. Indeed, some people will try to prevent them from investigating the reason for their presence.<br><br><br>\
    In this new kingdom, after solving many quests, they discover a name, but who is it? Our protagonist will eventually meet the holder of this famous name.<br><br><br>\
    He will then teach them that they died in the world they came from and that this world is the one in which they will have to spend the rest of their life.<br>\
    Thanks to the bonds they've formed in this world, a happy ending awaits them, as they've been able to build a circle of acquaintances they can trust and rely on their friends, something they lacked in their previous life.<br><br><br>\
    Our heroine will not be alone in her quest. Throughout their journey, they will meet valuable allies, but also formidable enemies.<br>\
    The antagonist, whose shadow looms over Etheryx World, proves to be a ruthless being determined to maintain the status quo and keep the world's secrets buried forever.<br><br><br>\
    Their henchmen, nightmarish creatures born of darkness itself, will stand in the way of our protagonist, testing their courage and determination.<br>\
    However, it's not only mortal adversaries they will encounter. Magical and mysterious beings also populate this world, some offering their help selflessly, while others pursue their own designs, making the adventure even more complex and unpredictable.<br>",
        },

        members: {
          content: "This is the Members section.",
        },
        characters: {
          content: "This is the Characters section.",
        },
        jouabilite: {
          h1: "Discover immersive gameplay",
          mecanique: "Game Mechanics",
          content_mecanique:
            "<p>Immerse yourself in the action with Etheryx World! Our game offers a captivating gaming experience thanks to its well-designed mechanics.<br> Control your character smoothly, engage in epic battles with a variety of weapons, and solve complex puzzles<br> to progress through the adventure. Thanks to our expert use of the C# programming language,<br> you will benefit from smooth and realistic gameplay,<br> designed to offer you an unforgettable experience.</p><br><br>",
          multijoueurs: "Multiplayer Mode",
          content_multijoueurs:
            "<p>Take on challenges together in Etheryx World! Our multiplayer platform offers a unique experience where you can solve puzzles solo or collaborate with your friends to tackle epic quests.<br>With an integrated chat system, communicate and exchange advice to overcome the obstacles that stand in your way. Dive into action with thrilling mini-quests designed to challenge even the most seasoned players.</p><br><br>",
          solo: "Single Player Mode",
          content_solo:
            "<p>Players will be able to take on unique challenges designed specifically for solo mode.<br>Whether it's solving complex puzzles, navigating perilous dungeons, or searching for crucial clues,<br>players will have the opportunity to test their skills and ingenuity in situations where they must rely solely on themselves.</p><br><br>",
          ai: "Artificial Intelligence",
          content_ai:
            "<p>Face formidable opponents in Etheryx World!<br>Our enemies are equipped with advanced artificial intelligence, allowing them to react realistically to your actions.<br>Be prepared to take on unique challenges as you battle monsters with varied behaviors, each offering a unique challenge to overcome.<br>And don't forget, at the end of your journey, an epic showdown awaits you against the anti-hero himself, also equipped with formidable AI.</p><br><br>",
          end: "<p>With Etheryx World, dive into an adventure where every choice matters and action is always present.<br>Are you ready to take on the challenge and uncover the mysteries of this fantastical world?</p>",
        },
        requirements: {
          h1: "Requirements",
        },
        reports: {
          h1: "Report 1",
          h1_1:"Report 2",
          h1_2:"Report 3",
        },
        manual: {
          h1_fr: "Installation and uninstallation manual in french",
          h1_en:"Installation and uninstallation manual in english",
        },
      },
    },

    //=========french versions
    fr: {
      translation: {
        menu: {
          introduction: "Introduction",
          members: "Membres",
          characters: "Personnages",
          jouabilite: "Jouabilité",
          telechargement: "Téléchargement",
          requirements: "Cahier-des-charges",
          reports: "Rapports",
          manual: "Manuel",
          timeline: "Chronologie",
        },
        header: {
          title: "Etheryx World",
          subtitle: "Par Epipower",
        },
        introduction: {
          p: "Bienvenue dans Etheryx World, un univers fascinant où les frontières entre la vie et la mort s'effacent pour révéler un mystère captivant.<br>Imaginez-vous soudainement plongé dans un monde parallèle, déconnecté de tout ce que vous avez connu. C'est dans ce cadre intrigant que notre héroïne émerge après une mort inattendue, prête à démêler les fils d'une énigme complexe. <br><br>Etheryx World est bien plus qu'un simple jeu. C'est une aventure immersive qui vous transporte dans un voyage époustouflant à travers des paysages enchanteurs et des rencontres extraordinaires.<br>Inspiré par le célèbre webtoon 'Why Raelina ended up at the Duke’s mansion' de Milcha, notre jeu vous invite à explorer un monde parallèle rempli de mystères et d'intrigues.<br><br>Vous incarnez le personnage principal, confronté à des défis sans précédent alors qu'il tente de comprendre les circonstances de son propre décès. À travers des enquêtes passionnantes et des interactions avec des personnages fascinants, vous découvrirez les secrets enfouis de ce royaume mystérieux.<br><br>Mais méfiez-vous, car dans Etheryx World, rien n'est ce qu'il semble être. Des alliés inattendus se cachent parmi les ombres, tandis que des obstacles insurmontables se dressent sur votre chemin. Pourquoi êtes-vous ici ? Qui peut vous aider ? Et surtout, qui peut être digne de confiance ?<br><br>Plongez dans l'aventure et préparez-vous à défier les limites de la réalité dans Etheryx World. Vous n'êtes plus seulement un joueur, mais un explorateur intrépide sur le point de découvrir un monde parallèle où chaque décision compte et chaque révélation vous rapproche de la vérité ultime. Êtes-vous prêt à relever le défi ?",
        },
        personnages: {
          p: "Notre jeu a pour titre Etheryx World. C'est un jeu d'aventure captivant qui vous plongera dans un monde mystérieux et envoûtant.<br>\
    Vous allez vivre l'histoire d'une personne qui, un matin, va se réveiller dans un monde qui n'est plus le sien et dont elle ne connaît rien.<br><br><br>\
    Dans ce nouvel univers, elle va devoir rencontrer différents personnages afin de trouver des réponses à ses questions : Où est-elle et comment est-elle arrivée là ?<br>\
    Étant dans un nouveau monde, elle ne sait pas à qui faire confiance. En effet, certaines personnes vont essayer de l'empêcher d'enquêter sur la raison de sa présence.<br><br><br>\
    Dans ce nouveau royaume, après avoir résolu de nombreuses quêtes, elle découvre un prénom, mais qui est-ce ? Notre protagoniste va finir par rencontrer le détenteur de ce fameux prénom.<br><br><br>\
    Il va alors lui apprendre qu'elle est décédée dans le monde d'où elle vient et que ce monde est celui dans lequel elle va devoir passer le reste de sa vie.<br>\
    Grâce aux liens qu'elle a tissés dans ce monde, une fin heureuse l'attend, car elle a pu se constituer un cercle de connaissances en qui elle peut avoir confiance et compter sur ses amis, un aspect qui lui manquait dans sa vie précédente.<br><br><br>\
    Notre héroïne ne sera pas seule dans sa quête. Tout au long de son périple, elle rencontrera des alliés précieux, mais aussi des ennemis redoutables.<br>\
    L'antagoniste, dont l'ombre plane sur Etheryx World, se révèle être un être impitoyable déterminé à maintenir le statu quo et à garder les secrets du monde enfouis à jamais.<br><br><br>\
    Ses sbires, des créatures cauchemardesques engendrées par les ténèbres elles-mêmes, se dresseront sur le chemin de notre protagoniste, testant sa bravoure et sa détermination.<br>\
    Cependant, ce ne sont pas seulement des adversaires mortels qu'elle rencontrera. Des êtres magiques et mystérieux peuplent également ce monde, certains offrant leur aide de manière désintéressée, tandis que d'autres poursuivent leurs propres desseins, rendant l'aventure encore plus complexe et imprévisible.<br>",
        },

        membres: {
          content: "Ceci est la section Membres.",
        },
        personnages: {
          content: "Ceci est la section Personnages.",
        },
        jouabilite: {
          h1: "Découvrez une jouabilité immersive",
          mecanique: "Mécanique de jeu",
          content_mecanique:
            "Plongez au cœur de l'action avec Etheryx World ! Notre jeu offre une expérience de jeu captivante grâce à ses mécaniques bien conçues.<br> Contrôlez votre personnage avec fluidité, engagez-vous dans des combats épiques avec une variété d'armes et résolvez des énigmes complexes<br> pour progresser dans l'aventure. Grâce à notre utilisation experte du langage de programmation C#, vous bénéficierez d'un gameplay fluide et réaliste,<br> conçu pour vous offrir une expérience inoubliable.</p><br><br>",
          multijoueurs: "Mode Multijoueurs",
          content_multijoueurs:
            "<p>Relevez des défis ensemble dans Etheryx World ! Notre plateforme multijoueur offre une expérience unique où vous pouvez résoudre des énigmes en solo ou collaborer avec vos amis pour venir à bout de quêtes épiques.<br>Avec un système de chat intégré, communiquez et échangez des conseils pour surmonter les obstacles qui se dressent sur votre chemin. Plongez dans l'action avec des mini-quêtes palpitantes, conçues pour défier même les joueurs les plus aguerris.</p><br><br>",
          solo: "Mode Solo",
          content_solo:
            "<p>Les joueurs pourront relever des défis uniques conçus spécialement pour le mode solo.<br>Que ce soit la résolution d'énigmes complexes, la navigation à travers des donjons périlleux ou la recherche d'indices cruciaux, <br>les joueurs auront l'opportunité de tester leurs compétences et leur ingéniosité dans des situations où ils doivent compter uniquement sur eux-mêmes.</p><br><br></br>",
          ai: "Intelligence Artificielle",
          content_ai:
            "<p>Affrontez des adversaires redoutables dans Etheryx World !<br>Nos ennemis sont dotés d'une intelligence artificielle avancée, leur permettant de réagir de manière réaliste à vos actions.<br>Soyez prêt à relever des défis uniques alors que vous combattez des monstres aux comportements variés, chacun offrant un défi unique à surmonter.<br>Et n'oubliez pas, à la fin de votre périple, un affrontement épique vous attend contre l'anti-héros lui-même, également équipé d'une IA redoutable.</p><br><br>",
          end: "<p>Avec Etheryx World, plongez dans une aventure où chaque choix compte et où l'action est toujours au rendez-vous.<br>Êtes-vous prêt à relever le défi et à découvrir les mystères de ce monde fantastique ?</p>",
        },
        Cahier_des_charges: {
          h1: "Cahier des charges",
        },
        rapports: {
          h1: "Rapport de soutenance 1",
          h1_1:"Rapport de soutenance 2",
          h1_3:"Rapport de soutenance 3",
        },
        manuel: {
          h1_fr: "Manuel d'installation et de désinstallation en français",
          h1_en: "Manuel d'installation et de désinstallation en anglais",
        },
      },
    },
  };

  i18next.init(
    {
      lng: "en",
      debug: true,
      resources: resources,
      fallbackLng: "en",
    },
    function (err, t) {
      // Initialize translations
      jqueryI18next.init(i18next, $);
      $("body").localize();

      // Handle language change
      $("#language-select").on("change", function () {
        var lang = $(this).val();
        i18next.changeLanguage(lang, (err, t) => {
          if (err) return console.log("something went wrong loading", err);
          $("body").localize();
        });
      });
    }
  );
});