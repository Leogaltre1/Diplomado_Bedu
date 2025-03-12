function provideMonths(){
    months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months
}

function getYear(){
    months = provideMonths();
    year = '';
    for(i=0; i<=11; i++){
        let month = `"${i+1}) ${months[i]} 1" "${i+1}) ${months[i]} 2" `;
        year = year + month;
    }
    return year
}

console.log(`mkdir ${getYear()}`);


const miFuncionAnonima = function() {
    console.log("Soy una función anónima");
};
