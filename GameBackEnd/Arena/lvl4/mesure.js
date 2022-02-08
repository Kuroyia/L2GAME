let GroundsMesure = [{ 
    x: 0,
    y: 600,
    w: 500,
    h: 50,
},
{
    x: 0,
    y: 300,
    w: 700,
    h: 50,
},
{
    x: 1000,
    y: 600,
    w: 1500,
    h: 50,
},
{
    x: 1000,
    y: 300,
    w: 1500,
    h: 50,
},
];

let LeviersMesure = [
{
    x: 250,
    y: 550,
    w: 50,
    h: 50,
},
{
    x: 250,
    y: GroundsMesure[1].y - GroundsMesure[1].h,
    w: 50,
    h: 50,
},
{
    x: 1200,
    y: 550,
    w: 50,
    h: 50,
},
{
    x: 1680,
    y: 50,
    w: 50,
    h: 50,
},
{
    x: 1800,
    y: GroundsMesure[0].y - GroundsMesure[0].h,
    w: 50,
    h: 50,
}
];

let WallsMesure = [{
    x: 1000,
    y: 350,
    w: 50,
    h: 250,
},
{
    x: 1150,
    y: 50,
    w: 50,
    h: 250,
},
{
    x: 1350,
    y: 350,
    w: 50,
    h: 250,
},
{
    x: 1900,
    y: 350,
    w: 600,
    h: 250,
}

] ;

let WallsInvisibleMesure = [
{                   // BOX DE FIN
    x:2350,
    y:-1000,
    w:10,
    h:500
},
{
    x:2450,
    y:-1000,
    w:10,
    h:500
},
{
    x:2350,
    y:-500,
    w:100,
    h:10
},
{
    x:2700,
    y:0,
    w:10,
    h:1000
}
];

let DoorMesure=[{
    x:2400,
    y: GroundsMesure[1].y - 100,
    w:50,
    h:100
}];

// On definit un tableau qui contiendra des objets qui correspondent aux mesures de chaque mur
let PlatformsMesure = [
{
    x: 520,
    y: 550,
    w: 200,
    h: Math.floor(85/2),
},    
{
    x: 720,
    y: 380,
    w: 200,
    h: Math.floor(85/2),
},
{
    x: 1350,
    y: 250,
    w: 100,
    h: 20,
},{
    x: 1500,
    y: 175,
    w: 100,
    h: 20,
},
{
    x: 1650,
    y: 100,
    w: 100,
    h: 20,
}
];

let ButtonsMesure = [
    {
        x: 500,
        y: GroundsMesure[1].y - GroundsMesure[1].h,
        w: 80,
        h: 50,
    }
];

export{PlatformsMesure,WallsMesure,GroundsMesure, ButtonsMesure,LeviersMesure,DoorMesure,WallsInvisibleMesure};