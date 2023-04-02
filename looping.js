// 1. menampilkan teks ‘User ke - 1 … User ke - 100’
function tampil(n){
    for(let i= 1; i <=n; i++){
        console.log(`user ke-${i}`);
    }
}

tampil(100);

// 2. melakukan penambahan nilai sebanyak 10 kali.
function pengulangan(p){
    
    for( let i = 0; i < 10; i++){
        p = i + 2;
        console.log(p);
    }
}

// 3.pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.

function iterasi(n){
    for(let i = 0; i<=n; i++){
        if(i % 2 == 0){
            console.log(`bilangan ${i} ini bilangan genap`);
        } else {
            console.log(`bilangan ${i} ini bilangan ganjil`);
        }
    }
}

// 4. Konfirmasi Pop Up kepada user menggunakan confirm();
function popup(){
    let n = 10;
    while( n >0){
        if(window.confirm("Apakah anda mau mengulang")){
            window.alert("anda baru saja menekan OK");
            n--;
        } else {
            window.alert(`anda sudah melakukan perulangan sebanyak ${n}`);
        }
       
    }
    
}

function programkuis(users){
    users = prompt("Sebutkan Sebutkan kepanjangan dari nama IB?");
    
    while(users != "Impact Byte"){
        users = prompt("Sebutkan Sebutkan kepanjangan dari nama IB?");
    } if(users === "Impact Byte"){
        console.log("jawaban dari User sudah Benar");
    }
}

programkuis();
