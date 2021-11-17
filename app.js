const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    res.send("Welcome to Home page");
})
app.get("/users",(req,res)=>{
    res.send({"id":"https://robohash.org/quienimin.png?size=50x50&set=set1","first_name":"Sharla","last_name":"Kelwick","email":"skelwick0@github.io","gender":"Agender"},
    {"id":"https://robohash.org/eaqueautemmolestiae.png?size=50x50&set=set1","first_name":"Gussy","last_name":"Howison","email":"ghowison1@businesswire.com","gender":"Genderfluid"},
    {"id":"https://robohash.org/beataeenimlabore.png?size=50x50&set=set1","first_name":"Jacky","last_name":"Searight","email":"jsearight2@nature.com","gender":"Polygender"},
    {"id":"https://robohash.org/sitsequisint.png?size=50x50&set=set1","first_name":"Karel","last_name":"Platfoot","email":"kplatfoot3@globo.com","gender":"Genderqueer"},
    {"id":"https://robohash.org/debitisearumnisi.png?size=50x50&set=set1","first_name":"Cody","last_name":"Lepard","email":"clepard4@earthlink.net","gender":"Male"},
    {"id":"https://robohash.org/animiconsequaturratione.png?size=50x50&set=set1","first_name":"Dorelle","last_name":"Luce","email":"dluce5@nps.gov","gender":"Genderfluid"},
    {"id":"https://robohash.org/nonilloipsam.png?size=50x50&set=set1","first_name":"Rickey","last_name":"Covell","email":"rcovell6@bbb.org","gender":"Agender"},
    {"id":"https://robohash.org/aliquidquicum.png?size=50x50&set=set1","first_name":"Doralynne","last_name":"Hounsom","email":"dhounsom7@feedburner.com","gender":"Genderqueer"},
    {"id":"https://robohash.org/nesciuntanimiminus.png?size=50x50&set=set1","first_name":"Melly","last_name":"Moralee","email":"mmoralee8@youtube.com","gender":"Female"},
    {"id":"https://robohash.org/voluptatetemporibusexplicabo.png?size=50x50&set=set1","first_name":"Hal","last_name":"MacDuffie","email":"hmacduffie9@scribd.com","gender":"Bigender"},
    {"id":"https://robohash.org/consequaturquonon.png?size=50x50&set=set1","first_name":"Richie","last_name":"Quenell","email":"rquenella@ed.gov","gender":"Female"},
    {"id":"https://robohash.org/etcorporisillum.png?size=50x50&set=set1","first_name":"Torrie","last_name":"Munehay","email":"tmunehayb@google.com.hk","gender":"Agender"},
    {"id":"https://robohash.org/idillout.png?size=50x50&set=set1","first_name":"Nappy","last_name":"Curling","email":"ncurlingc@latimes.com","gender":"Male"},
    {"id":"https://robohash.org/quosedexpedita.png?size=50x50&set=set1","first_name":"Angeline","last_name":"Bacon","email":"abacond@vimeo.com","gender":"Bigender"},
    {"id":"https://robohash.org/laudantiumvelitnesciunt.png?size=50x50&set=set1","first_name":"Madelyn","last_name":"Heymes","email":"mheymese@xing.com","gender":"Male"},
    {"id":"https://robohash.org/undedoloranimi.png?size=50x50&set=set1","first_name":"Amandi","last_name":"Rabbitt","email":"arabbittf@imdb.com","gender":"Genderfluid"},
    {"id":"https://robohash.org/etidconsequuntur.png?size=50x50&set=set1","first_name":"Bria","last_name":"McGreay","email":"bmcgreayg@so-net.ne.jp","gender":"Polygender"},
    {"id":"https://robohash.org/placeatmaximecommodi.png?size=50x50&set=set1","first_name":"Alan","last_name":"Bohlsen","email":"abohlsenh@typepad.com","gender":"Bigender"},
    {"id":"https://robohash.org/quasieavoluptatibus.png?size=50x50&set=set1","first_name":"Finley","last_name":"Strafen","email":"fstrafeni@nbcnews.com","gender":"Bigender"},
    {"id":"https://robohash.org/quiautnesciunt.png?size=50x50&set=set1","first_name":"Gayle","last_name":"Belvard","email":"gbelvardj@edublogs.org","gender":"Bigender"});
})

app.listen(2345,()=>{
    console.log("2345 listening to the port")
})