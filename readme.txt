(órai munka, cél az API helyes használata, a kód testre szabása, képzeletbeli vállalkozást segítő alkalmazás létrehozása)

Töltsd le a teljes repót és tömörítsd ki a mappát valahova.
Nyisd meg a backend mappát console-ban, vagy terminálban!
npm i parancs consoleban
(opcionális)Ha hibára fut az npm i, akkor töröld ki a modules mappát és a 2db json fájlt, majd írd be a console-ba: npm init Lassan nyomkodd az entert, majd az entry pointhoz írd be: server.js Entert nyomogasd végig! Ezt a 4 parancsot írogasd be: npm i sqlite3, npm i express, npm i cors, npm i fs Nem kötelező, de ezt is lefuttathatod: npm audit fix --force
Ha nem futott hibára a 3-as pont, akkor hozd létre a db fájlt a carDatabase.js fájl futtatásával: node carDatabase.js
Indítsd el a backend servert így: node server.js
Ezt követően használhatod a html fájlokat. add.html-el hozzáadsz új rekordot, index.html-el listázod/módosítod/törlöd az adatot
Fontos!!! Mivel a tananyag kezdőknek szól és elsősorban az api működésének megértése a cél, így bizonyos részeknél a tiszta kódolás elvei, illetve más erőforrásbarát megoldások, illetve a biztonság nem feltétlenül érvényesültek. Ebből adódóan kizárólag tanulás során javasolt ezeket a megoldásokat használni, éles környezetben semmiképpen!
