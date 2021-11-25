# KeyCloaker + Samleikin + NextJS

## Setup
Fylg [vegleiðingini](https://www.keycloak.org/getting-started/getting-started-docker) fyri at seta KeyCloak upp umvegis docker.

### Redirect_uri og Wb origins
![clients](https://user-images.githubusercontent.com/18439722/143457935-a44a2121-6084-4f08-ba40-3004a5a50720.png)

Trýst á client á vinstra bjálka, vel tín client. Far so niður til redirect_uri og web origins, har tú koyrir tínar url'ir í.

![image](https://user-images.githubusercontent.com/18439722/143457696-0b137ab7-4835-425a-a5e0-6430af284853.png)


### Legg Samleikan aftrat
![image](https://user-images.githubusercontent.com/18439722/143456946-ba262333-280d-46de-a1dd-ced93f5647a3.png)
Trýst á *Identity Providers* á vinstra bjálka og trýst so á *Add provider* út í høgru síðu á nýggju skermmynindini. Í drop down'inum velur tú SAML 2.0.

![image](https://user-images.githubusercontent.com/18439722/143459516-039af391-88a5-4d51-bf55-6a3c45763a72.png)
Gev nýggju uppsetanini eitt hóskandi alias og navn.

Fær so niðast til **Import external IDP config** og legg aftrat [leinki](https://innrita.test1.samleiki.fo/metadata.xml) ella fílu við Samleika metadata. So skuldi uppsetanin omanfyri verið automatiskt fylt út. Far so longur upp til *Endpoits* feltið og trýst á tað leinki fyri at síggja metadata fyri uppsepatnina. Hetta xml'ið skal so inn í tann IDP'in, sum tú royni at samskifta við. End við at trýsta á *Save* niðast á síðuni


### Mappa attributtar
Fær ovast á síðuni fyri IDP'in og trýst á *Mappers*.
![image](https://user-images.githubusercontent.com/18439722/143466622-558c5735-d63b-44cf-ad18-b51c81ee14f3.png)

Trýst á *create*
![image](https://user-images.githubusercontent.com/18439722/143467062-5f559af9-181d-4a21-885a-d09a06eec0a3.png)

Vel *Attribut import* í drop down menu'ini
![image](https://user-images.githubusercontent.com/18439722/143467539-6ba0d3c0-3fce-4caf-aad1-92ce0e305853.png)

Koyr so tað, ið skal mappast frá IDP'inum í *Attribute name* t.d. personalIdentityNumber og legg so heitir fyri tað, sum tað skal mappast til. Mydin niðanfyri vísir, hvussu man mappar given_name til firstname.
![image](https://user-images.githubusercontent.com/18439722/143468163-efbb0ec8-f21c-4afd-9bad-b7b8824c5188.png)




### NextJS
Sjalv React kodan er tikin niður frá https://github.com/react-keycloak/react-keycloak-examples/tree/master/examples/nextjs-app

Eg havi lagt ymiskt í hetta repository, so man sær attributtarnar frá Samleikanum á heimasíðuni, so tað er frægast at taka hetta projektið niður. Koyrir fyrst *yarn* í terminalin og síðani *yarn dev* fyri at koyra projektið.

#### NextJS keyCloak samband
Fær inn á *_app.tx* fíluna, og legg url'in fyri KeyCloak loginni' í keyCloakCfg, leg realm navnið og clientId í.
![image](https://user-images.githubusercontent.com/18439722/143462383-958abb44-df4f-4bec-babc-7f58f25bd330.png)

Um hevur mappað nøvnini og tú ritar inn umvegis samleikan, so eigur fornavn og eftirnavn at koma fram automatiskt sum niðanfyri:
![image](https://user-images.githubusercontent.com/18439722/143469696-1c4b01db-c479-4760-bfd3-21998568fcbf.png)

Allir attributtarnir verða ikki koyrdir í token'ið enn, tí tað má gerast specifikt fyri hvønn client á KeyCloak.

Farin á *Clients*, vel tín client, trýst á *Mappers* og trýst á *create*.
![image](https://user-images.githubusercontent.com/18439722/143470709-26f4226a-25eb-43bb-ada4-e312e7f4059a.png)

ì mapper type velur tú *User attribute*, og hini feltini skulu samsvara við tað, ið tú skivaði fyri hina mappinginina. *token_claim_navn* er heiti á feltinium, tá ið tað verður koyrt í token.

![image](https://user-images.githubusercontent.com/18439722/143471365-b637814c-3a7f-4852-bd18-57a54eeceeac.png)


**G.G**
Tað kann verða neyðugt at gera sín egna rsa_sha384 lykil.

Trýst á *Realm settings* ovast í vinstra bjálka, vel *keys*, síðani *prorviders* og trýst so á *Add to keystore* og vel rsa_generated. 
