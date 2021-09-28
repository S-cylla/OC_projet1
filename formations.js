// Affichage des cours vus et des durées

let projectTable = document.getElementsByTagName("table")
for (let i = 0; i < projectTable.length; i++) {
    const element = projectTable[i];
    let projectVideos = element.getElementsByClassName("coursVideo") // Nombre total de vidéos
    let projectLessons = document.getElementsByClassName("projectLessons")
    let lessonsDuration = document.getElementsByClassName("lessonsDuration")
    let appris = element.getElementsByClassName("vu") // Nombre de vidéos vues
    let enCours = element.getElementsByClassName("en_cours") // Nombre de vidéos en cours
    let linkDuration = element.getElementsByClassName("linkDuration") // Durée des vidéos
    
    //Fonctions
    if (projectVideos.length == 0) {
        projectLessons[i].innerHTML = "Il n'y a aucune vidéo à regarder pour ce projet."
        projectLessons[i].style.color = "#E62020"
        lessonsDuration[i].innerHTML = "0"
    } else {
        projectLessons[i].innerHTML = "Cours appris : " + appris.length + "/" + projectVideos.length + "<br>" + "En cours : " + enCours.length + "/" + projectVideos.length
        let sum = 0    
        for (let i = 0; i < linkDuration.length; i++) {
            const element = linkDuration[i];
            sum = sum + parseInt(element.innerHTML, 10) // Somme des durées des vidéos par projet
        }   
        lessonsDuration[i].innerHTML = sum    
    }

    if (appris.length < projectVideos.length) {
        
    } else if (appris.length == projectVideos.length && projectVideos.length !=0) {
        projectLessons[i].innerHTML = "Toutes les vidéos concernant ce projet ont été vues." 
        projectLessons[i].style.color = "#90EE90"
    }
}


// Affichage de la mention "(vu)"

let appris = document.getElementsByClassName("vu") // Nombre de vidéos vues
for (let i = 0; i < appris.length; i++) {
    const element = appris[i];
    element.innerHTML += " (vu) <br>"
    element.parentElement.style.color = "#90EE90"
}



