# Traderepublic

Reproduction du site de Trade Republic FR

# Team

Jessica Couble
Lisa Sauvinet

# Journal de bord

Nous avons réalisé 10 issues répartis équitablement au sein de l'équipe.
Jessica a créé le Repository et mise en place le projet avec Vite+React
Lisa a réalisé la pipeline : ci.yml
Lisa a aussi mis en place une pipeline de validation des PR (une PR ne peut pas être validé par la personne qui a fait la demande) directement sur GitHub.

Nous avons eu la possibilité de réglé quelques conflits, la plupart du temps quand nous mergions la branch _dev_ sur la nouvelle branche afin de la mettre à jour.
Les conflits n'ont pas eu de conséquence ni difficultés particulières.

![Historique des commandes](/historique_git_commands.md)

## CI

Mise en place de règles pour les Pull Request depuis GitHub
![PR Rules](/pr_rules.png)
2 fonctions principales sont déclaré dans la CI : - événement déclenchant la CI; - test pour builder le projet afin de vérifier qu'il soit viable.

## Erreurs de parcours

Premier PR (sans les règles) a été fait sur _main_. Cela n'a pas eu de conséquences sur le projet, vu que l'état du projet était encore à ses débuts.

Nous avons réalisé que notre dossier _.github/workflow_ a disparu lors du merge de la branche _feature/4-footer_. Cela peut s'expliquer de plusieurs façons :

    - Nous avons tenter de faire des **git rebase** qui n'ont malheureusement pas aboutit pour cause de trop d'incohérences des conflits. Nous avons donc dùu _abort_ le rebase et reprendre avec un merge.
    - La branche _feature/4-footer_ n'a pas été basé sur la bonne branche.
    - Le dossier a été supprimé par erreur.

L'erreur est maintenant corrigé et le dossier de nouveau ajouté à notre projet.
