O script foi construindo seguindo a documentação da própria Monday sobre sua API.
Segue:
https://developer.monday.com/api-reference/docs/getting-started-1

O Script abaixo foi construido na IDE do Google Apps Script
segue a documentação:
https://developers.google.com/apps-script

function sellersGeral() {

  // Pegando a planilha
  var planilhaAtiva = SpreadsheetApp.getActiveSpreadsheet(); 
  var aba = planilhaAtiva.getSheetByName("SELLERS");
  var cont = 0

  // Requisicao para a API
  var base_url = "https://api.monday.com/v2";
  var query = `query {
  boards (ids: 2283782997) {
    items {
      name
      }
    }
  }
`
  var headers = {
    "Authorization": Autorizaes.autorizacoes.monday,
    "Content-Type": "application/json"

  }

  var options = {
    headers: headers,
    method: "POST",
    payload: JSON.stringify({
      query: query
    })
  }

  var response = UrlFetchApp.fetch(base_url, options).getContentText();
  var result = JSON.parse(response);

  // Formatando o retorno da API
  var retorno = result.data.boards;

 for (let i = 0 ; i < retorno.length; i++ ){
  var items = retorno[i].items
   for(let j = 0; j < items.length; j++){
     cont++
    var names = items[j].name

      // Salvando os dados na planilha.
       aba.getRange(1+cont,1).setValue(names);
       let maisDois = (cont+2)
       var range = "A"+maisDois+":A"+maisDois;

   }
  }
        aba.getRange(range).setValue("");
}
