$(document).ready(function () {

    // jQuery methods go here...
    // Retrieve
    let tabUsers = localStorage.tabUsers;
    tabUsers = JSON.parse(tabUsers);
    console.log(tabUsers);
    // Formulaires d'inscription
    // fonction pour Dynamiser le tableau des Users :

   
    $("#submitFormInsc").click( function(e) {
            e.preventDefault();
            let pseudo = $("#inputPseudo").val();
            let mdp = $("#inputPassword").val();
            let confMdp = $("#inputConfPassword").val();
            let src=  $("#imgProf").val();
            let pseudoTest = true;
            if ((pseudo.length != 0) && (mdp.length != 0) && (confMdp.length != 0)) {
                tabUsers.forEach(function (e) {
                    if (e.utilisateur === pseudo) {
                        $("#alertIns").html("<b>Pseudo</b> utilisé");
                        $("#alertIns").addClass("alert-danger");
                        $("#alertIns").removeClass("alert-success");
                        $("#alertIns").removeAttr("hidden");
                        $("#alertIns").show();
                        pseudoTest = false;
                        
                    }
                })
                if (pseudoTest) {
                    if (mdp === confMdp) {
                        let obUser = new Object();
                        obUser.utilisateur = pseudo;
                        obUser.mdp = mdp;
                        obUser.src=src;
                        tabUsers.push(obUser);
                        let userInLine = 2;

                        $("#alertIns").html("<b>Félicitation</b> Vous êtes inscrit!");
                        $("#alertIns").removeClass("alert-danger");
                        $("#alertIns").addClass("alert-success");
                        $("#alertIns").removeAttr("hidden");
                        $("#alertIns").show();


                    } else {
                        $("#alertIns").html("<b>Ereur</b> Vérifié mot de passe");
                        $("#alertIns").removeClass("alert-success");
                        $("#alertIns").removeAttr("hidden");
                        $("#alertIns").removeAttr("hidden");
                        $("#alertIns").show();
                    }
                }

            }
            localStorage.tabUsers = JSON.stringify(tabUsers);
           

    });
});
