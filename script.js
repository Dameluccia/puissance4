var joueur1="rouge";
var joueur2="jaune";
var joueurCourant=joueur1;

var grille =[
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
];

// function initialise(){
//   for (var i = 0; i < grille.length; i++) {
//     for (var j = 0; j < grille[i].length; j++) {
//       var mon_id = "numero"+ i + "-"+ j
//       var ma_case_html= document.getElementById(mon_id);
//       if (grille[i][j]==joueur1){
//         ma_case_html.className="red";
//       }
//       else if(grille[i][j]==joueur2){
//         ma_case_html.className="yellow";
//       }
//
//     }
//   }
// }


//
function jouerPion(numCol){
  var numLigne = 0;
    for (var lig = 0; lig<6 ; lig++) {
      if (grille[lig][numCol]==""){
        numLigne= lig;
      }}


  var mon_id = "numero" + numLigne + "-" + numCol;
  var derniereCase = document.getElementById(mon_id);
  derniereCase.className = 'red';
  grille[numLigne][numCol]=joueurCourant;
  if (joueurCourant==joueur1){
    derniereCase.className = 'red';
    joueurCourant = joueur2;
    }
    else {
      derniereCase.className = "yellow";
      joueurCourant=joueur1;
    }
  }


  // console.log(afficher);
