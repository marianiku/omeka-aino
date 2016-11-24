var comments = {
  'Aino': 'Joukah. nuori sisar. Idean Aino-nimestä Lönnrot sai vienalaisista toisinnoista, joissa sanottiin ”annan ainoan sisareni”, adjektiivista ”ainoa” tuli aino (Kuusi 1963: 220; Kaukonen 1987: 181). Ks. Vienassa Hirttäytyneen neidon teksteissä Anni-tytön kertona on: aino neiti (SKVR I1 208, 213, 234, 236). Myös Lönnrotilla, joskus myös ”aini tyttö”. Myöhemmillä kerääjillä tarkemmin: ainuo neiti. Ks. runossa SKVR I1 234: ”anni sikko, aino neiti”. Ks. lisää Aino-runosta ja tulkinnoista Piela 1999; Järvinen 1993; Tarkiainen 1911.',
  'Joukahaisen': '(tässä) Ainon nuori veli, Väinämöisen nuori, uhmakas vastustaja. Yleensä nuori Joukahainen, mutta myös nuori poika lappalainen (Kalevalan 3. runo). Joukahainen : avoin, rohkea nuori; röyhkeä ja turhamainen lappalainen sankari (Lönnrot 1958). jouka : joukea, kookas (Krohn 1927). Joukahainen (Joukhanen) on alunperin tarkoittanut joutsenta (Kuusi 1963: 72). Yleensä runoissa Joukamoinen, vain Vienan Karjalan runoissa Joukahainen. Kansanrunoissa Joukahainen esiintyy Kilpalaulanta-runon lisäksi Laivaretki-runossa Väinämöisen ja Ilmarisen kanssa. (Turunen 1979: 75−76.)',
  'lehosta': 'lehto : lehtimetsä (Lna 38). Ks. Kosintarunoissa lehtometsä on paikka, jossa kosinta tapahtuu ”löysin neitosen lehossa, / hienohelman heinikossa” (SKVR XIII1 1324; ks. myös XIII1 1325, 1326, 1330; V1 1020; VI1 254; VII1 208; VII2 1287, 1288). Ks. metsä kodin ulkopuolinen, vieras, ja siten vaarallinen paikka (Tarkka 2005: 282); ks. metsän peitto, joka tarkoittaa ihmisen joutumista toiseen tilaan muilta näkymättömäksi ja kuulumattomaksi. Sanotaan, että ”metsä lumoaa” tai ”metsä kääntää silmät”. (Holmberg 1923: 16−17.)',
  'Wastaksia': 'vasta : saunavasta. Saunavasta on yleinen itäisellä murrealueella, Länsi-Suomessa saunavihta (Ruoppila 1967: 58, kartta 65).',
  'varvikosta': 'varvikko : varpua tai nuorta lehtipuuta kasvava paikka (KKSK).',
  'taatollensa': 'taatto : isä',
  'maammollensa': 'maammo : äiti',
  'Kokoeli': 'kokoella : keräillä',
  'Werevälle': 'verevä : terveen näköinen, punakka. Ei yleensä esiinny Hirttäytyneen neidon runossa. Lönnrotin runotallenne sisältää kuitenkin säkeen verevälle veiolleen: Anni tyttö, kauno tyttö/ Taitto luutoa lehosta,/ Vastapäätä varvikosta,/ Verevälle veiolleen. (SKVR VII1 208: 1−4). Vrt. verevä Anni-tytön kertona muutamissa runoissa: ”Anni tyt[ti, aino neiti], / Vienan neitonen verevä, / V[ienan] kavo kaunokain[en]” (SKVR I1 236); ”Anni tytti, ainut neiti, / Niemen neitoni verövä” (SKVR I1 454), (KKSK).',
  'veijollensa': 'veijo : veli',
  'kohin': 'kohdin : kohti',
  'leuhautti': 'leuhauttaa : astua kevyesti',
  'Wäinämöinen': 'Väinämöinen : Kalevalan keskushahmo, tietäjä, runonlaulaja. Karjalan eeppisten runojen päähenkilö, jonka epiteettejä vaka vanha, tietäjä tai laulaja iänikuinen (vrt. inkeriläisissä runoissa V. esiintyy harvoin). Väinä : leveä, syvä, tyynesti virtaava joki (Turunen 1979). Väinämöiseen liittyviä jumala-käsityksiä: hämäläisten jumala (Mikael Agricolan jumalluettelo), suomalainen Orfeus (Porthan), loitsija, ilman, veden ja tuulen jumala, kanteleen luoja (Ganander), veden jumala (Setälä, Krohn). Väinämöinen historiallisena sankarina (Lönnrot, Gottlund, Ahlqvist, K. Krohn). Väinämöinen myyttisenä tietäjä-samaanina, laulajana ja loitsijana (Haavio). (Turunen 1979: 395−397.). Lönnrot itse piti aluksi Väinämöistä myyttisenä sankarina, mutta Uuden Kalevalan esipuheessa hän kallistui historialliseen tulkintaan ja esitti Kalevalan ja Pohjolan heimojen olleen alunperin suomalaisia heimoja. Ks. lisää Väinämöisestä: Siikala 1999, 2012.',
  'Hienohelmen': 'hienohelma : tyttö jolla kaunis mekko; nuoren naisen metafora. Neidon epiteettinä ja toisintonimityksenä käytetään yleensä pukuun viittaavia sanoja (tinarinta, vaskivyö); ’hienohelma’ nimitys johtuu hameen helmakoristeesta (Saarimaa 1927; Turunen 1979). Vrt. sanan merkitys karjalan kielessä: 1. koreasti pukeutuva nainen, herrasneiti 2. huora (KKSK). Ks. hienohelma esiintyy runoissa myös toisessa yhteydessä, Kullervo Kalevan pojan toisintonimenä: ”Kullervo [Kalevan poika], / Sinis[ukka, hieno helma], / Hivus kelt[anen] korie” (SKVR I2 914; ks. myös I2 960, 962, 970, 1158).',
  'virkkoi': 'virkkoa : puhua, sanoa, kertoa',
  'rinnan ristiä': 'rinnanristi : ristinmuotoinen rintakoriste. Tarkoittaa myös ristiä, jollainen kreikanuskoisilla on kaulassaan (Niemi 1910; Saarimaa 1927).',
  'sio': 'sitoa : solmia',
  'hivusta': 'hivus : tukka; myös palmikko. Karjalan kielessä myös naidun naisen palmikko (KKSK).',
  'sitaise': 'sitaista : sitoa nopeasti',
  'haahen haljakoista': 'haahen haljakka : laivan tuoma ulkomainen verkakangas; hieno kangas; takki (Jussila 2009). haahti : laiva (Lna 38, Kaukonen 1956, Turunen 1979). <em>Silloin on haahti haltiata, kuin on kippari kipiä</em> (Ganander 1997). haljakka : verka, verasta tehty takki. Vrt. haljakka myös väristä: vaalea (Lönnrot 1958, Jussila 2009).',
  'viploista': 'vipla : (pitkä) viipale. Ks. Lönnrotin selitys: viploista = pytköistä (Lna 38). Lönnrotin sanakirjassa pytky (pötky) määritellään pitkäksi viipaleeksi, palaksi (Lönnrot 1958).',
  'kaioissa sovissa': 'kaiat sovat : ahtaat vaatteet. kaita : ahdas, niukka. sopa : vaate (Lna 38). Kaioissa sovissa kuvastaa Ainon halua asua vanhempiensa kodissa, vaikka olot ovat vaatimattomat (Lna 121: ”Tyydyn huonompaanki vanhempain kodissa”) (ks. Jussila 2009, 91). Ks. myös sananselitys: haahen haljakoista. Ks. runoissa: ”kasva kaioissa sovissa, / veny verkavaattehissa” (SKVR II 47); ”kasva kaioissa somissa /” — (SKVR I1 208, 233, 234); ”kasvoin kaioissa tiloissa, / asuin aina ahtahissa” (SKVR VII2 2185).',
  'armahan': 'armas : rakas, kallis, ihana. Aino-runossa: kanssa armahan emoni. Yleensä sanan merkitys on rakas, kallis läheisestä ihmisestä (KKSK). Myös kunnioitusta viittaavana sanana: ”Oi armas anoppiseni, / Sukuehen suuri vaimo” (SKVR I1 128). Vrt. rahan armas: karhun mielittelysanoja (Turunen 1979; Jussila 2009), ks. lisää Nirvi 1982.'
};
