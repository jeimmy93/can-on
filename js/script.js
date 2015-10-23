window.onload = function()
{
  var canvas = nom_div('canvas');
  var context = canvas.getContext('2d');
  
    var numCuerdas = 26;
    var radius = 13;
    var puntuacion = 0;
    var contador = 0;
    var esferasMuestra = [];
    var maximo = 30;

 
 nom_div("start").addEventListener('click', function(event)
  {
     ballsaleatoria();
     setInterval(render, 100);
  });



var render = function()
    {    

        escenario();
       


        //Mostrar las letras...
        for(var i = 0; i < ballsalio.length; i++)
        {

            ballsalio[i].y += 5;
            escenario(ballsalio[i]);
            if(ballsalio[i].y >= 520)
            {
               // eliminaEsfera.push(i);

            }
        }
      
        contador++;
        if(contador === maximo)
        {
            contador = 0;
            if(ballsalio.length < numCuerdas)
            {
               ballsaleatoria();
            }
            else
            {
                alert("El Juego ha terminado");
            }
        }
    };


    //Para crear la esfera, tanto las estáticas como las que se mueven...
    
    var creaEscenario = function(balls)
    {
        //context.beginPath();//trayectoria en forma de linea
        //context.arc(balls.x, balls.y, radius, 0, 2 * Math.PI, false);//circulos
        context.fillStyle = balls.color; //datos co color
        context.strokeStyle = '#525352';
        
        
        
    };
  var ballsaleatoria = function()
   {
  dimensiones = {

  	                  w : 760,
                      h : 500

  					}

  
  ubicaball=[100,(dimensiones.w / 2) - 25,dimensiones.w - 100,dimensiones.w - 100];
  ballsalio=[];

   balls=[];
 //ubicar cañon
  can = nom_div("can1");
  context.drawImage(can,(dimensiones.w / 2) - 75,(dimensiones.h) -200 , 150, 200);

 //ubicar bolitas
  
 
  var existe=false;
    for (var i = 1; i <= 3; i++) 
    {
        balls.push({src : nom_div("bola_" + i)
                   
                   });
        //var posball=Math.floor(Math.random()*3);
         
         do
         {
          existe = false;
          posball=Math.floor(Math.random()*3);
          for (var  c = 0 ; c <ballsalio.length; c++) 
         {   
               if(ballsalio[c] === posball )
               {
                 existe = true;
                 break;

               }


         }
               if(!existe)
               {
                
                  ballsalio.push({
                                        x       : 3 * posball,
                                        y       : 120 
                                    });
                break;

               }
         }while(1);
                       ballsalio.push(posball); 
                       context.drawImage(balls[i - 1 ].src, ubicaball[posball],0,50,50);


         
    }
     var c2 = nom_div("c2");
     context.drawImage(c2,(dimensiones.w / 2) - 25,(dimensiones.h) -250 ,50,50);
              }


    var escenario = (function escenario()
    {
        context.fillStyle = '#F3EFE6';
        context.clearRect(0, 0, 760, 500);
        for(var i = 1; i <= 3; i++)
        {
            //context.beginPath();
            //context.moveTo(3 * i, 20);
            //context.lineTo(28 * i, 480);
            //context.lineWidth = 5;
            //context.stroke();
            /*creaEscenario({
                            x       : 28 * i,
                            y       : 470,
                            numero  : i
                          
                        });*/
        }
        return escenario;
    })();

    

        }
function nom_div(div)
	{
		return document.getElementById(div);
	}