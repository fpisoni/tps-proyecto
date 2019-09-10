function checkId(id){
   var ar = document.getElementsByClassName('inst-id');
   Array(ar).map(x=>console.log(x.value));
   //console.log('inside'+a);
   console.log(ar);
   return true;
}

function valueChecks(form,ins){
   var a = ins[0]!=null && ins[1]!=null && checkId(ins[0].value)
   console.log(a);
   return a;
}

function setUp(row,idCell,typeCell,descCell){
   idCell.className = 'inst-id';
   typeCell.className = 'inst-ty';
   descCell.className = 'inst-des';
   row.className = 'inst';
   row.append(idCell);
   row.append(typeCell);
   row.append(descCell);
}

function saveFunction(doc){
   var form = doc.getElementById('form');
   var ins = form.getElementsByClassName('forminput');
   if (valueChecks(form,ins)){
      var row = document.createElement('tr');
      var idCell = document.createElement('td');
      var typeCell = document.createElement('td');
      var descCell = document.createElement('td');
      idCell.textContent = ins[0].value;
      typeCell.textContent = ins[1].value;
      descCell.textContent = ins[2].value;
      setUp(row,idCell,typeCell,descCell);
      document.getElementById('t-body').append(row);
   }
}