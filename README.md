# API Rest avec Opine

Petit projet d'API Rest réalisé avec Deno afin d'expérimenter les bases de ce dernier.
Le framework de serveur web utilisé est Opine. Il est porté depuis Express donc la syntaxe est la même. ([Lien vers la librairie](https://deno.land/x/opine)).
Pour gérer les données, il est utilisé un petit module nommé FileDB qui permet de lire et écrire les données dans des fichiers JSON ([Lien vers la librairie](https://deno.land/x/filedb)). Cela permet de se basser d'une véritable base de données qui n'est pas utile dans le cadre de ce projet.

# Lancer le projet

Dans un terminal, lancer la commande suivante :
`deno run --allow-net --allow-read --allow-write server.ts`
