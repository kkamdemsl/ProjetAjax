//effectuer une requête avec l'objet XmlHttpREQUEST vers le serveur json https://jsonplaceholder.typicode.com/posts

// Etape 1L initier la requête i.e créer un objet avec keep word new
let XHR = new XMLHttpRequest() ;  //extension de l'objet
console.log(XHR.readyState);
console.log(XHR.status);

//Etape 2: Créer une fonction qui va gérer la réponse lorsqu'elle sera reçue
XHR.onreadystatechange = function() {
    console.log(XHR.readyState);  
    console.log(XHR.status);
    if(XHR.readyState==4 && XHR.status==200){
        //Afficher l'objet XHR
        console.log(XHR)

        //Accéder au contenu de la property "responText" de l'objet XHR
        let data = JSON.parse(this.responseText)
        console.log(data[0])
        document.write(JSON.stringify(data[0]))
    }
}

//Etape 3: Ouvrir et envoyer la requête
XHR.open("GET","https://jsonplaceholder.typicode.com/posts");
XHR.send();







