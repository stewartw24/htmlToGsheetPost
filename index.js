const data = {
    id: '1',
    name: 'William',
    lastName: 'Stewart',
    age: '38'
}

function addGS() {
    const url = 'https://script.google.com/macros/s/AKfycbx5EgyXbsesR7MmVqJ15ZXFOx4COUn0nJusYz9E0bmI4IQGn_xc/exec'

    fetch(url, {
        method: 'POST',
        mode: 'no-cors', 
        cache: 'no-cache', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        body: JSON.stringify({name:'john', lastName: 'stewart', age:'38'})
      });
}

document.getElementById('btn').addEventListener('click', addGS);


/****
 * 
 * 
 * function doPost(e){
  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("test");
  ws.appendRow([bodyJSON.name, bodyJSON.lastName, bodyJSON.age]);
}
 * 
 */