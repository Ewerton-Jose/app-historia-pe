var res = window.document.getElementById("revolta");

var dict = [
    ['Revolta dos Mascastes',1810, 1812, "imagem", "texto"]
];

for (var i = 0; i < dict.length; i++)
{
    res.innerHTML += `<ion-card>
    <h1>${dict[i][0]} ${dict[i][1]} ${dict[i][2]}</h1>
    <ion-img src="${dict[i][3]}" alt=""></ion-img>
    <p>${dict[i][4]}</p>
    </ion-card>
    `;
}