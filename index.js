// Project 1
// fungsi convert(jam)
// STORE "menit" masukkan nilai menit = 60
// STORE "detik" masukkan nilai detik = 60
// STORE "jam" masukkan nilai jam = 2

//  CALCULATE jam * menit * detik 
//  Set nilai Jam;
//  display Jam;

function convert(Jam){
    let menit = 60;
    let detik = 60;

    Jam = Jam * menit * detik;
    return Jam;
}
convert(2);


// Project 2
// STORE "A" 
// STORE "B" 

// IF "B" lebih besar dari "A"
// DISPLAY "B nilai terbesar"
// IF "A" == "A"
// DISPLAY "Nilai Pertama sama dengan Nilai kedua"


function nilai(a,b){
   if( b > a ){
    console.log("B nilai terbesar");
   };
   if (b == b){
    console.log("Nilai pertama sama dengan nilai kedua");
   };
}

nilai(5, 10);
nilai (10, 10);

// Project 5
// STORE "nilai";

// set "max" value lebih dari 1;
// set "min" value kurang dari 1;
//FOR "Min"
// IF "nilai" % 3 
// display Fizz 
// if "nilai" % 5
// display Buzz
// if "nilai" % 3 && % 5
// display fizz buzz
// end