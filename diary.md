<img src="https://student.labranet.jamk.fi/~M1921/webohjelm/kartta/kompassi_web.png"  width="260">

# PROJEKTIPÄIVÄKIRJA - JKL GUIDE

Tämän päiväkirjan tarkoituksena on koota yhteen jokaisen projektityökerran aikaansaannoksia, jotta lopullisen raportin koostaminen olisi helpompaa.

-------------------------
### Maanantai 16.3.2020 - Alkutoimenpiteitä

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme maanantaina klo 9:30 - 15:30*

#### NPM
* Asennettu npm ja harjoiteltu sen käyttöä
* Asennus VS coden terminaalin kautta loitsulla ***npm install***
* Localhostin käynnistys loitsulla ***npm run start***
* Sass-compilerin käynnistys loitsulla ***npm run scss***
* Erillisten pakettien asennus loitsulla ***npm install paketti***

#### GitHub-toimintaympäristön kloonaus ja committien testaus kotikoneilta käsin
* Kloonattu Kristianin tekemä JKL-guide -repositorio omille koneille 
* Loitsuna ***git config --global user.email "sähköposti"*** sekä ***git config --global user.name "git-käyttäjänimi"***
* Pull aina ennen committia että varmistutaan muokattavan koodin ajantasaisuudesta

#### DigitalOceanin palvelimen pystytys ja testaus kotikoneilta käsin
* DigitalOceanin IP on 68.183.219.38
* Käyttäjätunnus nimi ja passu nimi123, kirjautuessa passu root66
* Määriteltiin etukäteen luotu Private key valikosta SSH > Auth > Private key file for authentication 

#### MERN-stackin demottelun aloitus
* Yritetty ottaa käyttöön MERN-stack -demosovellus ja tutustuttu sen käyttöön Kristianin johdolla

-------------------------
-------------------------
### Torstai 19.3.2020 - Alkutoimenpiteet jatkuvat

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme torstaina klo 9:45 - 15:45*

#### Uusi MERN - repo GitHubissa
* Päivitetty applikaatio MERN-applikaatioksi
* Saatu myös server.js toimimaan 
* Kloonailtu koneelle ja testattu pushin ja pullin toimivuus

#### MongoDB tulilla
* Mongoon tehty testitietokanta onnistuneesti 
* Asetettu admin-käyttäjälle kaikki mahdolliset oikeudet, näiden kanssa oli ongelmaa datan kirjoittamisen kanssa.
* Mongossa myös jonkinlainen mapdata-tietokanta saatu alulle, JSONIn lisäyksessä pientä häikkää
* Käyttäjätunnukset teamssissa kanavalla.
* Asennettu myös MongoDB Compass jonne host on ***mongodb://root:root66@139.59.152.124:27017***

#### Digital Oceanin uudelleenconffaus
* Kristian oli saanut viestiä DO:lta että meidän palvelinta on käytetty ilmeisesti epäilyttävään toimintaan. Krisu hoiti uuden palvelimen alulle torstaina 18.3. omatoimisesti. 
* Uusi DigitalOceanin IP 139.59.152.124
* Käyttäjätunnukset nimillä, salasanat teamssissa kanavalla.
* Kun Puttyä käytetään, suljetaan heti kun ei enää tarvita niin tiedonsiirtorajat eivät ylity.

-------------------------
-------------------------
### Perjantai 20.3.2020 - Ekat toimivat komponentit sovelluksessa!

:sunglasses:

#### Rekisteröintisivu
* Kristian rakensi rekisteröintisivun reitit ja mallit omatoimisesti perjantaina
* Valmiita tuotoksia perjantailta siis ***user.model.js*** sekä ***users.js***
* Käyttäjien lisäys Insomnian kautta onnistui JSON-formaatissa suoraan tietokantaan osoitteeseen ***localhost:5000/Register/add***

-------------------------
-------------------------
### Maanantai 23.3.2020 - Lisää toimivia komponentteja sovelluksessa!

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme maanantaina klo 9:30 - 15:30*

* Otimme porukalla käyttöön Insomnia-appplikaation ja asensimme Axios-paketin backendiä varten.

#### Kohteitten lisäyssivu
* Iina sai rakenneltua sivun kohteitten lisäämisen toimintakuntoon Kristianin hyvillä jeeseillä
* Valmiita tuotoksia maanantailta siis ***addservice.model.js***, ***add-service.jsx*** sekä ***addservice.js***
* Myös kohteitten lisäys Insomnian kautta onnistui JSON-formaatissa suoraan tietokantaan osoitteeseen ***localhost:5000/JKL-Guide/Add-service/add***

#### Tietokanta
* Kristian perehtyi tällä kerralla tietokantoihin samalla kun auttoi muita.
* Tietokannan suojausta DigitalOceanissa nostettiin ottamalla palomuuri sekä autentikaatio käyttöön. 
* Firebase- tietokannan käyttö on nyt myös vaihdettu omaan mongodb-tietokantaamme. Firebase toimi aluksi lähinnä esimerkin tasolla.
* Rekisteröityjen käyttäjien lisääminen tietokantaan onnistuu nyt hashatun salasanan kera. Tässä oleellisina työkaluina toimivat Bcrypt ja Mongoose.

#### Kirjatumissivun toimintaan perehtyminen
* Veeti on tänään koonnut tietoa aiheesta ja alkaa demottelemaan kirjautumissivua ja sen komponentteja toimintakuntoon.

-------------------------
-------------------------
### Torstai 26.3.2020 - Autentikaation kanssa kikkailua

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme torstaina klo 9:30 - 14:30 *

* Tämä päivä painottui itsenäiseen työskentelyyn hyvin pitkälti.

#### Tutustuminen RBACiin eli role based access controlliin
* Iina tutustui erilaisiin menetelmiin RBACin toteuttamiseksi (Auth0, Passport.js)
* Ilmeisesti otamme käyttöön Passportin
* Tavoite olisi saada eri käyttäjäroolit toimintakuntoon palveluun, admin- ja peruskäyttäjän roolit selviksi
* Videotutoriaali-overload. 
* Kristian aloitti Passportin työstämisen työhömme videotutoriaalin avulla.
* Veeti jatkoi tiedon etsimistä ja demotti authenticator-metodeja.
* Tämän jälkeen myös Veeti hyppäsi työstämään Passporttia eteenpäin.

-------------------------
-------------------------
### Maanantai 30.3.2020 - Suojauksia ja ulkoasun kanssa kikkailua

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme maanantaina klo 9:30 - X *

#### Suojaukset
* Veeti sai sivuston suojaukset toimimaan muutaman mutkan kautta, tällä hetkellä on suojattu, ettei kirjautunut käyttäjä pääse palaamaan esim. Rekisteröitymis- tai kirjautumis-sivulle. Suojaukset tullaan asettamaan myös adminpaneeliin, jotta vain admin pääsee niitä tarkastelemaan.
* Suojauksessa käytetään PrivateRoute- ja PublicRoute-komponentteja. PublicRoute-komponentti ohjaa kirjautumattoman käyttäjän sisäänkirjautumissivulle jos tämä yrittää siirtyä esimerkiksi URL:in kautta sivulle, joka on tarkoitettu kirjautuneille käyttäjille. PrivateRoute taas ohjaa kirjautuneen käyttäjän etusivulle, jos tämä yrittää päästä URL:in kautta uudestaan kirjautumissivulle.
* KOHDATTU ONGELMA!!
   Kohtasimme ongelman suojauksen kanssa, jossa sivustolle ohjaus jäi looppaamaan. Tajusimme komponenttien purkamisen yhteydessä, että kirjautumissivu ei voi olla meillä '/' (root). Lisäsimme erillisen roottisivun, josta käyttäjä saa valita kirjautumisen tai rekisteröitymisen välillä. Aiomme lisätä sivulle myös painikkeen, jolla kirjautumaton käyttäjä pääsee tarkastelemaan itse sovellussivua.

#### Log In
 * Kristian viimeisteli rekisteröitymis- sekä kirjautumiskomponentit ja molemmat toimivat nyt halutulla tavalla.

#### Ulkoasu
* Iina otti asiakseen lähteä nätittämään guiden ulkoasua, paikallinen kopio projektista tehty kikkailuja varten
* Liikkuvaa karttataustaa ja headerin asettelua päivitetty
* Tutustuttu SCSSän kiemuroihin ja siihen miten ulkoasua on rakennettu
* Mapboxin tyyleihin tutustumista
* Rekisteröintisivulle backspace- tai raksipainikkeen kehittely. Yleisesti myös takaisinpäin menoa varten.

