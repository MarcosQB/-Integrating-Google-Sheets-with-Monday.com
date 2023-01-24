O script foi construindo seguindo a documentação da própria Monday sobre sua API.
Segue:
https://developer.monday.com/api-reference/docs/getting-started-1

O Script abaixo foi construido na IDE do Google Apps Script
segue a documentação:
https://developers.google.com/apps-script

function empresa(){
  const baseUrl = "https://api.monday.com/v2";
  const query = 
        `query {
    boards (ids: 3430011657) {
      items {
        name
      }
    }
  }`;
  
  const headers = {
    Authorization: Autorizaes.autorizacoes.monday,
    "Content-Type": "application/json",
  };
  const options = {
    headers,
    method: "POST",
    payload: JSON.stringify({
      query,
    }),
  };
  const response = UrlFetchApp.fetch(baseUrl, options).getContentText();
  const { data } = JSON.parse(response);
  const { items } = data.boards[0];
  const names = items.map(({ name }) => name).flat();

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const aba = ss.getSheetByName('Base');

  aba.getRange('A2:A').clearContent();
  aba.getRange('A2:A' + (names.length + 1)).setValues(names.map((name) => [name]))
};
