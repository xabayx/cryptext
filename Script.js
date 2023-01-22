const campoTexto = document.getElementById('campoTexto');
            campoTexto.focus();
            const botonEncriptar = document.getElementById('botonEncriptar');

            const vocales = ['a','e','i','o','u'];
            const vocalesReemplazadas = ['ai','enter','imes','ober','ufat'];
            var letrasSeparadas = campoTexto.value.split('');

            function funcionSeparar(){
                letrasSeparadas = (campoTexto.value).split('');
            }

            var resultado;
            function encriptar(){
                funcionSeparar();
                for (let i = 0; i < letrasSeparadas.length; i++){
                    for (let j = 0; j < vocales.length; j++){
                        if (letrasSeparadas[i] === vocales[j]){
                            letrasSeparadas[i] = vocalesReemplazadas[j];
                            break;
                        }
                    }
                }
                console.log(letrasSeparadas)
                return(letrasSeparadas)
            }
            function unir() {
                unido = encriptar.toString();
                console.log(unido)
            }
            unir()
            console.log(unir())

            botonEncriptar.onclick = encriptar;
//             var encriptado = encriptar().toString();