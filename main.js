let dataOrderList = [];
dataOrderList["Africa Tourism"] = {continentTitle: "Africa Tourism",
     orderArray: [
         {title: "1914 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/africa.jpg"
         },
         {title: "1915 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/africa1.jpg"
         },
         {title: "1916 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/africa2.jpg"
         },
         {title: "1917 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/africa3.jpg"
         },
         {title: "1918 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/africa4.jpg"
         },
     ]
    };

dataOrderList["Europe Tourism"] = {
     continentTitle: "Europe Tourism",
     orderArray: [
         {title: "1914 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/europe.jpg"
         },
         {title: "1915 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/europe1.jpg"
         },
         {title: "1916 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/europe2.jpg"
         },
         {title: "1917 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/europe3.jpg"
         },
         {title: "1918 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/europe4.jpg"
         },
     ]
    };

dataOrderList["Asia Tourism"] = {
     continentTitle: "Asia Tourism",
     orderArray: [
         {title: "1914 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/asia.jpg"
         },
         {title: "1915 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/asia1.jpg"
         },
         {title: "1916 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/asia2.jpg"
         },
         {title: "1917 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/asia3.jpg"
         },
         {title: "1918 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/asia4.jpg"
         },
     ]
    };

dataOrderList["Australia Tourism"] = {
     continentTitle: "Australia Tourism",
     orderArray: [
         {title: "1914 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/australia3.png"
         },
         {title: "1915 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/australia.png"
         },
         {title: "1916 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/australia2.png"
         },
         {title: "1917 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/australia3.png"
         },
         {title: "1918 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/australia2.png"
         },
     ]
    };

   
   dataOrderList["South America"] = {
     continentTitle: "South America",
     orderArray: [
         {title: "1914 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/southAmerica2.jpg"
         },
         {title: "1915 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/southAmerica1.jpg"
         },
         {title: "1916 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/southAmerica3.jpg"
         },
         {title: "1917 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/southAmerica2.jpg"
         },
         {title: "1918 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/southAmerica1.jpg"
         },
     ]
    };
    
    
    dataOrderList["North America"] = {
     continentTitle: "North America",
     orderArray: [
         {title: "1914 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/northAmerica2.jpg"
         },
         {title: "1915 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/northAmerica1.jpg"
         },
         {title: "1916 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/northAmerica5.jpg"
         },
         {title: "1917 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/northAmerica.jpg"
         },
         {title: "1918 translation",
          text: "But I must explain to you how all this",
          photoUrl: "images/photo/northAmerica2.jpg"
         },
     ]
    };  


    function makePopUp(continentTitle) {
        let continentData = dataOrderList[continentTitle];
        let popUpDataElement=document.getElementById("dataPopUp");
        let popUpHtml="";
        popUpHtml+="<div class='popUpAndScroll'>";
        popUpHtml+="<div class='popUp'>"; 
        for (i=0; i<continentData.orderArray.length; i++) 
        {
            popUpHtml+="<div class='popUpRow'>";
            popUpHtml+="<img src='"+continentData.orderArray[i].photoUrl+"'>";   
            popUpHtml+="<div class='textPopUp'>";   
            popUpHtml+="<h3>"+continentData.orderArray[i].title+"</h3>";    
            popUpHtml+="<p>"+continentData.orderArray[i].text+"</p>";     
            popUpHtml+="</div>"; 
            popUpHtml+="</div>"; 
        }
        popUpHtml+="</div>"; 
        popUpHtml+="</div>";
        popUpHtml+="<h2>"+continentData.continentTitle+"</h2>";
        popUpHtml+="</div>"; 
        popUpDataElement.innerHTML = popUpHtml;        
    }


/* Связывает описаный континент с popUp*/

function bindElement(className, x, y, title) {
    let continentElements = document.getElementsByClassName(className);
    for (i=0; i<continentElements.length; i++) 
    {
        continentElements[i].onclick=function() 
        {
            /*координаты PopUp подстраиваются под движения окна*/
            window.onresize = function (){    
                showContet(x, y);
            };
            
            makePopUp(title);
            showContet(x, y);
            delHighlightElement("continent");
            highlightElement(className);    
        };
    }
}
/*Определяет координаты popUp*/

function showContet(x, y) {
    let popUpElement=document.getElementById("popUp");
    let mapElement=document.getElementById("mapImg");
    let mapElemenRect=mapElement.getBoundingClientRect();
    
    let dy=mapElemenRect.top;
    let mapY=dy+pageYOffset;
    let endY=mapY+y;
    popUpElement.style.top = endY+"px";
    
    let dx=mapElemenRect.left;
    let mapX=dx+pageXOffset;
    let endX=mapX+x;
    popUpElement.style.left = endX+"px";
/*popUp делает видимым*/
    popUpElement.style.display="block";
}
/*Выделяет континент*/
function highlightElement(className) {
    let continentElements = document.getElementsByClassName(className);
    for (i=0; i<continentElements.length; i++) {
    continentElements[i].style.fill = "url(#colorContinentHighliter)";
    } 
}
/*Возвращает цвет континента к исходному*/
function delHighlightElement(className) {
    let continentElements = document.getElementsByClassName(className);
    for (i=0; i<continentElements.length; i++) {
    continentElements[i].style.fill = "url(#colorMap)";
    }
}

window.onload = function init()
{
    let btnToursElement = document.getElementById("focusBtnTours");
    let btnPhotosElement = document.getElementById("focusBtnPhotos");
    
/*при загрузке по умолчанию выделена кнопка Tours*/
    btnToursElement.className="btnToursFocus";
    
/*при загрузке по умолчанию выделена Africa*/
    makePopUp("Africa Tourism");
    showContet(285, 157);
    highlightElement("africa"); 
    
/*кнопки Tours and Photos меняют стиль при нажатии"*/
    btnToursElement.onclick=function()
    {
        btnToursElement.className="btnToursFocus";
        btnPhotosElement.className="btnPhotos";
    };

    btnPhotosElement.onclick=function()
    {
        btnPhotosElement.className="btnPhotosFocus";
        btnToursElement.className="btnTours";
    }; 

    bindElement("africa", 285, 157, "Africa Tourism");
    bindElement("europe", 280, -5, "Europe Tourism");
    bindElement("asia", 500, 150, "Asia Tourism");
    bindElement("australia", 550, 320, "Australia Tourism");
    bindElement("southAmerica", 0, 300, "South America");
    bindElement("northAmerica", 0, 0, "North America");
};







