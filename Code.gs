
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reservations");
  var data = JSON.parse(e.postData.contents);

  var itemPrices = {
    "A1": 5890,
    "A2": 4900,
    "A3": 3900,
    "Tuxedo": 400,
    "Flowergirl": 200,
    "Bridesmaids infinity": 200,
    "Bridesmaids formal dress": 400,
    "Formal dress": 400,
    "Barong": 400,
    "Ball gown Classic": 490,
    "Ball Gown mid tier": 590,
    "Ball gown high end": 690,
    "Filipiniana normal": 400,
    "Filipiniana modern": 700
  };

  var item = data.Item;
  var price = itemPrices[item] || 0;
  var down = Number(data.Downpayment || 0);
  var remaining = price - down;

  sheet.appendRow([
    data.Timestamp,
    data.FullName,
    item,
    price,
    down,
    remaining,
    data.DateOfUse,
    data.DateOfRelease,
    data.DateOfFitting,
    data.Motif,
    data.GroomsmenMotif,
    data.BridesmaidsMotif,
    data.GroomsmenAttire,
    data.BridesmaidsAttire,
    data.BridalGown,
    data.GroomAttire,
    data.MotherGroomAttire,
    data.MotherBrideAttire,
    data.FatherGroomAttire,
    data.FatherBrideAttire,
    data.BestmanAttire,
    data.MaidOfHonorAttire
  ]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
