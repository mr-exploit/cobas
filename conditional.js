// no 1
function Startup(divisi){
    if(divisi == "HRD"){
        console.log("Tugas saya melakukan rekrutmen untuk calon pegawai baru");
    } else if (divisi == "MANAGER"){
        console.log("Tugas saya melakukan Pemantauan terhadap HR");
    }else if (divisi == "Designer UI/UX"){
        console.log("Tugas saya melakukan desing UI/UX");
    } else{
        console.log("saya tidak ada di devisi manapun");
    }
}

Startup("BE");

// no.2

function nilai(nilaiA,nilaiB){
    if(nilaiA > nilaiB){
        console.log("Nilai A lebih besar dari b");
    } else if (nilaiA < nilaiB){
        console.log("Nilai A lebih kecil dari nilai B");
    } else if (nilaiA == nilaiB){
        console.log("Nilai A sama dengan nilai B");
    }
}

nilai(20, 20);

// no.3
function namahari(angka){
    switch(angka){
        case 1: {
            console.log("hari minggu"); 
            break;
        }
        case 2: {
            console.log("hari senin"); 
            break;
        }
        case 3: {
            console.log("hari selasa"); 
            break;
        }
        case 4: {
            console.log("hari rabu"); 
            break;
        }
        case 5: {
            console.log("hari kamis"); 
            break;
        }
        case 6: {
            console.log("hari jumat"); 
            break;
        }
        case 7: {
            console.log("hari minggu"); 
            break;
        }
    }
}

namahari(5);

// no.4
function game(tombol){
    switch(tombol.toUpperCase()){
        case "UP": {
            console.log("Karakter berjalan keatas"); 
            break;
        }
        case "RIGHT": {
            console.log("Karakter berjalan kekanan"); 
            break;
        }
        case "BOTTOM" : {
            console.log("Karakter berjalan kebawah"); 
            break;
        }
        case "LEFT": {
            console.log("Karakter berjalan kekiri"); 
            break;
        }
        
    }
}

game("right");