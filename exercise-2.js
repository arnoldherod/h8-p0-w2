// Question Switch-Case
var day = 21
var month = 9
var year = 1993

switch (month) {
    case 1:
    console.log(day + ' January ' + year);
    break;
  
    case 2:
    console.log(day + ' February ' + year);
    break;
   
    case 3:
    console.log(day + ' March ' + year);
    break;
   
    case 4:
    console.log(day + ' April ' + year);
    break;
  
    case 5:
    console.log(day + ' May ' + year);
    break;
  
    case 6:
    console.log(day + ' June ' + year);
    break;
    
    case 7:
    console.log(day + ' July' + year);
    break;
    
    case 8:
    console.log(day + ' August ' + year);
    break;
    
    case 9:
    console.log(day + ' September ' + year);
    break;

    case 10:
    console.log(day + ' October ' + year);
    break;

    case 11:
    console.log(day + ' November ' + year);
    break;

    case 12:
    console.log(day + ' December ' + year);
    break;
}


//Question If-Else
var name = 'Budi';
var peran = '';

if (name === '' && peran === ''){
        console.log("Nama harus diisi!")
    } else if (peran === ''){
        console.log("Halo " + name + ", Pilih peranmu untuk memulai game!")
    } else if (peran === 'Ksatria'){
        console.log("Selamat datang di Dunia Proxytia, " + name || "Halo Ksatria " + name + ", kamu dapat menyerang dengan senjatamu!")
    } else if (peran === 'Tabib'){
        console.log("Selamat datang di Dunia Proxytia, " + name || "Halo Tabib " + name + ", kamu akan membantu temanmu yang terluka.")
    } else if (peran === 'Penyihir'){
        console.log("Selamat datang di Dunia Proxytia, " + name || "Halo Penyihir " + name + ", ciptakan keajaiban yang membantu kemenanganmu!")
}