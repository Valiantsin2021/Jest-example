import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
describe('Test Airports API', () => {
  test(`GET all airports`, async () => {
    const response_raw = await axios.get('https://airportgap.com/api/airports')
    const body = response_raw.data
    expect([200, 201, 204, 207]).toContain(response_raw.status)
    expect(body['data'], 'Assert body["data"] is array').toBeInstanceOf(Array)
    expect(body['data'], 'Assert body["data"] have length: 30').toHaveLength(30)
    expect(body['data'][0]['id'], 'Assert body["data"][0]["id"] is a string "GKA"').toBe('GKA')
    expect(body['data'][0]['type'], 'Assert body["data"][0]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][0]['attributes']['name'],
      'Assert body["data"][0]["attributes"]["name"] is a string "Goroka Airport"'
    ).toBe('Goroka Airport')
    expect(
      body['data'][0]['attributes']['city'],
      'Assert body["data"][0]["attributes"]["city"] is a string "Goroka"'
    ).toBe('Goroka')
    expect(
      body['data'][0]['attributes']['country'],
      'Assert body["data"][0]["attributes"]["country"] is a string "Papua New Guinea"'
    ).toBe('Papua New Guinea')
    expect(
      body['data'][0]['attributes']['iata'],
      'Assert body["data"][0]["attributes"]["iata"] is a string "GKA"'
    ).toBe('GKA')
    expect(
      body['data'][0]['attributes']['icao'],
      'Assert body["data"][0]["attributes"]["icao"] is a string "AYGA"'
    ).toBe('AYGA')
    expect(
      body['data'][0]['attributes']['latitude'],
      'Assert body["data"][0]["attributes"]["latitude"] is a string "-6.08169"'
    ).toBe('-6.08169')
    expect(
      body['data'][0]['attributes']['longitude'],
      'Assert body["data"][0]["attributes"]["longitude"] is a string "145.391998"'
    ).toBe('145.391998')
    expect(
      body['data'][0]['attributes']['altitude'],
      'Assert body["data"][0]["attributes"]["altitude"] is a number 5282'
    ).toBe(5282)
    expect(
      body['data'][0]['attributes']['timezone'],
      'Assert body["data"][0]["attributes"]["timezone"] is a string "Pacific/Port_Moresby"'
    ).toBe('Pacific/Port_Moresby')
    expect(body['data'][1]['id'], 'Assert body["data"][1]["id"] is a string "MAG"').toBe('MAG')
    expect(body['data'][1]['type'], 'Assert body["data"][1]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][1]['attributes']['name'],
      'Assert body["data"][1]["attributes"]["name"] is a string "Madang Airport"'
    ).toBe('Madang Airport')
    expect(
      body['data'][1]['attributes']['city'],
      'Assert body["data"][1]["attributes"]["city"] is a string "Madang"'
    ).toBe('Madang')
    expect(
      body['data'][1]['attributes']['country'],
      'Assert body["data"][1]["attributes"]["country"] is a string "Papua New Guinea"'
    ).toBe('Papua New Guinea')
    expect(
      body['data'][1]['attributes']['iata'],
      'Assert body["data"][1]["attributes"]["iata"] is a string "MAG"'
    ).toBe('MAG')
    expect(
      body['data'][1]['attributes']['icao'],
      'Assert body["data"][1]["attributes"]["icao"] is a string "AYMD"'
    ).toBe('AYMD')
    expect(
      body['data'][1]['attributes']['latitude'],
      'Assert body["data"][1]["attributes"]["latitude"] is a string "-5.20708"'
    ).toBe('-5.20708')
    expect(
      body['data'][1]['attributes']['longitude'],
      'Assert body["data"][1]["attributes"]["longitude"] is a string "145.789001"'
    ).toBe('145.789001')
    expect(
      body['data'][1]['attributes']['altitude'],
      'Assert body["data"][1]["attributes"]["altitude"] is a number 20'
    ).toBe(20)
    expect(
      body['data'][1]['attributes']['timezone'],
      'Assert body["data"][1]["attributes"]["timezone"] is a string "Pacific/Port_Moresby"'
    ).toBe('Pacific/Port_Moresby')
    expect(body['data'][2]['id'], 'Assert body["data"][2]["id"] is a string "HGU"').toBe('HGU')
    expect(body['data'][2]['type'], 'Assert body["data"][2]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][2]['attributes']['name'],
      'Assert body["data"][2]["attributes"]["name"] is a string "Mount Hagen Kagamuga Airport"'
    ).toBe('Mount Hagen Kagamuga Airport')
    expect(
      body['data'][2]['attributes']['city'],
      'Assert body["data"][2]["attributes"]["city"] is a string "Mount Hagen"'
    ).toBe('Mount Hagen')
    expect(
      body['data'][2]['attributes']['country'],
      'Assert body["data"][2]["attributes"]["country"] is a string "Papua New Guinea"'
    ).toBe('Papua New Guinea')
    expect(
      body['data'][2]['attributes']['iata'],
      'Assert body["data"][2]["attributes"]["iata"] is a string "HGU"'
    ).toBe('HGU')
    expect(
      body['data'][2]['attributes']['icao'],
      'Assert body["data"][2]["attributes"]["icao"] is a string "AYMH"'
    ).toBe('AYMH')
    expect(
      body['data'][2]['attributes']['latitude'],
      'Assert body["data"][2]["attributes"]["latitude"] is a string "-5.82679"'
    ).toBe('-5.82679')
    expect(
      body['data'][2]['attributes']['longitude'],
      'Assert body["data"][2]["attributes"]["longitude"] is a string "144.296005"'
    ).toBe('144.296005')
    expect(
      body['data'][2]['attributes']['altitude'],
      'Assert body["data"][2]["attributes"]["altitude"] is a number 5388'
    ).toBe(5388)
    expect(
      body['data'][2]['attributes']['timezone'],
      'Assert body["data"][2]["attributes"]["timezone"] is a string "Pacific/Port_Moresby"'
    ).toBe('Pacific/Port_Moresby')
    expect(body['data'][3]['id'], 'Assert body["data"][3]["id"] is a string "LAE"').toBe('LAE')
    expect(body['data'][3]['type'], 'Assert body["data"][3]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][3]['attributes']['name'],
      'Assert body["data"][3]["attributes"]["name"] is a string "Nadzab Airport"'
    ).toBe('Nadzab Airport')
    expect(
      body['data'][3]['attributes']['city'],
      'Assert body["data"][3]["attributes"]["city"] is a string "Nadzab"'
    ).toBe('Nadzab')
    expect(
      body['data'][3]['attributes']['country'],
      'Assert body["data"][3]["attributes"]["country"] is a string "Papua New Guinea"'
    ).toBe('Papua New Guinea')
    expect(
      body['data'][3]['attributes']['iata'],
      'Assert body["data"][3]["attributes"]["iata"] is a string "LAE"'
    ).toBe('LAE')
    expect(
      body['data'][3]['attributes']['icao'],
      'Assert body["data"][3]["attributes"]["icao"] is a string "AYNZ"'
    ).toBe('AYNZ')
    expect(
      body['data'][3]['attributes']['latitude'],
      'Assert body["data"][3]["attributes"]["latitude"] is a string "-6.569803"'
    ).toBe('-6.569803')
    expect(
      body['data'][3]['attributes']['longitude'],
      'Assert body["data"][3]["attributes"]["longitude"] is a string "146.725977"'
    ).toBe('146.725977')
    expect(
      body['data'][3]['attributes']['altitude'],
      'Assert body["data"][3]["attributes"]["altitude"] is a number 239'
    ).toBe(239)
    expect(
      body['data'][3]['attributes']['timezone'],
      'Assert body["data"][3]["attributes"]["timezone"] is a string "Pacific/Port_Moresby"'
    ).toBe('Pacific/Port_Moresby')
    expect(body['data'][4]['id'], 'Assert body["data"][4]["id"] is a string "POM"').toBe('POM')
    expect(body['data'][4]['type'], 'Assert body["data"][4]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][4]['attributes']['name'],
      'Assert body["data"][4]["attributes"]["name"] is a string "Port Moresby Jacksons International Airport"'
    ).toBe('Port Moresby Jacksons International Airport')
    expect(
      body['data'][4]['attributes']['city'],
      'Assert body["data"][4]["attributes"]["city"] is a string "Port Moresby"'
    ).toBe('Port Moresby')
    expect(
      body['data'][4]['attributes']['country'],
      'Assert body["data"][4]["attributes"]["country"] is a string "Papua New Guinea"'
    ).toBe('Papua New Guinea')
    expect(
      body['data'][4]['attributes']['iata'],
      'Assert body["data"][4]["attributes"]["iata"] is a string "POM"'
    ).toBe('POM')
    expect(
      body['data'][4]['attributes']['icao'],
      'Assert body["data"][4]["attributes"]["icao"] is a string "AYPY"'
    ).toBe('AYPY')
    expect(
      body['data'][4]['attributes']['latitude'],
      'Assert body["data"][4]["attributes"]["latitude"] is a string "-9.44338"'
    ).toBe('-9.44338')
    expect(
      body['data'][4]['attributes']['longitude'],
      'Assert body["data"][4]["attributes"]["longitude"] is a string "147.220001"'
    ).toBe('147.220001')
    expect(
      body['data'][4]['attributes']['altitude'],
      'Assert body["data"][4]["attributes"]["altitude"] is a number 146'
    ).toBe(146)
    expect(
      body['data'][4]['attributes']['timezone'],
      'Assert body["data"][4]["attributes"]["timezone"] is a string "Pacific/Port_Moresby"'
    ).toBe('Pacific/Port_Moresby')
    expect(body['data'][5]['id'], 'Assert body["data"][5]["id"] is a string "WWK"').toBe('WWK')
    expect(body['data'][5]['type'], 'Assert body["data"][5]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][5]['attributes']['name'],
      'Assert body["data"][5]["attributes"]["name"] is a string "Wewak International Airport"'
    ).toBe('Wewak International Airport')
    expect(
      body['data'][5]['attributes']['city'],
      'Assert body["data"][5]["attributes"]["city"] is a string "Wewak"'
    ).toBe('Wewak')
    expect(
      body['data'][5]['attributes']['country'],
      'Assert body["data"][5]["attributes"]["country"] is a string "Papua New Guinea"'
    ).toBe('Papua New Guinea')
    expect(
      body['data'][5]['attributes']['iata'],
      'Assert body["data"][5]["attributes"]["iata"] is a string "WWK"'
    ).toBe('WWK')
    expect(
      body['data'][5]['attributes']['icao'],
      'Assert body["data"][5]["attributes"]["icao"] is a string "AYWK"'
    ).toBe('AYWK')
    expect(
      body['data'][5]['attributes']['latitude'],
      'Assert body["data"][5]["attributes"]["latitude"] is a string "-3.58383"'
    ).toBe('-3.58383')
    expect(
      body['data'][5]['attributes']['longitude'],
      'Assert body["data"][5]["attributes"]["longitude"] is a string "143.669006"'
    ).toBe('143.669006')
    expect(
      body['data'][5]['attributes']['altitude'],
      'Assert body["data"][5]["attributes"]["altitude"] is a number 19'
    ).toBe(19)
    expect(
      body['data'][5]['attributes']['timezone'],
      'Assert body["data"][5]["attributes"]["timezone"] is a string "Pacific/Port_Moresby"'
    ).toBe('Pacific/Port_Moresby')
    expect(body['data'][6]['id'], 'Assert body["data"][6]["id"] is a string "UAK"').toBe('UAK')
    expect(body['data'][6]['type'], 'Assert body["data"][6]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][6]['attributes']['name'],
      'Assert body["data"][6]["attributes"]["name"] is a string "Narsarsuaq Airport"'
    ).toBe('Narsarsuaq Airport')
    expect(
      body['data'][6]['attributes']['city'],
      'Assert body["data"][6]["attributes"]["city"] is a string "Narssarssuaq"'
    ).toBe('Narssarssuaq')
    expect(
      body['data'][6]['attributes']['country'],
      'Assert body["data"][6]["attributes"]["country"] is a string "Greenland"'
    ).toBe('Greenland')
    expect(
      body['data'][6]['attributes']['iata'],
      'Assert body["data"][6]["attributes"]["iata"] is a string "UAK"'
    ).toBe('UAK')
    expect(
      body['data'][6]['attributes']['icao'],
      'Assert body["data"][6]["attributes"]["icao"] is a string "BGBW"'
    ).toBe('BGBW')
    expect(
      body['data'][6]['attributes']['latitude'],
      'Assert body["data"][6]["attributes"]["latitude"] is a string "61.1605"'
    ).toBe('61.1605')
    expect(
      body['data'][6]['attributes']['longitude'],
      'Assert body["data"][6]["attributes"]["longitude"] is a string "-45.425999"'
    ).toBe('-45.425999')
    expect(
      body['data'][6]['attributes']['altitude'],
      'Assert body["data"][6]["attributes"]["altitude"] is a number 112'
    ).toBe(112)
    expect(
      body['data'][6]['attributes']['timezone'],
      'Assert body["data"][6]["attributes"]["timezone"] is a string "America/Godthab"'
    ).toBe('America/Godthab')
    expect(body['data'][7]['id'], 'Assert body["data"][7]["id"] is a string "GOH"').toBe('GOH')
    expect(body['data'][7]['type'], 'Assert body["data"][7]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][7]['attributes']['name'],
      'Assert body["data"][7]["attributes"]["name"] is a string "Godthaab / Nuuk Airport"'
    ).toBe('Godthaab / Nuuk Airport')
    expect(
      body['data'][7]['attributes']['city'],
      'Assert body["data"][7]["attributes"]["city"] is a string "Godthaab"'
    ).toBe('Godthaab')
    expect(
      body['data'][7]['attributes']['country'],
      'Assert body["data"][7]["attributes"]["country"] is a string "Greenland"'
    ).toBe('Greenland')
    expect(
      body['data'][7]['attributes']['iata'],
      'Assert body["data"][7]["attributes"]["iata"] is a string "GOH"'
    ).toBe('GOH')
    expect(
      body['data'][7]['attributes']['icao'],
      'Assert body["data"][7]["attributes"]["icao"] is a string "BGGH"'
    ).toBe('BGGH')
    expect(
      body['data'][7]['attributes']['latitude'],
      'Assert body["data"][7]["attributes"]["latitude"] is a string "64.190903"'
    ).toBe('64.190903')
    expect(
      body['data'][7]['attributes']['longitude'],
      'Assert body["data"][7]["attributes"]["longitude"] is a string "-51.678101"'
    ).toBe('-51.678101')
    expect(
      body['data'][7]['attributes']['altitude'],
      'Assert body["data"][7]["attributes"]["altitude"] is a number 283'
    ).toBe(283)
    expect(
      body['data'][7]['attributes']['timezone'],
      'Assert body["data"][7]["attributes"]["timezone"] is a string "America/Godthab"'
    ).toBe('America/Godthab')
    expect(body['data'][8]['id'], 'Assert body["data"][8]["id"] is a string "SFJ"').toBe('SFJ')
    expect(body['data'][8]['type'], 'Assert body["data"][8]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][8]['attributes']['name'],
      'Assert body["data"][8]["attributes"]["name"] is a string "Kangerlussuaq Airport"'
    ).toBe('Kangerlussuaq Airport')
    expect(
      body['data'][8]['attributes']['city'],
      'Assert body["data"][8]["attributes"]["city"] is a string "Sondrestrom"'
    ).toBe('Sondrestrom')
    expect(
      body['data'][8]['attributes']['country'],
      'Assert body["data"][8]["attributes"]["country"] is a string "Greenland"'
    ).toBe('Greenland')
    expect(
      body['data'][8]['attributes']['iata'],
      'Assert body["data"][8]["attributes"]["iata"] is a string "SFJ"'
    ).toBe('SFJ')
    expect(
      body['data'][8]['attributes']['icao'],
      'Assert body["data"][8]["attributes"]["icao"] is a string "BGSF"'
    ).toBe('BGSF')
    expect(
      body['data'][8]['attributes']['latitude'],
      'Assert body["data"][8]["attributes"]["latitude"] is a string "67.012222"'
    ).toBe('67.012222')
    expect(
      body['data'][8]['attributes']['longitude'],
      'Assert body["data"][8]["attributes"]["longitude"] is a string "-50.711603"'
    ).toBe('-50.711603')
    expect(
      body['data'][8]['attributes']['altitude'],
      'Assert body["data"][8]["attributes"]["altitude"] is a number 165'
    ).toBe(165)
    expect(
      body['data'][8]['attributes']['timezone'],
      'Assert body["data"][8]["attributes"]["timezone"] is a string "America/Godthab"'
    ).toBe('America/Godthab')
    expect(body['data'][9]['id'], 'Assert body["data"][9]["id"] is a string "THU"').toBe('THU')
    expect(body['data'][9]['type'], 'Assert body["data"][9]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][9]['attributes']['name'],
      'Assert body["data"][9]["attributes"]["name"] is a string "Thule Air Base"'
    ).toBe('Thule Air Base')
    expect(
      body['data'][9]['attributes']['city'],
      'Assert body["data"][9]["attributes"]["city"] is a string "Thule"'
    ).toBe('Thule')
    expect(
      body['data'][9]['attributes']['country'],
      'Assert body["data"][9]["attributes"]["country"] is a string "Greenland"'
    ).toBe('Greenland')
    expect(
      body['data'][9]['attributes']['iata'],
      'Assert body["data"][9]["attributes"]["iata"] is a string "THU"'
    ).toBe('THU')
    expect(
      body['data'][9]['attributes']['icao'],
      'Assert body["data"][9]["attributes"]["icao"] is a string "BGTL"'
    ).toBe('BGTL')
    expect(
      body['data'][9]['attributes']['latitude'],
      'Assert body["data"][9]["attributes"]["latitude"] is a string "76.531197"'
    ).toBe('76.531197')
    expect(
      body['data'][9]['attributes']['longitude'],
      'Assert body["data"][9]["attributes"]["longitude"] is a string "-68.703201"'
    ).toBe('-68.703201')
    expect(
      body['data'][9]['attributes']['altitude'],
      'Assert body["data"][9]["attributes"]["altitude"] is a number 251'
    ).toBe(251)
    expect(
      body['data'][9]['attributes']['timezone'],
      'Assert body["data"][9]["attributes"]["timezone"] is a string "America/Thule"'
    ).toBe('America/Thule')
    expect(body['data'][10]['id'], 'Assert body["data"][10]["id"] is a string "AEY"').toBe('AEY')
    expect(body['data'][10]['type'], 'Assert body["data"][10]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][10]['attributes']['name'],
      'Assert body["data"][10]["attributes"]["name"] is a string "Akureyri Airport"'
    ).toBe('Akureyri Airport')
    expect(
      body['data'][10]['attributes']['city'],
      'Assert body["data"][10]["attributes"]["city"] is a string "Akureyri"'
    ).toBe('Akureyri')
    expect(
      body['data'][10]['attributes']['country'],
      'Assert body["data"][10]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][10]['attributes']['iata'],
      'Assert body["data"][10]["attributes"]["iata"] is a string "AEY"'
    ).toBe('AEY')
    expect(
      body['data'][10]['attributes']['icao'],
      'Assert body["data"][10]["attributes"]["icao"] is a string "BIAR"'
    ).toBe('BIAR')
    expect(
      body['data'][10]['attributes']['latitude'],
      'Assert body["data"][10]["attributes"]["latitude"] is a string "65.660004"'
    ).toBe('65.660004')
    expect(
      body['data'][10]['attributes']['longitude'],
      'Assert body["data"][10]["attributes"]["longitude"] is a string "-18.072701"'
    ).toBe('-18.072701')
    expect(
      body['data'][10]['attributes']['altitude'],
      'Assert body["data"][10]["attributes"]["altitude"] is a number 6'
    ).toBe(6)
    expect(
      body['data'][10]['attributes']['timezone'],
      'Assert body["data"][10]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][11]['id'], 'Assert body["data"][11]["id"] is a string "EGS"').toBe('EGS')
    expect(body['data'][11]['type'], 'Assert body["data"][11]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][11]['attributes']['name'],
      'Assert body["data"][11]["attributes"]["name"] is a string "Egilsstaðir Airport"'
    ).toBe('Egilsstaðir Airport')
    expect(
      body['data'][11]['attributes']['city'],
      'Assert body["data"][11]["attributes"]["city"] is a string "Egilsstadir"'
    ).toBe('Egilsstadir')
    expect(
      body['data'][11]['attributes']['country'],
      'Assert body["data"][11]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][11]['attributes']['iata'],
      'Assert body["data"][11]["attributes"]["iata"] is a string "EGS"'
    ).toBe('EGS')
    expect(
      body['data'][11]['attributes']['icao'],
      'Assert body["data"][11]["attributes"]["icao"] is a string "BIEG"'
    ).toBe('BIEG')
    expect(
      body['data'][11]['attributes']['latitude'],
      'Assert body["data"][11]["attributes"]["latitude"] is a string "65.283302"'
    ).toBe('65.283302')
    expect(
      body['data'][11]['attributes']['longitude'],
      'Assert body["data"][11]["attributes"]["longitude"] is a string "-14.4014"'
    ).toBe('-14.4014')
    expect(
      body['data'][11]['attributes']['altitude'],
      'Assert body["data"][11]["attributes"]["altitude"] is a number 76'
    ).toBe(76)
    expect(
      body['data'][11]['attributes']['timezone'],
      'Assert body["data"][11]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][12]['id'], 'Assert body["data"][12]["id"] is a string "HFN"').toBe('HFN')
    expect(body['data'][12]['type'], 'Assert body["data"][12]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][12]['attributes']['name'],
      'Assert body["data"][12]["attributes"]["name"] is a string "Hornafjörður Airport"'
    ).toBe('Hornafjörður Airport')
    expect(
      body['data'][12]['attributes']['city'],
      'Assert body["data"][12]["attributes"]["city"] is a string "Hofn"'
    ).toBe('Hofn')
    expect(
      body['data'][12]['attributes']['country'],
      'Assert body["data"][12]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][12]['attributes']['iata'],
      'Assert body["data"][12]["attributes"]["iata"] is a string "HFN"'
    ).toBe('HFN')
    expect(
      body['data'][12]['attributes']['icao'],
      'Assert body["data"][12]["attributes"]["icao"] is a string "BIHN"'
    ).toBe('BIHN')
    expect(
      body['data'][12]['attributes']['latitude'],
      'Assert body["data"][12]["attributes"]["latitude"] is a string "64.295601"'
    ).toBe('64.295601')
    expect(
      body['data'][12]['attributes']['longitude'],
      'Assert body["data"][12]["attributes"]["longitude"] is a string "-15.2272"'
    ).toBe('-15.2272')
    expect(
      body['data'][12]['attributes']['altitude'],
      'Assert body["data"][12]["attributes"]["altitude"] is a number 24'
    ).toBe(24)
    expect(
      body['data'][12]['attributes']['timezone'],
      'Assert body["data"][12]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][13]['id'], 'Assert body["data"][13]["id"] is a string "HZK"').toBe('HZK')
    expect(body['data'][13]['type'], 'Assert body["data"][13]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][13]['attributes']['name'],
      'Assert body["data"][13]["attributes"]["name"] is a string "Húsavík Airport"'
    ).toBe('Húsavík Airport')
    expect(
      body['data'][13]['attributes']['city'],
      'Assert body["data"][13]["attributes"]["city"] is a string "Husavik"'
    ).toBe('Husavik')
    expect(
      body['data'][13]['attributes']['country'],
      'Assert body["data"][13]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][13]['attributes']['iata'],
      'Assert body["data"][13]["attributes"]["iata"] is a string "HZK"'
    ).toBe('HZK')
    expect(
      body['data'][13]['attributes']['icao'],
      'Assert body["data"][13]["attributes"]["icao"] is a string "BIHU"'
    ).toBe('BIHU')
    expect(
      body['data'][13]['attributes']['latitude'],
      'Assert body["data"][13]["attributes"]["latitude"] is a string "65.952301"'
    ).toBe('65.952301')
    expect(
      body['data'][13]['attributes']['longitude'],
      'Assert body["data"][13]["attributes"]["longitude"] is a string "-17.426001"'
    ).toBe('-17.426001')
    expect(
      body['data'][13]['attributes']['altitude'],
      'Assert body["data"][13]["attributes"]["altitude"] is a number 48'
    ).toBe(48)
    expect(
      body['data'][13]['attributes']['timezone'],
      'Assert body["data"][13]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][14]['id'], 'Assert body["data"][14]["id"] is a string "IFJ"').toBe('IFJ')
    expect(body['data'][14]['type'], 'Assert body["data"][14]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][14]['attributes']['name'],
      'Assert body["data"][14]["attributes"]["name"] is a string "Ísafjörður Airport"'
    ).toBe('Ísafjörður Airport')
    expect(
      body['data'][14]['attributes']['city'],
      'Assert body["data"][14]["attributes"]["city"] is a string "Isafjordur"'
    ).toBe('Isafjordur')
    expect(
      body['data'][14]['attributes']['country'],
      'Assert body["data"][14]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][14]['attributes']['iata'],
      'Assert body["data"][14]["attributes"]["iata"] is a string "IFJ"'
    ).toBe('IFJ')
    expect(
      body['data'][14]['attributes']['icao'],
      'Assert body["data"][14]["attributes"]["icao"] is a string "BIIS"'
    ).toBe('BIIS')
    expect(
      body['data'][14]['attributes']['latitude'],
      'Assert body["data"][14]["attributes"]["latitude"] is a string "66.058098"'
    ).toBe('66.058098')
    expect(
      body['data'][14]['attributes']['longitude'],
      'Assert body["data"][14]["attributes"]["longitude"] is a string "-23.1353"'
    ).toBe('-23.1353')
    expect(
      body['data'][14]['attributes']['altitude'],
      'Assert body["data"][14]["attributes"]["altitude"] is a number 8'
    ).toBe(8)
    expect(
      body['data'][14]['attributes']['timezone'],
      'Assert body["data"][14]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][15]['id'], 'Assert body["data"][15]["id"] is a string "KEF"').toBe('KEF')
    expect(body['data'][15]['type'], 'Assert body["data"][15]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][15]['attributes']['name'],
      'Assert body["data"][15]["attributes"]["name"] is a string "Keflavik International Airport"'
    ).toBe('Keflavik International Airport')
    expect(
      body['data'][15]['attributes']['city'],
      'Assert body["data"][15]["attributes"]["city"] is a string "Keflavik"'
    ).toBe('Keflavik')
    expect(
      body['data'][15]['attributes']['country'],
      'Assert body["data"][15]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][15]['attributes']['iata'],
      'Assert body["data"][15]["attributes"]["iata"] is a string "KEF"'
    ).toBe('KEF')
    expect(
      body['data'][15]['attributes']['icao'],
      'Assert body["data"][15]["attributes"]["icao"] is a string "BIKF"'
    ).toBe('BIKF')
    expect(
      body['data'][15]['attributes']['latitude'],
      'Assert body["data"][15]["attributes"]["latitude"] is a string "63.985001"'
    ).toBe('63.985001')
    expect(
      body['data'][15]['attributes']['longitude'],
      'Assert body["data"][15]["attributes"]["longitude"] is a string "-22.6056"'
    ).toBe('-22.6056')
    expect(
      body['data'][15]['attributes']['altitude'],
      'Assert body["data"][15]["attributes"]["altitude"] is a number 171'
    ).toBe(171)
    expect(
      body['data'][15]['attributes']['timezone'],
      'Assert body["data"][15]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][16]['id'], 'Assert body["data"][16]["id"] is a string "PFJ"').toBe('PFJ')
    expect(body['data'][16]['type'], 'Assert body["data"][16]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][16]['attributes']['name'],
      'Assert body["data"][16]["attributes"]["name"] is a string "Patreksfjörður Airport"'
    ).toBe('Patreksfjörður Airport')
    expect(
      body['data'][16]['attributes']['city'],
      'Assert body["data"][16]["attributes"]["city"] is a string "Patreksfjordur"'
    ).toBe('Patreksfjordur')
    expect(
      body['data'][16]['attributes']['country'],
      'Assert body["data"][16]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][16]['attributes']['iata'],
      'Assert body["data"][16]["attributes"]["iata"] is a string "PFJ"'
    ).toBe('PFJ')
    expect(
      body['data'][16]['attributes']['icao'],
      'Assert body["data"][16]["attributes"]["icao"] is a string "BIPA"'
    ).toBe('BIPA')
    expect(
      body['data'][16]['attributes']['latitude'],
      'Assert body["data"][16]["attributes"]["latitude"] is a string "65.555801"'
    ).toBe('65.555801')
    expect(
      body['data'][16]['attributes']['longitude'],
      'Assert body["data"][16]["attributes"]["longitude"] is a string "-23.965"'
    ).toBe('-23.965')
    expect(
      body['data'][16]['attributes']['altitude'],
      'Assert body["data"][16]["attributes"]["altitude"] is a number 11'
    ).toBe(11)
    expect(
      body['data'][16]['attributes']['timezone'],
      'Assert body["data"][16]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][17]['id'], 'Assert body["data"][17]["id"] is a string "RKV"').toBe('RKV')
    expect(body['data'][17]['type'], 'Assert body["data"][17]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][17]['attributes']['name'],
      'Assert body["data"][17]["attributes"]["name"] is a string "Reykjavik Airport"'
    ).toBe('Reykjavik Airport')
    expect(
      body['data'][17]['attributes']['city'],
      'Assert body["data"][17]["attributes"]["city"] is a string "Reykjavik"'
    ).toBe('Reykjavik')
    expect(
      body['data'][17]['attributes']['country'],
      'Assert body["data"][17]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][17]['attributes']['iata'],
      'Assert body["data"][17]["attributes"]["iata"] is a string "RKV"'
    ).toBe('RKV')
    expect(
      body['data'][17]['attributes']['icao'],
      'Assert body["data"][17]["attributes"]["icao"] is a string "BIRK"'
    ).toBe('BIRK')
    expect(
      body['data'][17]['attributes']['latitude'],
      'Assert body["data"][17]["attributes"]["latitude"] is a string "64.129997"'
    ).toBe('64.129997')
    expect(
      body['data'][17]['attributes']['longitude'],
      'Assert body["data"][17]["attributes"]["longitude"] is a string "-21.940599"'
    ).toBe('-21.940599')
    expect(
      body['data'][17]['attributes']['altitude'],
      'Assert body["data"][17]["attributes"]["altitude"] is a number 48'
    ).toBe(48)
    expect(
      body['data'][17]['attributes']['timezone'],
      'Assert body["data"][17]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][18]['id'], 'Assert body["data"][18]["id"] is a string "SIJ"').toBe('SIJ')
    expect(body['data'][18]['type'], 'Assert body["data"][18]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][18]['attributes']['name'],
      'Assert body["data"][18]["attributes"]["name"] is a string "Siglufjörður Airport"'
    ).toBe('Siglufjörður Airport')
    expect(
      body['data'][18]['attributes']['city'],
      'Assert body["data"][18]["attributes"]["city"] is a string "Siglufjordur"'
    ).toBe('Siglufjordur')
    expect(
      body['data'][18]['attributes']['country'],
      'Assert body["data"][18]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][18]['attributes']['iata'],
      'Assert body["data"][18]["attributes"]["iata"] is a string "SIJ"'
    ).toBe('SIJ')
    expect(
      body['data'][18]['attributes']['icao'],
      'Assert body["data"][18]["attributes"]["icao"] is a string "BISI"'
    ).toBe('BISI')
    expect(
      body['data'][18]['attributes']['latitude'],
      'Assert body["data"][18]["attributes"]["latitude"] is a string "66.133301"'
    ).toBe('66.133301')
    expect(
      body['data'][18]['attributes']['longitude'],
      'Assert body["data"][18]["attributes"]["longitude"] is a string "-18.9167"'
    ).toBe('-18.9167')
    expect(
      body['data'][18]['attributes']['altitude'],
      'Assert body["data"][18]["attributes"]["altitude"] is a number 10'
    ).toBe(10)
    expect(
      body['data'][18]['attributes']['timezone'],
      'Assert body["data"][18]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][19]['id'], 'Assert body["data"][19]["id"] is a string "VEY"').toBe('VEY')
    expect(body['data'][19]['type'], 'Assert body["data"][19]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][19]['attributes']['name'],
      'Assert body["data"][19]["attributes"]["name"] is a string "Vestmannaeyjar Airport"'
    ).toBe('Vestmannaeyjar Airport')
    expect(
      body['data'][19]['attributes']['city'],
      'Assert body["data"][19]["attributes"]["city"] is a string "Vestmannaeyjar"'
    ).toBe('Vestmannaeyjar')
    expect(
      body['data'][19]['attributes']['country'],
      'Assert body["data"][19]["attributes"]["country"] is a string "Iceland"'
    ).toBe('Iceland')
    expect(
      body['data'][19]['attributes']['iata'],
      'Assert body["data"][19]["attributes"]["iata"] is a string "VEY"'
    ).toBe('VEY')
    expect(
      body['data'][19]['attributes']['icao'],
      'Assert body["data"][19]["attributes"]["icao"] is a string "BIVM"'
    ).toBe('BIVM')
    expect(
      body['data'][19]['attributes']['latitude'],
      'Assert body["data"][19]["attributes"]["latitude"] is a string "63.424301"'
    ).toBe('63.424301')
    expect(
      body['data'][19]['attributes']['longitude'],
      'Assert body["data"][19]["attributes"]["longitude"] is a string "-20.2789"'
    ).toBe('-20.2789')
    expect(
      body['data'][19]['attributes']['altitude'],
      'Assert body["data"][19]["attributes"]["altitude"] is a number 326'
    ).toBe(326)
    expect(
      body['data'][19]['attributes']['timezone'],
      'Assert body["data"][19]["attributes"]["timezone"] is a string "Atlantic/Reykjavik"'
    ).toBe('Atlantic/Reykjavik')
    expect(body['data'][20]['id'], 'Assert body["data"][20]["id"] is a string "YAM"').toBe('YAM')
    expect(body['data'][20]['type'], 'Assert body["data"][20]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][20]['attributes']['name'],
      'Assert body["data"][20]["attributes"]["name"] is a string "Sault Ste Marie Airport"'
    ).toBe('Sault Ste Marie Airport')
    expect(
      body['data'][20]['attributes']['city'],
      'Assert body["data"][20]["attributes"]["city"] is a string "Sault Sainte Marie"'
    ).toBe('Sault Sainte Marie')
    expect(
      body['data'][20]['attributes']['country'],
      'Assert body["data"][20]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][20]['attributes']['iata'],
      'Assert body["data"][20]["attributes"]["iata"] is a string "YAM"'
    ).toBe('YAM')
    expect(
      body['data'][20]['attributes']['icao'],
      'Assert body["data"][20]["attributes"]["icao"] is a string "CYAM"'
    ).toBe('CYAM')
    expect(
      body['data'][20]['attributes']['latitude'],
      'Assert body["data"][20]["attributes"]["latitude"] is a string "46.485001"'
    ).toBe('46.485001')
    expect(
      body['data'][20]['attributes']['longitude'],
      'Assert body["data"][20]["attributes"]["longitude"] is a string "-84.509399"'
    ).toBe('-84.509399')
    expect(
      body['data'][20]['attributes']['altitude'],
      'Assert body["data"][20]["attributes"]["altitude"] is a number 630'
    ).toBe(630)
    expect(
      body['data'][20]['attributes']['timezone'],
      'Assert body["data"][20]["attributes"]["timezone"] is a string "America/Toronto"'
    ).toBe('America/Toronto')
    expect(body['data'][21]['id'], 'Assert body["data"][21]["id"] is a string "YAY"').toBe('YAY')
    expect(body['data'][21]['type'], 'Assert body["data"][21]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][21]['attributes']['name'],
      'Assert body["data"][21]["attributes"]["name"] is a string "St. Anthony Airport"'
    ).toBe('St. Anthony Airport')
    expect(
      body['data'][21]['attributes']['city'],
      'Assert body["data"][21]["attributes"]["city"] is a string "St. Anthony"'
    ).toBe('St. Anthony')
    expect(
      body['data'][21]['attributes']['country'],
      'Assert body["data"][21]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][21]['attributes']['iata'],
      'Assert body["data"][21]["attributes"]["iata"] is a string "YAY"'
    ).toBe('YAY')
    expect(
      body['data'][21]['attributes']['icao'],
      'Assert body["data"][21]["attributes"]["icao"] is a string "CYAY"'
    ).toBe('CYAY')
    expect(
      body['data'][21]['attributes']['latitude'],
      'Assert body["data"][21]["attributes"]["latitude"] is a string "51.391899"'
    ).toBe('51.391899')
    expect(
      body['data'][21]['attributes']['longitude'],
      'Assert body["data"][21]["attributes"]["longitude"] is a string "-56.083099"'
    ).toBe('-56.083099')
    expect(
      body['data'][21]['attributes']['altitude'],
      'Assert body["data"][21]["attributes"]["altitude"] is a number 108'
    ).toBe(108)
    expect(
      body['data'][21]['attributes']['timezone'],
      'Assert body["data"][21]["attributes"]["timezone"] is a string "America/St_Johns"'
    ).toBe('America/St_Johns')
    expect(body['data'][22]['id'], 'Assert body["data"][22]["id"] is a string "YAZ"').toBe('YAZ')
    expect(body['data'][22]['type'], 'Assert body["data"][22]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][22]['attributes']['name'],
      'Assert body["data"][22]["attributes"]["name"] is a string "Tofino / Long Beach Airport"'
    ).toBe('Tofino / Long Beach Airport')
    expect(
      body['data'][22]['attributes']['city'],
      'Assert body["data"][22]["attributes"]["city"] is a string "Tofino"'
    ).toBe('Tofino')
    expect(
      body['data'][22]['attributes']['country'],
      'Assert body["data"][22]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][22]['attributes']['iata'],
      'Assert body["data"][22]["attributes"]["iata"] is a string "YAZ"'
    ).toBe('YAZ')
    expect(
      body['data'][22]['attributes']['icao'],
      'Assert body["data"][22]["attributes"]["icao"] is a string "CYAZ"'
    ).toBe('CYAZ')
    expect(
      body['data'][22]['attributes']['latitude'],
      'Assert body["data"][22]["attributes"]["latitude"] is a string "49.079833"'
    ).toBe('49.079833')
    expect(
      body['data'][22]['attributes']['longitude'],
      'Assert body["data"][22]["attributes"]["longitude"] is a string "-125.775583"'
    ).toBe('-125.775583')
    expect(
      body['data'][22]['attributes']['altitude'],
      'Assert body["data"][22]["attributes"]["altitude"] is a number 80'
    ).toBe(80)
    expect(
      body['data'][22]['attributes']['timezone'],
      'Assert body["data"][22]["attributes"]["timezone"] is a string "America/Vancouver"'
    ).toBe('America/Vancouver')
    expect(body['data'][23]['id'], 'Assert body["data"][23]["id"] is a string "YBB"').toBe('YBB')
    expect(body['data'][23]['type'], 'Assert body["data"][23]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][23]['attributes']['name'],
      'Assert body["data"][23]["attributes"]["name"] is a string "Kugaaruk Airport"'
    ).toBe('Kugaaruk Airport')
    expect(
      body['data'][23]['attributes']['city'],
      'Assert body["data"][23]["attributes"]["city"] is a string "Pelly Bay"'
    ).toBe('Pelly Bay')
    expect(
      body['data'][23]['attributes']['country'],
      'Assert body["data"][23]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][23]['attributes']['iata'],
      'Assert body["data"][23]["attributes"]["iata"] is a string "YBB"'
    ).toBe('YBB')
    expect(
      body['data'][23]['attributes']['icao'],
      'Assert body["data"][23]["attributes"]["icao"] is a string "CYBB"'
    ).toBe('CYBB')
    expect(
      body['data'][23]['attributes']['latitude'],
      'Assert body["data"][23]["attributes"]["latitude"] is a string "68.534401"'
    ).toBe('68.534401')
    expect(
      body['data'][23]['attributes']['longitude'],
      'Assert body["data"][23]["attributes"]["longitude"] is a string "-89.808098"'
    ).toBe('-89.808098')
    expect(
      body['data'][23]['attributes']['altitude'],
      'Assert body["data"][23]["attributes"]["altitude"] is a number 56'
    ).toBe(56)
    expect(
      body['data'][23]['attributes']['timezone'],
      'Assert body["data"][23]["attributes"]["timezone"] is a string "America/Edmonton"'
    ).toBe('America/Edmonton')
    expect(body['data'][24]['id'], 'Assert body["data"][24]["id"] is a string "YBC"').toBe('YBC')
    expect(body['data'][24]['type'], 'Assert body["data"][24]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][24]['attributes']['name'],
      'Assert body["data"][24]["attributes"]["name"] is a string "Baie Comeau Airport"'
    ).toBe('Baie Comeau Airport')
    expect(
      body['data'][24]['attributes']['city'],
      'Assert body["data"][24]["attributes"]["city"] is a string "Baie Comeau"'
    ).toBe('Baie Comeau')
    expect(
      body['data'][24]['attributes']['country'],
      'Assert body["data"][24]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][24]['attributes']['iata'],
      'Assert body["data"][24]["attributes"]["iata"] is a string "YBC"'
    ).toBe('YBC')
    expect(
      body['data'][24]['attributes']['icao'],
      'Assert body["data"][24]["attributes"]["icao"] is a string "CYBC"'
    ).toBe('CYBC')
    expect(
      body['data'][24]['attributes']['latitude'],
      'Assert body["data"][24]["attributes"]["latitude"] is a string "49.1325"'
    ).toBe('49.1325')
    expect(
      body['data'][24]['attributes']['longitude'],
      'Assert body["data"][24]["attributes"]["longitude"] is a string "-68.204399"'
    ).toBe('-68.204399')
    expect(
      body['data'][24]['attributes']['altitude'],
      'Assert body["data"][24]["attributes"]["altitude"] is a number 71'
    ).toBe(71)
    expect(
      body['data'][24]['attributes']['timezone'],
      'Assert body["data"][24]["attributes"]["timezone"] is a string "America/Toronto"'
    ).toBe('America/Toronto')
    expect(body['data'][25]['id'], 'Assert body["data"][25]["id"] is a string "YBG"').toBe('YBG')
    expect(body['data'][25]['type'], 'Assert body["data"][25]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][25]['attributes']['name'],
      'Assert body["data"][25]["attributes"]["name"] is a string "CFB Bagotville"'
    ).toBe('CFB Bagotville')
    expect(
      body['data'][25]['attributes']['city'],
      'Assert body["data"][25]["attributes"]["city"] is a string "Bagotville"'
    ).toBe('Bagotville')
    expect(
      body['data'][25]['attributes']['country'],
      'Assert body["data"][25]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][25]['attributes']['iata'],
      'Assert body["data"][25]["attributes"]["iata"] is a string "YBG"'
    ).toBe('YBG')
    expect(
      body['data'][25]['attributes']['icao'],
      'Assert body["data"][25]["attributes"]["icao"] is a string "CYBG"'
    ).toBe('CYBG')
    expect(
      body['data'][25]['attributes']['latitude'],
      'Assert body["data"][25]["attributes"]["latitude"] is a string "48.330601"'
    ).toBe('48.330601')
    expect(
      body['data'][25]['attributes']['longitude'],
      'Assert body["data"][25]["attributes"]["longitude"] is a string "-70.996399"'
    ).toBe('-70.996399')
    expect(
      body['data'][25]['attributes']['altitude'],
      'Assert body["data"][25]["attributes"]["altitude"] is a number 522'
    ).toBe(522)
    expect(
      body['data'][25]['attributes']['timezone'],
      'Assert body["data"][25]["attributes"]["timezone"] is a string "America/Toronto"'
    ).toBe('America/Toronto')
    expect(body['data'][26]['id'], 'Assert body["data"][26]["id"] is a string "YBK"').toBe('YBK')
    expect(body['data'][26]['type'], 'Assert body["data"][26]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][26]['attributes']['name'],
      'Assert body["data"][26]["attributes"]["name"] is a string "Baker Lake Airport"'
    ).toBe('Baker Lake Airport')
    expect(
      body['data'][26]['attributes']['city'],
      'Assert body["data"][26]["attributes"]["city"] is a string "Baker Lake"'
    ).toBe('Baker Lake')
    expect(
      body['data'][26]['attributes']['country'],
      'Assert body["data"][26]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][26]['attributes']['iata'],
      'Assert body["data"][26]["attributes"]["iata"] is a string "YBK"'
    ).toBe('YBK')
    expect(
      body['data'][26]['attributes']['icao'],
      'Assert body["data"][26]["attributes"]["icao"] is a string "CYBK"'
    ).toBe('CYBK')
    expect(
      body['data'][26]['attributes']['latitude'],
      'Assert body["data"][26]["attributes"]["latitude"] is a string "64.298897"'
    ).toBe('64.298897')
    expect(
      body['data'][26]['attributes']['longitude'],
      'Assert body["data"][26]["attributes"]["longitude"] is a string "-96.077797"'
    ).toBe('-96.077797')
    expect(
      body['data'][26]['attributes']['altitude'],
      'Assert body["data"][26]["attributes"]["altitude"] is a number 59'
    ).toBe(59)
    expect(
      body['data'][26]['attributes']['timezone'],
      'Assert body["data"][26]["attributes"]["timezone"] is a string "America/Winnipeg"'
    ).toBe('America/Winnipeg')
    expect(body['data'][27]['id'], 'Assert body["data"][27]["id"] is a string "YBL"').toBe('YBL')
    expect(body['data'][27]['type'], 'Assert body["data"][27]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][27]['attributes']['name'],
      'Assert body["data"][27]["attributes"]["name"] is a string "Campbell River Airport"'
    ).toBe('Campbell River Airport')
    expect(
      body['data'][27]['attributes']['city'],
      'Assert body["data"][27]["attributes"]["city"] is a string "Campbell River"'
    ).toBe('Campbell River')
    expect(
      body['data'][27]['attributes']['country'],
      'Assert body["data"][27]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][27]['attributes']['iata'],
      'Assert body["data"][27]["attributes"]["iata"] is a string "YBL"'
    ).toBe('YBL')
    expect(
      body['data'][27]['attributes']['icao'],
      'Assert body["data"][27]["attributes"]["icao"] is a string "CYBL"'
    ).toBe('CYBL')
    expect(
      body['data'][27]['attributes']['latitude'],
      'Assert body["data"][27]["attributes"]["latitude"] is a string "49.950802"'
    ).toBe('49.950802')
    expect(
      body['data'][27]['attributes']['longitude'],
      'Assert body["data"][27]["attributes"]["longitude"] is a string "-125.271004"'
    ).toBe('-125.271004')
    expect(
      body['data'][27]['attributes']['altitude'],
      'Assert body["data"][27]["attributes"]["altitude"] is a number 346'
    ).toBe(346)
    expect(
      body['data'][27]['attributes']['timezone'],
      'Assert body["data"][27]["attributes"]["timezone"] is a string "America/Vancouver"'
    ).toBe('America/Vancouver')
    expect(body['data'][28]['id'], 'Assert body["data"][28]["id"] is a string "YBR"').toBe('YBR')
    expect(body['data'][28]['type'], 'Assert body["data"][28]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][28]['attributes']['name'],
      'Assert body["data"][28]["attributes"]["name"] is a string "Brandon Municipal Airport"'
    ).toBe('Brandon Municipal Airport')
    expect(
      body['data'][28]['attributes']['city'],
      'Assert body["data"][28]["attributes"]["city"] is a string "Brandon"'
    ).toBe('Brandon')
    expect(
      body['data'][28]['attributes']['country'],
      'Assert body["data"][28]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][28]['attributes']['iata'],
      'Assert body["data"][28]["attributes"]["iata"] is a string "YBR"'
    ).toBe('YBR')
    expect(
      body['data'][28]['attributes']['icao'],
      'Assert body["data"][28]["attributes"]["icao"] is a string "CYBR"'
    ).toBe('CYBR')
    expect(
      body['data'][28]['attributes']['latitude'],
      'Assert body["data"][28]["attributes"]["latitude"] is a string "49.91"'
    ).toBe('49.91')
    expect(
      body['data'][28]['attributes']['longitude'],
      'Assert body["data"][28]["attributes"]["longitude"] is a string "-99.951897"'
    ).toBe('-99.951897')
    expect(
      body['data'][28]['attributes']['altitude'],
      'Assert body["data"][28]["attributes"]["altitude"] is a number 1343'
    ).toBe(1343)
    expect(
      body['data'][28]['attributes']['timezone'],
      'Assert body["data"][28]["attributes"]["timezone"] is a string "America/Winnipeg"'
    ).toBe('America/Winnipeg')
    expect(body['data'][29]['id'], 'Assert body["data"][29]["id"] is a string "YCB"').toBe('YCB')
    expect(body['data'][29]['type'], 'Assert body["data"][29]["type"] is a string "airport"').toBe('airport')
    expect(
      body['data'][29]['attributes']['name'],
      'Assert body["data"][29]["attributes"]["name"] is a string "Cambridge Bay Airport"'
    ).toBe('Cambridge Bay Airport')
    expect(
      body['data'][29]['attributes']['city'],
      'Assert body["data"][29]["attributes"]["city"] is a string "Cambridge Bay"'
    ).toBe('Cambridge Bay')
    expect(
      body['data'][29]['attributes']['country'],
      'Assert body["data"][29]["attributes"]["country"] is a string "Canada"'
    ).toBe('Canada')
    expect(
      body['data'][29]['attributes']['iata'],
      'Assert body["data"][29]["attributes"]["iata"] is a string "YCB"'
    ).toBe('YCB')
    expect(
      body['data'][29]['attributes']['icao'],
      'Assert body["data"][29]["attributes"]["icao"] is a string "CYCB"'
    ).toBe('CYCB')
    expect(
      body['data'][29]['attributes']['latitude'],
      'Assert body["data"][29]["attributes"]["latitude"] is a string "69.108101"'
    ).toBe('69.108101')
    expect(
      body['data'][29]['attributes']['longitude'],
      'Assert body["data"][29]["attributes"]["longitude"] is a string "-105.138"'
    ).toBe('-105.138')
    expect(
      body['data'][29]['attributes']['altitude'],
      'Assert body["data"][29]["attributes"]["altitude"] is a number 90'
    ).toBe(90)
    expect(
      body['data'][29]['attributes']['timezone'],
      'Assert body["data"][29]["attributes"]["timezone"] is a string "America/Edmonton"'
    ).toBe('America/Edmonton')
    expect(
      body['links']['first'],
      'Assert body["links"]["first"] is a string "https://airportgap.com/api/airports"'
    ).toBe('https://airportgap.com/api/airports')
    expect(
      body['links']['self'],
      'Assert body["links"]["self"] is a string "https://airportgap.com/api/airports"'
    ).toBe('https://airportgap.com/api/airports')
    expect(
      body['links']['last'],
      'Assert body["links"]["last"] is a string "https://airportgap.com/api/airports?page=203"'
    ).toBe('https://airportgap.com/api/airports?page=203')
    expect(
      body['links']['prev'],
      'Assert body["links"]["prev"] is a string "https://airportgap.com/api/airports"'
    ).toBe('https://airportgap.com/api/airports')
    expect(
      body['links']['next'],
      'Assert body["links"]["next"] is a string "https://airportgap.com/api/airports?page=2"'
    ).toBe('https://airportgap.com/api/airports?page=2')
  })
})
