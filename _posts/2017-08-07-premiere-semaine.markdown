---
layout: post
title:  "Première semaine"
comments: true
date:   2017-08-07
sketch: clockSketch.js
---

Mon cerveau après ma première semaine ^

## Jour 1

<img class="right-photo" src="{{ site.baseurl }}/assets/img/na.jpg" width="50%">

Je me lève à 6h25. J'ai hâte d'être sur le campus. Petite douche, déjeuner rapide, let's go! Je prends un des autobus du réseau *gBus* réservé pour les employés de Google et je me rends au bâtiment 46. Les 250 *nooglers* sont accueilli dans un petit hall où ils doivent s'identifier et remplir différents petits formulaires (à l'ordinateur, je ne suis pas à un bureau de la SAAQ) pour finalement recevoir leur badge d'employé. En cinq minutes, je suis identifié, j'ai un compte *@google.com* actif et je peux entrer dans tous les bureaux de Google partout dans le monde. Cool.

Mes 249 amis et moi entrons ensuite dans une grande salle de formation. Musique populaire et décoration aux couleurs de Google. Si vous avez regardé le film *The internship*, c'est exactement le même feeling. On prend notre photo de profil à tour de rôle et on trouve la place qui nous est assignée autour d'une des tables. À ma place, je retrouve un beau Macbook Pro neuf et quelques petits cadeaux.

Le reste de la journée consiste en une série de présentation. Histoire de Google, la Culture de Google (*What does it mean to be Googley?*), les ressources humaines chez Google, etc. Bref, énormément d'information. J'ai l'occasion de discuter avec plusieurs *nooglers* pendant les pauses: un brézilien dans l'équipe de support, un docteur en statistiques qui vient faire de la recherche, une spécialiste en UX (*User eXperience*), un stagiaire qui n'a pas complété son baccalauréat.

À la fin de la journée, deux membres de mon équipe viennent me chercher pour me faire visiter mon espace de travail et pour me présenter mes autres coéquipiers. Ils m'accueillent vraiment chaleureusement. *Are you Pieer-Murk? That's awesome, i'm Xiaojun!* Ils me font visiter les environs de mon bureau et ils me présentent chacun des membres de mon équipe.

À la fin de la journée, je suis épuisé (il ne faut pas sous-estimer la quantité d'énergie nécessaire à nous faire parler dans une autre langue durant toute une journée), mais je dois régler plusieurs détails. Je n'ai pas de compte chèque américain et je n'ai pas de numéro d'assurance social. Bref, j'ai encore du travail à faire pour réellement être confortablement installé.

## Jour 2

Tout comme la première journée, les nouveaux assistent à une autre série de présentation. Cette fois-ci, plusieurs présentateurs mettent l'emphase sur le fait que nous avons accès à énormément d'information confidentiel. Effectivement, j'ai accès à beaucoup de nouvelles avant qu'elles soient disponible publiquement. J'ai aussi la responsabilité de ne pas divulguer les secrets de Google. Je ne peux donc pas vous dire tous les détails de mon aventure.

À la fin de la journée, tous les *nooglers* sont invités à un 5 à 7 (avec de la bière) et on nous remet le fameux chapeau à hélice et on près des photos. Voici mon groupe :

<img src="{{ site.baseurl }}/assets/img/no.jpg">

Beau souvenir!

Autre petit détail, il y a des bidets sur les toilettes chez Google. J'avais jamais essayé cette technologie. Si vous vous demandez où est mon trou de cul, il y a une toilette qui le sais en criss à Mountain View. Pile-poil.

## Jour 3

Première série de formations techniques pour les ingénieurs. Ma prochaine semaine sera occupée par les différents cours nécessaires pour apprendre l'utilisation des outils et aussi pour apprendre les bonnes pratiques chez Google. Un premier présentateur super dynamique nous explique les différents grades d'ingénieur et comment monter l'échelle durant notre carrière. Il nous explique aussi comment tirer avantage du 20% de notre temps qui nous est alloué pour faire des projets différents de notre projet principal. Il nous est tout à fait possible de démarrer un nouveau projet et celui-ci pourrait un jour devenir notre travail à temps plein.

J'ai ensuite ma première formation technique qui traite des méthodes de travail et sur la gestion du code à l'interne. Premièrement, je note que tous les tutoriels et les documents disponibles pour les employés sont tous à jour, précis et adaptés pour tous les systèmes d'exploitation. C'est incroyable le temps qu'un programmeur peut perdre quand les informations disponibles ne sont pas à jour ou incomplètes. Je remarque aussi un détail... C'est facile. C'est extrêmement facile. Je ne peux pas donner tous les détails sur les outils que nous utilisons puisque ce sont tous des outils développés par Google et seulement pour les employés de Google. Je peux vous dire par contre que les opérations normales qu'un développeur fait régulièrement (récupérer le code d'un dépôt, compiler et exécuter les tests, soumettre des modifications pour une évaluation par un pair, etc.) sont extrêmement simplifiés et extrêmement performantes. Je suis vraiment impressionné de la qualité des outils.

Voici de l'information que je peux divulguer publiquement (et ce prochain chapitre sera assez technique). L'ensemble du code chez Google est dans un seul dépot, sur une seul branche dans un système propriétaire différent de Git ou Mercurial. Lorsqu'un programmeur fait l'équivalent d'un clone du dépôt, il crée essentiellement une copie virtuelle gardée dans le *cloud* sur laquelle il a une vue complète sur tout les fichiers. Seul les fichiers modifiés sont gardés dans l'espace de travail personnel du programmeur. Il y a plusieurs avantages a avoir un seul dépôt, mais la plus importante à mon avis est simplement la gestion des dépendances entre les projets. Il n'y a jamais plusieurs versions d'un même projet; il n'y a qu'une seule source de vérité (pas de problème de gestion de versions). On a ensuite plusieurs outils qui nous aident à faire différentes opérations, mais celui qui m'a le plus impressioné est *Code Search*. Comme son nom l'indique, *Code Search* est un outil nous permettant d'explorer tous les fichiers du dépôt, leur historique, les références entre eux, etc. Je ne sais pas si vous avez déjà exécuter l'option *find usage* sur une fonction ou sur une variable dans un de vos projet, mais peu importe l'environnement de développement, c'est souvent une opération assez longue et qui interromp entièrement le logiciel. La même opération avec cet outil prend moins de 100 millisecondes. Vraiment utile. J'ai hâte de l'utiliser dans mon travail quotidien. Finalement, J'ai trouvé cette [présentation](https://www.youtube.com/watch?v=W71BTkUbdqE) qui discute plus en détail de nos outils et de l'organisation du code chez Google.

J'en ai appris beaucoup aujourd'hui et j'ai vraiment hâte de voir ce qu'ils nous réservent pour la suite.
