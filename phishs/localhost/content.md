# Surfez en sécurité !

### Comprendre internet pour se protéger



<!-- -->
## Communiquer sur internet

<img src="art/psst.jpg" height="400">

...psst ...psst !


<img src="art/asterix.jpg" height="500">

### C'EST PAR OÙ, FACEBOOK ?



<!-- -->
## Un espion dans mon Starbucks

<img src="art/guy-fawkes.png" height="250" style="margin-right:4em">
<img src="art/wifi.png" height="150">
<img src="art/user.png" height="250" style="margin-left:4em">


<img src="art/pwned.png" height="600">


## Même avec un mot de passe (WPA-PSK)

Dans les résaux wifi protégés par WEP ou WPA (ce que vous avez à la
maison), il suffit de capturer les paquets de la victime dès sa
connexion au réseau...


<img src="art/pwned.png" height="600">


## Même sans connaître le mot de passe

<img src="art/krack.png" height="200" style="vertical-align: middle"> 
<https://www.krackattacks.com/>

En 2017, des failles dans le protocole WPA ont permis de décrypter
tout le traffic WPA sans connaissance du mot de passe. (*Patchs de
sécurité* distribués à l'été 2017).


## La crypto met les espions à la porte

<img src="art/https.png" height="100">
<img src="art/scr.png" width="100%">

### HTTP + TLS = HTTPS



<!-- -->
## Prendre le chemin de moindre résistance

> Frankly, intelligence gets to break all sorts of rules, to cheat, to
> use other paths.

Michael Hayden, ex-directeur de la NSA


## DNS, les pages jaunes du web

`www.facebook.com`    →    `173.252.91.4`

- Associations entre *noms de domaine* et *addresses IP*
- Aucune sécurité: il n'y a pas de DNS **S**


<img src="art/pwned.png" height="600">


## HTTP Strict Transport Security

|   |   |
|---|---|
| Chrome | >4.0 |
| Firefox | >2.0 |
| Internet Explorer | >11 |
| Android | >18 |
| iPhone | >8.4 |


|   |   |
|---|---|
| Facebook | ✓ |
| Google | ✓ |
| Twitter | ✓ |
| Instagram | ✓ |
| LinkedIn | ✓ |
| Société Générale | ✓ |
| BNP Paribas | ✓ |
| Crédit coopératif | × |
| Parcoursup | × |
| ... | |



<!-- -->
## Au delà des *script kiddies*

<img src="art/nsa.jpg" height="550">


## NSA, PRISM, Freak, LogJam, ...

- Tout intercepter, tout enregistrer.
- Analyser les *meta-données*.
- Exploiter des failles logicielles pour affaiblir la sécurité de HTTPS.
- Utiliser des super-ordinateurs pour casser les protocoles affaiblis.



<!-- -->

**[<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAgCAYAAACRpmGNAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAB7CAAAewgFu0HU+AAAAB3RJTUUH4AMOEQ42MTLNkQAAAvRJREFUWMPFmE1IVUEUgL/7shcoFQxBKVFEv2QpGBRWq2hZhDoTLcIEWyVR0K5oV4sWtepvEQRZC5nJNhIRBRFFYmRZKvZDi0AsitHCfl3Y5ry4Pd+f3ut7Z/PenXvuzDdn5pw5ZwIA4zxWK+KSVH/G+XXAAWAXsFJevwNuA+1Wq4FMYxvnq4HBINRQCYwAkUCN8wABcB44lEf9AnDYajVpnE8Ay4EzQJnVqjEM9wXoslq1RLWkcX4IWFug+hDQAzTL8w+rVYVxnkA6Wwx8lJcXrVZtMwU0zncCDRF2xWar1dOU+THOrwcGQgqdVqum6QDKci4ExmYINQY0AQpoAboS8mJemmKjcb4fqAoNnFNkEqcjWKwcuA9YoNxqdTkF9yeDcjUwbJxvSlmvAMi2CHBJ+e2xWu0wzpOCyzWqM87/Ns5vhH/6U0CN8+UxRKGbVqstqZVIyJ8R4FeeWb0EvhnnT2YJN4moZFYrHZ50OJTUAc+m0ddbYBC4AzwRh5qICBf8N9sUqdWqVzZkobIa2ANcAl5EBcskCTlmaozz26xWO4G7lEY+pTeUhfbLI7GiF+9NFhnu9RQ4AfocalMlslxvekPYIb4CCyid7AVsOAqE3X8rpZV76eEpEcq/BoAbJQLrs1qNZgyc4rFYrfbL2VZsOZ6pMciSwdYBD4GKIsFVSB6XHU4AjwKLgLlAI7BqlsGOWa3O5bWcwFUBw0Vc0iQwkSlvDLIkjleA1iKA7bNadWQ9vrJUTgeB/lkGe2616siVIwZ5SrtbcrgHMYONW63m5z34s6XcAtgALAGuxQxXW4hSUEhxHHruA2oigtVbrbojwYXBJLycjSHb3SR5IzOGM84ngRWABk7FsIzvgQ1Wq5/T+ajMON8sldYcYBmwHaiMaW9NAletVq2FlJeZks12qU+7gaUxbvoHwG6r1fhMbw+CtL21Ri5fjkSAOgFct1p9iDq7IIcT1EuOVyvFTKVcNySB78CoHHNvpMB5bLV6FeeV2l+lcxypqbAV/QAAAABJRU5ErkJggg==" style="height:1.5ex;vertical-align:middle"> @luca_defeo](http://twitter.com/luca_defeo)**
