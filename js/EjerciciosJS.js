
var ejercicio = parseInt(prompt('Ingrese el numero del ejercicio que desea ejecutar (entre 1 y 10) '));

switch(ejercicio){
    case 1:
var nombre = prompt('Como te llamas?');
var edad = prompt('Cuantos años tienes?');
var edad1 = parseInt(edad) + 1;

if(!isNaN(edad)){
console.log('Hola ' , nombre, ' tienes ', edad , ' años y el año que viene tendrás ', edad1 ,' años')
}
        break;

        case 2:
            var figura = parseInt(prompt
            ('Ingrese la figura que desea calcular el area: 1. Triangulo - 2. Rectangulo - 3. Circulo  '));

            switch(figura){
                case 1:
                   var base = parseFloat(prompt('Ingrese la base del triangulo (cm)'));
                   var altura = parseFloat(prompt('Ingrese la altura del triangulo (cm)'));

                   var area = base * altura/2;

                   console.log('El area del triangulo es: ', area , ' cm^2')
                break;

                case 2:
                    var base = parseFloat(prompt('Ingrese la base del Rectangulo (cm)'));
                    var altura = parseFloat(prompt('Ingrese la altura del Rectangulo (cm)'));

                    var area = base * altura;

                    console.log('El area del Rectangulo es: ', area , ' cm^2')
                break;

                case 3:
                    var radio = parseFloat(prompt('Ingrese el radio del circulo (cm)'));

                    var area = Math.PI * Math.pow(radio,2);

                    console.log('El area del circulo es: ', area , ' cm^2')
                break;

            }


            break;

            case 3: 
            break;

            case 4: 
            break;

}





