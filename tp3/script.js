function checkId(id){
   var ar = document.getElementsByClassName('inst-id');
   return Array.from(ar).every(x=>parseInt(x.innerText)!=id);
}

function setUp(idCell,typeCell,descCell){
   row = document.createElement('tr');
   idCell.className = 'inst-id';
   typeCell.className = 'inst-ty';
   descCell.className = 'inst-des';
   row.className = 'inst';
   row.append(idCell);
   row.append(typeCell);
   row.append(descCell);
   return row;
}

function saveFunction(){
   var form = document.getElementById('form');
   var ins = form.elements;
   if (checkId(ins.id.value)){
      var idCell = document.createElement('td');
      var typeCell = document.createElement('td');
      var descCell = document.createElement('td');
      idCell.textContent = ins.id.value.padStart(3, "0");
      typeCell.textContent = ins.type.value;
      descCell.textContent = ins.desc.value;
      var row = setUp(idCell,typeCell,descCell);
      document.getElementById('t-body').append(row);
   }
   return false;
}