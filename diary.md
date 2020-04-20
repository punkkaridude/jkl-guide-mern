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
Kokoustimme torstaina klo 9:30 - 14:30*

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
Kokoustimme maanantaina klo 9:30 - 16*

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
-------------------------
-------------------------

### Torstai 2.4.2020 - Favorites- ja FAQ-Sivun tekoa sekä ulkoasujuttuja
*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme torstaina klo 9:30 - 16:30*

#### FAQ-Sivu
* Veeti aloitti FAQ-sivun backendin työstämistä, tarkoituksena on saada FAQ-sivulle tiedot näkymiin tietokannastamme. Päivän anti oli muutaman virheen ja yhteisen koodintuijotteluhetken jälkeen backendin toimiminen, saimme lisättyä tietoa tietokannan FAQ-osioon. Enää täytyy saada FAQ-sivuston frontend puoli toimimaan! Progress.

#### Karttamoduulin popuppien säätöä ja SCSS-määrityksiä
* Paikallisen kopion siirto takaisin olemassaolevaan projektiin ei sujunut kommelluksitta, tuli pari päällekkäisyyttä
* Krisu teki taikojaan ja homma kunnossa, GIT pull opeteltu kantapään kautta
* Iina sääti kartalla näkyviä popuppeja vähän nätimmiksi ja lisäsi näkyviin osoitteen lisäksi myös postinumeron, kaupungin ja kotisivun osoitteen mapapp.jsx:n kautta. 
* Colorlayer saatu toimimaan navbariin, kompassi ditchattu hetkellisesti pois jaloista 
* Kartan animaatiota muutettu edestakaiseksi niin on smoothimpi
* Variableja yhdenmukaistettu SCSS:ään ja pieniä väri- ja fonttimuutoksia tehty
* Ensikerralle paluupainike, heiluvan divin säätö

-------------------------
-------------------------

### Maanantai 6.4.2020 Mapappin muutos ja FAQ-sivu

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme maanantaina klo 9:30 - 16*

#### Faq-sivun viimeistely
* Veeti viimeisteli Kristianin avustuksella FAQ-sivu. Nyt Faq-sivulle tuleva tieto on lähtöisin tietokannasta, eikä kovakoodattuna HTML:ään. Veeti vaihtoi myös päivämäärän formaatin, jossa näkyy nyt vain päivä, kuukausi ja vuosi.

#### Logoanimaatio ja backbutton
* Iina teki uuden animoidun SVG-logon ja lisäili sen etusivun lisäksi myös rekisteröinti- ja login-ikkunaan
* SVG:n koon ja viewboxin kanssa pientä probleemaa, koko ei toistunut oikein ja useita versioita yritetty
* Tiedonhaku backbuttoniin jäi omalle ajalle, saatu toimimaan keskiviikkona

#### Mapappin korjailu
* Kristian korjaili mapappia versiosta toiseen. Tässä jonkin verran ongelmaa, joten työläs ja aikaavievä prosessi johon Kristianin fokus menee nyt miltei täysin.

-------------------------
-------------------------

### Torstai 9.4.2020 - Uusi mapapp!

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme torstaina klo 9:30 - 15*

#### Admin-paneeli
* Veeti koodaili admin-paneelia ja yhdisti myös tietokantaa toimimaan paneeliin.

#### Siirtymäanimaatiot Springillä 
* Iina teki siirtymäanimaatioita home-, login- ja register-sivuun
* Aamupäivästä tutustumista react-springiin

#### Mapappin korjailu
* Kristian jatkoi mapappin korjaamista. Ladattu myös Veetille ja Iinalle uusi mapapp-gl


-------------------------
-------------------------

### Maanantai 13.4.2020 - Lopun alkua, viimeistelyä 

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme maanantaina klo 9:30 - 15*

#### Admin & settings
*  Admin-pagen esiasteen viimeistely, hakee tiedot nyt käyttäjistä sekä paikoista.
*  Ulkoasu vielä keskeneräinen
*  Veeti aloitti myös settings-pagen rakentamista, jossa voi vaihtaa salasanan, sähköpostin sekä käyttäjätunnuksen.

#### Popupin tyylittely uuteen mapappiin ja muuta pientä fiksailua
* Aamusta Iina lisäsi pienet spring-animaatiofeidit myös sivun peruskomponentteihin.
* Mapboxin popuppia tyylitelty ja testailtu. Pikkuikonien näyttämiseksi isätty myös reactin sisäinen font awesome-kirjasto
* Backendistä muutettu puhelinnumero intistä stringiksi jotta toistuu oikein
* Navbariin lisätty kompassilogo ja testattu myös sen breakpointteja
* Aloitettu raportointiin tarvittavaa GitHub Wikiä ja lisätty sinne jo vähän juttuja

#### Krisun hommat
* Luru luu luru luuu

-------------------------
-------------------------

### Keskiviikko 15.4.2020 - Ylimääräinen meetup ennen loppurytinää

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme keskiviikkona klo 12 - 17*

#### Settings-sivun toimintakuntoon saattaminen
*  Veeti ja Kristian käyttivät suurimman osan ajasta settings-sivun toimintahäiriöiden selvittelyyn
*  Iina nätitti settings-sivun ulkoasua.

#### Navin buttonin fixiä
* Foorumibuttonin disablointia, jostain syystä pointteri elää vielä omaa elämäänsä

#### Krisun hommat
* Luru luu luru luuu

-------------------------
-------------------------

### Torstai 16.4.2020 - Käyttäjätietojen muutoksia ja suosikkilisäyksen fix

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme torstaina klo 10:30 - 15*

#### Käyttäjätietojen muutoksia
*  Kristian ja Veeti saivat käyttäjätunnuksen ja sähköpostin muutoksen käyttöliittymästä käsin toimimaan

#### Suosikkien lisäyksen fixaus
* Kristian fiksasi suosikkien lisäystä siten, että sydänikonia painamalla kohde siirtyy suosikkeihin ja myös sieltä pois. 

#### Raportointi ja adminsivun nätitys
* Iina oksensi ansioituneesti migreeniä klo 6:30-19:30 ja jäi pois päivän puuhista. Illalla olo parani sen verran että paikatakseen syyllisyydentuntoaan hän kokosi ja täydensi raporttiosuutta gitin Wikiin.
* Rumat sanat poistettu käyttäjätiedoista ja faq-osiosta esittelyä varten
* Myöhäisilta meni nätittäessä admin-sivua, tuli melko purkkaviritys

-------------------------
-------------------------

### Perjantai 17.4.2020 - Salasanan vaihtoa, kommentointia ja nätittelyä

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme perjantaina klo 12 - 16:30*

#### Settings- sivun viimeistelyä
*  Kristian koodaili salasanan vaihtoa
*  Iina yhtenäisti settingspagea samannäköiseksi kuin kohteitten lisäyssivu.. Buttoneita ja input fieldejä muuteltu hieman

#### Adminpagen purkkavirityksen fiksaus ja muita pieniä fiksejä
* kristian neuvoi miten table datan saa toistumaan nätimmin sivulla
* Favorites -pagen suosikkilistaa muutettu siten että scrollautuu nätisti
* messageitten korjailua loginiin

#### Koodin kommentointi (suomeksi)
* SCSS-tiedostoista kommentoitu kaikki muu paitsi map.scss
* JSX-tiedostoista kommentoitu add-favorite, login, nav, register, add-service, admin, home
* Routesit ja modelit kommentoitu (alustavasti ainakin, onkohan riittävä)

-------------------------
-------------------------

### Sunnuntai 19.4.2020 - Raportointia ja julkaisutoimenpiteitä

*Vallitsevan koronavirustilanteen takia siirsimme projektiryhmän tapaamiset toistaiseksi Discord-yhteyden varaan. 
Kokoustimme sunnuntaina klo 15 - 17*

#### Rakennekaavio
* Iina piirteli ruman, mutta toimivahkon rakennekaavion pädillä

####  Projektin wiki-sivun täydennys
* Homepage on ryhmätyökommentointia vailla valmis
* Front-sivu on aika laila valmis.
* Back-sivu muuten valmis, mutta reiteistä ei vielä kerrottu.
* Sovelluksen rakenteelle lisätty oma sivu

#### Backendin kommentointia
* Veeti kommentoinut settings.jsx, index.jsx, forum.jsx, favorites.jsx, faq.jsx 

#### Kansioitten siistiminen ja viimeinen silaus ennen julkaisua
* Projektin kansiot siivottu lopulliseen järjestykseensä.
* Kristian hoiti sovelluksen julkaisemisen Herokuun. Sovellus löytyy osoitteesta http://jklguide.herokuapp.com



