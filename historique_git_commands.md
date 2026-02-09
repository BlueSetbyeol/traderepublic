Last login: Fri Jan 23 14:27:20 on ttys057
➜ w5-git git clone git@github.com:BlueSetbyeol/traderepublic.git
Clonage dans 'traderepublic'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Réception d'objets: 100% (3/3), fait.
➜ w5-git cd traderepublic
➜ traderepublic git:(main) code .
➜ traderepublic git:(main) git add .
➜ traderepublic git:(main) ✗ git commit -m "git repo set up"
[main 8fc1955] git repo set up
1 file changed, 6 insertions(+)
➜ traderepublic git:(main) git push origin main
Énumération des objets: 5, fait.
Décompte des objets: 100% (5/5), fait.
Compression par delta en utilisant jusqu'à 8 fils d'exécution
Compression des objets: 100% (2/2), fait.
Écriture des objets: 100% (3/3), 324 octets | 324.00 Kio/s, fait.
Total 3 (delta 0), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
To github.com:BlueSetbyeol/traderepublic.git
b9dda55..8fc1955 main -> main
➜ traderepublic git:(main) git switch -c dev
Basculement sur la nouvelle branche 'dev'
➜ traderepublic git:(dev) git push origin dev
Total 0 (delta 0), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
remote:
remote: Create a pull request for 'dev' on GitHub by visiting:
remote: https://github.com/BlueSetbyeol/traderepublic/pull/new/dev
remote:
To github.com:BlueSetbyeol/traderepublic.git

- [new branch] dev -> dev
  ➜ traderepublic git:(dev) git switch -c feature/2-react_setup
  Basculement sur la nouvelle branche 'feature/2-react_setup'
  ➜ traderepublic git:(feature/2-react_setup) npm create vite@latest

> npx
> create-vite

│
◇ Project name:
│ frontend
│
◇ Select a framework:
│ React
│
◇ Select a variant:
│ TypeScript
│
◇ Use rolldown-vite (Experimental)?:
│ No
│
◇ Install with npm and start now?
│ No
│
◇ Scaffolding project in /Users/sica/Documents/mds/w5-git/traderepublic/frontend...
│
└ Done. Now run:

cd frontend
npm install
npm run dev

➜ traderepublic git:(feature/2-react_setup) ✗ cd frontend
➜ frontend git:(feature/2-react_setup) ✗ npm i
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: '@vitejs/plugin-react@5.1.2',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: 'vite@7.3.1',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }

added 175 packages, and audited 176 packages in 11s

45 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
➜ frontend git:(feature/2-react_setup) ✗ npm install react-router-dom
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: '@vitejs/plugin-react@5.1.2',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: 'vite@7.3.1',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }

added 5 packages, and audited 181 packages in 1s

46 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
➜ frontend git:(feature/2-react_setup) ✗ npm install @mui/material @mui/styled-engine-sc styled-components
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: '@vitejs/plugin-react@5.1.2',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: 'vite@7.3.1',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }

added 43 packages, and audited 224 packages in 6s

57 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
➜ frontend git:(feature/2-react_setup) ✗ npm install @mui/icons-material
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: '@vitejs/plugin-react@5.1.2',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE package: 'vite@7.3.1',
npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
npm warn EBADENGINE }

added 1 package, and audited 225 packages in 6s

58 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
➜ frontend git:(feature/2-react_setup) ✗ git add .
➜ frontend git:(feature/2-react_setup) ✗ git commit -m "feat:adding dependencies"
[feature/2-react_setup 4e9ba51] feat:adding dependencies
16 files changed, 4299 insertions(+)
create mode 100644 frontend/.gitignore
create mode 100644 frontend/README.md
create mode 100644 frontend/eslint.config.js
create mode 100644 frontend/index.html
create mode 100644 frontend/package-lock.json
create mode 100644 frontend/package.json
create mode 100644 frontend/public/vite.svg
create mode 100644 frontend/src/App.css
create mode 100644 frontend/src/App.tsx
create mode 100644 frontend/src/assets/react.svg
create mode 100644 frontend/src/index.css
create mode 100644 frontend/src/main.tsx
create mode 100644 frontend/tsconfig.app.json
create mode 100644 frontend/tsconfig.json
create mode 100644 frontend/tsconfig.node.json
create mode 100644 frontend/vite.config.ts
➜ frontend git:(feature/2-react_setup) import Accordion from '@mui/material/Accordion';
zsh: command not found: import
➜ frontend git:(feature/2-react_setup) ✗ git add .
➜ frontend git:(feature/2-react_setup) ✗ git commit -m "feat:setting up React complete (#2)"
[feature/2-react_setup b004973] feat:setting up React complete (#2)
5 files changed, 57 insertions(+), 138 deletions(-)
delete mode 100644 frontend/src/index.css
create mode 100644 frontend/src/pages/Home/Home.tsx
➜ frontend git:(feature/2-react_setup) git push origin feature/2-react_setup
Énumération des objets: 33, fait.
Décompte des objets: 100% (33/33), fait.
Compression par delta en utilisant jusqu'à 8 fils d'exécution
Compression des objets: 100% (28/28), fait.
Écriture des objets: 100% (32/32), 39.43 Kio | 7.89 Mio/s, fait.
Total 32 (delta 2), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
remote: Resolving deltas: 100% (2/2), done.
remote:
remote: Create a pull request for 'feature/2-react_setup' on GitHub by visiting
remote: https://github.com/BlueSetbyeol/traderepublic/pull/new/feature/2-react_setup
remote:
To github.com:BlueSetbyeol/traderepublic.git

- [new branch] feature/2-react_setup -> feature/2-react_setup
  ➜ frontend git:(feature/2-react_setup) git switch main
  Basculement sur la branche 'main'
  Votre branche est à jour avec 'origin/main'.
  ➜ frontend git:(main) ✗ git pull origin main
  remote: Enumerating objects: 1, done.
  remote: Counting objects: 100% (1/1), done.
  remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
  Dépaquetage des objets: 100% (1/1), 919 octets | 919.00 Kio/s, fait.
  Depuis github.com:BlueSetbyeol/traderepublic
- branch main -> FETCH_HEAD
  8fc1955..f0df04a main -> origin/main
  Mise à jour 8fc1955..f0df04a
  Fast-forward
  frontend/.gitignore | 24 +
  frontend/README.md | 73 +
  frontend/eslint.config.js | 23 +
  frontend/index.html | 13 +
  frontend/package-lock.json | 3906 ++++++++++++++++++++++++++++++++++++++
  frontend/package.json | 35 +
  frontend/public/vite.svg | 1 +
  frontend/src/App.css | 31 +
  frontend/src/App.tsx | 16 +
  frontend/src/assets/react.svg | 1 +
  frontend/src/main.tsx | 20 +
  frontend/src/pages/Home/Home.tsx | 7 +
  frontend/tsconfig.app.json | 28 +
  frontend/tsconfig.json | 7 +
  frontend/tsconfig.node.json | 26 +
  frontend/vite.config.ts | 7 +
  16 files changed, 4218 insertions(+)
  create mode 100644 frontend/.gitignore
  create mode 100644 frontend/README.md
  create mode 100644 frontend/eslint.config.js
  create mode 100644 frontend/index.html
  create mode 100644 frontend/package-lock.json
  create mode 100644 frontend/package.json
  create mode 100644 frontend/public/vite.svg
  create mode 100644 frontend/src/App.css
  create mode 100644 frontend/src/App.tsx
  create mode 100644 frontend/src/assets/react.svg
  create mode 100644 frontend/src/main.tsx
  create mode 100644 frontend/src/pages/Home/Home.tsx
  create mode 100644 frontend/tsconfig.app.json
  create mode 100644 frontend/tsconfig.json
  create mode 100644 frontend/tsconfig.node.json
  create mode 100644 frontend/vite.config.ts
  ➜ frontend git:(main) ✗ git switch dev
  Basculement sur la branche 'dev'
  ➜ frontend git:(dev) ✗ git merge main
  Mise à jour 8fc1955..f0df04a
  Fast-forward
  frontend/.gitignore | 24 +
  frontend/README.md | 73 +
  frontend/eslint.config.js | 23 +
  frontend/index.html | 13 +
  frontend/package-lock.json | 3906 ++++++++++++++++++++++++++++++++++++++
  frontend/package.json | 35 +
  frontend/public/vite.svg | 1 +
  frontend/src/App.css | 31 +
  frontend/src/App.tsx | 16 +
  frontend/src/assets/react.svg | 1 +
  frontend/src/main.tsx | 20 +
  frontend/src/pages/Home/Home.tsx | 7 +
  frontend/tsconfig.app.json | 28 +
  frontend/tsconfig.json | 7 +
  frontend/tsconfig.node.json | 26 +
  frontend/vite.config.ts | 7 +
  16 files changed, 4218 insertions(+)
  create mode 100644 frontend/.gitignore
  create mode 100644 frontend/README.md
  create mode 100644 frontend/eslint.config.js
  create mode 100644 frontend/index.html
  create mode 100644 frontend/package-lock.json
  create mode 100644 frontend/package.json
  create mode 100644 frontend/public/vite.svg
  create mode 100644 frontend/src/App.css
  create mode 100644 frontend/src/App.tsx
  create mode 100644 frontend/src/assets/react.svg
  create mode 100644 frontend/src/main.tsx
  create mode 100644 frontend/src/pages/Home/Home.tsx
  create mode 100644 frontend/tsconfig.app.json
  create mode 100644 frontend/tsconfig.json
  create mode 100644 frontend/tsconfig.node.json
  create mode 100644 frontend/vite.config.ts
  ➜ frontend git:(dev) ✗ git push origin dev
  Total 0 (delta 0), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  To github.com:BlueSetbyeol/traderepublic.git
  8fc1955..f0df04a dev -> dev
  ➜ frontend git:(dev) ✗ git switch feature/3-navbar
  fatal : référence invalide : feature/3-navbar
  ➜ frontend git:(dev) ✗ git fetch origin
  remote: Enumerating objects: 6, done.
  remote: Counting objects: 100% (6/6), done.
  remote: Compressing objects: 100% (3/3), done.
  remote: Total 5 (delta 0), reused 5 (delta 0), pack-reused 0 (from 0)
  Dépaquetage des objets: 100% (5/5), 771 octets | 128.00 Kio/s, fait.
  Depuis github.com:BlueSetbyeol/traderepublic
- [nouvelle branche] feature/1-ci -> origin/feature/1-ci
- [nouvelle branche] feature/3-navbar -> origin/feature/3-navbar
  ➜ frontend git:(dev) ✗ git switch feature/3-navbar
  la branche 'feature/3-navbar' est paramétrée pour suivre 'origin/feature/3-navbar'.
  Basculement sur la nouvelle branche 'feature/3-navbar'
  ➜ frontend git:(feature/3-navbar) ✗ npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
  npm warn EBADENGINE Unsupported engine {
  npm warn EBADENGINE package: '@vitejs/plugin-react@5.1.2',
  npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
  npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
  npm warn EBADENGINE }
  npm warn EBADENGINE Unsupported engine {
  npm warn EBADENGINE package: 'vite@7.3.1',
  npm warn EBADENGINE required: { node: '^20.19.0 || >=22.12.0' },
  npm warn EBADENGINE current: { node: 'v22.9.0', npm: '10.8.3' }
  npm warn EBADENGINE }

added 24 packages, and audited 249 packages in 5s

64 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
➜ frontend git:(feature/3-navbar) ✗ git add .
➜ frontend git:(feature/3-navbar) ✗ git commit -m "feat: begining of navbar (#3)
dquote> "
[feature/3-navbar 44030dc] feat: begining of navbar (#3)
11 files changed, 364 insertions(+), 26 deletions(-)
create mode 100644 frontend/.vite/deps/\_metadata.json
create mode 100644 frontend/.vite/deps/package.json
create mode 100644 frontend/src/assets/images/trade_republic_white.png
create mode 100644 frontend/src/assets/images/traderepublic_qr_code.png
create mode 100644 frontend/src/components/Navbar/Navbar.css
create mode 100644 frontend/src/components/Navbar/Navbar.tsx
➜ frontend git:(feature/3-navbar) ✗ git push origin feature/3-navbar
Énumération des objets: 30, fait.
Décompte des objets: 100% (30/30), fait.
Compression par delta en utilisant jusqu'à 8 fils d'exécution
Compression des objets: 100% (18/18), fait.
Écriture des objets: 100% (21/21), 220.53 Kio | 2.45 Mio/s, fait.
Total 21 (delta 6), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
To github.com:BlueSetbyeol/traderepublic.git
f0df04a..44030dc feature/3-navbar -> feature/3-navbar
➜ frontend git:(feature/3-navbar) ✗ git switch dev
M README.md
Basculement sur la branche 'dev'
➜ frontend git:(dev) ✗ git pull origin dev
remote: Enumerating objects: 42, done.
remote: Counting objects: 100% (42/42), done.
remote: Compressing objects: 100% (14/14), done.
remote: Total 33 (delta 12), reused 31 (delta 11), pack-reused 0 (from 0)
Dépaquetage des objets: 100% (33/33), 3.72 Kio | 146.00 Kio/s, fait.
Depuis github.com:BlueSetbyeol/traderepublic

- branch dev -> FETCH_HEAD
  f0df04a..b07d608 dev -> origin/dev
  Mise à jour f0df04a..b07d608
  Fast-forward
  .github/workflows/ci.yml | 49 ++++++++++++++++++++++++++++++++++++++++++++++++
  frontend/package.json | 1 +
  frontend/src/main.tsx | 3 +--
  3 files changed, 51 insertions(+), 2 deletions(-)
  create mode 100644 .github/workflows/ci.yml
  ➜ frontend git:(dev) ✗ git switch feature/3-navbar
  M README.md
  Basculement sur la branche 'feature/3-navbar'
  Votre branche est à jour avec 'origin/feature/3-navbar'.
  ➜ frontend git:(feature/3-navbar) ✗ git rebase dev
  erreur : impossible de rebase : vous avez des modifications non indexées.
  erreur : Veuillez les valider ou les remiser.
  ➜ frontend git:(feature/3-navbar) ✗ git status
  Sur la branche feature/3-navbar
  Votre branche est à jour avec 'origin/feature/3-navbar'.

Modifications qui ne seront pas validées :
(utilisez "git add <fichier>..." pour mettre à jour ce qui sera validé)
(utilisez "git restore <fichier>..." pour annuler les modifications dans le répertoire de travail)
modifié : ../README.md

Fichiers non suivis:
(utilisez "git add <fichier>..." pour inclure dans ce qui sera validé)
../pr_rules.png

aucune modification n'a été ajoutée à la validation (utilisez "git add" ou "git commit -a")
➜ frontend git:(feature/3-navbar) ✗ cd ..
➜ traderepublic git:(feature/3-navbar) ✗ git add .
➜ traderepublic git:(feature/3-navbar) ✗ git commit -m "feat: read me and image added"
[feature/3-navbar af3b83a] feat: read me and image added
2 files changed, 13 insertions(+), 2 deletions(-)
create mode 100644 pr_rules.png
➜ traderepublic git:(feature/3-navbar) git rebase dev  
Fusion automatique de frontend/package.json
Fusion automatique de frontend/src/main.tsx
CONFLIT (contenu) : Conflit de fusion dans frontend/src/main.tsx
erreur : impossible d'appliquer 44030dc... feat: begining of navbar (#3)
astuce : Resolve all conflicts manually, mark them as resolved with
astuce : "git add/rm <conflicted_files>", then run "git rebase --continue".
astuce : You can instead skip this commit: run "git rebase --skip".
astuce : To abort and get back to the state before "git rebase", run "git rebase --abort".
astuce : Disable this message with "git config advice.mergeConflict false"
Impossible d'appliquer 44030dc... feat: begining of navbar (#3)
➜ traderepublic git:(b07d608) ✗ git add .
➜ traderepublic git:(b07d608) ✗ git rebase --continue
[HEAD détachée e8424ae] feat: begining of navbar (#3)
10 files changed, 364 insertions(+), 25 deletions(-)
create mode 100644 frontend/.vite/deps/\_metadata.json
create mode 100644 frontend/.vite/deps/package.json
create mode 100644 frontend/src/assets/images/trade_republic_white.png
create mode 100644 frontend/src/assets/images/traderepublic_qr_code.png
create mode 100644 frontend/src/components/Navbar/Navbar.css
create mode 100644 frontend/src/components/Navbar/Navbar.tsx
Rebasage et mise à jour de refs/heads/feature/3-navbar avec succès.
➜ traderepublic git:(feature/3-navbar) git add .
➜ traderepublic git:(feature/3-navbar) git commit -m "feat: rebasing branch on dev"
Sur la branche feature/3-navbar
Votre branche et 'origin/feature/3-navbar' ont divergé,
et ont 12 et 1 commits différents chacune respectivement.

rien à valider, la copie de travail est propre
➜ traderepublic git:(feature/3-navbar) git push origin feature/3-navbar
To github.com:BlueSetbyeol/traderepublic.git
! [rejected] feature/3-navbar -> feature/3-navbar (non-fast-forward)
erreur : impossible de pousser des références vers 'github.com:BlueSetbyeol/traderepublic.git'
astuce : Les mises à jour ont été rejetées car le sommet de la branche actuelle est derrière
astuce : son homologue distant. Si vous souhaitez intégrer les changements distants,
astuce : utilisez 'git pull' avant de pousser à nouveau.
astuce : Voir la 'Note à propos des avances rapides' dans 'git push --help' pour plus d'information.
➜ traderepublic git:(feature/3-navbar) git pull origin feature/3-navbar
Depuis github.com:BlueSetbyeol/traderepublic

- branch feature/3-navbar -> FETCH_HEAD
  Fusion automatique de frontend/package.json
  Fusion automatique de frontend/src/main.tsx
  CONFLIT (contenu) : Conflit de fusion dans frontend/src/main.tsx
  La fusion automatique a échoué ; réglez les conflits et validez le résultat.
  ➜ traderepublic git:(feature/3-navbar) ✗ git add .
  ➜ traderepublic git:(feature/3-navbar) git commit -m "fix:rebase"
  [feature/3-navbar 1439b23] fix:rebase
  ➜ traderepublic git:(feature/3-navbar) git push origin feature/3-navbar
  Énumération des objets: 20, fait.
  Décompte des objets: 100% (19/19), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (10/10), fait.
  Écriture des objets: 100% (10/10), 73.36 Kio | 18.34 Mio/s, fait.
  Total 10 (delta 5), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (5/5), completed with 4 local objects.
  To github.com:BlueSetbyeol/traderepublic.git
  44030dc..1439b23 feature/3-navbar -> feature/3-navbar
  ➜ traderepublic git:(feature/3-navbar) git add .
  ➜ traderepublic git:(feature/3-navbar) ✗ git commit -m "feat:end of navbar (#3)"
  [feature/3-navbar e3f3976] feat:end of navbar (#3)
  4 files changed, 86 insertions(+), 16 deletions(-)
  ➜ traderepublic git:(feature/3-navbar) git push origin feature/3-navbar
  Énumération des objets: 23, fait.
  Décompte des objets: 100% (23/23), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (11/11), fait.
  Écriture des objets: 100% (12/12), 44.49 Kio | 22.24 Mio/s, fait.
  Total 12 (delta 3), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
  To github.com:BlueSetbyeol/traderepublic.git
  1439b23..e3f3976 feature/3-navbar -> feature/3-navbar
  ➜ traderepublic git:(feature/3-navbar) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git pull origin dev
  remote: Enumerating objects: 1, done.
  remote: Counting objects: 100% (1/1), done.
  remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
  Dépaquetage des objets: 100% (1/1), 917 octets | 458.00 Kio/s, fait.
  Depuis github.com:BlueSetbyeol/traderepublic
- branch dev -> FETCH_HEAD
  b07d608..39510a6 dev -> origin/dev
  Mise à jour b07d608..39510a6
  Fast-forward
  README.md | 15 +-
  frontend/.vite/deps/\_metadata.json | 8 +
  frontend/.vite/deps/package.json | 3 +
  frontend/package-lock.json | 312 +++++++++++++++++++--
  frontend/package.json | 2 +
  frontend/src/App.css | 8 +-
  frontend/src/App.tsx | 3 +-
  .../src/assets/images/trade_republic_white.png | Bin 0 -> 54931 bytes
  .../src/assets/images/traderepublic_qr_code.png | Bin 0 -> 168617 bytes
  frontend/src/components/Navbar/Navbar.css | 26 ++
  frontend/src/components/Navbar/Navbar.tsx | 27 ++
  pr_rules.png | Bin 0 -> 85262 bytes
  12 files changed, 377 insertions(+), 27 deletions(-)
  create mode 100644 frontend/.vite/deps/\_metadata.json
  create mode 100644 frontend/.vite/deps/package.json
  create mode 100644 frontend/src/assets/images/trade_republic_white.png
  create mode 100644 frontend/src/assets/images/traderepublic_qr_code.png
  create mode 100644 frontend/src/components/Navbar/Navbar.css
  create mode 100644 frontend/src/components/Navbar/Navbar.tsx
  create mode 100644 pr_rules.png
  ➜ traderepublic git:(dev) git switch feature/3-navbar
  Basculement sur la branche 'feature/3-navbar'
  Votre branche est à jour avec 'origin/feature/3-navbar'.
  ➜ traderepublic git:(feature/3-navbar) git rebase dev
  Rebasage et mise à jour de refs/heads/feature/3-navbar avec succès.
  ➜ traderepublic git:(feature/3-navbar) git push origin feature/3-navbar
  To github.com:BlueSetbyeol/traderepublic.git
  ! [rejected] feature/3-navbar -> feature/3-navbar (non-fast-forward)
  erreur : impossible de pousser des références vers 'github.com:BlueSetbyeol/traderepublic.git'
  astuce : Les mises à jour ont été rejetées car le sommet de la branche actuelle est derrière
  astuce : son homologue distant. Si vous souhaitez intégrer les changements distants,
  astuce : utilisez 'git pull' avant de pousser à nouveau.
  astuce : Voir la 'Note à propos des avances rapides' dans 'git push --help' pour plus d'information.
  ➜ traderepublic git:(feature/3-navbar) git push --help
  ➜ traderepublic git:(feature/3-navbar) git pull origin feature/3-navbar
  Depuis github.com:BlueSetbyeol/traderepublic
- branch feature/3-navbar -> FETCH_HEAD
  Merge made by the 'ort' strategy.
  ➜ traderepublic git:(feature/3-navbar) git rebase dev
  erreur : impossible de rebase : vous avez des modifications non indexées.
  erreur : Veuillez les valider ou les remiser.
  ➜ traderepublic git:(feature/3-navbar) ✗ git add .
  ➜ traderepublic git:(feature/3-navbar) ✗ git commit -m "feat:correction position navbar (#3)"
  [feature/3-navbar 7a861d3] feat:correction position navbar (#3)
  2 files changed, 2 insertions(+)
  ➜ traderepublic git:(feature/3-navbar) git rebase dev  
  abandon de e3f3976f2af58517df767c36773e0c5e5cfbf61b feat:end of navbar (#3) -- le contenu de la rustine déjà en amont
  Rebasage et mise à jour de refs/heads/feature/3-navbar avec succès.
  ➜ traderepublic git:(feature/3-navbar) git push origin feature/3-navbar
  To github.com:BlueSetbyeol/traderepublic.git
  ! [rejected] feature/3-navbar -> feature/3-navbar (non-fast-forward)
  erreur : impossible de pousser des références vers 'github.com:BlueSetbyeol/traderepublic.git'
  astuce : Les mises à jour ont été rejetées car le sommet de la branche actuelle est derrière
  astuce : son homologue distant. Si vous souhaitez intégrer les changements distants,
  astuce : utilisez 'git pull' avant de pousser à nouveau.
  astuce : Voir la 'Note à propos des avances rapides' dans 'git push --help' pour plus d'information.
  ➜ traderepublic git:(feature/3-navbar) git pull origin feature/3-navbar
  Depuis github.com:BlueSetbyeol/traderepublic
- branch feature/3-navbar -> FETCH_HEAD
  Fusion automatique de frontend/src/App.css
  Fusion automatique de frontend/src/components/Navbar/Navbar.css
  CONFLIT (contenu) : Conflit de fusion dans frontend/src/components/Navbar/Navbar.css
  La fusion automatique a échoué ; réglez les conflits et validez le résultat.
  ➜ traderepublic git:(feature/3-navbar) ✗ git add .
  ➜ traderepublic git:(feature/3-navbar) git commit -m "feat:rebasing branch (#3)"
  [feature/3-navbar e321298] feat:rebasing branch (#3)
  ➜ traderepublic git:(feature/3-navbar) git push origin feature/3-navbar
  Énumération des objets: 24, fait.
  Décompte des objets: 100% (24/24), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (9/9), fait.
  Écriture des objets: 100% (10/10), 975 octets | 975.00 Kio/s, fait.
  Total 10 (delta 6), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (6/6), completed with 5 local objects.
  To github.com:BlueSetbyeol/traderepublic.git
  e3f3976..e321298 feature/3-navbar -> feature/3-navbar
  ➜ traderepublic git:(feature/3-navbar) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git pull origin dev
  Depuis github.com:BlueSetbyeol/traderepublic
- branch dev -> FETCH_HEAD
  Déjà à jour.
  ➜ traderepublic git:(dev) git switch -c "feature/6-contact-page
  dquote> "
  fatal : 'feature/6-contact-page
  ' n'est pas un nom de branche valide
  astuce : Voir `man git check-ref-format`
  astuce : Disable this message with "git config advice.refSyntax false"
  ➜ traderepublic git:(dev) git switch -c "feature/6-contact-page"
  "
  dquote> q
  dquote> "
  Basculement sur la nouvelle branche 'feature/6-contact-page'
  zsh: command not found: \nq\n
  ➜ traderepublic git:(feature/6-contact-page) git add .
  ➜ traderepublic git:(feature/6-contact-page) ✗ git commit -m "feat:contact page (#6)"
  [feature/6-contact-page 9297d68] feat:contact page (#6)
  5 files changed, 162 insertions(+), 1 deletion(-)
  create mode 100644 frontend/src/assets/images/desktop_en_light.webp
  create mode 100644 frontend/src/pages/Contact/Contact.css
  create mode 100644 frontend/src/pages/Contact/Contact.tsx
  ➜ traderepublic git:(feature/6-contact-page) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git pull origin dev
  remote: Enumerating objects: 1, done.
  remote: Counting objects: 100% (1/1), done.
  remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
  Dépaquetage des objets: 100% (1/1), 908 octets | 454.00 Kio/s, fait.
  Depuis github.com:BlueSetbyeol/traderepublic
- branch dev -> FETCH_HEAD
  39510a6..8c531b3 dev -> origin/dev
  Mise à jour 39510a6..8c531b3
  Fast-forward
  frontend/src/App.css | 8 +++
  .../src/assets/images/trade_republic_white.png | Bin 54931 -> 44061 bytes
  frontend/src/components/Navbar/Navbar.css | 58 ++++++++++++++++++---
  frontend/src/components/Navbar/Navbar.tsx | 38 ++++++++++----
  4 files changed, 88 insertions(+), 16 deletions(-)
  ➜ traderepublic git:(dev) git switch feature/6-contact-page
  Basculement sur la branche 'feature/6-contact-page'
  ➜ traderepublic git:(feature/6-contact-page) git rebase dev
  Fusion automatique de frontend/src/components/Navbar/Navbar.tsx
  CONFLIT (contenu) : Conflit de fusion dans frontend/src/components/Navbar/Navbar.tsx
  erreur : impossible d'appliquer 9297d68... feat:contact page (#6)
  astuce : Resolve all conflicts manually, mark them as resolved with
  astuce : "git add/rm <conflicted_files>", then run "git rebase --continue".
  astuce : You can instead skip this commit: run "git rebase --skip".
  astuce : To abort and get back to the state before "git rebase", run "git rebase --abort".
  astuce : Disable this message with "git config advice.mergeConflict false"
  Impossible d'appliquer 9297d68... feat:contact page (#6)
  ➜ traderepublic git:(8c531b3) ✗ git add .
  ➜ traderepublic git:(8c531b3) ✗ git rebase --continue
  [HEAD détachée 1097ee5] feat:contact page (#6)
  5 files changed, 162 insertions(+), 1 deletion(-)
  create mode 100644 frontend/src/assets/images/desktop_en_light.webp
  create mode 100644 frontend/src/pages/Contact/Contact.css
  create mode 100644 frontend/src/pages/Contact/Contact.tsx
  Rebasage et mise à jour de refs/heads/feature/6-contact-page avec succès.
  ➜ traderepublic git:(feature/6-contact-page) git status
  Sur la branche feature/6-contact-page
  rien à valider, la copie de travail est propre
  ➜ traderepublic git:(feature/6-contact-page) git push origin feature/6-contact-page
  Énumération des objets: 25, fait.
  Décompte des objets: 100% (25/25), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (14/14), fait.
  Écriture des objets: 100% (15/15), 72.04 Kio | 24.01 Mio/s, fait.
  Total 15 (delta 4), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
  remote:
  remote: Create a pull request for 'feature/6-contact-page' on GitHub by visiting:
  remote: https://github.com/BlueSetbyeol/traderepublic/pull/new/feature/6-contact-page
  remote:
  To github.com:BlueSetbyeol/traderepublic.git
- [new branch] feature/6-contact-page -> feature/6-contact-page
  ➜ traderepublic git:(feature/6-contact-page) git add .
  ➜ traderepublic git:(feature/6-contact-page) ✗ git commit -m "feat:finalisation of contact page (#6)"
  [feature/6-contact-page dc67629] feat:finalisation of contact page (#6)
  1 file changed, 2 insertions(+), 3 deletions(-)
  ➜ traderepublic git:(feature/6-contact-page) git push origin feature/6-contact-page
  Énumération des objets: 9, fait.
  Décompte des objets: 100% (9/9), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (5/5), fait.
  Écriture des objets: 100% (5/5), 479 octets | 479.00 Kio/s, fait.
  Total 5 (delta 4), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
  To github.com:BlueSetbyeol/traderepublic.git
  1097ee5..dc67629 feature/6-contact-page -> feature/6-contact-page
  ➜ traderepublic git:(feature/6-contact-page) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git switch feature/6-contact-page
  Basculement sur la branche 'feature/6-contact-page'
  ➜ traderepublic git:(feature/6-contact-page) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git switch feature/6-contact-page
  Basculement sur la branche 'feature/6-contact-page'
  ➜ traderepublic git:(feature/6-contact-page) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git pull origin dev
  remote: Enumerating objects: 160, done.
  remote: Counting objects: 100% (144/144), done.
  remote: Compressing objects: 100% (59/59), done.
  remote: Total 103 (delta 37), reused 97 (delta 36), pack-reused 0 (from 0)
  Réception d'objets: 100% (103/103), 5.62 Mio | 6.72 Mio/s, fait.
  Résolution des deltas: 100% (37/37), complété avec 16 objets locaux.
  Depuis github.com:BlueSetbyeol/traderepublic
- branch dev -> FETCH_HEAD
  8c531b3..d513347 dev -> origin/dev
  Mise à jour 8c531b3..d513347
  Fast-forward
  .github/workflows/ci.yml | 49 ------------
  frontend/package-lock.json | 18 -----
  frontend/package.json | 1 -
  frontend/src/App.css | 7 +-
  frontend/src/App.tsx | 3 +-
  frontend/src/assets/images/desktop_en_light.webp | Bin 0 -> 81924 bytes
  frontend/src/assets/images/home_section4_img.webp | Bin 0 -> 54624 bytes
  frontend/src/assets/react.svg | 1 -
  frontend/src/components/Footer/Footer.css | 56 ++++++++++++++
  frontend/src/components/Footer/Footer.tsx | 44 +++++++++++
  frontend/src/components/Navbar/Navbar.css | 1 +
  frontend/src/components/Navbar/Navbar.tsx | 4 +-
  frontend/src/main.tsx | 8 +-
  frontend/src/pages/Contact/Contact.css | 66 ++++++++++++++++
  frontend/src/pages/Contact/Contact.tsx | 90 ++++++++++++++++++++++
  15 files changed, 271 insertions(+), 77 deletions(-)
  delete mode 100644 .github/workflows/ci.yml
  create mode 100644 frontend/src/assets/images/desktop_en_light.webp
  create mode 100644 frontend/src/assets/images/home_section4_img.webp
  delete mode 100644 frontend/src/assets/react.svg
  create mode 100644 frontend/src/components/Footer/Footer.css
  create mode 100644 frontend/src/components/Footer/Footer.tsx
  create mode 100644 frontend/src/pages/Contact/Contact.css
  create mode 100644 frontend/src/pages/Contact/Contact.tsx
  ➜ traderepublic git:(dev) git switch -c feature/17-FAQ
  Basculement sur la nouvelle branche 'feature/17-FAQ'
  ➜ traderepublic git:(feature/17-FAQ) git add .
  ➜ traderepublic git:(feature/17-FAQ) ✗ git commit -m "feat: FAQ initialised (#17)"
  [feature/17-FAQ a9658c9] feat: FAQ initialised (#17)
  3 files changed, 374 insertions(+)
  create mode 100644 frontend/src/components/Faq/Faq.css
  create mode 100644 frontend/src/components/Faq/Faq.tsx
  ➜ traderepublic git:(feature/17-FAQ) git add .
  ➜ traderepublic git:(feature/17-FAQ) ✗ git commit -m "feat: FAQ spaced to imitate the real site (#17)"
  [feature/17-FAQ 27d3a8b] feat: FAQ spaced to imitate the real site (#17)
  2 files changed, 2 insertions(+)
  ➜ traderepublic git:(feature/17-FAQ) git push origin feature/17-FAQ
  Énumération des objets: 26, fait.
  Décompte des objets: 100% (26/26), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (18/18), fait.
  Écriture des objets: 100% (19/19), 4.99 Kio | 4.99 Mio/s, fait.
  Total 19 (delta 6), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (6/6), completed with 2 local objects.
  remote:
  remote: Create a pull request for 'feature/17-FAQ' on GitHub by visiting:
  remote: https://github.com/BlueSetbyeol/traderepublic/pull/new/feature/17-FAQ
  remote:
  To github.com:BlueSetbyeol/traderepublic.git
- [new branch] feature/17-FAQ -> feature/17-FAQ
  ➜ traderepublic git:(feature/17-FAQ) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git pull origin dev
  remote: Enumerating objects: 56, done.
  remote: Counting objects: 100% (51/51), done.
  remote: Compressing objects: 100% (20/20), done.
  remote: Total 32 (delta 11), reused 30 (delta 11), pack-reused 0 (from 0)
  Dépaquetage des objets: 100% (32/32), 3.12 Mio | 4.10 Mio/s, fait.
  Depuis github.com:BlueSetbyeol/traderepublic
- branch dev -> FETCH_HEAD
  d513347..c09e79c dev -> origin/dev
  Mise à jour d513347..c09e79c
  Fast-forward
  frontend/src/App.css | 4 +-
  frontend/src/assets/images/videoframe_362.png | Bin 0 -> 3270874 bytes
  frontend/src/components/Faq/Faq.css | 17 ++
  frontend/src/components/Faq/Faq.tsx | 356 ++++++++++++++++++++++++++
  frontend/src/components/Navbar/Navbar.css | 6 +-
  frontend/src/pages/Home/Home.css | 23 ++
  frontend/src/pages/Home/Home.tsx | 8 +-
  7 files changed, 407 insertions(+), 7 deletions(-)
  create mode 100644 frontend/src/assets/images/videoframe_362.png
  create mode 100644 frontend/src/components/Faq/Faq.css
  create mode 100644 frontend/src/components/Faq/Faq.tsx
  create mode 100644 frontend/src/pages/Home/Home.css
  ➜ traderepublic git:(dev) git switch -c feature/18-Confiance_section
  Basculement sur la nouvelle branche 'feature/18-Confiance_section'
  ➜ traderepublic git:(feature/18-Confiance_section) git add .
  ➜ traderepublic git:(feature/18-Confiance_section) ✗ git commit -m "feat: initializing Confiance section with a component to add into Home"
  [feature/18-Confiance_section 32c134f] feat: initializing Confiance section with a component to add into Home
  3 files changed, 85 insertions(+), 1 deletion(-)
  create mode 100644 frontend/src/components/Confiance/Confiance.css
  create mode 100644 frontend/src/components/Confiance/Confiance.tsx
  ➜ traderepublic git:(feature/18-Confiance_section) git add .
  ➜ traderepublic git:(feature/18-Confiance_section) ✗ git commit -m "feat: correction in CSS(#18)"  
  [feature/18-Confiance_section 74ce80c] feat: correction in CSS(#18)
  2 files changed, 3 insertions(+), 4 deletions(-)
  ➜ traderepublic git:(feature/18-Confiance_section) git push origin feature/18-Confiance_section
  Énumération des objets: 29, fait.
  Décompte des objets: 100% (29/29), fait.
  Compression par delta en utilisant jusqu'à 8 fils d'exécution
  Compression des objets: 100% (20/20), fait.
  Écriture des objets: 100% (20/20), 2.47 Kio | 2.47 Mio/s, fait.
  Total 20 (delta 7), réutilisés 0 (delta 0), réutilisés du paquet 0 (depuis 0)
  remote: Resolving deltas: 100% (7/7), completed with 4 local objects.
  remote:
  remote: Create a pull request for 'feature/18-Confiance_section' on GitHub by visiting:
  remote: https://github.com/BlueSetbyeol/traderepublic/pull/new/feature/18-Confiance_section
  remote:
  To github.com:BlueSetbyeol/traderepublic.git
- [new branch] feature/18-Confiance_section -> feature/18-Confiance_section
  ➜ traderepublic git:(feature/18-Confiance_section) git switch dev
  Basculement sur la branche 'dev'
  ➜ traderepublic git:(dev) git pull origin dev
  remote: Enumerating objects: 57, done.
  remote: Counting objects: 100% (52/52), done.
  remote: Compressing objects: 100% (23/23), done.
  remote: Total 33 (delta 9), reused 31 (delta 9), pack-reused 0 (from 0)
  Dépaquetage des objets: 100% (33/33), 1.07 Mio | 2.12 Mio/s, fait.
  Depuis github.com:BlueSetbyeol/traderepublic
- branch dev -> FETCH_HEAD
  c09e79c..135723a dev -> origin/dev
  Mise à jour c09e79c..135723a
  Fast-forward
  frontend/src/assets/images/videoframe_2671.png | Bin 0 -> 467252 bytes
  frontend/src/assets/images/videoframe_3106.png | Bin 0 -> 584640 bytes
  frontend/src/assets/images/videoframe_3755.png | Bin 0 -> 82520 bytes
  frontend/src/components/Confiance/Confiance.css | 44 +++++++++
  frontend/src/components/Confiance/Confiance.tsx | 35 ++++++++
  frontend/src/components/Footer/Footer.css | 1 +
  frontend/src/components/Navbar/Navbar.css | 2 +-
  frontend/src/pages/Home/Home.css | 76 ++++++++++++++++
  frontend/src/pages/Home/Home.tsx | 113 +++++++++++++++++++++++-
  9 files changed, 269 insertions(+), 2 deletions(-)
  create mode 100644 frontend/src/assets/images/videoframe_2671.png
  create mode 100644 frontend/src/assets/images/videoframe_3106.png
  create mode 100644 frontend/src/assets/images/videoframe_3755.png
  create mode 100644 frontend/src/components/Confiance/Confiance.css
  create mode 100644 frontend/src/components/Confiance/Confiance.tsx
  ➜ traderepublic git:(dev) git switch -c release/1.0.0
  Basculement sur la nouvelle branche 'release/1.0.0'
  ➜ traderepublic git:(release/1.0.0)
