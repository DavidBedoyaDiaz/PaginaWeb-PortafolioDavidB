const btn = document.getElementById("start");
btn.addEventListener("click", function () {
  var ejercicio = parseInt(
    prompt("Ingrese el numero del ejercicio que desea ejecutar (entre 1 y 10) ")
  );

  switch (ejercicio) {
    case 1:
      var nombre = prompt("Como te llamas?");
      var edad = prompt("Cuantos años tienes?");
      var edad1 = parseInt(edad) + 1;

      if (!isNaN(edad)) {
        console.log(
          "Hola ",
          nombre,
          " tienes ",
          edad,
          " años y el año que viene tendrás ",
          edad1,
          " años"
        );
      }
      break;

    case 2:
      var figura = parseInt(
        prompt(
          "Ingrese la figura que desea calcular el area: 1. Triangulo - 2. Rectangulo - 3. Circulo  "
        )
      );

      switch (figura) {
        case 1:
          var base = parseFloat(prompt("Ingrese la base del triangulo (cm)"));
          var altura = parseFloat(
            prompt("Ingrese la altura del triangulo (cm)")
          );

          var area = (base * altura) / 2;

          console.log("El area del triangulo es: ", area, " cm^2");
          break;

        case 2:
          var base = parseFloat(prompt("Ingrese la base del Rectangulo (cm)"));
          var altura = parseFloat(
            prompt("Ingrese la altura del Rectangulo (cm)")
          );

          var area = base * altura;

          console.log("El area del Rectangulo es: ", area, " cm^2");
          break;

        case 3:
          var radio = parseFloat(prompt("Ingrese el radio del circulo (cm)"));

          var area = Math.PI * Math.pow(radio, 2);

          console.log("El area del circulo es: ", area, " cm^2");
          break;
      }

      break;

    case 3:
      let n = prompt("Ingrese el limite de numeros");
      let text = "";
      for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
          text += i + " es par\n";
        } else {
          text += i + " es impar\n";
        }
      }
      alert(text);
      break;

    case 4:
      let p = parseInt(prompt("Ingrese el numero que quiere comprobar"));
      if (p > 1) {
        let check = true;
        var i = 0;
        for (i = 2; i < p; i++) {
          if (Number.isInteger(p) && p % i == 0) {
            check = false;
          }
        }
        if (check == true) {
          alert(p + " es primo");
        } else {
          alert(p + " no es primo");
        }
      } else {
        alert("Escriba un numero mayor que cero");
      }
      break;

    case 5:
      let numero = parseInt(prompt("Ingrese el numero que quiere comprobar"));
      let num = 1;
      if (numero > 0) {
        for (var i = 1; i <= numero; i++) {
          num *= i;
        }
        alert("El factorial de " + numero + " es " + num);
      } else {
        alert("El factorial de " + numero + " es " + 1);
      }
      break;

    case 6:
      let acum = 0; 
      let nume = 0;
      let cont = 0;
      while (acum < 50) {
        nume = parseInt(prompt("Ingrese un numero"));
        if (nume >= 50) {
          alert("El numero es " + nume + ", no sé puede superar el 50");
          break;
        } else {
          acum += nume;
          cont++;
        }
      }
      if (acum > 50) {
        acum -= nume;
        alert("El total es: " + acum);
        alert("El numero de veces que se ingresó un numero fue: " + (cont - 1));
      } else if (acum == 50) {
        alert("El total es: " + acum);
        alert("El numero de veces que se ingresó un numero fue: " + cont);
      }
      break;

      case 7:
        let rand = [1, 1, 1, 1, 1];
        let randx = rand.map(
          (rand) => rand * Math.floor(Math.random() * (10 - 1) + 1)
        );
        let array1 = [1, 2, 3, 4, 5];
        let array2 = [];
        let array3 = [];
        let array1m = [];
        for (var j = 0; j < array1.length; j++) {
          array1m[j] = array1[j] * randx[j];
          alert(
            "La multiplicación que se produce con " +
              array1[j] +
              "x" +
              randx[j] +
              " es " +
              array1m[j]
          );
        }
        let c = 0,
          cx = 0;
        for (var i = 0; i < array1m.length; i++) {
          if (array1m[i] % 2 == 0) {
            array2[c] = array1m[i];
            c++;
          } else {
            array3[cx] = array1m[i];
            cx++;
          }
        }
        alert("El array de pares es: " + array2);
        alert("El array de impares es: " + array3);
      
        break;

  case 8:
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var ced = prompt('Ingrese su cedula');
    let numerito = parseInt(ced);
    let pos = "";
    if (numerito>= 0 && ced.length<=8){
        var res = numerito % 23;
        pos = letras[res];
        alert('Te corresponde la letra: '+ pos)
    }else{
        alert('El numero no puede ser menor que cero ni puede tener mas de 8 digitos')
    }

    break;

  case 9:
    var nombre=prompt('Ingrese una palabra');
    const vocal = nombre.match(/[aeiou]/gi).length;
    const consonante = nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    const longitud = nombre.match(/[abcdefghijklmnopqrstuvwxyz]/gi).length;
      
        alert("Vocales: "+vocal+"\nConsonantes: "+consonante+"\nlongitud: "+longitud);
    
    break;

  case 10:
    let colores=["azul", "amarillo", "rojo", "verde", "rosa"];
    let age = prompt ('Escribe un color');
    var color="";
    var i=0;

    for(var i=0; i<colores.length; i++)
    {
        if(colores[i]==age)
        {
            color="si"; 
            break;       
        }
        else{
            color="no";
        }
    }
    
    if(color=="si")
    {
        alert("El color SI se encuentra en el array");
    }
    else{
        alert("El color NO se encuentra en el array");
    }
    break;


  }
});
