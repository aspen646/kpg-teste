btn = document.getElementById("btn-changer");
voce = document.getElementById("switcher-voce");
empresa = document.getElementById("switcher-empresa");
textoVc = document.getElementById("texto-voce");
textoEmpresa = document.getElementById("texto-empresa");


condition = true;

function changeSection(){
  if(condition === true){
    empresa.style.display = "none";
    voce.style.display = "block";
    textoVc.style.color = "#FFF";
    textoEmpresa.style.color = "#616161";
    btn.classList.replace("btn-onclick","btn-selected");
    condition = false;
  }else{
    empresa.style.display = "block";
    voce.style.display = "none"
    textoVc.style.color = "#616161";
    textoEmpresa.style.color = "#FFF";
    btn.classList.replace("btn-selected","btn-onclick");
    condition = true;
  }
}
