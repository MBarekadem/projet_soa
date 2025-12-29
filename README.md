  📌 Projet Gestion des Personnes

Front-end React & Back-end Java SOA (JAX-RS / JPA)

📝 Description:

Ce projet est une application Java orientée services (SOA) basée sur les Services Web REST en utilisant JAX-RS (Jersey).

Il permet la gestion complète des utilisateurs (CRUD) :
* la création d'un personne
* la lecture des personne existe
* la modification d'un personne 
* la suppression d'un personne

La persistance des données est assurée par Hibernate (JPA) avec MySQL comme système de gestion de base de données.
L’application back-end est déployée sur le serveur Apache Tomcat.

L’interface utilisateur est développée avec React, permettant une interaction dynamique avec les services REST via des échanges JSON.

🛠️ Technologies utilisées
Back-end:Java//Architecture SOA//JAX-RS (Jersey)//JPA / Hibernate//MySQL//Apache Tomcat

Front-en:React JS//JavaScript//Tailwind CSS

📂 Structure du projet
Back-end
soa_projet/
 ├─ model/        → Entités JPA (User)
 ├─ service/      → Logique métier
 ├─ controller/   → Services REST
 ├─ persistence.xml
 └─ web.xml

Front-end
src/
 ├─ components/
 │   └─ Card.jsx
 ├─ pages/
 ├─ imgs/
 ├─ App.jsx
 └─ main.jsx

🔗 API REST
Méthode	URL	Description
GET=>	/users/all	Récupérer tous les utilisateurs
GET=>	/users/nom/{npm}	Récupérer tous les utilisateurs par cette nom
GET=>	/users/id/{id}	Récupérer tous les utilisateurs par cette id
POST=>	/users/add	Ajouter un utilisateur
PUT=>	/users/update/{id}	Modifier un utilisateur
DELETE=>	/users/delete/{id}	Supprimer un utilisateur

📌 Les données sont échangées au format JSON.

⚙️ Installation et exécution
Back-end:
Importer le projet dans Eclipse ou IntelliJ

Configurer la base de données dans persistence.xml

Déployer le projet sur Apache Tomcat

Lancer le serveur

➡️ API disponible sur :

http://localhost:8080/soa_projet


Front-end:

npm install
npm run dev

➡️ Application disponible sur :

http://localhost:5173

✅ Fonctionnalités

Gestion CRUD des utilisateurs

Communication Front / Back via REST

Mise à jour dynamique sans rechargement

Interface simple et responsive

Gestion des images par défaut selon le sexe

