class Personne {
    constructor(nom , lieu , argent , mainDroite , mainGauche ) {
        this.nom = nom
        this.lieu = lieu
        this.argent=argent
        this.mainDroite = mainDroite
        this.mainGauche = mainGauche
        this.deplacer=(a,b)=>{
             b.personnes.push(this)
             // précis dans la sélection
             a.personnes.splice(a.personnes.indexOf(this),1)
            console.log(b);
             this.lieu = b.nom
        }
        this.payerArticle =(a) =>{
            //condition
            return this.argent -= a
        }
        this.couper = (a)=>{
            if(a.etat=="entier"){
                return `J'utilise ${couteau.nom} pour ${couteau.action} ${a.nom}`
                }        }
        }
    }
// INSTANCES PRINCIPALE DE MON PERSONNAGE
let wassime = new Personne('Wassime', "maison" , 100 , [], [] )

let maison ={
    nom : "Maison" ,
    personnes  : [wassime]
}
// CLASS OUTILS
class Outils {
    constructor(nom , action){
        this.nom= nom
        this.action=action
    }
}
// INSTANCES CLASS OUTILS
let couteau = new Outils ("couteau" , "couper")

// CLASS INGREDIENT
class Ingredient{
    constructor(nom,etat,prix){
        this.nom=nom
        this.etat =  etat
        // ["entier", "coupé", "moulu"]
        this.prix = prix
    }
}
// INSTANCES DE MA CLASS INGREDIENTS
let oeufs = new Ingredient ('oeufs' , "entier" , 4)
let oignon = new Ingredient ('ognon', "coupé" , 3)
let epices_mix = new Ingredient ('epices-mix' , "moulu" , 1.5)
let poivrons = new Ingredient ('poivron' ,"coupé" , 2 )
let course = [oeufs , oignon , epices_mix , poivrons]

// CLASS EPICERIE

class Epicerie {
    constructor(nom,personnes , paniers) {
        this.nom=nom
        this.personnes =personnes
        this.paniers = paniers
        // this.ingredient = course
        }
}
// INSTANCES DE MA CLASS EPICERIE
let epicerie= new Epicerie('Chez Mouloud' , [] ,
 [
    { nom : "panier_pris" , contenu : []} ,
    { nom : "panier_restant" , contenu : []} ,
])


// CLASS POELE
class Poele{
    constructor(contenu) {
        this.contenu=contenu
        this.cuisson = ()=>{
            setTimeout(()=> {
                bol.contenu.etat = "cuit"
                return console.log(" DIIING DIIING L OMELETTE EST  CUITE !!! ")
            }, 4000)
        }
    }

}
let poele = new Poele([])
// CLASS BOL
class Bol {
    constructor(contenu){
        this.contenu = contenu
        this.melanger = (nomMelanger) => {
             let omelette = {
                nom : nomMelanger,
                etat : 'non cuit',
            }
            this.contenu = omelette
            return  `${omelette.nom} n'est pas encore cuit`
    }
    }
}
let bol = new Bol([])

// EXERCICES DEBUT :
console.log(wassime.nom + " est actuellement à la " + wassime.lieu);
console.log("Il y a dans la maison : " , maison.personnes)
wassime.deplacer(maison,epicerie)
console.log( "Je suis donc à   =   " , wassime.lieu)
console.log("Après deplacement il y a la maison : " , maison.personnes)
console.log("Il ya dans l'épicerie :  " , epicerie.personnes)


console.log("Paniers dans l epicerie  :   " , epicerie.paniers)
wassime.mainDroite.push(epicerie.paniers[0])
console.log(wassime.mainDroite);
epicerie.paniers.splice(0,1)    
console.log("////////////////////////////")
console.log("Paniers dans l epicerie  :   " , epicerie.paniers)

console.log(" Je prend dans ma main droite :   " ,wassime.mainDroite)

console.log("://///////////////////////////");
course.forEach(element => {
    wassime.mainDroite[0].contenu.push(element)
    console.warn('Vous prenez ' + element.nom)
});
console.log("Dans ma main droite mon panier remplis   :   " , wassime.mainDroite)
console.log("Mon argent avant de payer   " , wassime.argent)

for (let index = 0; index < wassime.mainDroite[0].contenu.length; index++) {
    const element = wassime.mainDroite[0].contenu[index];
    wassime.payerArticle(element.prix)
    console.log(`${element.nom} pour une somme de ${element.prix} euros `)
}

console.log("Argent restant dans ma poche :   "  , wassime.argent)
wassime.deplacer(epicerie,maison)
console.log("Je suis donc à :  " , wassime.lieu  , "Commençons donc a cuisiner ! ")


let contenu_panier = wassime.mainDroite[0].contenu
let ingredients_oeufs = wassime.mainDroite[0].contenu

ingredients_oeufs.forEach(element => {
    bol.contenu.push(element)
    console.table(element , "ajouté a mon bol")
});


// deplacemenent vers epicerie
wassime.deplacer(maison , epicerie)
console.log(wassime.mainDroite)

epicerie.paniers.push(wassime.mainDroite[0])
console.warn("Panier dans mon epicerie  " , epicerie.paniers)


wassime.mainDroite = []   
console.log("J'ai a present dans mon panier après avoir vider mon panier :   " , wassime.mainDroite)
console.log("Panier chez mon epiciers :  " , epicerie.paniers)
console.warn("PANIER REMIS A L EPICERIE")

wassime.deplacer(epicerie,maison)
console.warn("Nous sommes a la maison !");
console.log('Voici mon bol :  ' , bol)
console.log(bol)

// COUPER ALIMENTS ENTIER SEULEMENTS
console.log("Coupe des aliments :   " , wassime.couper(oeufs.nom , couteau.nom))

console.log("Le contenu de mon bol  :   " , bol.contenu)



console.log(wassime.couper(bol.contenu[0]))




for (let index = 0; index < bol.contenu.length; index++) {
    const melange = bol.contenu[index].nom;
    console.log("Je rajoute a mon melange : " ,melange )
}

console.log("Suivit de mon melange   : " ,bol.melanger('omelette'))
poele.contenu.push(bol.contenu)
console.log(bol);
poele.cuisson()

