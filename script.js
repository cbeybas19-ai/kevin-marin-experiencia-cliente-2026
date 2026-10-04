const stages=[
 {label:'PRIMER CONTACTO · 01',title:'Descubre',icon:'✳',need:'“¿Este negocio tiene lo que necesito y queda cerca?”',action:'Mostrar horarios, ubicación y productos con información reciente y fácil de encontrar.'},
 {label:'CONVERSACIÓN · 02',title:'Pregunta',icon:'？',need:'“¿Me responderán con claridad y a tiempo?”',action:'Definir un canal de atención y un tiempo realista de respuesta; evitar promesas que el equipo no puede cumplir.'},
 {label:'DECISIÓN · 03',title:'Decide',icon:'◇',need:'“¿Entiendo el precio, la disponibilidad y las condiciones?”',action:'Presentar precios, existencias, cambios y entrega con lenguaje sencillo antes de confirmar.'},
 {label:'COMPRA · 04',title:'Compra',icon:'＋',need:'“¿El pago y la confirmación son sencillos?”',action:'Dar una confirmación clara del pedido y ofrecer opciones de pago apropiadas y seguras.'},
 {label:'ENTREGA · 05',title:'Recibe',icon:'↗',need:'“¿Llegará lo acordado, en el tiempo acordado?”',action:'Verificar pedido y entrega; avisar pronto si hay retraso o cambio.'},
 {label:'RELACIÓN · 06',title:'Regresa',icon:'↻',need:'“¿Me escucharon y vale la pena volver?”',action:'Invitar a compartir comentarios sin presión y hacer seguimiento solo con autorización.'}
];
const tabs=[...document.querySelectorAll('[data-stage]')];
tabs.forEach((tab)=>tab.addEventListener('click',()=>{const i=Number(tab.dataset.stage),s=stages[i];tabs.forEach((t,j)=>t.setAttribute('aria-selected',j===i?'true':'false'));document.querySelector('#stageLabel').textContent=s.label;document.querySelector('#stageTitle').textContent=s.title;document.querySelector('#stageIcon').textContent=s.icon;document.querySelector('#stageNeed').textContent=s.need;document.querySelector('#stageAction').textContent=s.action;document.querySelector('#progressBar').style.width=`${(i+1)/stages.length*100}%`;}));
