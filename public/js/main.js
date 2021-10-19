class Personne {
    constructor(nom , lieu , argent , mainDroite , mainGauche ) {
        this.nom = nom
        this.lieu = lieu
        this.argent=argent
        this.mainDroite = mainDroite
        this.mainGauche = mainGauche
        this.deplacer=(a,b)=>{
             b.personnes.push(this.nom)
             a.personnes.pop()
             this.lieu = b.nom
        }
        this.payerArticle =(a) =>{
            return this.argent -= a
        }
        this.couper = (ingredient, outils)=>{
            return `Nous utilisons ${outils} pour couper ${ingredient}`
        }
        }
    }
// INSTANCES PRINCIPALE DE MON PERSONNAGE
let wassime = new Personne('Wassime', "maison" , 100 , [], [] )

let maison ={
    nom : "Maison" ,
    personnes  : ['Wassime']
}
// CLASS OUTILS
class Outils {
    constructor(nom , action){
        this.nom= "couteau"
        this.action="couper"
    }
}
// INSTANCES CLASS OUTILS
let couteau = new Outils ("Couteau" , "Couper")

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
        this.melanger = (nomMelanger)=> {
            return  `${nomMelanger} n'est pas encore cuit`
    }
    }
}
let bol = new Bol([])

// EXERCICES DEBUT :
console.log(wassime.nom + " est actuellement à la " + wassime.lieu);
console.log("Il y a dans la maison : " , maison.personnes)
wassime.deplacer(maison,epicerie)
console.log(wassime.lieu)
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
let ingredients_oeufs = [wassime.mainDroite[0].contenu[0].nom , wassime.mainDroite[0].contenu[1].nom , wassime.mainDroite[0].contenu[2].nom,wassime.mainDroite[0].contenu[3].nom   ]
ingredients_oeufs.forEach(element => {
    bol.contenu.push(element)
    console.table(element , "ajouté a mon bol")
});

epicerie.paniers.push(wassime.mainDroite[0])
console.warn("Panier dans mon epicerie  " , epicerie.paniers)


wassime.mainDroite = " Rien  dans ma main"
console.log("J'ai a present dans mon panier après avoir vider mon panier :   " , wassime.mainDroite)
console.log('Voici mon bol :  ' , bol)
wassime.deplacer(maison , epicerie)
console.log(wassime.mainDroite)

wassime.mainDroite ="Il n y a plus rien dans ma main droite"
console.log(wassime.mainDroite)
epicerie.paniers.pop()
console.log("Panier chez mon epiciers :  " , epicerie.paniers)

console.warn("PANIER REMIS A L EPICERIE")
wassime.deplacer(epicerie,maison)
console.warn("Nous sommes a la maison !");
console.log(bol)
// COUPER ALIMENTS ENTIER SEULEMENTS
console.log("Coupe des aliments :   " , wassime.couper(oeufs.nom , couteau.nom))
console.log("Le contenu de mon bol  :   " , bol.contenu)
for (let index = 0; index < bol.contenu.length; index++) {
    const melange = bol.contenu[index];
    console.log("Je rajoute a mon melange : " ,melange )
}
console.log("Suivit de mon melange   : " ,bol.melanger('omelette'))
poele.contenu.push(bol.contenu)
bol.contenu="Il n y a plus rien dans mon bol"
console.log(bol.contenu)
console.log("Dans ma poele  " ,poele.contenu[0])
poele.cuisson()




