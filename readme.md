#TP Instagram
Lien De la page d'acceuil Instagram [ICI](https://raharisonkevin.github.io/tp_instagram/)

## 1. Présentation
 Réalisation d'une page de connexion instagram.

## 2. Cahier des charges
* Les technologies autorisées sont : html5, css3, javascript et Framawork Google font
* Utilisez Sublim-Text ou Visual Studio Code
* Le code HTML généré doit être valide selon les normes du W3C
* La largeur du formulaire est de : 370px. La couleur du background du formulaire est: #ffffff.
* La couleur du background de body est: #fafafa
* La couleur à l’intérieur des champs est #fafafa et celle du bouton #3897f0
* La police est Open Sans et pour le titre il faut intégrer l’image svg contenu dans le répertoire 
sources.
Votre rendu se présentera sous la forme d’une archive zip avec le squelette suivant : 
instagram-votre-nom.zip (le dossier doit être nommé avec votre nom)
* Votre rendu sera envoyé dans un dépôt GitHub
* L’ergonomie et la finition des interfaces seront prises en compte dans la notation, tout 
comme la propreté et la clarté de votre code.

## Fonctionnement 
Dans cet exercice il y a des étapes à respecter. La première: valider les champs obligatoires et la 
deuxième après validation l’internaute doit être redirigé dans une page d’accueil.

## Fonctionnalité et algorithme

La validation du formulaire doit être faite étape par étape. La première étape doit vérifier si les 
champs de type e-mail et password sont vides. La deuxième étape doit vérifier si le type email est 
correct. La troisième doit vérifier que le mot de passe correspond bien à celui qui a été initialisé et 
stocké dans une variable « mdp ». Si toutes les conditions sont vrai alors passez à la deuxième page 
et on affiche un bonjour avec le mail utilisateur et en dessous la phrase suivante : Votre compte est 
votremail@gmail.com. Les affichages des phrases sont dynamiques. Pour plus de détails regardez le 
story-board dans le répertoire correspondant.
Pour récupérer le login dans la page d’accueil stockez le login avec la méthode 
localStorage.setItem(« login », votremail@gmail.com). Dans la page d’accueil récupérez-le avec la 
méthode localStorage.getItem(« login ») et affichez-le.
Pour la bonne fonctionnalité du javascript je vous conseille de faire deux scripts js séparés. Le 
premier prend en charge la fonction, les variables et la vérification du formulaire. Le deuxième lié à la 
page d’accueil a pour tâche de récupérer juste le login utilisateur et l’afficher. Pour la vérification du 
formulaire je vous conseille également de créer une fonction isolée qui contient une fonction 
nommée. La fonction nommée contient un objet utilisateur avec toutes les propriétés à tester 
associées aux champs du formulaire.

