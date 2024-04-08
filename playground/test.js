
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([33.821062, -84.345405], 13); // Adjust to initial coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

  



var testData = [{
  "trip_id": 4,
  "latitude": 33.778432,
  "longitude": -84.365181
},
{
  "trip_id": 4,
  "latitude": 33.778408,
  "longitude": -84.365193
},
{
  "trip_id": 4,
  "latitude": 33.778411,
  "longitude": -84.365191
},
{
  "trip_id": 4,
  "latitude": 33.778411,
  "longitude": -84.36519
},
{
  "trip_id": 4,
  "latitude": 33.778413,
  "longitude": -84.365189
},
{
  "trip_id": 4,
  "latitude": 33.778416,
  "longitude": -84.365185
},
{
  "trip_id": 4,
  "latitude": 33.778412,
  "longitude": -84.365188
},
{
  "trip_id": 4,
  "latitude": 33.778413,
  "longitude": -84.365188
},
{
  "trip_id": 4,
  "latitude": 33.778411,
  "longitude": -84.365189
},
{
  "trip_id": 4,
  "latitude": 33.778411,
  "longitude": -84.365188
},
{
  "trip_id": 4,
  "latitude": 33.778417,
  "longitude": -84.365184
},
{
  "trip_id": 4,
  "latitude": 33.778413,
  "longitude": -84.365186
},
{
  "trip_id": 4,
  "latitude": 33.778412,
  "longitude": -84.365186
},
{
  "trip_id": 4,
  "latitude": 33.778403,
  "longitude": -84.36519
},
{
  "trip_id": 4,
  "latitude": 33.778405,
  "longitude": -84.365188
},
{
  "trip_id": 4,
  "latitude": 33.778399,
  "longitude": -84.365188
},
{
  "trip_id": 4,
  "latitude": 33.77831,
  "longitude": -84.365305
},
{
  "trip_id": 4,
  "latitude": 33.778066,
  "longitude": -84.365392
},
{
  "trip_id": 4,
  "latitude": 33.777958,
  "longitude": -84.365291
},
{
  "trip_id": 4,
  "latitude": 33.777936,
  "longitude": -84.365254
},
{
  "trip_id": 4,
  "latitude": 33.777922,
  "longitude": -84.365248
},
{
  "trip_id": 4,
  "latitude": 33.777913,
  "longitude": -84.365222
},
{
  "trip_id": 4,
  "latitude": 33.7779,
  "longitude": -84.365218
},
{
  "trip_id": 4,
  "latitude": 33.777881,
  "longitude": -84.365223
},
{
  "trip_id": 4,
  "latitude": 33.777852,
  "longitude": -84.365219
},
{
  "trip_id": 4,
  "latitude": 33.777844,
  "longitude": -84.365213
},
{
  "trip_id": 4,
  "latitude": 33.777841,
  "longitude": -84.365212
},
{
  "trip_id": 4,
  "latitude": 33.777837,
  "longitude": -84.365211
},
{
  "trip_id": 4,
  "latitude": 33.777836,
  "longitude": -84.36521
},
{
  "trip_id": 4,
  "latitude": 33.777819,
  "longitude": -84.3652
},
{
  "trip_id": 4,
  "latitude": 33.777796,
  "longitude": -84.365207
},
{
  "trip_id": 4,
  "latitude": 33.777779,
  "longitude": -84.365212
},
{
  "trip_id": 4,
  "latitude": 33.777767,
  "longitude": -84.365213
},
{
  "trip_id": 4,
  "latitude": 33.777758,
  "longitude": -84.365208
},
{
  "trip_id": 4,
  "latitude": 33.77776,
  "longitude": -84.3652
},
{
  "trip_id": 4,
  "latitude": 33.777757,
  "longitude": -84.365198
},
{
  "trip_id": 4,
  "latitude": 33.77776,
  "longitude": -84.365198
},
{
  "trip_id": 4,
  "latitude": 33.777756,
  "longitude": -84.365198
},
{
  "trip_id": 4,
  "latitude": 33.777755,
  "longitude": -84.365198
},
{
  "trip_id": 4,
  "latitude": 33.777753,
  "longitude": -84.365198
},
{
  "trip_id": 4,
  "latitude": 33.777739,
  "longitude": -84.365192
},
{
  "trip_id": 4,
  "latitude": 33.777723,
  "longitude": -84.365179
},
{
  "trip_id": 4,
  "latitude": 33.77772,
  "longitude": -84.365147
},
{
  "trip_id": 4,
  "latitude": 33.777708,
  "longitude": -84.365064
},
{
  "trip_id": 4,
  "latitude": 33.777705,
  "longitude": -84.365016
},
{
  "trip_id": 4,
  "latitude": 33.777709,
  "longitude": -84.364911
},
{
  "trip_id": 4,
  "latitude": 33.777716,
  "longitude": -84.364807
},
{
  "trip_id": 4,
  "latitude": 33.77773,
  "longitude": -84.364705
},
{
  "trip_id": 4,
  "latitude": 33.777749,
  "longitude": -84.364606
},
{
  "trip_id": 4,
  "latitude": 33.777729,
  "longitude": -84.36452
},
{
  "trip_id": 4,
  "latitude": 33.777701,
  "longitude": -84.36449
},
{
  "trip_id": 4,
  "latitude": 33.777666,
  "longitude": -84.364465
},
{
  "trip_id": 4,
  "latitude": 33.777568,
  "longitude": -84.364465
},
{
  "trip_id": 4,
  "latitude": 33.777465,
  "longitude": -84.364489
},
{
  "trip_id": 4,
  "latitude": 33.777416,
  "longitude": -84.364495
},
{
  "trip_id": 4,
  "latitude": 33.777369,
  "longitude": -84.364501
},
{
  "trip_id": 4,
  "latitude": 33.777277,
  "longitude": -84.364511
},
{
  "trip_id": 4,
  "latitude": 33.777232,
  "longitude": -84.364515
},
{
  "trip_id": 4,
  "latitude": 33.77714,
  "longitude": -84.364518
},
{
  "trip_id": 4,
  "latitude": 33.777018,
  "longitude": -84.364525
},
{
  "trip_id": 4,
  "latitude": 33.776922,
  "longitude": -84.364519
},
{
  "trip_id": 4,
  "latitude": 33.776847,
  "longitude": -84.364506
},
{
  "trip_id": 4,
  "latitude": 33.776822,
  "longitude": -84.364507
},
{
  "trip_id": 4,
  "latitude": 33.776795,
  "longitude": -84.36452
},
{
  "trip_id": 4,
  "latitude": 33.776797,
  "longitude": -84.364521
},
{
  "trip_id": 4,
  "latitude": 33.776796,
  "longitude": -84.364525
},
{
  "trip_id": 4,
  "latitude": 33.776778,
  "longitude": -84.364534
},
{
  "trip_id": 4,
  "latitude": 33.776763,
  "longitude": -84.364555
},
{
  "trip_id": 4,
  "latitude": 33.77677,
  "longitude": -84.364674
},
{
  "trip_id": 4,
  "latitude": 33.776772,
  "longitude": -84.364731
},
{
  "trip_id": 4,
  "latitude": 33.776783,
  "longitude": -84.36488
},
{
  "trip_id": 4,
  "latitude": 33.776799,
  "longitude": -84.365028
},
{
  "trip_id": 4,
  "latitude": 33.776792,
  "longitude": -84.365093
},
{
  "trip_id": 4,
  "latitude": 33.776795,
  "longitude": -84.365122
},
{
  "trip_id": 4,
  "latitude": 33.776787,
  "longitude": -84.365217
},
{
  "trip_id": 4,
  "latitude": 33.776788,
  "longitude": -84.365245
},
{
  "trip_id": 4,
  "latitude": 33.776779,
  "longitude": -84.365288
},
{
  "trip_id": 4,
  "latitude": 33.776774,
  "longitude": -84.36531
},
{
  "trip_id": 4,
  "latitude": 33.77677,
  "longitude": -84.365324
},
{
  "trip_id": 4,
  "latitude": 33.776767,
  "longitude": -84.365339
},
{
  "trip_id": 4,
  "latitude": 33.776768,
  "longitude": -84.365327
},
{
  "trip_id": 4,
  "latitude": 33.776767,
  "longitude": -84.365325
},
{
  "trip_id": 4,
  "latitude": 33.776767,
  "longitude": -84.365323
},
{
  "trip_id": 4,
  "latitude": 33.776766,
  "longitude": -84.365325
},
{
  "trip_id": 4,
  "latitude": 33.776746,
  "longitude": -84.365339
},
{
  "trip_id": 4,
  "latitude": 33.776729,
  "longitude": -84.365344
},
{
  "trip_id": 4,
  "latitude": 33.776692,
  "longitude": -84.36534
},
{
  "trip_id": 4,
  "latitude": 33.776621,
  "longitude": -84.365315
},
{
  "trip_id": 4,
  "latitude": 33.776584,
  "longitude": -84.365303
},
{
  "trip_id": 4,
  "latitude": 33.776541,
  "longitude": -84.365291
},
{
  "trip_id": 4,
  "latitude": 33.77646,
  "longitude": -84.365267
},
{
  "trip_id": 4,
  "latitude": 33.776344,
  "longitude": -84.365253
},
{
  "trip_id": 4,
  "latitude": 33.776223,
  "longitude": -84.365229
},
{
  "trip_id": 4,
  "latitude": 33.776105,
  "longitude": -84.365207
},
{
  "trip_id": 4,
  "latitude": 33.776049,
  "longitude": -84.36518
},
{
  "trip_id": 4,
  "latitude": 33.775994,
  "longitude": -84.365157
},
{
  "trip_id": 4,
  "latitude": 33.775876,
  "longitude": -84.365127
},
{
  "trip_id": 4,
  "latitude": 33.775756,
  "longitude": -84.36511
},
{
  "trip_id": 4,
  "latitude": 33.775692,
  "longitude": -84.365096
},
{
  "trip_id": 4,
  "latitude": 33.775571,
  "longitude": -84.365071
},
{
  "trip_id": 4,
  "latitude": 33.775507,
  "longitude": -84.365053
},
{
  "trip_id": 4,
  "latitude": 33.775448,
  "longitude": -84.365043
},
{
  "trip_id": 4,
  "latitude": 33.775338,
  "longitude": -84.365004
},
{
  "trip_id": 4,
  "latitude": 33.775213,
  "longitude": -84.364975
},
{
  "trip_id": 4,
  "latitude": 33.775148,
  "longitude": -84.364968
},
{
  "trip_id": 4,
  "latitude": 33.775023,
  "longitude": -84.364959
},
{
  "trip_id": 4,
  "latitude": 33.774966,
  "longitude": -84.364934
},
{
  "trip_id": 4,
  "latitude": 33.774908,
  "longitude": -84.364915
},
{
  "trip_id": 4,
  "latitude": 33.774795,
  "longitude": -84.364881
},
{
  "trip_id": 4,
  "latitude": 33.774735,
  "longitude": -84.36485
},
{
  "trip_id": 4,
  "latitude": 33.774616,
  "longitude": -84.364806
},
{
  "trip_id": 4,
  "latitude": 33.774564,
  "longitude": -84.3648
},
{
  "trip_id": 4,
  "latitude": 33.774508,
  "longitude": -84.364779
},
{
  "trip_id": 4,
  "latitude": 33.774447,
  "longitude": -84.364763
},
{
  "trip_id": 4,
  "latitude": 33.774377,
  "longitude": -84.364757
},
{
  "trip_id": 4,
  "latitude": 33.774266,
  "longitude": -84.364747
},
{
  "trip_id": 4,
  "latitude": 33.774202,
  "longitude": -84.364749
},
{
  "trip_id": 4,
  "latitude": 33.774084,
  "longitude": -84.364734
},
{
  "trip_id": 4,
  "latitude": 33.773963,
  "longitude": -84.36472
},
{
  "trip_id": 4,
  "latitude": 33.773905,
  "longitude": -84.364704
},
{
  "trip_id": 4,
  "latitude": 33.773784,
  "longitude": -84.364667
},
{
  "trip_id": 4,
  "latitude": 33.773671,
  "longitude": -84.364643
},
{
  "trip_id": 4,
  "latitude": 33.773613,
  "longitude": -84.364621
},
{
  "trip_id": 4,
  "latitude": 33.773506,
  "longitude": -84.364608
},
{
  "trip_id": 4,
  "latitude": 33.773409,
  "longitude": -84.36452
},
{
  "trip_id": 4,
  "latitude": 33.773298,
  "longitude": -84.364484
},
{
  "trip_id": 4,
  "latitude": 33.773194,
  "longitude": -84.364478
},
{
  "trip_id": 4,
  "latitude": 33.773139,
  "longitude": -84.364452
},
{
  "trip_id": 4,
  "latitude": 33.773026,
  "longitude": -84.364417
},
{
  "trip_id": 4,
  "latitude": 33.772967,
  "longitude": -84.364414
},
{
  "trip_id": 4,
  "latitude": 33.772916,
  "longitude": -84.364388
},
{
  "trip_id": 4,
  "latitude": 33.772858,
  "longitude": -84.364377
},
{
  "trip_id": 4,
  "latitude": 33.77272,
  "longitude": -84.364351
},
{
  "trip_id": 4,
  "latitude": 33.772605,
  "longitude": -84.364323
},
{
  "trip_id": 4,
  "latitude": 33.772551,
  "longitude": -84.364306
},
{
  "trip_id": 4,
  "latitude": 33.772504,
  "longitude": -84.364289
},
{
  "trip_id": 4,
  "latitude": 33.772398,
  "longitude": -84.364267
},
{
  "trip_id": 4,
  "latitude": 33.772298,
  "longitude": -84.364244
},
{
  "trip_id": 4,
  "latitude": 33.772243,
  "longitude": -84.364235
},
{
  "trip_id": 4,
  "latitude": 33.772189,
  "longitude": -84.364225
},
{
  "trip_id": 4,
  "latitude": 33.772076,
  "longitude": -84.364188
},
{
  "trip_id": 4,
  "latitude": 33.772014,
  "longitude": -84.364157
},
{
  "trip_id": 4,
  "latitude": 33.771915,
  "longitude": -84.364118
},
{
  "trip_id": 4,
  "latitude": 33.771857,
  "longitude": -84.364104
},
{
  "trip_id": 4,
  "latitude": 33.771755,
  "longitude": -84.364071
},
{
  "trip_id": 4,
  "latitude": 33.771701,
  "longitude": -84.364059
},
{
  "trip_id": 4,
  "latitude": 33.771606,
  "longitude": -84.364022
},
{
  "trip_id": 4,
  "latitude": 33.771523,
  "longitude": -84.363976
},
{
  "trip_id": 4,
  "latitude": 33.771493,
  "longitude": -84.363959
},
{
  "trip_id": 4,
  "latitude": 33.771431,
  "longitude": -84.363929
},
{
  "trip_id": 4,
  "latitude": 33.771412,
  "longitude": -84.363942
},
{
  "trip_id": 4,
  "latitude": 33.77135,
  "longitude": -84.363946
},
{
  "trip_id": 4,
  "latitude": 33.771326,
  "longitude": -84.363948
},
{
  "trip_id": 4,
  "latitude": 33.771301,
  "longitude": -84.363951
},
{
  "trip_id": 4,
  "latitude": 33.77127,
  "longitude": -84.363952
},
{
  "trip_id": 4,
  "latitude": 33.771197,
  "longitude": -84.363918
},
{
  "trip_id": 4,
  "latitude": 33.77106,
  "longitude": -84.363866
},
{
  "trip_id": 4,
  "latitude": 33.770996,
  "longitude": -84.363839
},
{
  "trip_id": 4,
  "latitude": 33.770891,
  "longitude": -84.363751
},
{
  "trip_id": 4,
  "latitude": 33.770827,
  "longitude": -84.363722
},
{
  "trip_id": 4,
  "latitude": 33.770714,
  "longitude": -84.363651
},
{
  "trip_id": 4,
  "latitude": 33.770598,
  "longitude": -84.36358
},
{
  "trip_id": 4,
  "latitude": 33.770539,
  "longitude": -84.363544
},
{
  "trip_id": 4,
  "latitude": 33.770434,
  "longitude": -84.363483
},
{
  "trip_id": 4,
  "latitude": 33.770376,
  "longitude": -84.36345
},
{
  "trip_id": 4,
  "latitude": 33.770265,
  "longitude": -84.363383
},
{
  "trip_id": 4,
  "latitude": 33.770153,
  "longitude": -84.363305
},
{
  "trip_id": 4,
  "latitude": 33.770104,
  "longitude": -84.363243
},
{
  "trip_id": 4,
  "latitude": 33.770056,
  "longitude": -84.36321
},
{
  "trip_id": 4,
  "latitude": 33.769959,
  "longitude": -84.363136
},
{
  "trip_id": 4,
  "latitude": 33.769863,
  "longitude": -84.363051
},
{
  "trip_id": 4,
  "latitude": 33.769812,
  "longitude": -84.363015
},
{
  "trip_id": 4,
  "latitude": 33.769711,
  "longitude": -84.362918
},
{
  "trip_id": 4,
  "latitude": 33.769614,
  "longitude": -84.362848
},
{
  "trip_id": 4,
  "latitude": 33.769578,
  "longitude": -84.3628
},
{
  "trip_id": 4,
  "latitude": 33.769497,
  "longitude": -84.36272
},
{
  "trip_id": 4,
  "latitude": 33.769408,
  "longitude": -84.362627
},
{
  "trip_id": 4,
  "latitude": 33.769309,
  "longitude": -84.362543
},
{
  "trip_id": 4,
  "latitude": 33.769254,
  "longitude": -84.3625
},
{
  "trip_id": 4,
  "latitude": 33.769136,
  "longitude": -84.362428
},
{
  "trip_id": 4,
  "latitude": 33.769087,
  "longitude": -84.362382
},
{
  "trip_id": 4,
  "latitude": 33.769037,
  "longitude": -84.362338
},
{
  "trip_id": 4,
  "latitude": 33.768939,
  "longitude": -84.36224
},
{
  "trip_id": 4,
  "latitude": 33.768841,
  "longitude": -84.362141
},
{
  "trip_id": 4,
  "latitude": 33.768793,
  "longitude": -84.36209
},
{
  "trip_id": 4,
  "latitude": 33.768747,
  "longitude": -84.36204
},
{
  "trip_id": 4,
  "latitude": 33.768651,
  "longitude": -84.361945
},
{
  "trip_id": 4,
  "latitude": 33.768597,
  "longitude": -84.361887
},
{
  "trip_id": 4,
  "latitude": 33.768493,
  "longitude": -84.361782
},
{
  "trip_id": 4,
  "latitude": 33.768406,
  "longitude": -84.361674
},
{
  "trip_id": 4,
  "latitude": 33.768363,
  "longitude": -84.361629
},
{
  "trip_id": 4,
  "latitude": 33.768271,
  "longitude": -84.361543
},
{
  "trip_id": 4,
  "latitude": 33.768163,
  "longitude": -84.361441
},
{
  "trip_id": 4,
  "latitude": 33.768111,
  "longitude": -84.361394
},
{
  "trip_id": 4,
  "latitude": 33.768014,
  "longitude": -84.361298
},
{
  "trip_id": 4,
  "latitude": 33.767972,
  "longitude": -84.361251
},
{
  "trip_id": 4,
  "latitude": 33.767885,
  "longitude": -84.361147
},
{
  "trip_id": 4,
  "latitude": 33.767813,
  "longitude": -84.361056
},
{
  "trip_id": 4,
  "latitude": 33.767702,
  "longitude": -84.360955
},
{
  "trip_id": 4,
  "latitude": 33.767611,
  "longitude": -84.36087
},
{
  "trip_id": 4,
  "latitude": 33.767524,
  "longitude": -84.360777
},
{
  "trip_id": 4,
  "latitude": 33.767413,
  "longitude": -84.360687
},
{
  "trip_id": 4,
  "latitude": 33.767308,
  "longitude": -84.360607
},
{
  "trip_id": 4,
  "latitude": 33.767199,
  "longitude": -84.360527
},
{
  "trip_id": 4,
  "latitude": 33.767111,
  "longitude": -84.360451
},
{
  "trip_id": 4,
  "latitude": 33.767054,
  "longitude": -84.360414
},
{
  "trip_id": 4,
  "latitude": 33.76696,
  "longitude": -84.36033
},
{
  "trip_id": 4,
  "latitude": 33.766868,
  "longitude": -84.360239
},
{
  "trip_id": 4,
  "latitude": 33.766765,
  "longitude": -84.360147
},
{
  "trip_id": 4,
  "latitude": 33.766659,
  "longitude": -84.360071
},
{
  "trip_id": 4,
  "latitude": 33.766605,
  "longitude": -84.360039
},
{
  "trip_id": 4,
  "latitude": 33.766501,
  "longitude": -84.359982
},
{
  "trip_id": 4,
  "latitude": 33.766387,
  "longitude": -84.35993
},
{
  "trip_id": 4,
  "latitude": 33.766331,
  "longitude": -84.3599
},
{
  "trip_id": 4,
  "latitude": 33.766274,
  "longitude": -84.359866
},
{
  "trip_id": 4,
  "latitude": 33.766168,
  "longitude": -84.359817
},
{
  "trip_id": 4,
  "latitude": 33.766101,
  "longitude": -84.359786
},
{
  "trip_id": 4,
  "latitude": 33.765974,
  "longitude": -84.359735
},
{
  "trip_id": 4,
  "latitude": 33.765928,
  "longitude": -84.359702
},
{
  "trip_id": 4,
  "latitude": 33.765825,
  "longitude": -84.359638
},
{
  "trip_id": 4,
  "latitude": 33.765701,
  "longitude": -84.359588
},
{
  "trip_id": 4,
  "latitude": 33.765639,
  "longitude": -84.359583
},
{
  "trip_id": 4,
  "latitude": 33.765506,
  "longitude": -84.35958
},
{
  "trip_id": 4,
  "latitude": 33.76541,
  "longitude": -84.359548
},
{
  "trip_id": 4,
  "latitude": 33.765355,
  "longitude": -84.359543
},
{
  "trip_id": 4,
  "latitude": 33.765287,
  "longitude": -84.359542
},
{
  "trip_id": 4,
  "latitude": 33.765161,
  "longitude": -84.359556
},
{
  "trip_id": 4,
  "latitude": 33.765036,
  "longitude": -84.359561
},
{
  "trip_id": 4,
  "latitude": 33.764911,
  "longitude": -84.359564
},
{
  "trip_id": 4,
  "latitude": 33.764838,
  "longitude": -84.359594
},
{
  "trip_id": 4,
  "latitude": 33.764778,
  "longitude": -84.359598
},
{
  "trip_id": 4,
  "latitude": 33.764713,
  "longitude": -84.359595
},
{
  "trip_id": 4,
  "latitude": 33.7646,
  "longitude": -84.359552
},
{
  "trip_id": 4,
  "latitude": 33.764505,
  "longitude": -84.35954
},
{
  "trip_id": 4,
  "latitude": 33.764423,
  "longitude": -84.359533
},
{
  "trip_id": 4,
  "latitude": 33.764295,
  "longitude": -84.359538
},
{
  "trip_id": 4,
  "latitude": 33.764181,
  "longitude": -84.359474
},
{
  "trip_id": 4,
  "latitude": 33.764105,
  "longitude": -84.359359
},
{
  "trip_id": 4,
  "latitude": 33.764064,
  "longitude": -84.359203
},
{
  "trip_id": 4,
  "latitude": 33.764126,
  "longitude": -84.359056
},
{
  "trip_id": 4,
  "latitude": 33.764146,
  "longitude": -84.358987
},
{
  "trip_id": 4,
  "latitude": 33.764181,
  "longitude": -84.358905
},
{
  "trip_id": 4,
  "latitude": 33.764203,
  "longitude": -84.35885
},
{
  "trip_id": 4,
  "latitude": 33.764189,
  "longitude": -84.358696
},
{
  "trip_id": 4,
  "latitude": 33.764171,
  "longitude": -84.358618
},
{
  "trip_id": 4,
  "latitude": 33.764146,
  "longitude": -84.358478
},
{
  "trip_id": 4,
  "latitude": 33.764152,
  "longitude": -84.358369
},
{
  "trip_id": 4,
  "latitude": 33.764202,
  "longitude": -84.358248
},
{
  "trip_id": 4,
  "latitude": 33.764242,
  "longitude": -84.358141
},
{
  "trip_id": 4,
  "latitude": 33.764247,
  "longitude": -84.358089
},
{
  "trip_id": 4,
  "latitude": 33.764258,
  "longitude": -84.358041
},
{
  "trip_id": 4,
  "latitude": 33.764247,
  "longitude": -84.357984
},
{
  "trip_id": 4,
  "latitude": 33.764242,
  "longitude": -84.35788
},
{
  "trip_id": 4,
  "latitude": 33.764239,
  "longitude": -84.357833
},
{
  "trip_id": 4,
  "latitude": 33.764231,
  "longitude": -84.357739
},
{
  "trip_id": 4,
  "latitude": 33.76422,
  "longitude": -84.357653
},
{
  "trip_id": 4,
  "latitude": 33.764226,
  "longitude": -84.35757
},
{
  "trip_id": 4,
  "latitude": 33.764259,
  "longitude": -84.357478
},
{
  "trip_id": 4,
  "latitude": 33.764282,
  "longitude": -84.357443
},
{
  "trip_id": 4,
  "latitude": 33.764315,
  "longitude": -84.357379
},
{
  "trip_id": 4,
  "latitude": 33.764341,
  "longitude": -84.357305
},
{
  "trip_id": 4,
  "latitude": 33.764342,
  "longitude": -84.35726
},
{
  "trip_id": 4,
  "latitude": 33.764346,
  "longitude": -84.357146
},
{
  "trip_id": 4,
  "latitude": 33.764342,
  "longitude": -84.357012
},
{
  "trip_id": 4,
  "latitude": 33.764366,
  "longitude": -84.356893
},
{
  "trip_id": 4,
  "latitude": 33.764367,
  "longitude": -84.356834
},
{
  "trip_id": 4,
  "latitude": 33.76436,
  "longitude": -84.356712
},
{
  "trip_id": 4,
  "latitude": 33.764336,
  "longitude": -84.356642
},
{
  "trip_id": 4,
  "latitude": 33.764312,
  "longitude": -84.35658
},
{
  "trip_id": 4,
  "latitude": 33.764332,
  "longitude": -84.356525
},
{
  "trip_id": 4,
  "latitude": 33.764368,
  "longitude": -84.356413
},
{
  "trip_id": 4,
  "latitude": 33.764418,
  "longitude": -84.356314
},
{
  "trip_id": 4,
  "latitude": 33.764474,
  "longitude": -84.356231
},
{
  "trip_id": 4,
  "latitude": 33.764511,
  "longitude": -84.356181
},
{
  "trip_id": 4,
  "latitude": 33.764564,
  "longitude": -84.35609
},
{
  "trip_id": 4,
  "latitude": 33.764599,
  "longitude": -84.356043
},
{
  "trip_id": 4,
  "latitude": 33.764667,
  "longitude": -84.355953
},
{
  "trip_id": 4,
  "latitude": 33.764702,
  "longitude": -84.355907
},
{
  "trip_id": 4,
  "latitude": 33.764765,
  "longitude": -84.355819
},
{
  "trip_id": 4,
  "latitude": 33.7648,
  "longitude": -84.355766
},
{
  "trip_id": 4,
  "latitude": 33.764834,
  "longitude": -84.355715
},
{
  "trip_id": 4,
  "latitude": 33.764905,
  "longitude": -84.355621
},
{
  "trip_id": 4,
  "latitude": 33.764953,
  "longitude": -84.355569
},
{
  "trip_id": 4,
  "latitude": 33.765041,
  "longitude": -84.355492
},
{
  "trip_id": 4,
  "latitude": 33.765094,
  "longitude": -84.355453
},
{
  "trip_id": 4,
  "latitude": 33.765216,
  "longitude": -84.355416
},
{
  "trip_id": 4,
  "latitude": 33.765323,
  "longitude": -84.355404
},
{
  "trip_id": 4,
  "latitude": 33.765433,
  "longitude": -84.355425
},
{
  "trip_id": 4,
  "latitude": 33.765488,
  "longitude": -84.355429
},
{
  "trip_id": 4,
  "latitude": 33.765544,
  "longitude": -84.355442
},
{
  "trip_id": 4,
  "latitude": 33.765653,
  "longitude": -84.355442
},
{
  "trip_id": 4,
  "latitude": 33.765712,
  "longitude": -84.35544
},
{
  "trip_id": 4,
  "latitude": 33.76583,
  "longitude": -84.355422
},
{
  "trip_id": 4,
  "latitude": 33.765885,
  "longitude": -84.355431
},
{
  "trip_id": 4,
  "latitude": 33.766009,
  "longitude": -84.355419
},
{
  "trip_id": 4,
  "latitude": 33.766122,
  "longitude": -84.355371
},
{
  "trip_id": 4,
  "latitude": 33.76618,
  "longitude": -84.355339
},
{
  "trip_id": 4,
  "latitude": 33.766234,
  "longitude": -84.355295
},
{
  "trip_id": 4,
  "latitude": 33.766336,
  "longitude": -84.355207
},
{
  "trip_id": 4,
  "latitude": 33.766388,
  "longitude": -84.355173
},
{
  "trip_id": 4,
  "latitude": 33.766473,
  "longitude": -84.355095
},
{
  "trip_id": 4,
  "latitude": 33.766528,
  "longitude": -84.355047
},
{
  "trip_id": 4,
  "latitude": 33.766604,
  "longitude": -84.354954
},
{
  "trip_id": 4,
  "latitude": 33.766687,
  "longitude": -84.354853
},
{
  "trip_id": 4,
  "latitude": 33.766767,
  "longitude": -84.354771
},
{
  "trip_id": 4,
  "latitude": 33.766869,
  "longitude": -84.354677
},
{
  "trip_id": 4,
  "latitude": 33.766936,
  "longitude": -84.354613
},
{
  "trip_id": 4,
  "latitude": 33.766991,
  "longitude": -84.354579
},
{
  "trip_id": 4,
  "latitude": 33.767084,
  "longitude": -84.354514
},
{
  "trip_id": 4,
  "latitude": 33.767182,
  "longitude": -84.354442
},
{
  "trip_id": 4,
  "latitude": 33.767262,
  "longitude": -84.354366
},
{
  "trip_id": 4,
  "latitude": 33.767367,
  "longitude": -84.354289
},
{
  "trip_id": 4,
  "latitude": 33.767482,
  "longitude": -84.354217
},
{
  "trip_id": 4,
  "latitude": 33.767545,
  "longitude": -84.354181
},
{
  "trip_id": 4,
  "latitude": 33.76766,
  "longitude": -84.354112
},
{
  "trip_id": 4,
  "latitude": 33.76772,
  "longitude": -84.354087
},
{
  "trip_id": 4,
  "latitude": 33.767835,
  "longitude": -84.354004
},
{
  "trip_id": 4,
  "latitude": 33.767991,
  "longitude": -84.3539
},
{
  "trip_id": 4,
  "latitude": 33.768059,
  "longitude": -84.353837
},
{
  "trip_id": 4,
  "latitude": 33.768182,
  "longitude": -84.353713
},
{
  "trip_id": 4,
  "latitude": 33.768281,
  "longitude": -84.35356
},
{
  "trip_id": 4,
  "latitude": 33.768328,
  "longitude": -84.353482
},
{
  "trip_id": 4,
  "latitude": 33.768404,
  "longitude": -84.353296
},
{
  "trip_id": 4,
  "latitude": 33.76847,
  "longitude": -84.353122
},
{
  "trip_id": 4,
  "latitude": 33.768498,
  "longitude": -84.353047
},
{
  "trip_id": 4,
  "latitude": 33.768568,
  "longitude": -84.352919
},
{
  "trip_id": 4,
  "latitude": 33.768636,
  "longitude": -84.352876
},
{
  "trip_id": 4,
  "latitude": 33.768773,
  "longitude": -84.352781
},
{
  "trip_id": 4,
  "latitude": 33.768828,
  "longitude": -84.352747
},
{
  "trip_id": 4,
  "latitude": 33.768886,
  "longitude": -84.352686
},
{
  "trip_id": 4,
  "latitude": 33.768927,
  "longitude": -84.352649
},
{
  "trip_id": 4,
  "latitude": 33.768935,
  "longitude": -84.352654
},
{
  "trip_id": 4,
  "latitude": 33.76893,
  "longitude": -84.352653
},
{
  "trip_id": 4,
  "latitude": 33.768927,
  "longitude": -84.352654
},
{
  "trip_id": 4,
  "latitude": 33.768924,
  "longitude": -84.352653
},
{
  "trip_id": 4,
  "latitude": 33.768923,
  "longitude": -84.352647
},
{
  "trip_id": 4,
  "latitude": 33.768921,
  "longitude": -84.352646
},
{
  "trip_id": 4,
  "latitude": 33.768917,
  "longitude": -84.352644
},
{
  "trip_id": 4,
  "latitude": 33.768916,
  "longitude": -84.352644
},
{
  "trip_id": 4,
  "latitude": 33.768917,
  "longitude": -84.352644
},
{
  "trip_id": 4,
  "latitude": 33.768918,
  "longitude": -84.352643
},
{
  "trip_id": 4,
  "latitude": 33.768919,
  "longitude": -84.352643
},
{
  "trip_id": 4,
  "latitude": 33.76892,
  "longitude": -84.352643
},
{
  "trip_id": 4,
  "latitude": 33.76892,
  "longitude": -84.352644
},
{
  "trip_id": 4,
  "latitude": 33.76892,
  "longitude": -84.352643
},
{
  "trip_id": 4,
  "latitude": 33.768921,
  "longitude": -84.352643
},
{
  "trip_id": 4,
  "latitude": 33.768923,
  "longitude": -84.352637
},
{
  "trip_id": 4,
  "latitude": 33.768921,
  "longitude": -84.352634
},
{
  "trip_id": 4,
  "latitude": 33.768928,
  "longitude": -84.352616
},
{
  "trip_id": 4,
  "latitude": 33.768959,
  "longitude": -84.35251
},
{
  "trip_id": 4,
  "latitude": 33.768973,
  "longitude": -84.352433
},
{
  "trip_id": 4,
  "latitude": 33.769006,
  "longitude": -84.352292
},
{
  "trip_id": 4,
  "latitude": 33.769009,
  "longitude": -84.352214
},
{
  "trip_id": 4,
  "latitude": 33.769045,
  "longitude": -84.35205
},
{
  "trip_id": 4,
  "latitude": 33.769077,
  "longitude": -84.351965
},
{
  "trip_id": 4,
  "latitude": 33.769122,
  "longitude": -84.3518
},
{
  "trip_id": 4,
  "latitude": 33.769177,
  "longitude": -84.35163
},
{
  "trip_id": 4,
  "latitude": 33.769206,
  "longitude": -84.351534
},
{
  "trip_id": 4,
  "latitude": 33.769282,
  "longitude": -84.351344
},
{
  "trip_id": 4,
  "latitude": 33.769324,
  "longitude": -84.351253
},
{
  "trip_id": 4,
  "latitude": 33.769453,
  "longitude": -84.351079
},
{
  "trip_id": 4,
  "latitude": 33.769534,
  "longitude": -84.350986
},
{
  "trip_id": 4,
  "latitude": 33.769608,
  "longitude": -84.350897
},
{
  "trip_id": 4,
  "latitude": 33.769726,
  "longitude": -84.350687
},
{
  "trip_id": 4,
  "latitude": 33.769747,
  "longitude": -84.350419
},
{
  "trip_id": 4,
  "latitude": 33.769778,
  "longitude": -84.35028
},
{
  "trip_id": 4,
  "latitude": 33.769816,
  "longitude": -84.350004
},
{
  "trip_id": 4,
  "latitude": 33.769841,
  "longitude": -84.349735
},
{
  "trip_id": 4,
  "latitude": 33.769847,
  "longitude": -84.349611
},
{
  "trip_id": 4,
  "latitude": 33.76985,
  "longitude": -84.349383
},
{
  "trip_id": 4,
  "latitude": 33.769854,
  "longitude": -84.349283
},
{
  "trip_id": 4,
  "latitude": 33.769876,
  "longitude": -84.349243
},
{
  "trip_id": 4,
  "latitude": 33.769933,
  "longitude": -84.349207
},
{
  "trip_id": 4,
  "latitude": 33.769916,
  "longitude": -84.349189
},
{
  "trip_id": 4,
  "latitude": 33.769897,
  "longitude": -84.349185
},
{
  "trip_id": 4,
  "latitude": 33.769903,
  "longitude": -84.349185
},
{
  "trip_id": 4,
  "latitude": 33.7699,
  "longitude": -84.349187
},
{
  "trip_id": 4,
  "latitude": 33.769907,
  "longitude": -84.349185
},
{
  "trip_id": 4,
  "latitude": 33.769909,
  "longitude": -84.34918
},
{
  "trip_id": 4,
  "latitude": 33.769903,
  "longitude": -84.349174
},
{
  "trip_id": 4,
  "latitude": 33.769902,
  "longitude": -84.349172
},
{
  "trip_id": 4,
  "latitude": 33.769903,
  "longitude": -84.349163
},
{
  "trip_id": 4,
  "latitude": 33.769912,
  "longitude": -84.349028
},
{
  "trip_id": 4,
  "latitude": 33.769944,
  "longitude": -84.34889
},
{
  "trip_id": 4,
  "latitude": 33.769968,
  "longitude": -84.348829
},
{
  "trip_id": 4,
  "latitude": 33.770062,
  "longitude": -84.348777
},
{
  "trip_id": 4,
  "latitude": 33.770118,
  "longitude": -84.348779
},
{
  "trip_id": 4,
  "latitude": 33.770202,
  "longitude": -84.348792
},
{
  "trip_id": 4,
  "latitude": 33.770325,
  "longitude": -84.348719
},
{
  "trip_id": 4,
  "latitude": 33.770423,
  "longitude": -84.348572
},
{
  "trip_id": 4,
  "latitude": 33.770451,
  "longitude": -84.348484
},
{
  "trip_id": 4,
  "latitude": 33.770504,
  "longitude": -84.348312
},
{
  "trip_id": 4,
  "latitude": 33.770517,
  "longitude": -84.348218
},
{
  "trip_id": 4,
  "latitude": 33.770566,
  "longitude": -84.348133
},
{
  "trip_id": 4,
  "latitude": 33.77068,
  "longitude": -84.34798
},
{
  "trip_id": 4,
  "latitude": 33.770752,
  "longitude": -84.347904
},
{
  "trip_id": 4,
  "latitude": 33.770851,
  "longitude": -84.347716
},
{
  "trip_id": 4,
  "latitude": 33.770895,
  "longitude": -84.347494
},
{
  "trip_id": 4,
  "latitude": 33.770913,
  "longitude": -84.347394
},
{
  "trip_id": 4,
  "latitude": 33.770808,
  "longitude": -84.347268
},
{
  "trip_id": 4,
  "latitude": 33.770668,
  "longitude": -84.347094
},
{
  "trip_id": 4,
  "latitude": 33.770543,
  "longitude": -84.346917
},
{
  "trip_id": 4,
  "latitude": 33.770515,
  "longitude": -84.346814
},
{
  "trip_id": 4,
  "latitude": 33.770542,
  "longitude": -84.346595
},
{
  "trip_id": 4,
  "latitude": 33.770536,
  "longitude": -84.346397
},
{
  "trip_id": 4,
  "latitude": 33.770501,
  "longitude": -84.346305
},
{
  "trip_id": 4,
  "latitude": 33.770332,
  "longitude": -84.346204
},
{
  "trip_id": 4,
  "latitude": 33.770271,
  "longitude": -84.346158
},
{
  "trip_id": 4,
  "latitude": 33.770176,
  "longitude": -84.345994
},
{
  "trip_id": 4,
  "latitude": 33.770118,
  "longitude": -84.345791
},
{
  "trip_id": 4,
  "latitude": 33.770183,
  "longitude": -84.345606
},
{
  "trip_id": 4,
  "latitude": 33.77021,
  "longitude": -84.34552
},
{
  "trip_id": 4,
  "latitude": 33.770308,
  "longitude": -84.345381
},
{
  "trip_id": 4,
  "latitude": 33.77044,
  "longitude": -84.345276
},
{
  "trip_id": 4,
  "latitude": 33.770521,
  "longitude": -84.345151
},
{
  "trip_id": 4,
  "latitude": 33.770547,
  "longitude": -84.345062
},
{
  "trip_id": 4,
  "latitude": 33.770576,
  "longitude": -84.344888
},
{
  "trip_id": 4,
  "latitude": 33.770564,
  "longitude": -84.344697
},
{
  "trip_id": 4,
  "latitude": 33.770571,
  "longitude": -84.344504
},
{
  "trip_id": 4,
  "latitude": 33.770634,
  "longitude": -84.344333
},
{
  "trip_id": 4,
  "latitude": 33.77069,
  "longitude": -84.344249
},
{
  "trip_id": 4,
  "latitude": 33.770844,
  "longitude": -84.344124
},
{
  "trip_id": 4,
  "latitude": 33.770967,
  "longitude": -84.343981
},
{
  "trip_id": 4,
  "latitude": 33.77093,
  "longitude": -84.343754
},
{
  "trip_id": 4,
  "latitude": 33.770893,
  "longitude": -84.34366
},
{
  "trip_id": 4,
  "latitude": 33.770718,
  "longitude": -84.343565
},
{
  "trip_id": 4,
  "latitude": 33.770657,
  "longitude": -84.343499
},
{
  "trip_id": 4,
  "latitude": 33.770572,
  "longitude": -84.343323
},
{
  "trip_id": 4,
  "latitude": 33.770592,
  "longitude": -84.343289
},
{
  "trip_id": 4,
  "latitude": 33.770741,
  "longitude": -84.34323
},
{
  "trip_id": 4,
  "latitude": 33.770915,
  "longitude": -84.34317
},
{
  "trip_id": 4,
  "latitude": 33.771121,
  "longitude": -84.343191
},
{
  "trip_id": 4,
  "latitude": 33.771168,
  "longitude": -84.343187
},
{
  "trip_id": 4,
  "latitude": 33.771203,
  "longitude": -84.343091
},
{
  "trip_id": 4,
  "latitude": 33.771248,
  "longitude": -84.34287
},
{
  "trip_id": 4,
  "latitude": 33.771183,
  "longitude": -84.342696
},
{
  "trip_id": 4,
  "latitude": 33.771181,
  "longitude": -84.342633
},
{
  "trip_id": 4,
  "latitude": 33.771156,
  "longitude": -84.342633
},
{
  "trip_id": 4,
  "latitude": 33.77118,
  "longitude": -84.342635
},
{
  "trip_id": 4,
  "latitude": 33.771195,
  "longitude": -84.342612
},
{
  "trip_id": 4,
  "latitude": 33.771231,
  "longitude": -84.342496
},
{
  "trip_id": 4,
  "latitude": 33.771228,
  "longitude": -84.342357
},
{
  "trip_id": 4,
  "latitude": 33.771233,
  "longitude": -84.342294
},
{
  "trip_id": 4,
  "latitude": 33.771233,
  "longitude": -84.342145
},
{
  "trip_id": 4,
  "latitude": 33.771242,
  "longitude": -84.342013
},
{
  "trip_id": 4,
  "latitude": 33.771201,
  "longitude": -84.341877
},
{
  "trip_id": 4,
  "latitude": 33.771223,
  "longitude": -84.341781
},
{
  "trip_id": 4,
  "latitude": 33.771237,
  "longitude": -84.341766
},
{
  "trip_id": 4,
  "latitude": 33.771246,
  "longitude": -84.341744
},
{
  "trip_id": 4,
  "latitude": 33.771243,
  "longitude": -84.34171
},
{
  "trip_id": 4,
  "latitude": 33.771175,
  "longitude": -84.34167
},
{
  "trip_id": 4,
  "latitude": 33.771086,
  "longitude": -84.341681
},
{
  "trip_id": 4,
  "latitude": 33.771042,
  "longitude": -84.34167
},
{
  "trip_id": 4,
  "latitude": 33.770938,
  "longitude": -84.34168
},
{
  "trip_id": 4,
  "latitude": 33.770835,
  "longitude": -84.341687
},
{
  "trip_id": 4,
  "latitude": 33.770728,
  "longitude": -84.341677
},
{
  "trip_id": 4,
  "latitude": 33.770626,
  "longitude": -84.341643
},
{
  "trip_id": 4,
  "latitude": 33.770524,
  "longitude": -84.341633
},
{
  "trip_id": 4,
  "latitude": 33.770473,
  "longitude": -84.341644
},
{
  "trip_id": 4,
  "latitude": 33.770418,
  "longitude": -84.341653
},
{
  "trip_id": 4,
  "latitude": 33.770369,
  "longitude": -84.34165
},
{
  "trip_id": 4,
  "latitude": 33.770273,
  "longitude": -84.341655
},
{
  "trip_id": 4,
  "latitude": 33.770221,
  "longitude": -84.34165
},
{
  "trip_id": 4,
  "latitude": 33.770166,
  "longitude": -84.341642
},
{
  "trip_id": 4,
  "latitude": 33.770058,
  "longitude": -84.341641
},
{
  "trip_id": 4,
  "latitude": 33.769995,
  "longitude": -84.341632
},
{
  "trip_id": 4,
  "latitude": 33.769855,
  "longitude": -84.341663
},
{
  "trip_id": 4,
  "latitude": 33.769808,
  "longitude": -84.341697
},
{
  "trip_id": 4,
  "latitude": 33.769777,
  "longitude": -84.341678
},
{
  "trip_id": 4,
  "latitude": 33.769696,
  "longitude": -84.341662
},
{
  "trip_id": 4,
  "latitude": 33.769569,
  "longitude": -84.341659
},
{
  "trip_id": 4,
  "latitude": 33.769462,
  "longitude": -84.341689
},
{
  "trip_id": 4,
  "latitude": 33.769366,
  "longitude": -84.341671
},
{
  "trip_id": 4,
  "latitude": 33.769259,
  "longitude": -84.341629
},
{
  "trip_id": 4,
  "latitude": 33.76915,
  "longitude": -84.341596
},
{
  "trip_id": 4,
  "latitude": 33.769037,
  "longitude": -84.341594
},
{
  "trip_id": 4,
  "latitude": 33.768936,
  "longitude": -84.341605
},
{
  "trip_id": 4,
  "latitude": 33.768889,
  "longitude": -84.341588
},
{
  "trip_id": 4,
  "latitude": 33.768789,
  "longitude": -84.341574
},
{
  "trip_id": 4,
  "latitude": 33.768702,
  "longitude": -84.341584
},
{
  "trip_id": 4,
  "latitude": 33.768671,
  "longitude": -84.341568
},
{
  "trip_id": 4,
  "latitude": 33.768658,
  "longitude": -84.341594
},
{
  "trip_id": 4,
  "latitude": 33.768643,
  "longitude": -84.341587
},
{
  "trip_id": 4,
  "latitude": 33.768599,
  "longitude": -84.341586
},
{
  "trip_id": 4,
  "latitude": 33.768585,
  "longitude": -84.341519
},
{
  "trip_id": 4,
  "latitude": 33.76859,
  "longitude": -84.341481
},
{
  "trip_id": 4,
  "latitude": 33.768594,
  "longitude": -84.341411
},
{
  "trip_id": 4,
  "latitude": 33.768588,
  "longitude": -84.341322
},
{
  "trip_id": 4,
  "latitude": 33.768601,
  "longitude": -84.341223
},
{
  "trip_id": 4,
  "latitude": 33.768631,
  "longitude": -84.341168
},
{
  "trip_id": 4,
  "latitude": 33.768645,
  "longitude": -84.341113
},
{
  "trip_id": 4,
  "latitude": 33.768651,
  "longitude": -84.341063
},
{
  "trip_id": 4,
  "latitude": 33.768644,
  "longitude": -84.340954
},
{
  "trip_id": 4,
  "latitude": 33.768663,
  "longitude": -84.340902
},
{
  "trip_id": 4,
  "latitude": 33.76862,
  "longitude": -84.340774
},
{
  "trip_id": 4,
  "latitude": 33.768662,
  "longitude": -84.340658
},
{
  "trip_id": 4,
  "latitude": 33.768672,
  "longitude": -84.340531
},
{
  "trip_id": 4,
  "latitude": 33.768678,
  "longitude": -84.340462
},
{
  "trip_id": 4,
  "latitude": 33.768657,
  "longitude": -84.340331
},
{
  "trip_id": 4,
  "latitude": 33.768645,
  "longitude": -84.340195
},
{
  "trip_id": 4,
  "latitude": 33.768622,
  "longitude": -84.340066
},
{
  "trip_id": 4,
  "latitude": 33.768566,
  "longitude": -84.339932
},
{
  "trip_id": 4,
  "latitude": 33.768555,
  "longitude": -84.339854
},
{
  "trip_id": 4,
  "latitude": 33.768557,
  "longitude": -84.339711
},
{
  "trip_id": 4,
  "latitude": 33.76857,
  "longitude": -84.339576
},
{
  "trip_id": 4,
  "latitude": 33.768592,
  "longitude": -84.33953
},
{
  "trip_id": 4,
  "latitude": 33.768588,
  "longitude": -84.339456
},
{
  "trip_id": 4,
  "latitude": 33.768523,
  "longitude": -84.339392
},
{
  "trip_id": 4,
  "latitude": 33.76842,
  "longitude": -84.339359
},
{
  "trip_id": 4,
  "latitude": 33.768361,
  "longitude": -84.339368
},
{
  "trip_id": 4,
  "latitude": 33.768316,
  "longitude": -84.339364
},
{
  "trip_id": 4,
  "latitude": 33.768259,
  "longitude": -84.339362
},
{
  "trip_id": 4,
  "latitude": 33.768144,
  "longitude": -84.339377
},
{
  "trip_id": 4,
  "latitude": 33.768022,
  "longitude": -84.339387
},
{
  "trip_id": 4,
  "latitude": 33.767888,
  "longitude": -84.339401
},
{
  "trip_id": 4,
  "latitude": 33.767842,
  "longitude": -84.3394
},
{
  "trip_id": 4,
  "latitude": 33.767708,
  "longitude": -84.339373
},
{
  "trip_id": 4,
  "latitude": 33.767581,
  "longitude": -84.339387
},
{
  "trip_id": 4,
  "latitude": 33.76744,
  "longitude": -84.339376
},
{
  "trip_id": 4,
  "latitude": 33.767323,
  "longitude": -84.339366
},
{
  "trip_id": 4,
  "latitude": 33.767206,
  "longitude": -84.33938
},
{
  "trip_id": 4,
  "latitude": 33.767137,
  "longitude": -84.339361
},
{
  "trip_id": 4,
  "latitude": 33.767099,
  "longitude": -84.339366
},
{
  "trip_id": 4,
  "latitude": 33.766979,
  "longitude": -84.339334
},
{
  "trip_id": 4,
  "latitude": 33.766922,
  "longitude": -84.339323
},
{
  "trip_id": 4,
  "latitude": 33.766798,
  "longitude": -84.339316
},
{
  "trip_id": 4,
  "latitude": 33.766672,
  "longitude": -84.339316
},
{
  "trip_id": 4,
  "latitude": 33.766612,
  "longitude": -84.339344
},
{
  "trip_id": 4,
  "latitude": 33.766488,
  "longitude": -84.33936
},
{
  "trip_id": 4,
  "latitude": 33.766354,
  "longitude": -84.339364
},
{
  "trip_id": 4,
  "latitude": 33.766282,
  "longitude": -84.339355
},
{
  "trip_id": 4,
  "latitude": 33.766139,
  "longitude": -84.33936
},
{
  "trip_id": 4,
  "latitude": 33.766016,
  "longitude": -84.339383
},
{
  "trip_id": 4,
  "latitude": 33.765879,
  "longitude": -84.339373
},
{
  "trip_id": 4,
  "latitude": 33.765806,
  "longitude": -84.339382
},
{
  "trip_id": 4,
  "latitude": 33.765695,
  "longitude": -84.339393
},
{
  "trip_id": 4,
  "latitude": 33.765617,
  "longitude": -84.339379
},
{
  "trip_id": 4,
  "latitude": 33.76557,
  "longitude": -84.339376
},
{
  "trip_id": 4,
  "latitude": 33.765553,
  "longitude": -84.339376
},
{
  "trip_id": 4,
  "latitude": 33.765514,
  "longitude": -84.339377
},
{
  "trip_id": 4,
  "latitude": 33.765434,
  "longitude": -84.339394
},
{
  "trip_id": 4,
  "latitude": 33.765331,
  "longitude": -84.339382
},
{
  "trip_id": 4,
  "latitude": 33.765274,
  "longitude": -84.339388
},
{
  "trip_id": 4,
  "latitude": 33.765191,
  "longitude": -84.339367
},
{
  "trip_id": 4,
  "latitude": 33.765096,
  "longitude": -84.339372
},
{
  "trip_id": 4,
  "latitude": 33.764998,
  "longitude": -84.33939
},
{
  "trip_id": 4,
  "latitude": 33.764947,
  "longitude": -84.339364
},
{
  "trip_id": 4,
  "latitude": 33.76493,
  "longitude": -84.339368
},
{
  "trip_id": 4,
  "latitude": 33.764924,
  "longitude": -84.339375
},
{
  "trip_id": 4,
  "latitude": 33.764924,
  "longitude": -84.33937
},
{
  "trip_id": 4,
  "latitude": 33.764921,
  "longitude": -84.33935
},
{
  "trip_id": 4,
  "latitude": 33.76492,
  "longitude": -84.339349
},
{
  "trip_id": 4,
  "latitude": 33.764911,
  "longitude": -84.339365
},
{
  "trip_id": 4,
  "latitude": 33.764904,
  "longitude": -84.339378
},
{
  "trip_id": 4,
  "latitude": 33.764903,
  "longitude": -84.339382
},
{
  "trip_id": 4,
  "latitude": 33.764902,
  "longitude": -84.339384
},
{
  "trip_id": 4,
  "latitude": 33.764902,
  "longitude": -84.339385
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.339385
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.339384
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.339383
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.339382
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.339381
},
{
  "trip_id": 4,
  "latitude": 33.764896,
  "longitude": -84.339386
},
{
  "trip_id": 4,
  "latitude": 33.76484,
  "longitude": -84.339388
},
{
  "trip_id": 4,
  "latitude": 33.764806,
  "longitude": -84.339258
},
{
  "trip_id": 4,
  "latitude": 33.764814,
  "longitude": -84.339165
},
{
  "trip_id": 4,
  "latitude": 33.764848,
  "longitude": -84.338986
},
{
  "trip_id": 4,
  "latitude": 33.764834,
  "longitude": -84.338902
},
{
  "trip_id": 4,
  "latitude": 33.764833,
  "longitude": -84.338809
},
{
  "trip_id": 4,
  "latitude": 33.764831,
  "longitude": -84.338701
},
{
  "trip_id": 4,
  "latitude": 33.764808,
  "longitude": -84.338482
},
{
  "trip_id": 4,
  "latitude": 33.764809,
  "longitude": -84.33837
},
{
  "trip_id": 4,
  "latitude": 33.764816,
  "longitude": -84.338251
},
{
  "trip_id": 4,
  "latitude": 33.764793,
  "longitude": -84.338025
},
{
  "trip_id": 4,
  "latitude": 33.764845,
  "longitude": -84.337822
},
{
  "trip_id": 4,
  "latitude": 33.764842,
  "longitude": -84.337707
},
{
  "trip_id": 4,
  "latitude": 33.764849,
  "longitude": -84.33746
},
{
  "trip_id": 4,
  "latitude": 33.764859,
  "longitude": -84.337192
},
{
  "trip_id": 4,
  "latitude": 33.764865,
  "longitude": -84.336958
},
{
  "trip_id": 4,
  "latitude": 33.764861,
  "longitude": -84.336701
},
{
  "trip_id": 4,
  "latitude": 33.764848,
  "longitude": -84.336568
},
{
  "trip_id": 4,
  "latitude": 33.764859,
  "longitude": -84.336331
},
{
  "trip_id": 4,
  "latitude": 33.764884,
  "longitude": -84.336201
},
{
  "trip_id": 4,
  "latitude": 33.764879,
  "longitude": -84.336069
},
{
  "trip_id": 4,
  "latitude": 33.764881,
  "longitude": -84.335832
},
{
  "trip_id": 4,
  "latitude": 33.764849,
  "longitude": -84.335727
},
{
  "trip_id": 4,
  "latitude": 33.764837,
  "longitude": -84.335464
},
{
  "trip_id": 4,
  "latitude": 33.764839,
  "longitude": -84.335336
},
{
  "trip_id": 4,
  "latitude": 33.764826,
  "longitude": -84.335111
},
{
  "trip_id": 4,
  "latitude": 33.764842,
  "longitude": -84.334994
},
{
  "trip_id": 4,
  "latitude": 33.764887,
  "longitude": -84.334802
},
{
  "trip_id": 4,
  "latitude": 33.764904,
  "longitude": -84.334717
},
{
  "trip_id": 4,
  "latitude": 33.764829,
  "longitude": -84.334603
},
{
  "trip_id": 4,
  "latitude": 33.764877,
  "longitude": -84.334579
},
{
  "trip_id": 4,
  "latitude": 33.764869,
  "longitude": -84.334559
},
{
  "trip_id": 4,
  "latitude": 33.764897,
  "longitude": -84.334556
},
{
  "trip_id": 4,
  "latitude": 33.764903,
  "longitude": -84.334536
},
{
  "trip_id": 4,
  "latitude": 33.764894,
  "longitude": -84.334529
},
{
  "trip_id": 4,
  "latitude": 33.764892,
  "longitude": -84.334529
},
{
  "trip_id": 4,
  "latitude": 33.764896,
  "longitude": -84.334534
},
{
  "trip_id": 4,
  "latitude": 33.764889,
  "longitude": -84.334533
},
{
  "trip_id": 4,
  "latitude": 33.764886,
  "longitude": -84.334532
},
{
  "trip_id": 4,
  "latitude": 33.764889,
  "longitude": -84.334529
},
{
  "trip_id": 4,
  "latitude": 33.764893,
  "longitude": -84.334527
},
{
  "trip_id": 4,
  "latitude": 33.764895,
  "longitude": -84.334524
},
{
  "trip_id": 4,
  "latitude": 33.764897,
  "longitude": -84.334506
},
{
  "trip_id": 4,
  "latitude": 33.764898,
  "longitude": -84.334452
},
{
  "trip_id": 4,
  "latitude": 33.764894,
  "longitude": -84.33441
},
{
  "trip_id": 4,
  "latitude": 33.76489,
  "longitude": -84.334363
},
{
  "trip_id": 4,
  "latitude": 33.764876,
  "longitude": -84.334246
},
{
  "trip_id": 4,
  "latitude": 33.764847,
  "longitude": -84.334161
},
{
  "trip_id": 4,
  "latitude": 33.764894,
  "longitude": -84.334037
},
{
  "trip_id": 4,
  "latitude": 33.7649,
  "longitude": -84.333972
},
{
  "trip_id": 4,
  "latitude": 33.764895,
  "longitude": -84.333842
},
{
  "trip_id": 4,
  "latitude": 33.764904,
  "longitude": -84.333778
},
{
  "trip_id": 4,
  "latitude": 33.764905,
  "longitude": -84.33372
},
{
  "trip_id": 4,
  "latitude": 33.764883,
  "longitude": -84.33361
},
{
  "trip_id": 4,
  "latitude": 33.76487,
  "longitude": -84.333538
},
{
  "trip_id": 4,
  "latitude": 33.764881,
  "longitude": -84.333506
},
{
  "trip_id": 4,
  "latitude": 33.764921,
  "longitude": -84.333508
},
{
  "trip_id": 4,
  "latitude": 33.764913,
  "longitude": -84.333501
},
{
  "trip_id": 4,
  "latitude": 33.764907,
  "longitude": -84.333496
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.333494
},
{
  "trip_id": 4,
  "latitude": 33.764905,
  "longitude": -84.333492
},
{
  "trip_id": 4,
  "latitude": 33.764904,
  "longitude": -84.333492
},
{
  "trip_id": 4,
  "latitude": 33.764909,
  "longitude": -84.333491
},
{
  "trip_id": 4,
  "latitude": 33.764916,
  "longitude": -84.33349
},
{
  "trip_id": 4,
  "latitude": 33.764917,
  "longitude": -84.333491
},
{
  "trip_id": 4,
  "latitude": 33.764918,
  "longitude": -84.33349
},
{
  "trip_id": 4,
  "latitude": 33.764919,
  "longitude": -84.33349
},
{
  "trip_id": 4,
  "latitude": 33.764918,
  "longitude": -84.33349
},
{
  "trip_id": 4,
  "latitude": 33.764919,
  "longitude": -84.33349
},
{
  "trip_id": 4,
  "latitude": 33.764918,
  "longitude": -84.33349
},
{
  "trip_id": 4,
  "latitude": 33.764918,
  "longitude": -84.333488
},
{
  "trip_id": 4,
  "latitude": 33.764912,
  "longitude": -84.333485
},
{
  "trip_id": 4,
  "latitude": 33.764917,
  "longitude": -84.333476
},
{
  "trip_id": 4,
  "latitude": 33.764921,
  "longitude": -84.333456
},
{
  "trip_id": 4,
  "latitude": 33.764929,
  "longitude": -84.333382
},
{
  "trip_id": 4,
  "latitude": 33.764913,
  "longitude": -84.333269
},
{
  "trip_id": 4,
  "latitude": 33.764909,
  "longitude": -84.333135
},
{
  "trip_id": 4,
  "latitude": 33.764911,
  "longitude": -84.332993
},
{
  "trip_id": 4,
  "latitude": 33.764895,
  "longitude": -84.332834
},
{
  "trip_id": 4,
  "latitude": 33.764892,
  "longitude": -84.332748
},
{
  "trip_id": 4,
  "latitude": 33.764879,
  "longitude": -84.33259
},
{
  "trip_id": 4,
  "latitude": 33.76488,
  "longitude": -84.332418
},
{
  "trip_id": 4,
  "latitude": 33.764888,
  "longitude": -84.332261
},
{
  "trip_id": 4,
  "latitude": 33.764901,
  "longitude": -84.332106
},
{
  "trip_id": 4,
  "latitude": 33.764832,
  "longitude": -84.33192
},
{
  "trip_id": 4,
  "latitude": 33.764845,
  "longitude": -84.331839
},
{
  "trip_id": 4,
  "latitude": 33.764845,
  "longitude": -84.331762
},
{
  "trip_id": 4,
  "latitude": 33.764825,
  "longitude": -84.331608
},
{
  "trip_id": 4,
  "latitude": 33.764749,
  "longitude": -84.331447
},
{
  "trip_id": 4,
  "latitude": 33.764827,
  "longitude": -84.331322
},
{
  "trip_id": 4,
  "latitude": 33.76483,
  "longitude": -84.331181
},
{
  "trip_id": 4,
  "latitude": 33.764826,
  "longitude": -84.331108
},
{
  "trip_id": 4,
  "latitude": 33.764824,
  "longitude": -84.330958
},
{
  "trip_id": 4,
  "latitude": 33.764852,
  "longitude": -84.330822
},
{
  "trip_id": 4,
  "latitude": 33.764868,
  "longitude": -84.330763
},
{
  "trip_id": 4,
  "latitude": 33.764855,
  "longitude": -84.330693
},
{
  "trip_id": 4,
  "latitude": 33.764863,
  "longitude": -84.330636
},
{
  "trip_id": 4,
  "latitude": 33.764857,
  "longitude": -84.330506
},
{
  "trip_id": 4,
  "latitude": 33.764854,
  "longitude": -84.330426
},
{
  "trip_id": 4,
  "latitude": 33.764859,
  "longitude": -84.330353
},
{
  "trip_id": 4,
  "latitude": 33.764896,
  "longitude": -84.330208
},
{
  "trip_id": 4,
  "latitude": 33.764909,
  "longitude": -84.330044
},
{
  "trip_id": 4,
  "latitude": 33.76486,
  "longitude": -84.32994
},
{
  "trip_id": 4,
  "latitude": 33.764845,
  "longitude": -84.329841
},
{
  "trip_id": 4,
  "latitude": 33.764848,
  "longitude": -84.329737
},
{
  "trip_id": 4,
  "latitude": 33.764843,
  "longitude": -84.329531
},
{
  "trip_id": 4,
  "latitude": 33.764842,
  "longitude": -84.329313
},
{
  "trip_id": 4,
  "latitude": 33.764858,
  "longitude": -84.329085
},
{
  "trip_id": 4,
  "latitude": 33.764908,
  "longitude": -84.328855
},
{
  "trip_id": 4,
  "latitude": 33.76496,
  "longitude": -84.328596
},
{
  "trip_id": 4,
  "latitude": 33.764969,
  "longitude": -84.328479
},
{
  "trip_id": 4,
  "latitude": 33.764867,
  "longitude": -84.328205
},
{
  "trip_id": 4,
  "latitude": 33.764827,
  "longitude": -84.32794
},
{
  "trip_id": 4,
  "latitude": 33.764852,
  "longitude": -84.32767
},
{
  "trip_id": 4,
  "latitude": 33.76481,
  "longitude": -84.327392
},
{
  "trip_id": 4,
  "latitude": 33.764843,
  "longitude": -84.327254
},
{
  "trip_id": 4,
  "latitude": 33.764798,
  "longitude": -84.327094
},
{
  "trip_id": 4,
  "latitude": 33.764885,
  "longitude": -84.326832
},
{
  "trip_id": 4,
  "latitude": 33.764832,
  "longitude": -84.32655
},
{
  "trip_id": 4,
  "latitude": 33.764843,
  "longitude": -84.32628
},
{
  "trip_id": 4,
  "latitude": 33.764855,
  "longitude": -84.326135
},
{
  "trip_id": 4,
  "latitude": 33.764779,
  "longitude": -84.325996
},
{
  "trip_id": 4,
  "latitude": 33.764778,
  "longitude": -84.325751
},
{
  "trip_id": 4,
  "latitude": 33.764757,
  "longitude": -84.325647
},
{
  "trip_id": 4,
  "latitude": 33.76478,
  "longitude": -84.325449
},
{
  "trip_id": 4,
  "latitude": 33.764769,
  "longitude": -84.325229
},
{
  "trip_id": 4,
  "latitude": 33.764723,
  "longitude": -84.325016
},
{
  "trip_id": 4,
  "latitude": 33.764686,
  "longitude": -84.324914
},
{
  "trip_id": 4,
  "latitude": 33.764692,
  "longitude": -84.324713
},
{
  "trip_id": 4,
  "latitude": 33.764672,
  "longitude": -84.324475
},
{
  "trip_id": 4,
  "latitude": 33.764646,
  "longitude": -84.324374
},
{
  "trip_id": 4,
  "latitude": 33.764614,
  "longitude": -84.324153
},
{
  "trip_id": 4,
  "latitude": 33.764545,
  "longitude": -84.324048
},
{
  "trip_id": 4,
  "latitude": 33.764544,
  "longitude": -84.323941
},
{
  "trip_id": 4,
  "latitude": 33.764508,
  "longitude": -84.323713
},
{
  "trip_id": 4,
  "latitude": 33.76452,
  "longitude": -84.323529
},
{
  "trip_id": 4,
  "latitude": 33.764503,
  "longitude": -84.323344
},
{
  "trip_id": 4,
  "latitude": 33.764517,
  "longitude": -84.32326
},
{
  "trip_id": 4,
  "latitude": 33.764532,
  "longitude": -84.323099
},
{
  "trip_id": 4,
  "latitude": 33.764501,
  "longitude": -84.323025
},
{
  "trip_id": 4,
  "latitude": 33.76449,
  "longitude": -84.32294
},
{
  "trip_id": 4,
  "latitude": 33.764463,
  "longitude": -84.322781
},
{
  "trip_id": 4,
  "latitude": 33.764468,
  "longitude": -84.322698
},
{
  "trip_id": 4,
  "latitude": 33.764442,
  "longitude": -84.322514
},
{
  "trip_id": 4,
  "latitude": 33.764458,
  "longitude": -84.322442
},
{
  "trip_id": 4,
  "latitude": 33.764454,
  "longitude": -84.322376
},
{
  "trip_id": 4,
  "latitude": 33.764437,
  "longitude": -84.322249
},
{
  "trip_id": 4,
  "latitude": 33.764417,
  "longitude": -84.32219
},
{
  "trip_id": 4,
  "latitude": 33.764425,
  "longitude": -84.322119
},
{
  "trip_id": 4,
  "latitude": 33.764386,
  "longitude": -84.322002
},
{
  "trip_id": 4,
  "latitude": 33.764365,
  "longitude": -84.321894
},
{
  "trip_id": 4,
  "latitude": 33.764318,
  "longitude": -84.321827
},
{
  "trip_id": 4,
  "latitude": 33.764257,
  "longitude": -84.321772
},
{
  "trip_id": 4,
  "latitude": 33.764177,
  "longitude": -84.321655
},
{
  "trip_id": 4,
  "latitude": 33.764174,
  "longitude": -84.32161
},
{
  "trip_id": 4,
  "latitude": 33.764151,
  "longitude": -84.321562
},
{
  "trip_id": 4,
  "latitude": 33.764101,
  "longitude": -84.321452
},
{
  "trip_id": 4,
  "latitude": 33.764081,
  "longitude": -84.321401
},
{
  "trip_id": 4,
  "latitude": 33.764066,
  "longitude": -84.321291
},
{
  "trip_id": 4,
  "latitude": 33.764033,
  "longitude": -84.321169
},
{
  "trip_id": 4,
  "latitude": 33.76402,
  "longitude": -84.321103
},
{
  "trip_id": 4,
  "latitude": 33.763986,
  "longitude": -84.321
},
{
  "trip_id": 4,
  "latitude": 33.763965,
  "longitude": -84.320931
},
{
  "trip_id": 4,
  "latitude": 33.763959,
  "longitude": -84.320816
},
{
  "trip_id": 4,
  "latitude": 33.763937,
  "longitude": -84.320772
},
{
  "trip_id": 4,
  "latitude": 33.76393,
  "longitude": -84.32072
},
{
  "trip_id": 4,
  "latitude": 33.76391,
  "longitude": -84.320618
},
{
  "trip_id": 4,
  "latitude": 33.763884,
  "longitude": -84.320551
},
{
  "trip_id": 4,
  "latitude": 33.763877,
  "longitude": -84.320503
},
{
  "trip_id": 4,
  "latitude": 33.763832,
  "longitude": -84.320436
},
{
  "trip_id": 4,
  "latitude": 33.763803,
  "longitude": -84.320401
},
{
  "trip_id": 4,
  "latitude": 33.763769,
  "longitude": -84.320357
},
{
  "trip_id": 4,
  "latitude": 33.763743,
  "longitude": -84.320306
},
{
  "trip_id": 4,
  "latitude": 33.763655,
  "longitude": -84.320192
},
{
  "trip_id": 4,
  "latitude": 33.763625,
  "longitude": -84.320155
},
{
  "trip_id": 4,
  "latitude": 33.76356,
  "longitude": -84.320102
},
{
  "trip_id": 4,
  "latitude": 33.763485,
  "longitude": -84.320035
},
{
  "trip_id": 4,
  "latitude": 33.763442,
  "longitude": -84.320009
},
{
  "trip_id": 4,
  "latitude": 33.763401,
  "longitude": -84.319995
},
{
  "trip_id": 4,
  "latitude": 33.763347,
  "longitude": -84.319957
},
{
  "trip_id": 4,
  "latitude": 33.763297,
  "longitude": -84.31991
},
{
  "trip_id": 4,
  "latitude": 33.763231,
  "longitude": -84.319887
},
{
  "trip_id": 4,
  "latitude": 33.763209,
  "longitude": -84.319877
},
{
  "trip_id": 4,
  "latitude": 33.763189,
  "longitude": -84.319857
},
{
  "trip_id": 4,
  "latitude": 33.763177,
  "longitude": -84.319846
},
{
  "trip_id": 4,
  "latitude": 33.763181,
  "longitude": -84.319834
},
{
  "trip_id": 4,
  "latitude": 33.763178,
  "longitude": -84.319834
},
{
  "trip_id": 4,
  "latitude": 33.763176,
  "longitude": -84.319831
},
{
  "trip_id": 4,
  "latitude": 33.763174,
  "longitude": -84.31983
},
{
  "trip_id": 4,
  "latitude": 33.763173,
  "longitude": -84.319828
},
{
  "trip_id": 4,
  "latitude": 33.763173,
  "longitude": -84.319827
},
{
  "trip_id": 4,
  "latitude": 33.763173,
  "longitude": -84.319826
},
{
  "trip_id": 4,
  "latitude": 33.763173,
  "longitude": -84.319827
},
{
  "trip_id": 4,
  "latitude": 33.763174,
  "longitude": -84.319827
},
{
  "trip_id": 4,
  "latitude": 33.763174,
  "longitude": -84.319826
},
{
  "trip_id": 4,
  "latitude": 33.763175,
  "longitude": -84.319826
},
{
  "trip_id": 4,
  "latitude": 33.763176,
  "longitude": -84.319826
},
{
  "trip_id": 4,
  "latitude": 33.763152,
  "longitude": -84.319811
},
{
  "trip_id": 4,
  "latitude": 33.763071,
  "longitude": -84.319772
},
{
  "trip_id": 4,
  "latitude": 33.762984,
  "longitude": -84.319729
},
{
  "trip_id": 4,
  "latitude": 33.762831,
  "longitude": -84.319677
},
{
  "trip_id": 4,
  "latitude": 33.76266,
  "longitude": -84.31963
},
{
  "trip_id": 4,
  "latitude": 33.762565,
  "longitude": -84.31951
},
{
  "trip_id": 4,
  "latitude": 33.76252,
  "longitude": -84.319347
},
{
  "trip_id": 4,
  "latitude": 33.762565,
  "longitude": -84.319279
},
{
  "trip_id": 4,
  "latitude": 33.762613,
  "longitude": -84.319203
},
{
  "trip_id": 4,
  "latitude": 33.762707,
  "longitude": -84.319086
},
{
  "trip_id": 4,
  "latitude": 33.762781,
  "longitude": -84.318965
},
{
  "trip_id": 4,
  "latitude": 33.762831,
  "longitude": -84.318911
},
{
  "trip_id": 4,
  "latitude": 33.762918,
  "longitude": -84.318799
},
{
  "trip_id": 4,
  "latitude": 33.76296,
  "longitude": -84.318737
},
{
  "trip_id": 4,
  "latitude": 33.763001,
  "longitude": -84.318689
},
{
  "trip_id": 4,
  "latitude": 33.763085,
  "longitude": -84.318584
},
{
  "trip_id": 4,
  "latitude": 33.76311,
  "longitude": -84.318519
},
{
  "trip_id": 4,
  "latitude": 33.763156,
  "longitude": -84.318458
},
{
  "trip_id": 4,
  "latitude": 33.76322,
  "longitude": -84.31834
},
{
  "trip_id": 4,
  "latitude": 33.763262,
  "longitude": -84.318277
},
{
  "trip_id": 4,
  "latitude": 33.763328,
  "longitude": -84.31815
},
{
  "trip_id": 4,
  "latitude": 33.76339,
  "longitude": -84.31803
},
{
  "trip_id": 4,
  "latitude": 33.763434,
  "longitude": -84.317972
},
{
  "trip_id": 4,
  "latitude": 33.763495,
  "longitude": -84.317842
},
{
  "trip_id": 4,
  "latitude": 33.763506,
  "longitude": -84.317776
},
{
  "trip_id": 4,
  "latitude": 33.763575,
  "longitude": -84.31764
},
{
  "trip_id": 4,
  "latitude": 33.763623,
  "longitude": -84.317579
},
{
  "trip_id": 4,
  "latitude": 33.763727,
  "longitude": -84.31747
},
{
  "trip_id": 4,
  "latitude": 33.763803,
  "longitude": -84.317327
},
{
  "trip_id": 4,
  "latitude": 33.763883,
  "longitude": -84.317222
},
{
  "trip_id": 4,
  "latitude": 33.763925,
  "longitude": -84.317147
},
{
  "trip_id": 4,
  "latitude": 33.764011,
  "longitude": -84.31701
},
{
  "trip_id": 4,
  "latitude": 33.764091,
  "longitude": -84.316863
},
{
  "trip_id": 4,
  "latitude": 33.764124,
  "longitude": -84.316768
},
{
  "trip_id": 4,
  "latitude": 33.764155,
  "longitude": -84.316691
},
{
  "trip_id": 4,
  "latitude": 33.764216,
  "longitude": -84.316531
},
{
  "trip_id": 4,
  "latitude": 33.764287,
  "longitude": -84.316371
},
{
  "trip_id": 4,
  "latitude": 33.764329,
  "longitude": -84.316302
},
{
  "trip_id": 4,
  "latitude": 33.764359,
  "longitude": -84.316221
},
{
  "trip_id": 4,
  "latitude": 33.764383,
  "longitude": -84.31614
},
{
  "trip_id": 4,
  "latitude": 33.764419,
  "longitude": -84.31597
},
{
  "trip_id": 4,
  "latitude": 33.764429,
  "longitude": -84.315902
},
{
  "trip_id": 4,
  "latitude": 33.764473,
  "longitude": -84.315743
},
{
  "trip_id": 4,
  "latitude": 33.764515,
  "longitude": -84.315586
},
{
  "trip_id": 4,
  "latitude": 33.764566,
  "longitude": -84.315438
},
{
  "trip_id": 4,
  "latitude": 33.764598,
  "longitude": -84.315352
},
{
  "trip_id": 4,
  "latitude": 33.764616,
  "longitude": -84.315191
},
{
  "trip_id": 4,
  "latitude": 33.764646,
  "longitude": -84.315047
},
{
  "trip_id": 4,
  "latitude": 33.764698,
  "longitude": -84.31491
},
{
  "trip_id": 4,
  "latitude": 33.764722,
  "longitude": -84.314769
},
{
  "trip_id": 4,
  "latitude": 33.764752,
  "longitude": -84.314633
},
{
  "trip_id": 4,
  "latitude": 33.764777,
  "longitude": -84.314479
},
{
  "trip_id": 4,
  "latitude": 33.764779,
  "longitude": -84.314403
},
{
  "trip_id": 4,
  "latitude": 33.764787,
  "longitude": -84.314327
},
{
  "trip_id": 4,
  "latitude": 33.764811,
  "longitude": -84.314181
},
{
  "trip_id": 4,
  "latitude": 33.764795,
  "longitude": -84.314111
},
{
  "trip_id": 4,
  "latitude": 33.764801,
  "longitude": -84.313964
},
{
  "trip_id": 4,
  "latitude": 33.764788,
  "longitude": -84.313889
},
{
  "trip_id": 4,
  "latitude": 33.764784,
  "longitude": -84.313816
},
{
  "trip_id": 4,
  "latitude": 33.764793,
  "longitude": -84.313681
},
{
  "trip_id": 4,
  "latitude": 33.764821,
  "longitude": -84.313533
},
{
  "trip_id": 4,
  "latitude": 33.764829,
  "longitude": -84.313464
},
{
  "trip_id": 4,
  "latitude": 33.764843,
  "longitude": -84.313317
},
{
  "trip_id": 4,
  "latitude": 33.764837,
  "longitude": -84.313246
},
{
  "trip_id": 4,
  "latitude": 33.764839,
  "longitude": -84.313107
},
{
  "trip_id": 4,
  "latitude": 33.764852,
  "longitude": -84.312964
},
{
  "trip_id": 4,
  "latitude": 33.764859,
  "longitude": -84.312883
},
{
  "trip_id": 4,
  "latitude": 33.764851,
  "longitude": -84.312735
},
{
  "trip_id": 4,
  "latitude": 33.76485,
  "longitude": -84.312664
},
{
  "trip_id": 4,
  "latitude": 33.764853,
  "longitude": -84.312514
},
{
  "trip_id": 4,
  "latitude": 33.764868,
  "longitude": -84.312385
},
{
  "trip_id": 4,
  "latitude": 33.764874,
  "longitude": -84.312316
},
{
  "trip_id": 4,
  "latitude": 33.764883,
  "longitude": -84.312244
},
{
  "trip_id": 4,
  "latitude": 33.764895,
  "longitude": -84.31217
},
{
  "trip_id": 4,
  "latitude": 33.7649,
  "longitude": -84.312015
},
{
  "trip_id": 4,
  "latitude": 33.764929,
  "longitude": -84.311875
},
{
  "trip_id": 4,
  "latitude": 33.76493,
  "longitude": -84.311803
},
{
  "trip_id": 4,
  "latitude": 33.764941,
  "longitude": -84.311642
},
{
  "trip_id": 4,
  "latitude": 33.764943,
  "longitude": -84.311477
},
{
  "trip_id": 4,
  "latitude": 33.764956,
  "longitude": -84.311384
},
{
  "trip_id": 4,
  "latitude": 33.764967,
  "longitude": -84.311299
},
{
  "trip_id": 4,
  "latitude": 33.76497,
  "longitude": -84.311201
},
{
  "trip_id": 4,
  "latitude": 33.765006,
  "longitude": -84.311023
},
{
  "trip_id": 4,
  "latitude": 33.76503,
  "longitude": -84.310827
},
{
  "trip_id": 4,
  "latitude": 33.765039,
  "longitude": -84.310722
},
{
  "trip_id": 4,
  "latitude": 33.765055,
  "longitude": -84.31062
},
{
  "trip_id": 4,
  "latitude": 33.765089,
  "longitude": -84.310405
},
{
  "trip_id": 4,
  "latitude": 33.765115,
  "longitude": -84.310303
},
{
  "trip_id": 4,
  "latitude": 33.765148,
  "longitude": -84.310094
},
{
  "trip_id": 4,
  "latitude": 33.765181,
  "longitude": -84.309892
},
{
  "trip_id": 4,
  "latitude": 33.765199,
  "longitude": -84.309785
},
{
  "trip_id": 4,
  "latitude": 33.765231,
  "longitude": -84.309693
},
{
  "trip_id": 4,
  "latitude": 33.765247,
  "longitude": -84.309603
},
{
  "trip_id": 4,
  "latitude": 33.765291,
  "longitude": -84.309416
},
{
  "trip_id": 4,
  "latitude": 33.765348,
  "longitude": -84.309239
},
{
  "trip_id": 4,
  "latitude": 33.765365,
  "longitude": -84.309164
},
{
  "trip_id": 4,
  "latitude": 33.765389,
  "longitude": -84.30908
},
{
  "trip_id": 4,
  "latitude": 33.765424,
  "longitude": -84.309003
},
{
  "trip_id": 4,
  "latitude": 33.76546,
  "longitude": -84.308846
},
{
  "trip_id": 4,
  "latitude": 33.76552,
  "longitude": -84.308691
},
{
  "trip_id": 4,
  "latitude": 33.765519,
  "longitude": -84.30861
},
{
  "trip_id": 4,
  "latitude": 33.765542,
  "longitude": -84.30854
},
{
  "trip_id": 4,
  "latitude": 33.765572,
  "longitude": -84.30839
},
{
  "trip_id": 4,
  "latitude": 33.765594,
  "longitude": -84.308307
},
{
  "trip_id": 4,
  "latitude": 33.765661,
  "longitude": -84.308174
},
{
  "trip_id": 4,
  "latitude": 33.765683,
  "longitude": -84.308093
},
{
  "trip_id": 4,
  "latitude": 33.765719,
  "longitude": -84.307953
},
{
  "trip_id": 4,
  "latitude": 33.765739,
  "longitude": -84.307886
},
{
  "trip_id": 4,
  "latitude": 33.765787,
  "longitude": -84.307733
},
{
  "trip_id": 4,
  "latitude": 33.765809,
  "longitude": -84.30766
},
{
  "trip_id": 4,
  "latitude": 33.765863,
  "longitude": -84.307518
},
{
  "trip_id": 4,
  "latitude": 33.765898,
  "longitude": -84.307443
},
{
  "trip_id": 4,
  "latitude": 33.765957,
  "longitude": -84.307281
},
{
  "trip_id": 4,
  "latitude": 33.765989,
  "longitude": -84.307206
},
{
  "trip_id": 4,
  "latitude": 33.766051,
  "longitude": -84.307062
},
{
  "trip_id": 4,
  "latitude": 33.766098,
  "longitude": -84.306881
},
{
  "trip_id": 4,
  "latitude": 33.766126,
  "longitude": -84.306794
},
{
  "trip_id": 4,
  "latitude": 33.766136,
  "longitude": -84.306615
},
{
  "trip_id": 4,
  "latitude": 33.766003,
  "longitude": -84.306498
},
{
  "trip_id": 4,
  "latitude": 33.765934,
  "longitude": -84.306475
},
{
  "trip_id": 4,
  "latitude": 33.765809,
  "longitude": -84.306417
},
{
  "trip_id": 4,
  "latitude": 33.765739,
  "longitude": -84.306386
},
{
  "trip_id": 4,
  "latitude": 33.765601,
  "longitude": -84.306309
},
{
  "trip_id": 4,
  "latitude": 33.765529,
  "longitude": -84.306275
},
{
  "trip_id": 4,
  "latitude": 33.765454,
  "longitude": -84.306231
},
{
  "trip_id": 4,
  "latitude": 33.765306,
  "longitude": -84.306169
},
{
  "trip_id": 4,
  "latitude": 33.765237,
  "longitude": -84.306125
},
{
  "trip_id": 4,
  "latitude": 33.765163,
  "longitude": -84.306085
},
{
  "trip_id": 4,
  "latitude": 33.765098,
  "longitude": -84.30605
},
{
  "trip_id": 4,
  "latitude": 33.764982,
  "longitude": -84.305999
},
{
  "trip_id": 4,
  "latitude": 33.764884,
  "longitude": -84.306025
},
{
  "trip_id": 4,
  "latitude": 33.764842,
  "longitude": -84.306032
},
{
  "trip_id": 4,
  "latitude": 33.764858,
  "longitude": -84.306078
},
{
  "trip_id": 4,
  "latitude": 33.76484,
  "longitude": -84.306174
},
{
  "trip_id": 4,
  "latitude": 33.764821,
  "longitude": -84.306279
},
{
  "trip_id": 4,
  "latitude": 33.76479,
  "longitude": -84.306375
},
{
  "trip_id": 4,
  "latitude": 33.76477,
  "longitude": -84.306385
},
{
  "trip_id": 4,
  "latitude": 33.764762,
  "longitude": -84.306409
},
{
  "trip_id": 4,
  "latitude": 33.764773,
  "longitude": -84.306419
},
{
  "trip_id": 4,
  "latitude": 33.764779,
  "longitude": -84.306429
},
{
  "trip_id": 4,
  "latitude": 33.764778,
  "longitude": -84.306431
},
{
  "trip_id": 4,
  "latitude": 33.764761,
  "longitude": -84.306428
},
{
  "trip_id": 4,
  "latitude": 33.764748,
  "longitude": -84.306428
},
{
  "trip_id": 4,
  "latitude": 33.764734,
  "longitude": -84.306432
},
{
  "trip_id": 4,
  "latitude": 33.764737,
  "longitude": -84.30644
},
{
  "trip_id": 5,
  "latitude": 33.777523,
  "longitude": -84.364282
},
{
  "trip_id": 5,
  "latitude": 33.77756,
  "longitude": -84.364281
},
{
  "trip_id": 5,
  "latitude": 33.77768,
  "longitude": -84.364281
},
{
  "trip_id": 5,
  "latitude": 33.777681,
  "longitude": -84.364234
},
{
  "trip_id": 5,
  "latitude": 33.777681,
  "longitude": -84.364234
},
{
  "trip_id": 5,
  "latitude": 33.777609,
  "longitude": -84.364234
},
{
  "trip_id": 5,
  "latitude": 33.777681,
  "longitude": -84.364234
},
{
  "trip_id": 5,
  "latitude": 33.777681,
  "longitude": -84.364234
},
{
  "trip_id": 5,
  "latitude": 33.77768,
  "longitude": -84.364281
},
{
  "trip_id": 5,
  "latitude": 33.77774,
  "longitude": -84.364284
},
{
  "trip_id": 5,
  "latitude": 33.77778,
  "longitude": -84.364286
},
{
  "trip_id": 5,
  "latitude": 33.777817,
  "longitude": -84.364288
},
{
  "trip_id": 5,
  "latitude": 33.77774,
  "longitude": -84.364284
},
{
  "trip_id": 5,
  "latitude": 33.777697,
  "longitude": -84.364282
},
{
  "trip_id": 5,
  "latitude": 33.77768,
  "longitude": -84.364281
},
{
  "trip_id": 5,
  "latitude": 33.7775,
  "longitude": -84.364282
},
{
  "trip_id": 5,
  "latitude": 33.777393,
  "longitude": -84.364282
},
{
  "trip_id": 5,
  "latitude": 33.777287,
  "longitude": -84.364283
},
{
  "trip_id": 5,
  "latitude": 33.777279,
  "longitude": -84.364283
},
{
  "trip_id": 5,
  "latitude": 33.777171,
  "longitude": -84.364284
},
{
  "trip_id": 5,
  "latitude": 33.77701,
  "longitude": -84.364284
},
{
  "trip_id": 5,
  "latitude": 33.77701,
  "longitude": -84.364284
},
{
  "trip_id": 5,
  "latitude": 33.776874,
  "longitude": -84.364285
},
{
  "trip_id": 5,
  "latitude": 33.776746,
  "longitude": -84.364286
},
{
  "trip_id": 5,
  "latitude": 33.776745,
  "longitude": -84.364308
},
{
  "trip_id": 5,
  "latitude": 33.776744,
  "longitude": -84.364464
},
{
  "trip_id": 5,
  "latitude": 33.776744,
  "longitude": -84.364464
},
{
  "trip_id": 5,
  "latitude": 33.776689,
  "longitude": -84.364472
},
{
  "trip_id": 5,
  "latitude": 33.776689,
  "longitude": -84.364574
},
{
  "trip_id": 5,
  "latitude": 33.776689,
  "longitude": -84.364574
},
{
  "trip_id": 5,
  "latitude": 33.776687,
  "longitude": -84.364742
},
{
  "trip_id": 5,
  "latitude": 33.77668,
  "longitude": -84.365099
},
{
  "trip_id": 5,
  "latitude": 33.776677,
  "longitude": -84.365276
},
{
  "trip_id": 5,
  "latitude": 33.776677,
  "longitude": -84.365289
},
{
  "trip_id": 5,
  "latitude": 33.776676,
  "longitude": -84.365347
},
{
  "trip_id": 5,
  "latitude": 33.776513,
  "longitude": -84.365307
},
{
  "trip_id": 5,
  "latitude": 33.776185,
  "longitude": -84.365227
},
{
  "trip_id": 5,
  "latitude": 33.775978,
  "longitude": -84.365176
},
{
  "trip_id": 5,
  "latitude": 33.775714,
  "longitude": -84.365111
},
{
  "trip_id": 5,
  "latitude": 33.775451,
  "longitude": -84.365047
},
{
  "trip_id": 5,
  "latitude": 33.775237,
  "longitude": -84.364994
},
{
  "trip_id": 5,
  "latitude": 33.775019,
  "longitude": -84.364941
},
{
  "trip_id": 5,
  "latitude": 33.774805,
  "longitude": -84.364889
},
{
  "trip_id": 5,
  "latitude": 33.7747,
  "longitude": -84.364863
},
{
  "trip_id": 5,
  "latitude": 33.774534,
  "longitude": -84.364834
},
{
  "trip_id": 5,
  "latitude": 33.774248,
  "longitude": -84.364783
},
{
  "trip_id": 5,
  "latitude": 33.773975,
  "longitude": -84.364735
},
{
  "trip_id": 5,
  "latitude": 33.773753,
  "longitude": -84.364696
},
{
  "trip_id": 5,
  "latitude": 33.773752,
  "longitude": -84.364696
},
{
  "trip_id": 5,
  "latitude": 33.77355,
  "longitude": -84.364645
},
{
  "trip_id": 5,
  "latitude": 33.773507,
  "longitude": -84.364634
},
{
  "trip_id": 5,
  "latitude": 33.7733,
  "longitude": -84.364582
},
{
  "trip_id": 5,
  "latitude": 33.773218,
  "longitude": -84.364561
},
{
  "trip_id": 5,
  "latitude": 33.772949,
  "longitude": -84.364493
},
{
  "trip_id": 5,
  "latitude": 33.772681,
  "longitude": -84.364425
},
{
  "trip_id": 5,
  "latitude": 33.772632,
  "longitude": -84.364412
},
{
  "trip_id": 5,
  "latitude": 33.77247,
  "longitude": -84.364369
},
{
  "trip_id": 5,
  "latitude": 33.772188,
  "longitude": -84.364293
},
{
  "trip_id": 5,
  "latitude": 33.772143,
  "longitude": -84.364281
},
{
  "trip_id": 5,
  "latitude": 33.772126,
  "longitude": -84.364277
},
{
  "trip_id": 5,
  "latitude": 33.771991,
  "longitude": -84.364229
},
{
  "trip_id": 5,
  "latitude": 33.771929,
  "longitude": -84.364202
},
{
  "trip_id": 5,
  "latitude": 33.77173,
  "longitude": -84.364113
},
{
  "trip_id": 5,
  "latitude": 33.771572,
  "longitude": -84.364043
},
{
  "trip_id": 5,
  "latitude": 33.771425,
  "longitude": -84.363978
},
{
  "trip_id": 5,
  "latitude": 33.77137,
  "longitude": -84.36397
},
{
  "trip_id": 5,
  "latitude": 33.771315,
  "longitude": -84.363988
},
{
  "trip_id": 5,
  "latitude": 33.771306,
  "longitude": -84.363988
},
{
  "trip_id": 5,
  "latitude": 33.771259,
  "longitude": -84.363989
},
{
  "trip_id": 5,
  "latitude": 33.771025,
  "longitude": -84.363889
},
{
  "trip_id": 5,
  "latitude": 33.771005,
  "longitude": -84.363881
},
{
  "trip_id": 5,
  "latitude": 33.770973,
  "longitude": -84.363861
},
{
  "trip_id": 5,
  "latitude": 33.770927,
  "longitude": -84.363786
},
{
  "trip_id": 5,
  "latitude": 33.770899,
  "longitude": -84.363758
},
{
  "trip_id": 5,
  "latitude": 33.770847,
  "longitude": -84.36373
},
{
  "trip_id": 5,
  "latitude": 33.770813,
  "longitude": -84.363712
},
{
  "trip_id": 5,
  "latitude": 33.770578,
  "longitude": -84.36359
},
{
  "trip_id": 5,
  "latitude": 33.770517,
  "longitude": -84.363558
},
{
  "trip_id": 5,
  "latitude": 33.770351,
  "longitude": -84.363445
},
{
  "trip_id": 5,
  "latitude": 33.770124,
  "longitude": -84.36329
},
{
  "trip_id": 5,
  "latitude": 33.770086,
  "longitude": -84.363261
},
{
  "trip_id": 5,
  "latitude": 33.769887,
  "longitude": -84.36311
},
{
  "trip_id": 5,
  "latitude": 33.769692,
  "longitude": -84.362962
},
{
  "trip_id": 5,
  "latitude": 33.769432,
  "longitude": -84.362764
},
{
  "trip_id": 5,
  "latitude": 33.769421,
  "longitude": -84.362756
},
{
  "trip_id": 5,
  "latitude": 33.769166,
  "longitude": -84.362526
},
{
  "trip_id": 5,
  "latitude": 33.768997,
  "longitude": -84.362374
},
{
  "trip_id": 5,
  "latitude": 33.768977,
  "longitude": -84.362353
},
{
  "trip_id": 5,
  "latitude": 33.76895,
  "longitude": -84.362325
},
{
  "trip_id": 5,
  "latitude": 33.768785,
  "longitude": -84.362155
},
{
  "trip_id": 5,
  "latitude": 33.76876,
  "longitude": -84.362129
},
{
  "trip_id": 5,
  "latitude": 33.768727,
  "longitude": -84.362095
},
{
  "trip_id": 5,
  "latitude": 33.768477,
  "longitude": -84.361836
},
{
  "trip_id": 5,
  "latitude": 33.768457,
  "longitude": -84.361815
},
{
  "trip_id": 5,
  "latitude": 33.768277,
  "longitude": -84.361635
},
{
  "trip_id": 5,
  "latitude": 33.768056,
  "longitude": -84.361414
},
{
  "trip_id": 5,
  "latitude": 33.767951,
  "longitude": -84.361308
},
{
  "trip_id": 5,
  "latitude": 33.767875,
  "longitude": -84.361227
},
{
  "trip_id": 5,
  "latitude": 33.767725,
  "longitude": -84.361068
},
{
  "trip_id": 5,
  "latitude": 33.767699,
  "longitude": -84.361041
},
{
  "trip_id": 5,
  "latitude": 33.767577,
  "longitude": -84.360919
},
{
  "trip_id": 5,
  "latitude": 33.767481,
  "longitude": -84.360821
},
{
  "trip_id": 5,
  "latitude": 33.767367,
  "longitude": -84.360705
},
{
  "trip_id": 5,
  "latitude": 33.767263,
  "longitude": -84.360607
},
{
  "trip_id": 5,
  "latitude": 33.767084,
  "longitude": -84.360436
},
{
  "trip_id": 5,
  "latitude": 33.767029,
  "longitude": -84.360384
},
{
  "trip_id": 5,
  "latitude": 33.766852,
  "longitude": -84.360247
},
{
  "trip_id": 5,
  "latitude": 33.766712,
  "longitude": -84.360138
},
{
  "trip_id": 5,
  "latitude": 33.766627,
  "longitude": -84.360087
},
{
  "trip_id": 5,
  "latitude": 33.766424,
  "longitude": -84.359966
},
{
  "trip_id": 5,
  "latitude": 33.766369,
  "longitude": -84.359933
},
{
  "trip_id": 5,
  "latitude": 33.766276,
  "longitude": -84.359891
},
{
  "trip_id": 5,
  "latitude": 33.766159,
  "longitude": -84.359838
},
{
  "trip_id": 5,
  "latitude": 33.766027,
  "longitude": -84.359791
},
{
  "trip_id": 5,
  "latitude": 33.765877,
  "longitude": -84.359737
},
{
  "trip_id": 5,
  "latitude": 33.76571,
  "longitude": -84.359691
},
{
  "trip_id": 5,
  "latitude": 33.765655,
  "longitude": -84.359676
},
{
  "trip_id": 5,
  "latitude": 33.765401,
  "longitude": -84.359624
},
{
  "trip_id": 5,
  "latitude": 33.765375,
  "longitude": -84.359619
},
{
  "trip_id": 5,
  "latitude": 33.765154,
  "longitude": -84.359591
},
{
  "trip_id": 5,
  "latitude": 33.765048,
  "longitude": -84.359592
},
{
  "trip_id": 5,
  "latitude": 33.76497,
  "longitude": -84.359592
},
{
  "trip_id": 5,
  "latitude": 33.764871,
  "longitude": -84.35959
},
{
  "trip_id": 5,
  "latitude": 33.764701,
  "longitude": -84.359612
},
{
  "trip_id": 5,
  "latitude": 33.764653,
  "longitude": -84.359618
},
{
  "trip_id": 5,
  "latitude": 33.764415,
  "longitude": -84.359617
},
{
  "trip_id": 5,
  "latitude": 33.764191,
  "longitude": -84.359616
},
{
  "trip_id": 5,
  "latitude": 33.764187,
  "longitude": -84.359611
},
{
  "trip_id": 5,
  "latitude": 33.764168,
  "longitude": -84.359586
},
{
  "trip_id": 5,
  "latitude": 33.764115,
  "longitude": -84.359509
},
{
  "trip_id": 5,
  "latitude": 33.764069,
  "longitude": -84.359403
},
{
  "trip_id": 5,
  "latitude": 33.764068,
  "longitude": -84.359394
},
{
  "trip_id": 5,
  "latitude": 33.76406,
  "longitude": -84.359273
},
{
  "trip_id": 5,
  "latitude": 33.76413,
  "longitude": -84.359079
},
{
  "trip_id": 5,
  "latitude": 33.764175,
  "longitude": -84.358941
},
{
  "trip_id": 5,
  "latitude": 33.764183,
  "longitude": -84.358877
},
{
  "trip_id": 5,
  "latitude": 33.764176,
  "longitude": -84.358809
},
{
  "trip_id": 5,
  "latitude": 33.764159,
  "longitude": -84.358656
},
{
  "trip_id": 5,
  "latitude": 33.764158,
  "longitude": -84.358644
},
{
  "trip_id": 5,
  "latitude": 33.764154,
  "longitude": -84.358563
},
{
  "trip_id": 5,
  "latitude": 33.764155,
  "longitude": -84.358483
},
{
  "trip_id": 5,
  "latitude": 33.764176,
  "longitude": -84.358412
},
{
  "trip_id": 5,
  "latitude": 33.76423,
  "longitude": -84.358224
},
{
  "trip_id": 5,
  "latitude": 33.76425,
  "longitude": -84.35815
},
{
  "trip_id": 5,
  "latitude": 33.764263,
  "longitude": -84.3581
},
{
  "trip_id": 5,
  "latitude": 33.76427,
  "longitude": -84.357968
},
{
  "trip_id": 5,
  "latitude": 33.76427,
  "longitude": -84.357968
},
{
  "trip_id": 5,
  "latitude": 33.764239,
  "longitude": -84.357804
},
{
  "trip_id": 5,
  "latitude": 33.764221,
  "longitude": -84.357709
},
{
  "trip_id": 5,
  "latitude": 33.764208,
  "longitude": -84.357643
},
{
  "trip_id": 5,
  "latitude": 33.764198,
  "longitude": -84.357502
},
{
  "trip_id": 5,
  "latitude": 33.764196,
  "longitude": -84.357469
},
{
  "trip_id": 5,
  "latitude": 33.764207,
  "longitude": -84.357408
},
{
  "trip_id": 5,
  "latitude": 33.764229,
  "longitude": -84.35736
},
{
  "trip_id": 5,
  "latitude": 33.764284,
  "longitude": -84.357321
},
{
  "trip_id": 5,
  "latitude": 33.764284,
  "longitude": -84.357321
},
{
  "trip_id": 5,
  "latitude": 33.76427,
  "longitude": -84.357049
},
{
  "trip_id": 5,
  "latitude": 33.764268,
  "longitude": -84.357002
},
{
  "trip_id": 5,
  "latitude": 33.764275,
  "longitude": -84.356744
},
{
  "trip_id": 5,
  "latitude": 33.76428,
  "longitude": -84.356548
},
{
  "trip_id": 5,
  "latitude": 33.764292,
  "longitude": -84.356479
},
{
  "trip_id": 5,
  "latitude": 33.764298,
  "longitude": -84.356459
},
{
  "trip_id": 5,
  "latitude": 33.764316,
  "longitude": -84.356403
},
{
  "trip_id": 5,
  "latitude": 33.764353,
  "longitude": -84.356332
},
{
  "trip_id": 5,
  "latitude": 33.764417,
  "longitude": -84.356227
},
{
  "trip_id": 5,
  "latitude": 33.764425,
  "longitude": -84.356217
},
{
  "trip_id": 5,
  "latitude": 33.764552,
  "longitude": -84.356051
},
{
  "trip_id": 5,
  "latitude": 33.764567,
  "longitude": -84.356032
},
{
  "trip_id": 5,
  "latitude": 33.764713,
  "longitude": -84.355845
},
{
  "trip_id": 5,
  "latitude": 33.764766,
  "longitude": -84.355776
},
{
  "trip_id": 5,
  "latitude": 33.764813,
  "longitude": -84.355716
},
{
  "trip_id": 5,
  "latitude": 33.764887,
  "longitude": -84.355618
},
{
  "trip_id": 5,
  "latitude": 33.764955,
  "longitude": -84.355551
},
{
  "trip_id": 5,
  "latitude": 33.764961,
  "longitude": -84.355545
},
{
  "trip_id": 5,
  "latitude": 33.765019,
  "longitude": -84.355491
},
{
  "trip_id": 5,
  "latitude": 33.765097,
  "longitude": -84.355446
},
{
  "trip_id": 5,
  "latitude": 33.765165,
  "longitude": -84.355419
},
{
  "trip_id": 5,
  "latitude": 33.765222,
  "longitude": -84.355403
},
{
  "trip_id": 5,
  "latitude": 33.765231,
  "longitude": -84.355401
},
{
  "trip_id": 5,
  "latitude": 33.765318,
  "longitude": -84.355392
},
{
  "trip_id": 5,
  "latitude": 33.765453,
  "longitude": -84.355414
},
{
  "trip_id": 5,
  "latitude": 33.765502,
  "longitude": -84.355422
},
{
  "trip_id": 5,
  "latitude": 33.765578,
  "longitude": -84.355428
},
{
  "trip_id": 5,
  "latitude": 33.765711,
  "longitude": -84.355414
},
{
  "trip_id": 5,
  "latitude": 33.765916,
  "longitude": -84.355393
},
{
  "trip_id": 5,
  "latitude": 33.765924,
  "longitude": -84.355391
},
{
  "trip_id": 5,
  "latitude": 33.765972,
  "longitude": -84.35538
},
{
  "trip_id": 5,
  "latitude": 33.766019,
  "longitude": -84.355368
},
{
  "trip_id": 5,
  "latitude": 33.76609,
  "longitude": -84.355337
},
{
  "trip_id": 5,
  "latitude": 33.76617,
  "longitude": -84.355275
},
{
  "trip_id": 5,
  "latitude": 33.766353,
  "longitude": -84.355132
},
{
  "trip_id": 5,
  "latitude": 33.766408,
  "longitude": -84.35509
},
{
  "trip_id": 5,
  "latitude": 33.766514,
  "longitude": -84.355001
},
{
  "trip_id": 5,
  "latitude": 33.766553,
  "longitude": -84.354959
},
{
  "trip_id": 5,
  "latitude": 33.766572,
  "longitude": -84.35494
},
{
  "trip_id": 5,
  "latitude": 33.766634,
  "longitude": -84.35487
},
{
  "trip_id": 5,
  "latitude": 33.766691,
  "longitude": -84.354806
},
{
  "trip_id": 5,
  "latitude": 33.766759,
  "longitude": -84.354752
},
{
  "trip_id": 5,
  "latitude": 33.76676,
  "longitude": -84.354752
},
{
  "trip_id": 5,
  "latitude": 33.766973,
  "longitude": -84.354593
},
{
  "trip_id": 5,
  "latitude": 33.767206,
  "longitude": -84.354421
},
{
  "trip_id": 5,
  "latitude": 33.767449,
  "longitude": -84.354241
},
{
  "trip_id": 5,
  "latitude": 33.767753,
  "longitude": -84.354016
},
{
  "trip_id": 5,
  "latitude": 33.768027,
  "longitude": -84.353813
},
{
  "trip_id": 5,
  "latitude": 33.76809,
  "longitude": -84.353757
},
{
  "trip_id": 5,
  "latitude": 33.768139,
  "longitude": -84.353699
},
{
  "trip_id": 5,
  "latitude": 33.768149,
  "longitude": -84.353687
},
{
  "trip_id": 5,
  "latitude": 33.768185,
  "longitude": -84.353644
},
{
  "trip_id": 5,
  "latitude": 33.768238,
  "longitude": -84.353561
},
{
  "trip_id": 5,
  "latitude": 33.768286,
  "longitude": -84.353472
},
{
  "trip_id": 5,
  "latitude": 33.768331,
  "longitude": -84.353368
},
{
  "trip_id": 5,
  "latitude": 33.768359,
  "longitude": -84.353304
},
{
  "trip_id": 5,
  "latitude": 33.768436,
  "longitude": -84.353131
},
{
  "trip_id": 5,
  "latitude": 33.768484,
  "longitude": -84.353025
},
{
  "trip_id": 5,
  "latitude": 33.768515,
  "longitude": -84.352972
},
{
  "trip_id": 5,
  "latitude": 33.768525,
  "longitude": -84.352955
},
{
  "trip_id": 5,
  "latitude": 33.768546,
  "longitude": -84.352929
},
{
  "trip_id": 5,
  "latitude": 33.768579,
  "longitude": -84.352898
},
{
  "trip_id": 5,
  "latitude": 33.768723,
  "longitude": -84.352799
},
{
  "trip_id": 5,
  "latitude": 33.768747,
  "longitude": -84.352782
},
{
  "trip_id": 5,
  "latitude": 33.76883,
  "longitude": -84.352716
},
{
  "trip_id": 5,
  "latitude": 33.768858,
  "longitude": -84.352684
},
{
  "trip_id": 5,
  "latitude": 33.768867,
  "longitude": -84.352674
},
{
  "trip_id": 5,
  "latitude": 33.768884,
  "longitude": -84.352642
},
{
  "trip_id": 5,
  "latitude": 33.768911,
  "longitude": -84.352603
},
{
  "trip_id": 5,
  "latitude": 33.768911,
  "longitude": -84.352603
},
{
  "trip_id": 5,
  "latitude": 33.768911,
  "longitude": -84.352603
},
{
  "trip_id": 5,
  "latitude": 33.768911,
  "longitude": -84.352603
},
{
  "trip_id": 5,
  "latitude": 33.768911,
  "longitude": -84.352603
},
{
  "trip_id": 5,
  "latitude": 33.768884,
  "longitude": -84.352642
},
{
  "trip_id": 5,
  "latitude": 33.768878,
  "longitude": -84.352652
},
{
  "trip_id": 5,
  "latitude": 33.768877,
  "longitude": -84.352655
},
{
  "trip_id": 5,
  "latitude": 33.76888,
  "longitude": -84.352649
},
{
  "trip_id": 5,
  "latitude": 33.768882,
  "longitude": -84.352645
},
{
  "trip_id": 5,
  "latitude": 33.768884,
  "longitude": -84.352642
},
{
  "trip_id": 5,
  "latitude": 33.768911,
  "longitude": -84.352603
},
{
  "trip_id": 5,
  "latitude": 33.768929,
  "longitude": -84.352529
},
{
  "trip_id": 5,
  "latitude": 33.768945,
  "longitude": -84.352465
},
{
  "trip_id": 5,
  "latitude": 33.76894,
  "longitude": -84.3524
},
{
  "trip_id": 5,
  "latitude": 33.768951,
  "longitude": -84.352347
},
{
  "trip_id": 5,
  "latitude": 33.768972,
  "longitude": -84.352265
},
{
  "trip_id": 5,
  "latitude": 33.769056,
  "longitude": -84.351937
},
{
  "trip_id": 5,
  "latitude": 33.769073,
  "longitude": -84.35185
},
{
  "trip_id": 5,
  "latitude": 33.769075,
  "longitude": -84.351841
},
{
  "trip_id": 5,
  "latitude": 33.769094,
  "longitude": -84.351764
},
{
  "trip_id": 5,
  "latitude": 33.769122,
  "longitude": -84.351631
},
{
  "trip_id": 5,
  "latitude": 33.769149,
  "longitude": -84.351503
},
{
  "trip_id": 5,
  "latitude": 33.769162,
  "longitude": -84.351456
},
{
  "trip_id": 5,
  "latitude": 33.769169,
  "longitude": -84.351429
},
{
  "trip_id": 5,
  "latitude": 33.7692,
  "longitude": -84.351352
},
{
  "trip_id": 5,
  "latitude": 33.769241,
  "longitude": -84.351283
},
{
  "trip_id": 5,
  "latitude": 33.769284,
  "longitude": -84.351227
},
{
  "trip_id": 5,
  "latitude": 33.769328,
  "longitude": -84.351175
},
{
  "trip_id": 5,
  "latitude": 33.769407,
  "longitude": -84.351085
},
{
  "trip_id": 5,
  "latitude": 33.769411,
  "longitude": -84.35108
},
{
  "trip_id": 5,
  "latitude": 33.769524,
  "longitude": -84.350955
},
{
  "trip_id": 5,
  "latitude": 33.76956,
  "longitude": -84.350912
},
{
  "trip_id": 5,
  "latitude": 33.76959,
  "longitude": -84.35087
},
{
  "trip_id": 5,
  "latitude": 33.769603,
  "longitude": -84.350849
},
{
  "trip_id": 5,
  "latitude": 33.769616,
  "longitude": -84.35083
},
{
  "trip_id": 5,
  "latitude": 33.769636,
  "longitude": -84.350789
},
{
  "trip_id": 5,
  "latitude": 33.769655,
  "longitude": -84.350737
},
{
  "trip_id": 5,
  "latitude": 33.769673,
  "longitude": -84.350674
},
{
  "trip_id": 5,
  "latitude": 33.769688,
  "longitude": -84.350601
},
{
  "trip_id": 5,
  "latitude": 33.769703,
  "longitude": -84.350507
},
{
  "trip_id": 5,
  "latitude": 33.769727,
  "longitude": -84.350362
},
{
  "trip_id": 5,
  "latitude": 33.769791,
  "longitude": -84.349913
},
{
  "trip_id": 5,
  "latitude": 33.769791,
  "longitude": -84.349912
},
{
  "trip_id": 5,
  "latitude": 33.769798,
  "longitude": -84.349813
},
{
  "trip_id": 5,
  "latitude": 33.769799,
  "longitude": -84.349735
},
{
  "trip_id": 5,
  "latitude": 33.769798,
  "longitude": -84.349639
},
{
  "trip_id": 5,
  "latitude": 33.769795,
  "longitude": -84.349558
},
{
  "trip_id": 5,
  "latitude": 33.769792,
  "longitude": -84.349451
},
{
  "trip_id": 5,
  "latitude": 33.769798,
  "longitude": -84.349372
},
{
  "trip_id": 5,
  "latitude": 33.769807,
  "longitude": -84.3493
},
{
  "trip_id": 5,
  "latitude": 33.769807,
  "longitude": -84.3493
},
{
  "trip_id": 5,
  "latitude": 33.769815,
  "longitude": -84.349233
},
{
  "trip_id": 5,
  "latitude": 33.769816,
  "longitude": -84.349219
},
{
  "trip_id": 5,
  "latitude": 33.76982,
  "longitude": -84.349164
},
{
  "trip_id": 5,
  "latitude": 33.769822,
  "longitude": -84.349149
},
{
  "trip_id": 5,
  "latitude": 33.769829,
  "longitude": -84.349098
},
{
  "trip_id": 5,
  "latitude": 33.769837,
  "longitude": -84.349045
},
{
  "trip_id": 5,
  "latitude": 33.769846,
  "longitude": -84.348975
},
{
  "trip_id": 5,
  "latitude": 33.769853,
  "longitude": -84.348927
},
{
  "trip_id": 5,
  "latitude": 33.769854,
  "longitude": -84.348921
},
{
  "trip_id": 5,
  "latitude": 33.769853,
  "longitude": -84.34881
},
{
  "trip_id": 5,
  "latitude": 33.769938,
  "longitude": -84.348778
},
{
  "trip_id": 5,
  "latitude": 33.769986,
  "longitude": -84.348776
},
{
  "trip_id": 5,
  "latitude": 33.770045,
  "longitude": -84.348792
},
{
  "trip_id": 5,
  "latitude": 33.770098,
  "longitude": -84.348806
},
{
  "trip_id": 5,
  "latitude": 33.7702,
  "longitude": -84.348765
},
{
  "trip_id": 5,
  "latitude": 33.770308,
  "longitude": -84.348704
},
{
  "trip_id": 5,
  "latitude": 33.770351,
  "longitude": -84.348651
},
{
  "trip_id": 5,
  "latitude": 33.770366,
  "longitude": -84.348633
},
{
  "trip_id": 5,
  "latitude": 33.770412,
  "longitude": -84.348501
},
{
  "trip_id": 5,
  "latitude": 33.770453,
  "longitude": -84.348292
},
{
  "trip_id": 5,
  "latitude": 33.770463,
  "longitude": -84.348263
},
{
  "trip_id": 5,
  "latitude": 33.770502,
  "longitude": -84.348147
},
{
  "trip_id": 5,
  "latitude": 33.770531,
  "longitude": -84.348084
},
{
  "trip_id": 5,
  "latitude": 33.770597,
  "longitude": -84.347976
},
{
  "trip_id": 5,
  "latitude": 33.770696,
  "longitude": -84.347869
},
{
  "trip_id": 5,
  "latitude": 33.770717,
  "longitude": -84.347846
},
{
  "trip_id": 5,
  "latitude": 33.770762,
  "longitude": -84.347778
},
{
  "trip_id": 5,
  "latitude": 33.770811,
  "longitude": -84.347658
},
{
  "trip_id": 5,
  "latitude": 33.770829,
  "longitude": -84.347539
},
{
  "trip_id": 5,
  "latitude": 33.77083,
  "longitude": -84.34753
},
{
  "trip_id": 5,
  "latitude": 33.770826,
  "longitude": -84.347403
},
{
  "trip_id": 5,
  "latitude": 33.770809,
  "longitude": -84.347326
},
{
  "trip_id": 5,
  "latitude": 33.770785,
  "longitude": -84.347259
},
{
  "trip_id": 5,
  "latitude": 33.77076,
  "longitude": -84.34721
},
{
  "trip_id": 5,
  "latitude": 33.770707,
  "longitude": -84.347134
},
{
  "trip_id": 5,
  "latitude": 33.770643,
  "longitude": -84.347077
},
{
  "trip_id": 5,
  "latitude": 33.770616,
  "longitude": -84.347052
},
{
  "trip_id": 5,
  "latitude": 33.77058,
  "longitude": -84.347008
},
{
  "trip_id": 5,
  "latitude": 33.770538,
  "longitude": -84.346939
},
{
  "trip_id": 5,
  "latitude": 33.770496,
  "longitude": -84.346839
},
{
  "trip_id": 5,
  "latitude": 33.770485,
  "longitude": -84.346761
},
{
  "trip_id": 5,
  "latitude": 33.770516,
  "longitude": -84.346556
},
{
  "trip_id": 5,
  "latitude": 33.770517,
  "longitude": -84.346548
},
{
  "trip_id": 5,
  "latitude": 33.770512,
  "longitude": -84.34646
},
{
  "trip_id": 5,
  "latitude": 33.770493,
  "longitude": -84.346387
},
{
  "trip_id": 5,
  "latitude": 33.77046,
  "longitude": -84.346336
},
{
  "trip_id": 5,
  "latitude": 33.7703,
  "longitude": -84.346222
},
{
  "trip_id": 5,
  "latitude": 33.770262,
  "longitude": -84.346187
},
{
  "trip_id": 5,
  "latitude": 33.770224,
  "longitude": -84.346152
},
{
  "trip_id": 5,
  "latitude": 33.770185,
  "longitude": -84.346091
},
{
  "trip_id": 5,
  "latitude": 33.770143,
  "longitude": -84.345985
},
{
  "trip_id": 5,
  "latitude": 33.770127,
  "longitude": -84.345908
},
{
  "trip_id": 5,
  "latitude": 33.770123,
  "longitude": -84.345828
},
{
  "trip_id": 5,
  "latitude": 33.770127,
  "longitude": -84.345769
},
{
  "trip_id": 5,
  "latitude": 33.770129,
  "longitude": -84.345746
},
{
  "trip_id": 5,
  "latitude": 33.770155,
  "longitude": -84.345629
},
{
  "trip_id": 5,
  "latitude": 33.770184,
  "longitude": -84.345555
},
{
  "trip_id": 5,
  "latitude": 33.770226,
  "longitude": -84.345482
},
{
  "trip_id": 5,
  "latitude": 33.770313,
  "longitude": -84.345385
},
{
  "trip_id": 5,
  "latitude": 33.770364,
  "longitude": -84.345341
},
{
  "trip_id": 5,
  "latitude": 33.770402,
  "longitude": -84.345307
},
{
  "trip_id": 5,
  "latitude": 33.77049,
  "longitude": -84.345192
},
{
  "trip_id": 5,
  "latitude": 33.77052,
  "longitude": -84.345128
},
{
  "trip_id": 5,
  "latitude": 33.770553,
  "longitude": -84.34503
},
{
  "trip_id": 5,
  "latitude": 33.770569,
  "longitude": -84.344937
},
{
  "trip_id": 5,
  "latitude": 33.770573,
  "longitude": -84.344841
},
{
  "trip_id": 5,
  "latitude": 33.770571,
  "longitude": -84.344804
},
{
  "trip_id": 5,
  "latitude": 33.770559,
  "longitude": -84.344576
},
{
  "trip_id": 5,
  "latitude": 33.770574,
  "longitude": -84.344466
},
{
  "trip_id": 5,
  "latitude": 33.770602,
  "longitude": -84.344381
},
{
  "trip_id": 5,
  "latitude": 33.770659,
  "longitude": -84.344279
},
{
  "trip_id": 5,
  "latitude": 33.770668,
  "longitude": -84.344263
},
{
  "trip_id": 5,
  "latitude": 33.77072,
  "longitude": -84.344196
},
{
  "trip_id": 5,
  "latitude": 33.770856,
  "longitude": -84.344108
},
{
  "trip_id": 5,
  "latitude": 33.77089,
  "longitude": -84.344072
},
{
  "trip_id": 5,
  "latitude": 33.770926,
  "longitude": -84.344004
},
{
  "trip_id": 5,
  "latitude": 33.770931,
  "longitude": -84.343985
},
{
  "trip_id": 5,
  "latitude": 33.770943,
  "longitude": -84.343938
},
{
  "trip_id": 5,
  "latitude": 33.770944,
  "longitude": -84.343806
},
{
  "trip_id": 5,
  "latitude": 33.77091,
  "longitude": -84.343736
},
{
  "trip_id": 5,
  "latitude": 33.770814,
  "longitude": -84.343645
},
{
  "trip_id": 5,
  "latitude": 33.770685,
  "longitude": -84.343573
},
{
  "trip_id": 5,
  "latitude": 33.770653,
  "longitude": -84.343532
},
{
  "trip_id": 5,
  "latitude": 33.770636,
  "longitude": -84.343492
},
{
  "trip_id": 5,
  "latitude": 33.770634,
  "longitude": -84.343456
},
{
  "trip_id": 5,
  "latitude": 33.770632,
  "longitude": -84.343428
},
{
  "trip_id": 5,
  "latitude": 33.770637,
  "longitude": -84.34339
},
{
  "trip_id": 5,
  "latitude": 33.770648,
  "longitude": -84.343353
},
{
  "trip_id": 5,
  "latitude": 33.770663,
  "longitude": -84.343326
},
{
  "trip_id": 5,
  "latitude": 33.770693,
  "longitude": -84.343296
},
{
  "trip_id": 5,
  "latitude": 33.770757,
  "longitude": -84.34327
},
{
  "trip_id": 5,
  "latitude": 33.770814,
  "longitude": -84.343268
},
{
  "trip_id": 5,
  "latitude": 33.77085,
  "longitude": -84.34328
},
{
  "trip_id": 5,
  "latitude": 33.770908,
  "longitude": -84.343328
},
{
  "trip_id": 5,
  "latitude": 33.770908,
  "longitude": -84.343328
},
{
  "trip_id": 5,
  "latitude": 33.770946,
  "longitude": -84.34335
},
{
  "trip_id": 5,
  "latitude": 33.77097,
  "longitude": -84.343357
},
{
  "trip_id": 5,
  "latitude": 33.770993,
  "longitude": -84.343355
},
{
  "trip_id": 5,
  "latitude": 33.771019,
  "longitude": -84.343346
},
{
  "trip_id": 5,
  "latitude": 33.771046,
  "longitude": -84.34333
},
{
  "trip_id": 5,
  "latitude": 33.771074,
  "longitude": -84.343303
},
{
  "trip_id": 5,
  "latitude": 33.771095,
  "longitude": -84.343268
},
{
  "trip_id": 5,
  "latitude": 33.771108,
  "longitude": -84.343216
},
{
  "trip_id": 5,
  "latitude": 33.771115,
  "longitude": -84.343158
},
{
  "trip_id": 5,
  "latitude": 33.771128,
  "longitude": -84.34307
},
{
  "trip_id": 5,
  "latitude": 33.771129,
  "longitude": -84.342987
},
{
  "trip_id": 5,
  "latitude": 33.771127,
  "longitude": -84.34294
},
{
  "trip_id": 5,
  "latitude": 33.771122,
  "longitude": -84.342821
},
{
  "trip_id": 5,
  "latitude": 33.771112,
  "longitude": -84.342723
},
{
  "trip_id": 5,
  "latitude": 33.771115,
  "longitude": -84.342671
},
{
  "trip_id": 5,
  "latitude": 33.771122,
  "longitude": -84.342641
},
{
  "trip_id": 5,
  "latitude": 33.771125,
  "longitude": -84.34263
},
{
  "trip_id": 5,
  "latitude": 33.77116,
  "longitude": -84.342584
},
{
  "trip_id": 5,
  "latitude": 33.771206,
  "longitude": -84.342571
},
{
  "trip_id": 5,
  "latitude": 33.771206,
  "longitude": -84.342538
},
{
  "trip_id": 5,
  "latitude": 33.771205,
  "longitude": -84.342476
},
{
  "trip_id": 5,
  "latitude": 33.771199,
  "longitude": -84.342099
},
{
  "trip_id": 5,
  "latitude": 33.771194,
  "longitude": -84.341782
},
{
  "trip_id": 5,
  "latitude": 33.771216,
  "longitude": -84.341628
},
{
  "trip_id": 5,
  "latitude": 33.771192,
  "longitude": -84.341628
},
{
  "trip_id": 5,
  "latitude": 33.771144,
  "longitude": -84.341628
},
{
  "trip_id": 5,
  "latitude": 33.771025,
  "longitude": -84.341631
},
{
  "trip_id": 5,
  "latitude": 33.770838,
  "longitude": -84.341635
},
{
  "trip_id": 5,
  "latitude": 33.77069,
  "longitude": -84.341639
},
{
  "trip_id": 5,
  "latitude": 33.770575,
  "longitude": -84.341641
},
{
  "trip_id": 5,
  "latitude": 33.770288,
  "longitude": -84.341646
},
{
  "trip_id": 5,
  "latitude": 33.770189,
  "longitude": -84.341648
},
{
  "trip_id": 5,
  "latitude": 33.770074,
  "longitude": -84.34165
},
{
  "trip_id": 5,
  "latitude": 33.769746,
  "longitude": -84.341655
},
{
  "trip_id": 5,
  "latitude": 33.769444,
  "longitude": -84.341659
},
{
  "trip_id": 5,
  "latitude": 33.769228,
  "longitude": -84.341662
},
{
  "trip_id": 5,
  "latitude": 33.769195,
  "longitude": -84.341663
},
{
  "trip_id": 5,
  "latitude": 33.768995,
  "longitude": -84.341669
},
{
  "trip_id": 5,
  "latitude": 33.768969,
  "longitude": -84.34167
},
{
  "trip_id": 5,
  "latitude": 33.768888,
  "longitude": -84.341672
},
{
  "trip_id": 5,
  "latitude": 33.768819,
  "longitude": -84.341673
},
{
  "trip_id": 5,
  "latitude": 33.768669,
  "longitude": -84.341674
},
{
  "trip_id": 5,
  "latitude": 33.768559,
  "longitude": -84.341675
},
{
  "trip_id": 5,
  "latitude": 33.768543,
  "longitude": -84.341598
},
{
  "trip_id": 5,
  "latitude": 33.768537,
  "longitude": -84.341567
},
{
  "trip_id": 5,
  "latitude": 33.768533,
  "longitude": -84.341328
},
{
  "trip_id": 5,
  "latitude": 33.768531,
  "longitude": -84.341228
},
{
  "trip_id": 5,
  "latitude": 33.768528,
  "longitude": -84.341033
},
{
  "trip_id": 5,
  "latitude": 33.768524,
  "longitude": -84.340822
},
{
  "trip_id": 5,
  "latitude": 33.768522,
  "longitude": -84.340691
},
{
  "trip_id": 5,
  "latitude": 33.768522,
  "longitude": -84.340667
},
{
  "trip_id": 5,
  "latitude": 33.768517,
  "longitude": -84.340356
},
{
  "trip_id": 5,
  "latitude": 33.768516,
  "longitude": -84.340312
},
{
  "trip_id": 5,
  "latitude": 33.768511,
  "longitude": -84.340009
},
{
  "trip_id": 5,
  "latitude": 33.768511,
  "longitude": -84.340003
},
{
  "trip_id": 5,
  "latitude": 33.768506,
  "longitude": -84.339659
},
{
  "trip_id": 5,
  "latitude": 33.768502,
  "longitude": -84.339459
},
{
  "trip_id": 5,
  "latitude": 33.768502,
  "longitude": -84.339438
},
{
  "trip_id": 5,
  "latitude": 33.7685,
  "longitude": -84.339344
},
{
  "trip_id": 5,
  "latitude": 33.768338,
  "longitude": -84.33935
},
{
  "trip_id": 5,
  "latitude": 33.768269,
  "longitude": -84.339352
},
{
  "trip_id": 5,
  "latitude": 33.768208,
  "longitude": -84.339354
},
{
  "trip_id": 5,
  "latitude": 33.768122,
  "longitude": -84.339356
},
{
  "trip_id": 5,
  "latitude": 33.767947,
  "longitude": -84.33936
},
{
  "trip_id": 5,
  "latitude": 33.767806,
  "longitude": -84.339364
},
{
  "trip_id": 5,
  "latitude": 33.76776,
  "longitude": -84.339365
},
{
  "trip_id": 5,
  "latitude": 33.767433,
  "longitude": -84.339373
},
{
  "trip_id": 5,
  "latitude": 33.767243,
  "longitude": -84.339377
},
{
  "trip_id": 5,
  "latitude": 33.767116,
  "longitude": -84.33938
},
{
  "trip_id": 5,
  "latitude": 33.76689,
  "longitude": -84.339386
},
{
  "trip_id": 5,
  "latitude": 33.766822,
  "longitude": -84.339388
},
{
  "trip_id": 5,
  "latitude": 33.7668,
  "longitude": -84.339389
},
{
  "trip_id": 5,
  "latitude": 33.766489,
  "longitude": -84.339396
},
{
  "trip_id": 5,
  "latitude": 33.766447,
  "longitude": -84.339397
},
{
  "trip_id": 5,
  "latitude": 33.766416,
  "longitude": -84.339398
},
{
  "trip_id": 5,
  "latitude": 33.766053,
  "longitude": -84.339408
},
{
  "trip_id": 5,
  "latitude": 33.765951,
  "longitude": -84.339411
},
{
  "trip_id": 5,
  "latitude": 33.765659,
  "longitude": -84.339412
},
{
  "trip_id": 5,
  "latitude": 33.765561,
  "longitude": -84.339412
},
{
  "trip_id": 5,
  "latitude": 33.765325,
  "longitude": -84.339413
},
{
  "trip_id": 5,
  "latitude": 33.765176,
  "longitude": -84.339414
},
{
  "trip_id": 5,
  "latitude": 33.764903,
  "longitude": -84.339416
},
{
  "trip_id": 5,
  "latitude": 33.764903,
  "longitude": -84.339416
},
{
  "trip_id": 5,
  "latitude": 33.764856,
  "longitude": -84.339416
},
{
  "trip_id": 5,
  "latitude": 33.764859,
  "longitude": -84.339161
},
{
  "trip_id": 5,
  "latitude": 33.764863,
  "longitude": -84.338741
},
{
  "trip_id": 5,
  "latitude": 33.764865,
  "longitude": -84.33853
},
{
  "trip_id": 5,
  "latitude": 33.764864,
  "longitude": -84.338161
},
{
  "trip_id": 5,
  "latitude": 33.764864,
  "longitude": -84.33816
},
{
  "trip_id": 5,
  "latitude": 33.764862,
  "longitude": -84.337727
},
{
  "trip_id": 5,
  "latitude": 33.764861,
  "longitude": -84.337266
},
{
  "trip_id": 5,
  "latitude": 33.76486,
  "longitude": -84.337082
},
{
  "trip_id": 5,
  "latitude": 33.764855,
  "longitude": -84.337027
},
{
  "trip_id": 5,
  "latitude": 33.764857,
  "longitude": -84.336927
},
{
  "trip_id": 5,
  "latitude": 33.76486,
  "longitude": -84.336765
},
{
  "trip_id": 5,
  "latitude": 33.764861,
  "longitude": -84.336361
},
{
  "trip_id": 5,
  "latitude": 33.764861,
  "longitude": -84.33628
},
{
  "trip_id": 5,
  "latitude": 33.764861,
  "longitude": -84.336237
},
{
  "trip_id": 5,
  "latitude": 33.76486,
  "longitude": -84.336205
},
{
  "trip_id": 5,
  "latitude": 33.764854,
  "longitude": -84.335873
},
{
  "trip_id": 5,
  "latitude": 33.764857,
  "longitude": -84.335818
},
{
  "trip_id": 5,
  "latitude": 33.764856,
  "longitude": -84.335775
},
{
  "trip_id": 5,
  "latitude": 33.764851,
  "longitude": -84.335428
},
{
  "trip_id": 5,
  "latitude": 33.764848,
  "longitude": -84.335192
},
{
  "trip_id": 5,
  "latitude": 33.764847,
  "longitude": -84.335095
},
{
  "trip_id": 5,
  "latitude": 33.764844,
  "longitude": -84.335009
},
{
  "trip_id": 5,
  "latitude": 33.764844,
  "longitude": -84.334975
},
{
  "trip_id": 5,
  "latitude": 33.764845,
  "longitude": -84.334582
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334324
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334242
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334217
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334196
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334164
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334156
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334131
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.334037
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.333928
},
{
  "trip_id": 5,
  "latitude": 33.764848,
  "longitude": -84.333799
},
{
  "trip_id": 5,
  "latitude": 33.764848,
  "longitude": -84.333763
},
{
  "trip_id": 5,
  "latitude": 33.764852,
  "longitude": -84.33347
},
{
  "trip_id": 5,
  "latitude": 33.764854,
  "longitude": -84.333332
},
{
  "trip_id": 5,
  "latitude": 33.764857,
  "longitude": -84.333116
},
{
  "trip_id": 5,
  "latitude": 33.764858,
  "longitude": -84.332997
},
{
  "trip_id": 5,
  "latitude": 33.764858,
  "longitude": -84.332961
},
{
  "trip_id": 5,
  "latitude": 33.764858,
  "longitude": -84.332918
},
{
  "trip_id": 5,
  "latitude": 33.764859,
  "longitude": -84.332709
},
{
  "trip_id": 5,
  "latitude": 33.76486,
  "longitude": -84.33233
},
{
  "trip_id": 5,
  "latitude": 33.76486,
  "longitude": -84.332176
},
{
  "trip_id": 5,
  "latitude": 33.764859,
  "longitude": -84.332117
},
{
  "trip_id": 5,
  "latitude": 33.764856,
  "longitude": -84.33198
},
{
  "trip_id": 5,
  "latitude": 33.764852,
  "longitude": -84.331834
},
{
  "trip_id": 5,
  "latitude": 33.764851,
  "longitude": -84.331647
},
{
  "trip_id": 5,
  "latitude": 33.764849,
  "longitude": -84.331261
},
{
  "trip_id": 5,
  "latitude": 33.764848,
  "longitude": -84.331009
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.330731
},
{
  "trip_id": 5,
  "latitude": 33.764846,
  "longitude": -84.330713
},
{
  "trip_id": 5,
  "latitude": 33.764845,
  "longitude": -84.330605
},
{
  "trip_id": 5,
  "latitude": 33.764847,
  "longitude": -84.330369
},
{
  "trip_id": 5,
  "latitude": 33.764848,
  "longitude": -84.330164
},
{
  "trip_id": 5,
  "latitude": 33.764848,
  "longitude": -84.330119
},
{
  "trip_id": 5,
  "latitude": 33.76485,
  "longitude": -84.330028
},
{
  "trip_id": 5,
  "latitude": 33.764858,
  "longitude": -84.329614
},
{
  "trip_id": 5,
  "latitude": 33.76486,
  "longitude": -84.329495
},
{
  "trip_id": 5,
  "latitude": 33.764859,
  "longitude": -84.329016
},
{
  "trip_id": 5,
  "latitude": 33.764858,
  "longitude": -84.328741
},
{
  "trip_id": 5,
  "latitude": 33.764858,
  "longitude": -84.328663
},
{
  "trip_id": 5,
  "latitude": 33.764859,
  "longitude": -84.328617
},
{
  "trip_id": 5,
  "latitude": 33.764866,
  "longitude": -84.327948
},
{
  "trip_id": 5,
  "latitude": 33.764867,
  "longitude": -84.327896
},
{
  "trip_id": 5,
  "latitude": 33.764853,
  "longitude": -84.327222
},
{
  "trip_id": 5,
  "latitude": 33.764844,
  "longitude": -84.326807
},
{
  "trip_id": 5,
  "latitude": 33.764833,
  "longitude": -84.326308
},
{
  "trip_id": 5,
  "latitude": 33.764831,
  "longitude": -84.32603
},
{
  "trip_id": 5,
  "latitude": 33.764829,
  "longitude": -84.3257
},
{
  "trip_id": 5,
  "latitude": 33.764815,
  "longitude": -84.325431
},
{
  "trip_id": 5,
  "latitude": 33.764795,
  "longitude": -84.325248
},
{
  "trip_id": 5,
  "latitude": 33.76478,
  "longitude": -84.325132
},
{
  "trip_id": 5,
  "latitude": 33.764776,
  "longitude": -84.325105
},
{
  "trip_id": 5,
  "latitude": 33.764761,
  "longitude": -84.324974
},
{
  "trip_id": 5,
  "latitude": 33.764708,
  "longitude": -84.324623
},
{
  "trip_id": 5,
  "latitude": 33.764624,
  "longitude": -84.324073
},
{
  "trip_id": 5,
  "latitude": 33.764621,
  "longitude": -84.324051
},
{
  "trip_id": 5,
  "latitude": 33.764587,
  "longitude": -84.323825
},
{
  "trip_id": 5,
  "latitude": 33.764564,
  "longitude": -84.323673
},
{
  "trip_id": 5,
  "latitude": 33.764493,
  "longitude": -84.323213
},
{
  "trip_id": 5,
  "latitude": 33.764489,
  "longitude": -84.323186
},
{
  "trip_id": 5,
  "latitude": 33.764445,
  "longitude": -84.322833
},
{
  "trip_id": 5,
  "latitude": 33.764436,
  "longitude": -84.322725
},
{
  "trip_id": 5,
  "latitude": 33.764435,
  "longitude": -84.322709
},
{
  "trip_id": 5,
  "latitude": 33.764433,
  "longitude": -84.322526
},
{
  "trip_id": 5,
  "latitude": 33.764436,
  "longitude": -84.322439
},
{
  "trip_id": 5,
  "latitude": 33.76444,
  "longitude": -84.322301
},
{
  "trip_id": 5,
  "latitude": 33.76444,
  "longitude": -84.322286
},
{
  "trip_id": 5,
  "latitude": 33.764427,
  "longitude": -84.322173
},
{
  "trip_id": 5,
  "latitude": 33.76441,
  "longitude": -84.322161
},
{
  "trip_id": 5,
  "latitude": 33.764393,
  "longitude": -84.322138
},
{
  "trip_id": 5,
  "latitude": 33.764385,
  "longitude": -84.322111
},
{
  "trip_id": 5,
  "latitude": 33.764384,
  "longitude": -84.322097
},
{
  "trip_id": 5,
  "latitude": 33.764384,
  "longitude": -84.322089
},
{
  "trip_id": 5,
  "latitude": 33.764394,
  "longitude": -84.322056
},
{
  "trip_id": 5,
  "latitude": 33.764414,
  "longitude": -84.322032
},
{
  "trip_id": 5,
  "latitude": 33.764353,
  "longitude": -84.321949
},
{
  "trip_id": 5,
  "latitude": 33.764353,
  "longitude": -84.321949
},
{
  "trip_id": 5,
  "latitude": 33.764222,
  "longitude": -84.321685
},
{
  "trip_id": 5,
  "latitude": 33.764217,
  "longitude": -84.321674
},
{
  "trip_id": 5,
  "latitude": 33.764083,
  "longitude": -84.321391
},
{
  "trip_id": 5,
  "latitude": 33.764054,
  "longitude": -84.32133
},
{
  "trip_id": 5,
  "latitude": 33.764004,
  "longitude": -84.321167
},
{
  "trip_id": 5,
  "latitude": 33.763953,
  "longitude": -84.321003
},
{
  "trip_id": 5,
  "latitude": 33.763937,
  "longitude": -84.320946
},
{
  "trip_id": 5,
  "latitude": 33.763889,
  "longitude": -84.320772
},
{
  "trip_id": 5,
  "latitude": 33.763856,
  "longitude": -84.320654
},
{
  "trip_id": 5,
  "latitude": 33.763784,
  "longitude": -84.320399
},
{
  "trip_id": 5,
  "latitude": 33.763778,
  "longitude": -84.320376
},
{
  "trip_id": 5,
  "latitude": 33.763699,
  "longitude": -84.320263
},
{
  "trip_id": 5,
  "latitude": 33.763663,
  "longitude": -84.320231
},
{
  "trip_id": 5,
  "latitude": 33.763564,
  "longitude": -84.320143
},
{
  "trip_id": 5,
  "latitude": 33.763404,
  "longitude": -84.320049
},
{
  "trip_id": 5,
  "latitude": 33.763358,
  "longitude": -84.320022
},
{
  "trip_id": 5,
  "latitude": 33.763259,
  "longitude": -84.319974
},
{
  "trip_id": 5,
  "latitude": 33.763133,
  "longitude": -84.319914
},
{
  "trip_id": 5,
  "latitude": 33.763087,
  "longitude": -84.319892
},
{
  "trip_id": 5,
  "latitude": 33.762927,
  "longitude": -84.319815
},
{
  "trip_id": 5,
  "latitude": 33.762927,
  "longitude": -84.319815
},
{
  "trip_id": 5,
  "latitude": 33.762927,
  "longitude": -84.319815
},
{
  "trip_id": 5,
  "latitude": 33.762857,
  "longitude": -84.319782
},
{
  "trip_id": 5,
  "latitude": 33.762506,
  "longitude": -84.319614
},
{
  "trip_id": 5,
  "latitude": 33.76247,
  "longitude": -84.319597
},
{
  "trip_id": 5,
  "latitude": 33.762638,
  "longitude": -84.319305
},
{
  "trip_id": 5,
  "latitude": 33.762821,
  "longitude": -84.318987
},
{
  "trip_id": 5,
  "latitude": 33.762946,
  "longitude": -84.318769
},
{
  "trip_id": 5,
  "latitude": 33.76301,
  "longitude": -84.318657
},
{
  "trip_id": 5,
  "latitude": 33.763092,
  "longitude": -84.318516
},
{
  "trip_id": 5,
  "latitude": 33.763153,
  "longitude": -84.318413
},
{
  "trip_id": 5,
  "latitude": 33.763242,
  "longitude": -84.318261
},
{
  "trip_id": 5,
  "latitude": 33.763431,
  "longitude": -84.317939
},
{
  "trip_id": 5,
  "latitude": 33.763605,
  "longitude": -84.317644
},
{
  "trip_id": 5,
  "latitude": 33.763751,
  "longitude": -84.317395
},
{
  "trip_id": 5,
  "latitude": 33.76394,
  "longitude": -84.317074
},
{
  "trip_id": 5,
  "latitude": 33.764049,
  "longitude": -84.316888
},
{
  "trip_id": 5,
  "latitude": 33.764128,
  "longitude": -84.316731
},
{
  "trip_id": 5,
  "latitude": 33.764129,
  "longitude": -84.316728
},
{
  "trip_id": 5,
  "latitude": 33.764256,
  "longitude": -84.316457
},
{
  "trip_id": 5,
  "latitude": 33.764327,
  "longitude": -84.316278
},
{
  "trip_id": 5,
  "latitude": 33.764364,
  "longitude": -84.316186
},
{
  "trip_id": 5,
  "latitude": 33.764461,
  "longitude": -84.315895
},
{
  "trip_id": 5,
  "latitude": 33.764465,
  "longitude": -84.315884
},
{
  "trip_id": 5,
  "latitude": 33.764545,
  "longitude": -84.315584
},
{
  "trip_id": 5,
  "latitude": 33.764557,
  "longitude": -84.315533
},
{
  "trip_id": 5,
  "latitude": 33.764583,
  "longitude": -84.315426
},
{
  "trip_id": 5,
  "latitude": 33.764625,
  "longitude": -84.315251
},
{
  "trip_id": 5,
  "latitude": 33.764637,
  "longitude": -84.3152
},
{
  "trip_id": 5,
  "latitude": 33.764691,
  "longitude": -84.314899
},
{
  "trip_id": 5,
  "latitude": 33.764692,
  "longitude": -84.314895
},
{
  "trip_id": 5,
  "latitude": 33.764706,
  "longitude": -84.314813
},
{
  "trip_id": 5,
  "latitude": 33.764724,
  "longitude": -84.314667
},
{
  "trip_id": 5,
  "latitude": 33.764743,
  "longitude": -84.314513
},
{
  "trip_id": 5,
  "latitude": 33.764758,
  "longitude": -84.314388
},
{
  "trip_id": 5,
  "latitude": 33.764772,
  "longitude": -84.314209
},
{
  "trip_id": 5,
  "latitude": 33.7648,
  "longitude": -84.313849
},
{
  "trip_id": 5,
  "latitude": 33.764803,
  "longitude": -84.313813
},
{
  "trip_id": 5,
  "latitude": 33.764827,
  "longitude": -84.313505
},
{
  "trip_id": 5,
  "latitude": 33.76484,
  "longitude": -84.313333
},
{
  "trip_id": 5,
  "latitude": 33.764856,
  "longitude": -84.313058
},
{
  "trip_id": 5,
  "latitude": 33.764872,
  "longitude": -84.312781
},
{
  "trip_id": 5,
  "latitude": 33.764891,
  "longitude": -84.312446
},
{
  "trip_id": 5,
  "latitude": 33.764894,
  "longitude": -84.312414
},
{
  "trip_id": 5,
  "latitude": 33.764918,
  "longitude": -84.312117
},
{
  "trip_id": 5,
  "latitude": 33.764929,
  "longitude": -84.311977
},
{
  "trip_id": 5,
  "latitude": 33.764945,
  "longitude": -84.311797
},
{
  "trip_id": 5,
  "latitude": 33.764964,
  "longitude": -84.311571
},
{
  "trip_id": 5,
  "latitude": 33.76499,
  "longitude": -84.311285
},
{
  "trip_id": 5,
  "latitude": 33.764992,
  "longitude": -84.311267
},
{
  "trip_id": 5,
  "latitude": 33.765009,
  "longitude": -84.311082
},
{
  "trip_id": 5,
  "latitude": 33.765026,
  "longitude": -84.310909
},
{
  "trip_id": 5,
  "latitude": 33.765026,
  "longitude": -84.310908
},
{
  "trip_id": 5,
  "latitude": 33.765093,
  "longitude": -84.310495
},
{
  "trip_id": 5,
  "latitude": 33.765112,
  "longitude": -84.310364
},
{
  "trip_id": 5,
  "latitude": 33.765128,
  "longitude": -84.310271
},
{
  "trip_id": 5,
  "latitude": 33.765204,
  "longitude": -84.309822
},
{
  "trip_id": 5,
  "latitude": 33.765245,
  "longitude": -84.309583
},
{
  "trip_id": 5,
  "latitude": 33.765253,
  "longitude": -84.309539
},
{
  "trip_id": 5,
  "latitude": 33.765335,
  "longitude": -84.309206
},
{
  "trip_id": 5,
  "latitude": 33.765393,
  "longitude": -84.308968
},
{
  "trip_id": 5,
  "latitude": 33.765436,
  "longitude": -84.308835
},
{
  "trip_id": 5,
  "latitude": 33.765573,
  "longitude": -84.308414
},
{
  "trip_id": 5,
  "latitude": 33.765699,
  "longitude": -84.308028
},
{
  "trip_id": 5,
  "latitude": 33.765702,
  "longitude": -84.308018
},
{
  "trip_id": 5,
  "latitude": 33.765829,
  "longitude": -84.307654
},
{
  "trip_id": 5,
  "latitude": 33.765948,
  "longitude": -84.307312
},
{
  "trip_id": 5,
  "latitude": 33.765948,
  "longitude": -84.307312
},
{
  "trip_id": 5,
  "latitude": 33.765935,
  "longitude": -84.307306
},
{
  "trip_id": 5,
  "latitude": 33.765659,
  "longitude": -84.307186
},
{
  "trip_id": 5,
  "latitude": 33.765504,
  "longitude": -84.307119
},
{
  "trip_id": 5,
  "latitude": 33.765414,
  "longitude": -84.307105
},
{
  "trip_id": 5,
  "latitude": 33.765164,
  "longitude": -84.306982
},
{
  "trip_id": 5,
  "latitude": 33.764943,
  "longitude": -84.306873
},
{
  "trip_id": 5,
  "latitude": 33.764943,
  "longitude": -84.306873
},
{
  "trip_id": 5,
  "latitude": 33.764943,
  "longitude": -84.306873
},
{
  "trip_id": 5,
  "latitude": 33.764943,
  "longitude": -84.306873
},
{
  "trip_id": 5,
  "latitude": 33.764943,
  "longitude": -84.306873
},
{
  "trip_id": 7,
  "latitude": 33.777787,
  "longitude": -84.365213
},
{
  "trip_id": 7,
  "latitude": 33.777787,
  "longitude": -84.365215
},
{
  "trip_id": 7,
  "latitude": 33.777785,
  "longitude": -84.365214
},
{
  "trip_id": 7,
  "latitude": 33.777791,
  "longitude": -84.365215
},
{
  "trip_id": 7,
  "latitude": 33.777785,
  "longitude": -84.365209
},
{
  "trip_id": 7,
  "latitude": 33.77779,
  "longitude": -84.365209
},
{
  "trip_id": 7,
  "latitude": 33.777782,
  "longitude": -84.365199
},
{
  "trip_id": 7,
  "latitude": 33.777766,
  "longitude": -84.365173
},
{
  "trip_id": 7,
  "latitude": 33.777753,
  "longitude": -84.365143
},
{
  "trip_id": 7,
  "latitude": 33.777754,
  "longitude": -84.365124
},
{
  "trip_id": 7,
  "latitude": 33.777755,
  "longitude": -84.365068
},
{
  "trip_id": 7,
  "latitude": 33.777754,
  "longitude": -84.365035
},
{
  "trip_id": 7,
  "latitude": 33.777754,
  "longitude": -84.364998
},
{
  "trip_id": 7,
  "latitude": 33.777757,
  "longitude": -84.364905
},
{
  "trip_id": 7,
  "latitude": 33.777758,
  "longitude": -84.364861
},
{
  "trip_id": 7,
  "latitude": 33.777765,
  "longitude": -84.36477
},
{
  "trip_id": 7,
  "latitude": 33.777769,
  "longitude": -84.36468
},
{
  "trip_id": 7,
  "latitude": 33.777759,
  "longitude": -84.364634
},
{
  "trip_id": 7,
  "latitude": 33.777679,
  "longitude": -84.364595
},
{
  "trip_id": 7,
  "latitude": 33.777473,
  "longitude": -84.364617
},
{
  "trip_id": 7,
  "latitude": 33.777421,
  "longitude": -84.364614
},
{
  "trip_id": 7,
  "latitude": 33.777318,
  "longitude": -84.3646
},
{
  "trip_id": 7,
  "latitude": 33.777172,
  "longitude": -84.364578
},
{
  "trip_id": 7,
  "latitude": 33.777121,
  "longitude": -84.364571
},
{
  "trip_id": 7,
  "latitude": 33.777004,
  "longitude": -84.364561
},
{
  "trip_id": 7,
  "latitude": 33.776905,
  "longitude": -84.364556
},
{
  "trip_id": 7,
  "latitude": 33.776877,
  "longitude": -84.364545
},
{
  "trip_id": 7,
  "latitude": 33.776844,
  "longitude": -84.364538
},
{
  "trip_id": 7,
  "latitude": 33.776818,
  "longitude": -84.364595
},
{
  "trip_id": 7,
  "latitude": 33.776815,
  "longitude": -84.364638
},
{
  "trip_id": 7,
  "latitude": 33.776805,
  "longitude": -84.364744
},
{
  "trip_id": 7,
  "latitude": 33.776798,
  "longitude": -84.36489
},
{
  "trip_id": 7,
  "latitude": 33.776797,
  "longitude": -84.364974
},
{
  "trip_id": 7,
  "latitude": 33.776777,
  "longitude": -84.36512
},
{
  "trip_id": 7,
  "latitude": 33.776763,
  "longitude": -84.365231
},
{
  "trip_id": 7,
  "latitude": 33.776765,
  "longitude": -84.365252
},
{
  "trip_id": 7,
  "latitude": 33.776763,
  "longitude": -84.365269
},
{
  "trip_id": 7,
  "latitude": 33.776767,
  "longitude": -84.365284
},
{
  "trip_id": 7,
  "latitude": 33.776762,
  "longitude": -84.36531
},
{
  "trip_id": 7,
  "latitude": 33.776758,
  "longitude": -84.365312
},
{
  "trip_id": 7,
  "latitude": 33.776761,
  "longitude": -84.365315
},
{
  "trip_id": 7,
  "latitude": 33.776761,
  "longitude": -84.365325
},
{
  "trip_id": 7,
  "latitude": 33.776744,
  "longitude": -84.365332
},
{
  "trip_id": 7,
  "latitude": 33.776721,
  "longitude": -84.365332
},
{
  "trip_id": 7,
  "latitude": 33.776647,
  "longitude": -84.365328
},
{
  "trip_id": 7,
  "latitude": 33.776541,
  "longitude": -84.365305
},
{
  "trip_id": 7,
  "latitude": 33.776445,
  "longitude": -84.365283
},
{
  "trip_id": 7,
  "latitude": 33.776351,
  "longitude": -84.365264
},
{
  "trip_id": 7,
  "latitude": 33.776302,
  "longitude": -84.365252
},
{
  "trip_id": 7,
  "latitude": 33.776205,
  "longitude": -84.365227
},
{
  "trip_id": 7,
  "latitude": 33.776111,
  "longitude": -84.365214
},
{
  "trip_id": 7,
  "latitude": 33.776059,
  "longitude": -84.365193
},
{
  "trip_id": 7,
  "latitude": 33.77596,
  "longitude": -84.365192
},
{
  "trip_id": 7,
  "latitude": 33.7759,
  "longitude": -84.365179
},
{
  "trip_id": 7,
  "latitude": 33.775786,
  "longitude": -84.365153
},
{
  "trip_id": 7,
  "latitude": 33.77573,
  "longitude": -84.365139
},
{
  "trip_id": 7,
  "latitude": 33.775562,
  "longitude": -84.365093
},
{
  "trip_id": 7,
  "latitude": 33.775448,
  "longitude": -84.36506
},
{
  "trip_id": 7,
  "latitude": 33.77534,
  "longitude": -84.365028
},
{
  "trip_id": 7,
  "latitude": 33.775288,
  "longitude": -84.365022
},
{
  "trip_id": 7,
  "latitude": 33.775229,
  "longitude": -84.365013
},
{
  "trip_id": 7,
  "latitude": 33.775119,
  "longitude": -84.364991
},
{
  "trip_id": 7,
  "latitude": 33.775066,
  "longitude": -84.364983
},
{
  "trip_id": 7,
  "latitude": 33.77495,
  "longitude": -84.364954
},
{
  "trip_id": 7,
  "latitude": 33.774844,
  "longitude": -84.364926
},
{
  "trip_id": 7,
  "latitude": 33.774791,
  "longitude": -84.364901
},
{
  "trip_id": 7,
  "latitude": 33.774681,
  "longitude": -84.364885
},
{
  "trip_id": 7,
  "latitude": 33.774583,
  "longitude": -84.364868
},
{
  "trip_id": 7,
  "latitude": 33.774528,
  "longitude": -84.364856
},
{
  "trip_id": 7,
  "latitude": 33.774477,
  "longitude": -84.364846
},
{
  "trip_id": 7,
  "latitude": 33.774422,
  "longitude": -84.364827
},
{
  "trip_id": 7,
  "latitude": 33.774307,
  "longitude": -84.364802
},
{
  "trip_id": 7,
  "latitude": 33.774256,
  "longitude": -84.364797
},
{
  "trip_id": 7,
  "latitude": 33.774201,
  "longitude": -84.36479
},
{
  "trip_id": 7,
  "latitude": 33.774092,
  "longitude": -84.364773
},
{
  "trip_id": 7,
  "latitude": 33.774046,
  "longitude": -84.364766
},
{
  "trip_id": 7,
  "latitude": 33.773937,
  "longitude": -84.364733
},
{
  "trip_id": 7,
  "latitude": 33.773832,
  "longitude": -84.364706
},
{
  "trip_id": 7,
  "latitude": 33.773733,
  "longitude": -84.364684
},
{
  "trip_id": 7,
  "latitude": 33.773687,
  "longitude": -84.364676
},
{
  "trip_id": 7,
  "latitude": 33.773594,
  "longitude": -84.36465
},
{
  "trip_id": 7,
  "latitude": 33.773546,
  "longitude": -84.36464
},
{
  "trip_id": 7,
  "latitude": 33.773491,
  "longitude": -84.364625
},
{
  "trip_id": 7,
  "latitude": 33.773377,
  "longitude": -84.364606
},
{
  "trip_id": 7,
  "latitude": 33.773349,
  "longitude": -84.364597
},
{
  "trip_id": 7,
  "latitude": 33.773276,
  "longitude": -84.364584
},
{
  "trip_id": 7,
  "latitude": 33.773187,
  "longitude": -84.364557
},
{
  "trip_id": 7,
  "latitude": 33.773092,
  "longitude": -84.364533
},
{
  "trip_id": 7,
  "latitude": 33.773038,
  "longitude": -84.364519
},
{
  "trip_id": 7,
  "latitude": 33.772938,
  "longitude": -84.36447
},
{
  "trip_id": 7,
  "latitude": 33.772822,
  "longitude": -84.364434
},
{
  "trip_id": 7,
  "latitude": 33.772764,
  "longitude": -84.364435
},
{
  "trip_id": 7,
  "latitude": 33.772708,
  "longitude": -84.364425
},
{
  "trip_id": 7,
  "latitude": 33.772609,
  "longitude": -84.364407
},
{
  "trip_id": 7,
  "latitude": 33.772505,
  "longitude": -84.364371
},
{
  "trip_id": 7,
  "latitude": 33.772392,
  "longitude": -84.364351
},
{
  "trip_id": 7,
  "latitude": 33.772286,
  "longitude": -84.364328
},
{
  "trip_id": 7,
  "latitude": 33.772156,
  "longitude": -84.364307
},
{
  "trip_id": 7,
  "latitude": 33.772052,
  "longitude": -84.364265
},
{
  "trip_id": 7,
  "latitude": 33.771946,
  "longitude": -84.364228
},
{
  "trip_id": 7,
  "latitude": 33.771836,
  "longitude": -84.364198
},
{
  "trip_id": 7,
  "latitude": 33.771785,
  "longitude": -84.364182
},
{
  "trip_id": 7,
  "latitude": 33.771728,
  "longitude": -84.364157
},
{
  "trip_id": 7,
  "latitude": 33.77168,
  "longitude": -84.364134
},
{
  "trip_id": 7,
  "latitude": 33.771529,
  "longitude": -84.364054
},
{
  "trip_id": 7,
  "latitude": 33.771404,
  "longitude": -84.364034
},
{
  "trip_id": 7,
  "latitude": 33.771351,
  "longitude": -84.364049
},
{
  "trip_id": 7,
  "latitude": 33.771246,
  "longitude": -84.364017
},
{
  "trip_id": 7,
  "latitude": 33.771194,
  "longitude": -84.363992
},
{
  "trip_id": 7,
  "latitude": 33.771141,
  "longitude": -84.363972
},
{
  "trip_id": 7,
  "latitude": 33.77103,
  "longitude": -84.363915
},
{
  "trip_id": 7,
  "latitude": 33.770945,
  "longitude": -84.363821
},
{
  "trip_id": 7,
  "latitude": 33.770893,
  "longitude": -84.363786
},
{
  "trip_id": 7,
  "latitude": 33.770839,
  "longitude": -84.363755
},
{
  "trip_id": 7,
  "latitude": 33.770787,
  "longitude": -84.363724
},
{
  "trip_id": 7,
  "latitude": 33.770739,
  "longitude": -84.363687
},
{
  "trip_id": 7,
  "latitude": 33.770634,
  "longitude": -84.363604
},
{
  "trip_id": 7,
  "latitude": 33.77058,
  "longitude": -84.363578
},
{
  "trip_id": 7,
  "latitude": 33.770471,
  "longitude": -84.363513
},
{
  "trip_id": 7,
  "latitude": 33.770413,
  "longitude": -84.363475
},
{
  "trip_id": 7,
  "latitude": 33.770359,
  "longitude": -84.363441
},
{
  "trip_id": 7,
  "latitude": 33.770309,
  "longitude": -84.36341
},
{
  "trip_id": 7,
  "latitude": 33.77021,
  "longitude": -84.363338
},
{
  "trip_id": 7,
  "latitude": 33.770165,
  "longitude": -84.3633
},
{
  "trip_id": 7,
  "latitude": 33.770123,
  "longitude": -84.36327
},
{
  "trip_id": 7,
  "latitude": 33.770028,
  "longitude": -84.363199
},
{
  "trip_id": 7,
  "latitude": 33.769933,
  "longitude": -84.363127
},
{
  "trip_id": 7,
  "latitude": 33.769883,
  "longitude": -84.363091
},
{
  "trip_id": 7,
  "latitude": 33.769839,
  "longitude": -84.363058
},
{
  "trip_id": 7,
  "latitude": 33.769746,
  "longitude": -84.362982
},
{
  "trip_id": 7,
  "latitude": 33.769654,
  "longitude": -84.362913
},
{
  "trip_id": 7,
  "latitude": 33.769564,
  "longitude": -84.362846
},
{
  "trip_id": 7,
  "latitude": 33.76948,
  "longitude": -84.362771
},
{
  "trip_id": 7,
  "latitude": 33.769465,
  "longitude": -84.362728
},
{
  "trip_id": 7,
  "latitude": 33.769404,
  "longitude": -84.362686
},
{
  "trip_id": 7,
  "latitude": 33.769309,
  "longitude": -84.362614
},
{
  "trip_id": 7,
  "latitude": 33.769259,
  "longitude": -84.362574
},
{
  "trip_id": 7,
  "latitude": 33.769165,
  "longitude": -84.362505
},
{
  "trip_id": 7,
  "latitude": 33.769078,
  "longitude": -84.362435
},
{
  "trip_id": 7,
  "latitude": 33.76899,
  "longitude": -84.362343
},
{
  "trip_id": 7,
  "latitude": 33.768906,
  "longitude": -84.362245
},
{
  "trip_id": 7,
  "latitude": 33.768865,
  "longitude": -84.362193
},
{
  "trip_id": 7,
  "latitude": 33.768768,
  "longitude": -84.3621
},
{
  "trip_id": 7,
  "latitude": 33.768685,
  "longitude": -84.362007
},
{
  "trip_id": 7,
  "latitude": 33.768606,
  "longitude": -84.36191
},
{
  "trip_id": 7,
  "latitude": 33.768535,
  "longitude": -84.361816
},
{
  "trip_id": 7,
  "latitude": 33.768486,
  "longitude": -84.36176
},
{
  "trip_id": 7,
  "latitude": 33.768447,
  "longitude": -84.361711
},
{
  "trip_id": 7,
  "latitude": 33.768364,
  "longitude": -84.361632
},
{
  "trip_id": 7,
  "latitude": 33.768319,
  "longitude": -84.361585
},
{
  "trip_id": 7,
  "latitude": 33.768275,
  "longitude": -84.361537
},
{
  "trip_id": 7,
  "latitude": 33.768189,
  "longitude": -84.361459
},
{
  "trip_id": 7,
  "latitude": 33.768057,
  "longitude": -84.361329
},
{
  "trip_id": 7,
  "latitude": 33.768017,
  "longitude": -84.361283
},
{
  "trip_id": 7,
  "latitude": 33.767936,
  "longitude": -84.361195
},
{
  "trip_id": 7,
  "latitude": 33.767848,
  "longitude": -84.361105
},
{
  "trip_id": 7,
  "latitude": 33.7678,
  "longitude": -84.36105
},
{
  "trip_id": 7,
  "latitude": 33.767656,
  "longitude": -84.360912
},
{
  "trip_id": 7,
  "latitude": 33.767558,
  "longitude": -84.360826
},
{
  "trip_id": 7,
  "latitude": 33.767476,
  "longitude": -84.360727
},
{
  "trip_id": 7,
  "latitude": 33.767367,
  "longitude": -84.360637
},
{
  "trip_id": 7,
  "latitude": 33.76732,
  "longitude": -84.360586
},
{
  "trip_id": 7,
  "latitude": 33.76723,
  "longitude": -84.36049
},
{
  "trip_id": 7,
  "latitude": 33.767134,
  "longitude": -84.360398
},
{
  "trip_id": 7,
  "latitude": 33.766986,
  "longitude": -84.360274
},
{
  "trip_id": 7,
  "latitude": 33.766937,
  "longitude": -84.360231
},
{
  "trip_id": 7,
  "latitude": 33.76684,
  "longitude": -84.360148
},
{
  "trip_id": 7,
  "latitude": 33.766741,
  "longitude": -84.360084
},
{
  "trip_id": 7,
  "latitude": 33.766629,
  "longitude": -84.36001
},
{
  "trip_id": 7,
  "latitude": 33.766574,
  "longitude": -84.359974
},
{
  "trip_id": 7,
  "latitude": 33.766462,
  "longitude": -84.359908
},
{
  "trip_id": 7,
  "latitude": 33.766406,
  "longitude": -84.359875
},
{
  "trip_id": 7,
  "latitude": 33.766301,
  "longitude": -84.359822
},
{
  "trip_id": 7,
  "latitude": 33.766194,
  "longitude": -84.359775
},
{
  "trip_id": 7,
  "latitude": 33.766083,
  "longitude": -84.359729
},
{
  "trip_id": 7,
  "latitude": 33.766023,
  "longitude": -84.35971
},
{
  "trip_id": 7,
  "latitude": 33.765911,
  "longitude": -84.359669
},
{
  "trip_id": 7,
  "latitude": 33.765804,
  "longitude": -84.359632
},
{
  "trip_id": 7,
  "latitude": 33.765733,
  "longitude": -84.359627
},
{
  "trip_id": 7,
  "latitude": 33.765662,
  "longitude": -84.359616
},
{
  "trip_id": 7,
  "latitude": 33.76554,
  "longitude": -84.359606
},
{
  "trip_id": 7,
  "latitude": 33.76547,
  "longitude": -84.359582
},
{
  "trip_id": 7,
  "latitude": 33.76535,
  "longitude": -84.359558
},
{
  "trip_id": 7,
  "latitude": 33.765292,
  "longitude": -84.359557
},
{
  "trip_id": 7,
  "latitude": 33.765163,
  "longitude": -84.359561
},
{
  "trip_id": 7,
  "latitude": 33.765048,
  "longitude": -84.359563
},
{
  "trip_id": 7,
  "latitude": 33.764983,
  "longitude": -84.35956
},
{
  "trip_id": 7,
  "latitude": 33.764922,
  "longitude": -84.359559
},
{
  "trip_id": 7,
  "latitude": 33.764862,
  "longitude": -84.359556
},
{
  "trip_id": 7,
  "latitude": 33.764748,
  "longitude": -84.359555
},
{
  "trip_id": 7,
  "latitude": 33.76465,
  "longitude": -84.359544
},
{
  "trip_id": 7,
  "latitude": 33.764604,
  "longitude": -84.359543
},
{
  "trip_id": 7,
  "latitude": 33.764557,
  "longitude": -84.359541
},
{
  "trip_id": 7,
  "latitude": 33.76446,
  "longitude": -84.359559
},
{
  "trip_id": 7,
  "latitude": 33.764397,
  "longitude": -84.359577
},
{
  "trip_id": 7,
  "latitude": 33.764254,
  "longitude": -84.359568
},
{
  "trip_id": 7,
  "latitude": 33.764201,
  "longitude": -84.359579
},
{
  "trip_id": 7,
  "latitude": 33.764141,
  "longitude": -84.359507
},
{
  "trip_id": 7,
  "latitude": 33.764102,
  "longitude": -84.359381
},
{
  "trip_id": 7,
  "latitude": 33.764093,
  "longitude": -84.35931
},
{
  "trip_id": 7,
  "latitude": 33.7641,
  "longitude": -84.359154
},
{
  "trip_id": 7,
  "latitude": 33.764132,
  "longitude": -84.35908
},
{
  "trip_id": 7,
  "latitude": 33.764187,
  "longitude": -84.358939
},
{
  "trip_id": 7,
  "latitude": 33.764197,
  "longitude": -84.358805
},
{
  "trip_id": 7,
  "latitude": 33.764192,
  "longitude": -84.358744
},
{
  "trip_id": 7,
  "latitude": 33.764187,
  "longitude": -84.358683
},
{
  "trip_id": 7,
  "latitude": 33.764184,
  "longitude": -84.35862
},
{
  "trip_id": 7,
  "latitude": 33.764189,
  "longitude": -84.358516
},
{
  "trip_id": 7,
  "latitude": 33.764185,
  "longitude": -84.358477
},
{
  "trip_id": 7,
  "latitude": 33.764218,
  "longitude": -84.358386
},
{
  "trip_id": 7,
  "latitude": 33.764248,
  "longitude": -84.358322
},
{
  "trip_id": 7,
  "latitude": 33.764287,
  "longitude": -84.358213
},
{
  "trip_id": 7,
  "latitude": 33.764316,
  "longitude": -84.358114
},
{
  "trip_id": 7,
  "latitude": 33.764323,
  "longitude": -84.357988
},
{
  "trip_id": 7,
  "latitude": 33.764314,
  "longitude": -84.357934
},
{
  "trip_id": 7,
  "latitude": 33.764303,
  "longitude": -84.357826
},
{
  "trip_id": 7,
  "latitude": 33.764288,
  "longitude": -84.357766
},
{
  "trip_id": 7,
  "latitude": 33.764282,
  "longitude": -84.357715
},
{
  "trip_id": 7,
  "latitude": 33.76427,
  "longitude": -84.357614
},
{
  "trip_id": 7,
  "latitude": 33.764275,
  "longitude": -84.357573
},
{
  "trip_id": 7,
  "latitude": 33.764282,
  "longitude": -84.357505
},
{
  "trip_id": 7,
  "latitude": 33.764292,
  "longitude": -84.357463
},
{
  "trip_id": 7,
  "latitude": 33.764317,
  "longitude": -84.357426
},
{
  "trip_id": 7,
  "latitude": 33.764322,
  "longitude": -84.357358
},
{
  "trip_id": 7,
  "latitude": 33.764321,
  "longitude": -84.357269
},
{
  "trip_id": 7,
  "latitude": 33.76432,
  "longitude": -84.357221
},
{
  "trip_id": 7,
  "latitude": 33.764321,
  "longitude": -84.357165
},
{
  "trip_id": 7,
  "latitude": 33.764335,
  "longitude": -84.35697
},
{
  "trip_id": 7,
  "latitude": 33.764334,
  "longitude": -84.356855
},
{
  "trip_id": 7,
  "latitude": 33.764322,
  "longitude": -84.356677
},
{
  "trip_id": 7,
  "latitude": 33.764319,
  "longitude": -84.35662
},
{
  "trip_id": 7,
  "latitude": 33.764322,
  "longitude": -84.356559
},
{
  "trip_id": 7,
  "latitude": 33.764325,
  "longitude": -84.356501
},
{
  "trip_id": 7,
  "latitude": 33.764355,
  "longitude": -84.356403
},
{
  "trip_id": 7,
  "latitude": 33.764401,
  "longitude": -84.356311
},
{
  "trip_id": 7,
  "latitude": 33.764452,
  "longitude": -84.35622
},
{
  "trip_id": 7,
  "latitude": 33.764482,
  "longitude": -84.356177
},
{
  "trip_id": 7,
  "latitude": 33.764514,
  "longitude": -84.356139
},
{
  "trip_id": 7,
  "latitude": 33.764546,
  "longitude": -84.356096
},
{
  "trip_id": 7,
  "latitude": 33.764617,
  "longitude": -84.355998
},
{
  "trip_id": 7,
  "latitude": 33.764687,
  "longitude": -84.35591
},
{
  "trip_id": 7,
  "latitude": 33.764758,
  "longitude": -84.35582
},
{
  "trip_id": 7,
  "latitude": 33.7648,
  "longitude": -84.355766
},
{
  "trip_id": 7,
  "latitude": 33.764879,
  "longitude": -84.355667
},
{
  "trip_id": 7,
  "latitude": 33.764957,
  "longitude": -84.355571
},
{
  "trip_id": 7,
  "latitude": 33.765006,
  "longitude": -84.355533
},
{
  "trip_id": 7,
  "latitude": 33.765054,
  "longitude": -84.35551
},
{
  "trip_id": 7,
  "latitude": 33.765102,
  "longitude": -84.355484
},
{
  "trip_id": 7,
  "latitude": 33.765212,
  "longitude": -84.355435
},
{
  "trip_id": 7,
  "latitude": 33.765269,
  "longitude": -84.355423
},
{
  "trip_id": 7,
  "latitude": 33.765363,
  "longitude": -84.355426
},
{
  "trip_id": 7,
  "latitude": 33.765484,
  "longitude": -84.355429
},
{
  "trip_id": 7,
  "latitude": 33.765586,
  "longitude": -84.355423
},
{
  "trip_id": 7,
  "latitude": 33.765634,
  "longitude": -84.35544
},
{
  "trip_id": 7,
  "latitude": 33.765743,
  "longitude": -84.355442
},
{
  "trip_id": 7,
  "latitude": 33.765797,
  "longitude": -84.355431
},
{
  "trip_id": 7,
  "latitude": 33.765853,
  "longitude": -84.355429
},
{
  "trip_id": 7,
  "latitude": 33.765968,
  "longitude": -84.355417
},
{
  "trip_id": 7,
  "latitude": 33.766022,
  "longitude": -84.355398
},
{
  "trip_id": 7,
  "latitude": 33.766135,
  "longitude": -84.355331
},
{
  "trip_id": 7,
  "latitude": 33.766228,
  "longitude": -84.355273
},
{
  "trip_id": 7,
  "latitude": 33.766274,
  "longitude": -84.355235
},
{
  "trip_id": 7,
  "latitude": 33.766366,
  "longitude": -84.355173
},
{
  "trip_id": 7,
  "latitude": 33.766451,
  "longitude": -84.355087
},
{
  "trip_id": 7,
  "latitude": 33.766501,
  "longitude": -84.355043
},
{
  "trip_id": 7,
  "latitude": 33.766543,
  "longitude": -84.354994
},
{
  "trip_id": 7,
  "latitude": 33.766625,
  "longitude": -84.354897
},
{
  "trip_id": 7,
  "latitude": 33.766673,
  "longitude": -84.354855
},
{
  "trip_id": 7,
  "latitude": 33.766718,
  "longitude": -84.354829
},
{
  "trip_id": 7,
  "latitude": 33.766807,
  "longitude": -84.354769
},
{
  "trip_id": 7,
  "latitude": 33.766894,
  "longitude": -84.354702
},
{
  "trip_id": 7,
  "latitude": 33.766954,
  "longitude": -84.35468
},
{
  "trip_id": 7,
  "latitude": 33.767038,
  "longitude": -84.354632
},
{
  "trip_id": 7,
  "latitude": 33.767129,
  "longitude": -84.354569
},
{
  "trip_id": 7,
  "latitude": 33.767223,
  "longitude": -84.354482
},
{
  "trip_id": 7,
  "latitude": 33.767314,
  "longitude": -84.354416
},
{
  "trip_id": 7,
  "latitude": 33.767368,
  "longitude": -84.354382
},
{
  "trip_id": 7,
  "latitude": 33.767472,
  "longitude": -84.35429
},
{
  "trip_id": 7,
  "latitude": 33.767587,
  "longitude": -84.354197
},
{
  "trip_id": 7,
  "latitude": 33.76772,
  "longitude": -84.354118
},
{
  "trip_id": 7,
  "latitude": 33.767864,
  "longitude": -84.354015
},
{
  "trip_id": 7,
  "latitude": 33.767937,
  "longitude": -84.353956
},
{
  "trip_id": 7,
  "latitude": 33.768073,
  "longitude": -84.353836
},
{
  "trip_id": 7,
  "latitude": 33.768194,
  "longitude": -84.353679
},
{
  "trip_id": 7,
  "latitude": 33.768248,
  "longitude": -84.353587
},
{
  "trip_id": 7,
  "latitude": 33.768347,
  "longitude": -84.353394
},
{
  "trip_id": 7,
  "latitude": 33.76839,
  "longitude": -84.353297
},
{
  "trip_id": 7,
  "latitude": 33.76843,
  "longitude": -84.35321
},
{
  "trip_id": 7,
  "latitude": 33.768474,
  "longitude": -84.353127
},
{
  "trip_id": 7,
  "latitude": 33.768569,
  "longitude": -84.352973
},
{
  "trip_id": 7,
  "latitude": 33.768629,
  "longitude": -84.352919
},
{
  "trip_id": 7,
  "latitude": 33.768699,
  "longitude": -84.352874
},
{
  "trip_id": 7,
  "latitude": 33.768818,
  "longitude": -84.352773
},
{
  "trip_id": 7,
  "latitude": 33.768865,
  "longitude": -84.352713
},
{
  "trip_id": 7,
  "latitude": 33.768935,
  "longitude": -84.352559
},
{
  "trip_id": 7,
  "latitude": 33.768952,
  "longitude": -84.352483
},
{
  "trip_id": 7,
  "latitude": 33.768974,
  "longitude": -84.35234
},
{
  "trip_id": 7,
  "latitude": 33.769002,
  "longitude": -84.35222
},
{
  "trip_id": 7,
  "latitude": 33.769021,
  "longitude": -84.35216
},
{
  "trip_id": 7,
  "latitude": 33.769058,
  "longitude": -84.352048
},
{
  "trip_id": 7,
  "latitude": 33.769088,
  "longitude": -84.35193
},
{
  "trip_id": 7,
  "latitude": 33.769113,
  "longitude": -84.351834
},
{
  "trip_id": 7,
  "latitude": 33.76913,
  "longitude": -84.351753
},
{
  "trip_id": 7,
  "latitude": 33.769139,
  "longitude": -84.35169
},
{
  "trip_id": 7,
  "latitude": 33.769161,
  "longitude": -84.351546
},
{
  "trip_id": 7,
  "latitude": 33.769186,
  "longitude": -84.351471
},
{
  "trip_id": 7,
  "latitude": 33.769214,
  "longitude": -84.351397
},
{
  "trip_id": 7,
  "latitude": 33.769367,
  "longitude": -84.351183
},
{
  "trip_id": 7,
  "latitude": 33.769433,
  "longitude": -84.35111
},
{
  "trip_id": 7,
  "latitude": 33.769576,
  "longitude": -84.350948
},
{
  "trip_id": 7,
  "latitude": 33.769676,
  "longitude": -84.350779
},
{
  "trip_id": 7,
  "latitude": 33.76972,
  "longitude": -84.350606
},
{
  "trip_id": 7,
  "latitude": 33.769757,
  "longitude": -84.350396
},
{
  "trip_id": 7,
  "latitude": 33.769774,
  "longitude": -84.350289
},
{
  "trip_id": 7,
  "latitude": 33.76981,
  "longitude": -84.350063
},
{
  "trip_id": 7,
  "latitude": 33.769821,
  "longitude": -84.349958
},
{
  "trip_id": 7,
  "latitude": 33.769842,
  "longitude": -84.349748
},
{
  "trip_id": 7,
  "latitude": 33.769845,
  "longitude": -84.349576
},
{
  "trip_id": 7,
  "latitude": 33.769846,
  "longitude": -84.349431
},
{
  "trip_id": 7,
  "latitude": 33.769854,
  "longitude": -84.349374
},
{
  "trip_id": 7,
  "latitude": 33.769865,
  "longitude": -84.349301
},
{
  "trip_id": 7,
  "latitude": 33.76988,
  "longitude": -84.349252
},
{
  "trip_id": 7,
  "latitude": 33.769888,
  "longitude": -84.349232
},
{
  "trip_id": 7,
  "latitude": 33.769875,
  "longitude": -84.349234
},
{
  "trip_id": 7,
  "latitude": 33.769865,
  "longitude": -84.349227
},
{
  "trip_id": 7,
  "latitude": 33.769861,
  "longitude": -84.349226
},
{
  "trip_id": 7,
  "latitude": 33.769864,
  "longitude": -84.349223
},
{
  "trip_id": 7,
  "latitude": 33.769864,
  "longitude": -84.349224
},
{
  "trip_id": 7,
  "latitude": 33.769868,
  "longitude": -84.349224
},
{
  "trip_id": 7,
  "latitude": 33.769871,
  "longitude": -84.349219
},
{
  "trip_id": 7,
  "latitude": 33.769872,
  "longitude": -84.349212
},
{
  "trip_id": 7,
  "latitude": 33.769873,
  "longitude": -84.349214
},
{
  "trip_id": 7,
  "latitude": 33.769872,
  "longitude": -84.349218
},
{
  "trip_id": 7,
  "latitude": 33.769877,
  "longitude": -84.349218
},
{
  "trip_id": 7,
  "latitude": 33.769879,
  "longitude": -84.34922
},
{
  "trip_id": 7,
  "latitude": 33.769876,
  "longitude": -84.349225
},
{
  "trip_id": 7,
  "latitude": 33.769869,
  "longitude": -84.349225
},
{
  "trip_id": 7,
  "latitude": 33.769853,
  "longitude": -84.349224
},
{
  "trip_id": 7,
  "latitude": 33.76984,
  "longitude": -84.349217
},
{
  "trip_id": 7,
  "latitude": 33.769836,
  "longitude": -84.349212
},
{
  "trip_id": 7,
  "latitude": 33.769837,
  "longitude": -84.3492
},
{
  "trip_id": 7,
  "latitude": 33.769829,
  "longitude": -84.3492
},
{
  "trip_id": 7,
  "latitude": 33.769825,
  "longitude": -84.349202
},
{
  "trip_id": 7,
  "latitude": 33.769823,
  "longitude": -84.349205
},
{
  "trip_id": 7,
  "latitude": 33.76982,
  "longitude": -84.349211
},
{
  "trip_id": 7,
  "latitude": 33.76982,
  "longitude": -84.349212
},
{
  "trip_id": 7,
  "latitude": 33.76982,
  "longitude": -84.349214
},
{
  "trip_id": 7,
  "latitude": 33.769819,
  "longitude": -84.349215
},
{
  "trip_id": 7,
  "latitude": 33.769818,
  "longitude": -84.349216
},
{
  "trip_id": 7,
  "latitude": 33.769818,
  "longitude": -84.349218
},
{
  "trip_id": 7,
  "latitude": 33.769817,
  "longitude": -84.349219
},
{
  "trip_id": 7,
  "latitude": 33.769818,
  "longitude": -84.34922
},
{
  "trip_id": 7,
  "latitude": 33.769819,
  "longitude": -84.34922
},
{
  "trip_id": 7,
  "latitude": 33.769819,
  "longitude": -84.349221
},
{
  "trip_id": 7,
  "latitude": 33.76982,
  "longitude": -84.349221
},
{
  "trip_id": 7,
  "latitude": 33.76982,
  "longitude": -84.349222
},
{
  "trip_id": 7,
  "latitude": 33.769821,
  "longitude": -84.349222
},
{
  "trip_id": 7,
  "latitude": 33.769821,
  "longitude": -84.349223
},
{
  "trip_id": 7,
  "latitude": 33.769822,
  "longitude": -84.349219
},
{
  "trip_id": 7,
  "latitude": 33.769823,
  "longitude": -84.34921
},
{
  "trip_id": 7,
  "latitude": 33.769835,
  "longitude": -84.349143
},
{
  "trip_id": 7,
  "latitude": 33.769846,
  "longitude": -84.349072
},
{
  "trip_id": 7,
  "latitude": 33.769852,
  "longitude": -84.349033
},
{
  "trip_id": 7,
  "latitude": 33.769865,
  "longitude": -84.348957
},
{
  "trip_id": 7,
  "latitude": 33.769891,
  "longitude": -84.348856
},
{
  "trip_id": 7,
  "latitude": 33.770004,
  "longitude": -84.348791
},
{
  "trip_id": 7,
  "latitude": 33.770061,
  "longitude": -84.34879
},
{
  "trip_id": 7,
  "latitude": 33.770184,
  "longitude": -84.348788
},
{
  "trip_id": 7,
  "latitude": 33.770304,
  "longitude": -84.348746
},
{
  "trip_id": 7,
  "latitude": 33.770354,
  "longitude": -84.348697
},
{
  "trip_id": 7,
  "latitude": 33.770421,
  "longitude": -84.348571
},
{
  "trip_id": 7,
  "latitude": 33.770445,
  "longitude": -84.34844
},
{
  "trip_id": 7,
  "latitude": 33.770475,
  "longitude": -84.34831
},
{
  "trip_id": 7,
  "latitude": 33.770491,
  "longitude": -84.348246
},
{
  "trip_id": 7,
  "latitude": 33.770514,
  "longitude": -84.348183
},
{
  "trip_id": 7,
  "latitude": 33.770564,
  "longitude": -84.348096
},
{
  "trip_id": 7,
  "latitude": 33.770677,
  "longitude": -84.347937
},
{
  "trip_id": 7,
  "latitude": 33.770776,
  "longitude": -84.347833
},
{
  "trip_id": 7,
  "latitude": 33.770836,
  "longitude": -84.347672
},
{
  "trip_id": 7,
  "latitude": 33.770854,
  "longitude": -84.347577
},
{
  "trip_id": 7,
  "latitude": 33.770852,
  "longitude": -84.347474
},
{
  "trip_id": 7,
  "latitude": 33.770841,
  "longitude": -84.347375
},
{
  "trip_id": 7,
  "latitude": 33.770758,
  "longitude": -84.347199
},
{
  "trip_id": 7,
  "latitude": 33.770693,
  "longitude": -84.34713
},
{
  "trip_id": 7,
  "latitude": 33.770574,
  "longitude": -84.346974
},
{
  "trip_id": 7,
  "latitude": 33.77051,
  "longitude": -84.346788
},
{
  "trip_id": 7,
  "latitude": 33.770518,
  "longitude": -84.3467
},
{
  "trip_id": 7,
  "latitude": 33.770547,
  "longitude": -84.34652
},
{
  "trip_id": 7,
  "latitude": 33.770528,
  "longitude": -84.34643
},
{
  "trip_id": 7,
  "latitude": 33.770414,
  "longitude": -84.346305
},
{
  "trip_id": 7,
  "latitude": 33.770286,
  "longitude": -84.346217
},
{
  "trip_id": 7,
  "latitude": 33.770194,
  "longitude": -84.34609
},
{
  "trip_id": 7,
  "latitude": 33.770172,
  "longitude": -84.346009
},
{
  "trip_id": 7,
  "latitude": 33.770146,
  "longitude": -84.345835
},
{
  "trip_id": 7,
  "latitude": 33.770153,
  "longitude": -84.345739
},
{
  "trip_id": 7,
  "latitude": 33.770202,
  "longitude": -84.345568
},
{
  "trip_id": 7,
  "latitude": 33.770285,
  "longitude": -84.345446
},
{
  "trip_id": 7,
  "latitude": 33.770383,
  "longitude": -84.345343
},
{
  "trip_id": 7,
  "latitude": 33.770477,
  "longitude": -84.34525
},
{
  "trip_id": 7,
  "latitude": 33.770547,
  "longitude": -84.345123
},
{
  "trip_id": 7,
  "latitude": 33.770579,
  "longitude": -84.345053
},
{
  "trip_id": 7,
  "latitude": 33.770593,
  "longitude": -84.344974
},
{
  "trip_id": 7,
  "latitude": 33.770594,
  "longitude": -84.344885
},
{
  "trip_id": 7,
  "latitude": 33.770592,
  "longitude": -84.344795
},
{
  "trip_id": 7,
  "latitude": 33.770589,
  "longitude": -84.344712
},
{
  "trip_id": 7,
  "latitude": 33.770584,
  "longitude": -84.344541
},
{
  "trip_id": 7,
  "latitude": 33.770622,
  "longitude": -84.344373
},
{
  "trip_id": 7,
  "latitude": 33.770665,
  "longitude": -84.344292
},
{
  "trip_id": 7,
  "latitude": 33.770718,
  "longitude": -84.344222
},
{
  "trip_id": 7,
  "latitude": 33.770787,
  "longitude": -84.344168
},
{
  "trip_id": 7,
  "latitude": 33.770919,
  "longitude": -84.344045
},
{
  "trip_id": 7,
  "latitude": 33.77095,
  "longitude": -84.34384
},
{
  "trip_id": 7,
  "latitude": 33.770925,
  "longitude": -84.343744
},
{
  "trip_id": 7,
  "latitude": 33.770753,
  "longitude": -84.343628
},
{
  "trip_id": 7,
  "latitude": 33.770685,
  "longitude": -84.343579
},
{
  "trip_id": 7,
  "latitude": 33.770661,
  "longitude": -84.343396
},
{
  "trip_id": 7,
  "latitude": 33.770753,
  "longitude": -84.343279
},
{
  "trip_id": 7,
  "latitude": 33.770898,
  "longitude": -84.343331
},
{
  "trip_id": 7,
  "latitude": 33.771032,
  "longitude": -84.343347
},
{
  "trip_id": 7,
  "latitude": 33.771145,
  "longitude": -84.343229
},
{
  "trip_id": 7,
  "latitude": 33.771139,
  "longitude": -84.343108
},
{
  "trip_id": 7,
  "latitude": 33.771147,
  "longitude": -84.342897
},
{
  "trip_id": 7,
  "latitude": 33.771154,
  "longitude": -84.342719
},
{
  "trip_id": 7,
  "latitude": 33.771164,
  "longitude": -84.342661
},
{
  "trip_id": 7,
  "latitude": 33.771169,
  "longitude": -84.342638
},
{
  "trip_id": 7,
  "latitude": 33.771159,
  "longitude": -84.342627
},
{
  "trip_id": 7,
  "latitude": 33.771154,
  "longitude": -84.34263
},
{
  "trip_id": 7,
  "latitude": 33.77115,
  "longitude": -84.342635
},
{
  "trip_id": 7,
  "latitude": 33.771148,
  "longitude": -84.342639
},
{
  "trip_id": 7,
  "latitude": 33.771149,
  "longitude": -84.34263
},
{
  "trip_id": 7,
  "latitude": 33.771162,
  "longitude": -84.342622
},
{
  "trip_id": 7,
  "latitude": 33.771202,
  "longitude": -84.342538
},
{
  "trip_id": 7,
  "latitude": 33.771215,
  "longitude": -84.342467
},
{
  "trip_id": 7,
  "latitude": 33.771217,
  "longitude": -84.342387
},
{
  "trip_id": 7,
  "latitude": 33.771226,
  "longitude": -84.342237
},
{
  "trip_id": 7,
  "latitude": 33.771232,
  "longitude": -84.342171
},
{
  "trip_id": 7,
  "latitude": 33.771232,
  "longitude": -84.342092
},
{
  "trip_id": 7,
  "latitude": 33.771224,
  "longitude": -84.341948
},
{
  "trip_id": 7,
  "latitude": 33.771239,
  "longitude": -84.341853
},
{
  "trip_id": 7,
  "latitude": 33.77123,
  "longitude": -84.341793
},
{
  "trip_id": 7,
  "latitude": 33.771231,
  "longitude": -84.341784
},
{
  "trip_id": 7,
  "latitude": 33.771228,
  "longitude": -84.341734
},
{
  "trip_id": 7,
  "latitude": 33.7712,
  "longitude": -84.341698
},
{
  "trip_id": 7,
  "latitude": 33.771163,
  "longitude": -84.341683
},
{
  "trip_id": 7,
  "latitude": 33.771069,
  "longitude": -84.341671
},
{
  "trip_id": 7,
  "latitude": 33.770976,
  "longitude": -84.341668
},
{
  "trip_id": 7,
  "latitude": 33.770918,
  "longitude": -84.341662
},
{
  "trip_id": 7,
  "latitude": 33.770819,
  "longitude": -84.341657
},
{
  "trip_id": 7,
  "latitude": 33.770769,
  "longitude": -84.341654
},
{
  "trip_id": 7,
  "latitude": 33.770713,
  "longitude": -84.341653
},
{
  "trip_id": 7,
  "latitude": 33.770602,
  "longitude": -84.34165
},
{
  "trip_id": 7,
  "latitude": 33.770483,
  "longitude": -84.341649
},
{
  "trip_id": 7,
  "latitude": 33.770378,
  "longitude": -84.341653
},
{
  "trip_id": 7,
  "latitude": 33.770323,
  "longitude": -84.341651
},
{
  "trip_id": 7,
  "latitude": 33.77021,
  "longitude": -84.341643
},
{
  "trip_id": 7,
  "latitude": 33.770157,
  "longitude": -84.341649
},
{
  "trip_id": 7,
  "latitude": 33.770048,
  "longitude": -84.341632
},
{
  "trip_id": 7,
  "latitude": 33.769956,
  "longitude": -84.341633
},
{
  "trip_id": 7,
  "latitude": 33.769935,
  "longitude": -84.341619
},
{
  "trip_id": 7,
  "latitude": 33.769895,
  "longitude": -84.341633
},
{
  "trip_id": 7,
  "latitude": 33.769829,
  "longitude": -84.341628
},
{
  "trip_id": 7,
  "latitude": 33.769716,
  "longitude": -84.341636
},
{
  "trip_id": 7,
  "latitude": 33.769599,
  "longitude": -84.341633
},
{
  "trip_id": 7,
  "latitude": 33.769499,
  "longitude": -84.34164
},
{
  "trip_id": 7,
  "latitude": 33.769448,
  "longitude": -84.341639
},
{
  "trip_id": 7,
  "latitude": 33.769358,
  "longitude": -84.341646
},
{
  "trip_id": 7,
  "latitude": 33.769288,
  "longitude": -84.341648
},
{
  "trip_id": 7,
  "latitude": 33.76925,
  "longitude": -84.341652
},
{
  "trip_id": 7,
  "latitude": 33.769212,
  "longitude": -84.341644
},
{
  "trip_id": 7,
  "latitude": 33.769158,
  "longitude": -84.341645
},
{
  "trip_id": 7,
  "latitude": 33.769138,
  "longitude": -84.341647
},
{
  "trip_id": 7,
  "latitude": 33.769123,
  "longitude": -84.341641
},
{
  "trip_id": 7,
  "latitude": 33.76912,
  "longitude": -84.341643
},
{
  "trip_id": 7,
  "latitude": 33.769116,
  "longitude": -84.341646
},
{
  "trip_id": 7,
  "latitude": 33.769109,
  "longitude": -84.341652
},
{
  "trip_id": 7,
  "latitude": 33.769107,
  "longitude": -84.341652
},
{
  "trip_id": 7,
  "latitude": 33.769107,
  "longitude": -84.341653
},
{
  "trip_id": 7,
  "latitude": 33.769108,
  "longitude": -84.341657
},
{
  "trip_id": 7,
  "latitude": 33.769109,
  "longitude": -84.341659
},
{
  "trip_id": 7,
  "latitude": 33.76911,
  "longitude": -84.341662
},
{
  "trip_id": 7,
  "latitude": 33.769111,
  "longitude": -84.341663
},
{
  "trip_id": 7,
  "latitude": 33.769112,
  "longitude": -84.341664
},
{
  "trip_id": 7,
  "latitude": 33.769102,
  "longitude": -84.341661
},
{
  "trip_id": 7,
  "latitude": 33.769094,
  "longitude": -84.34166
},
{
  "trip_id": 7,
  "latitude": 33.76908,
  "longitude": -84.341658
},
{
  "trip_id": 7,
  "latitude": 33.769059,
  "longitude": -84.341654
},
{
  "trip_id": 7,
  "latitude": 33.769042,
  "longitude": -84.341652
},
{
  "trip_id": 7,
  "latitude": 33.769018,
  "longitude": -84.34165
},
{
  "trip_id": 7,
  "latitude": 33.768986,
  "longitude": -84.341647
},
{
  "trip_id": 7,
  "latitude": 33.768958,
  "longitude": -84.341643
},
{
  "trip_id": 7,
  "latitude": 33.768944,
  "longitude": -84.341635
},
{
  "trip_id": 7,
  "latitude": 33.768944,
  "longitude": -84.341633
},
{
  "trip_id": 7,
  "latitude": 33.768939,
  "longitude": -84.341633
},
{
  "trip_id": 7,
  "latitude": 33.768923,
  "longitude": -84.341631
},
{
  "trip_id": 7,
  "latitude": 33.768904,
  "longitude": -84.341629
},
{
  "trip_id": 7,
  "latitude": 33.768888,
  "longitude": -84.34163
},
{
  "trip_id": 7,
  "latitude": 33.768881,
  "longitude": -84.341631
},
{
  "trip_id": 7,
  "latitude": 33.768876,
  "longitude": -84.341632
},
{
  "trip_id": 7,
  "latitude": 33.76887,
  "longitude": -84.341633
},
{
  "trip_id": 7,
  "latitude": 33.768856,
  "longitude": -84.341635
},
{
  "trip_id": 7,
  "latitude": 33.768846,
  "longitude": -84.341635
},
{
  "trip_id": 7,
  "latitude": 33.768804,
  "longitude": -84.341634
},
{
  "trip_id": 7,
  "latitude": 33.768778,
  "longitude": -84.341632
},
{
  "trip_id": 7,
  "latitude": 33.768723,
  "longitude": -84.341631
},
{
  "trip_id": 7,
  "latitude": 33.768696,
  "longitude": -84.34163
},
{
  "trip_id": 7,
  "latitude": 33.768636,
  "longitude": -84.341629
},
{
  "trip_id": 7,
  "latitude": 33.768593,
  "longitude": -84.341612
},
{
  "trip_id": 7,
  "latitude": 33.768559,
  "longitude": -84.341583
},
{
  "trip_id": 7,
  "latitude": 33.768535,
  "longitude": -84.341549
},
{
  "trip_id": 7,
  "latitude": 33.768521,
  "longitude": -84.341504
},
{
  "trip_id": 7,
  "latitude": 33.768523,
  "longitude": -84.341402
},
{
  "trip_id": 7,
  "latitude": 33.768556,
  "longitude": -84.341245
},
{
  "trip_id": 7,
  "latitude": 33.768544,
  "longitude": -84.341122
},
{
  "trip_id": 7,
  "latitude": 33.768548,
  "longitude": -84.341059
},
{
  "trip_id": 7,
  "latitude": 33.768547,
  "longitude": -84.340913
},
{
  "trip_id": 7,
  "latitude": 33.768541,
  "longitude": -84.340846
},
{
  "trip_id": 7,
  "latitude": 33.768553,
  "longitude": -84.340777
},
{
  "trip_id": 7,
  "latitude": 33.768548,
  "longitude": -84.340712
},
{
  "trip_id": 7,
  "latitude": 33.768544,
  "longitude": -84.340646
},
{
  "trip_id": 7,
  "latitude": 33.768545,
  "longitude": -84.340524
},
{
  "trip_id": 7,
  "latitude": 33.768534,
  "longitude": -84.340326
},
{
  "trip_id": 7,
  "latitude": 33.768548,
  "longitude": -84.340149
},
{
  "trip_id": 7,
  "latitude": 33.768539,
  "longitude": -84.339933
},
{
  "trip_id": 7,
  "latitude": 33.768527,
  "longitude": -84.339861
},
{
  "trip_id": 7,
  "latitude": 33.768535,
  "longitude": -84.339724
},
{
  "trip_id": 7,
  "latitude": 33.768549,
  "longitude": -84.339599
},
{
  "trip_id": 7,
  "latitude": 33.768569,
  "longitude": -84.339485
},
{
  "trip_id": 7,
  "latitude": 33.768507,
  "longitude": -84.339404
},
{
  "trip_id": 7,
  "latitude": 33.768463,
  "longitude": -84.339373
},
{
  "trip_id": 7,
  "latitude": 33.768392,
  "longitude": -84.339388
},
{
  "trip_id": 7,
  "latitude": 33.76833,
  "longitude": -84.339396
},
{
  "trip_id": 7,
  "latitude": 33.768261,
  "longitude": -84.339396
},
{
  "trip_id": 7,
  "latitude": 33.768059,
  "longitude": -84.339395
},
{
  "trip_id": 7,
  "latitude": 33.767924,
  "longitude": -84.339405
},
{
  "trip_id": 7,
  "latitude": 33.767848,
  "longitude": -84.339401
},
{
  "trip_id": 7,
  "latitude": 33.767764,
  "longitude": -84.339379
},
{
  "trip_id": 7,
  "latitude": 33.767697,
  "longitude": -84.339368
},
{
  "trip_id": 7,
  "latitude": 33.767568,
  "longitude": -84.339375
},
{
  "trip_id": 7,
  "latitude": 33.76743,
  "longitude": -84.339363
},
{
  "trip_id": 7,
  "latitude": 33.767366,
  "longitude": -84.339358
},
{
  "trip_id": 7,
  "latitude": 33.767256,
  "longitude": -84.33935
},
{
  "trip_id": 7,
  "latitude": 33.767139,
  "longitude": -84.33934
},
{
  "trip_id": 7,
  "latitude": 33.767021,
  "longitude": -84.339347
},
{
  "trip_id": 7,
  "latitude": 33.766901,
  "longitude": -84.339359
},
{
  "trip_id": 7,
  "latitude": 33.76684,
  "longitude": -84.33937
},
{
  "trip_id": 7,
  "latitude": 33.766715,
  "longitude": -84.339367
},
{
  "trip_id": 7,
  "latitude": 33.76659,
  "longitude": -84.339373
},
{
  "trip_id": 7,
  "latitude": 33.766528,
  "longitude": -84.339363
},
{
  "trip_id": 7,
  "latitude": 33.766462,
  "longitude": -84.339367
},
{
  "trip_id": 7,
  "latitude": 33.766401,
  "longitude": -84.339366
},
{
  "trip_id": 7,
  "latitude": 33.766274,
  "longitude": -84.339361
},
{
  "trip_id": 7,
  "latitude": 33.766148,
  "longitude": -84.339393
},
{
  "trip_id": 7,
  "latitude": 33.766015,
  "longitude": -84.339401
},
{
  "trip_id": 7,
  "latitude": 33.765891,
  "longitude": -84.33939
},
{
  "trip_id": 7,
  "latitude": 33.765826,
  "longitude": -84.339387
},
{
  "trip_id": 7,
  "latitude": 33.765691,
  "longitude": -84.339402
},
{
  "trip_id": 7,
  "latitude": 33.765629,
  "longitude": -84.339387
},
{
  "trip_id": 7,
  "latitude": 33.765573,
  "longitude": -84.339355
},
{
  "trip_id": 7,
  "latitude": 33.765429,
  "longitude": -84.339371
},
{
  "trip_id": 7,
  "latitude": 33.765297,
  "longitude": -84.339372
},
{
  "trip_id": 7,
  "latitude": 33.765156,
  "longitude": -84.339371
},
{
  "trip_id": 7,
  "latitude": 33.765084,
  "longitude": -84.339374
},
{
  "trip_id": 7,
  "latitude": 33.765059,
  "longitude": -84.339371
},
{
  "trip_id": 7,
  "latitude": 33.765034,
  "longitude": -84.339357
},
{
  "trip_id": 7,
  "latitude": 33.765002,
  "longitude": -84.339354
},
{
  "trip_id": 7,
  "latitude": 33.764994,
  "longitude": -84.339365
},
{
  "trip_id": 7,
  "latitude": 33.764993,
  "longitude": -84.339368
},
{
  "trip_id": 7,
  "latitude": 33.764988,
  "longitude": -84.339369
},
{
  "trip_id": 7,
  "latitude": 33.764974,
  "longitude": -84.339364
},
{
  "trip_id": 7,
  "latitude": 33.764966,
  "longitude": -84.339362
},
{
  "trip_id": 7,
  "latitude": 33.76495,
  "longitude": -84.339361
},
{
  "trip_id": 7,
  "latitude": 33.764935,
  "longitude": -84.339367
},
{
  "trip_id": 7,
  "latitude": 33.764933,
  "longitude": -84.339374
},
{
  "trip_id": 7,
  "latitude": 33.764927,
  "longitude": -84.339389
},
{
  "trip_id": 7,
  "latitude": 33.764925,
  "longitude": -84.339395
},
{
  "trip_id": 7,
  "latitude": 33.764922,
  "longitude": -84.339401
},
{
  "trip_id": 7,
  "latitude": 33.764916,
  "longitude": -84.339412
},
{
  "trip_id": 7,
  "latitude": 33.764914,
  "longitude": -84.339416
},
{
  "trip_id": 7,
  "latitude": 33.764911,
  "longitude": -84.33942
},
{
  "trip_id": 7,
  "latitude": 33.764909,
  "longitude": -84.339423
},
{
  "trip_id": 7,
  "latitude": 33.764908,
  "longitude": -84.339425
},
{
  "trip_id": 7,
  "latitude": 33.764907,
  "longitude": -84.339426
},
{
  "trip_id": 7,
  "latitude": 33.764907,
  "longitude": -84.339427
},
{
  "trip_id": 7,
  "latitude": 33.764907,
  "longitude": -84.339426
},
{
  "trip_id": 7,
  "latitude": 33.764891,
  "longitude": -84.339424
},
{
  "trip_id": 7,
  "latitude": 33.764874,
  "longitude": -84.339417
},
{
  "trip_id": 7,
  "latitude": 33.764839,
  "longitude": -84.339381
},
{
  "trip_id": 7,
  "latitude": 33.764822,
  "longitude": -84.339215
},
{
  "trip_id": 7,
  "latitude": 33.764836,
  "longitude": -84.339037
},
{
  "trip_id": 7,
  "latitude": 33.764837,
  "longitude": -84.338954
},
{
  "trip_id": 7,
  "latitude": 33.764843,
  "longitude": -84.338855
},
{
  "trip_id": 7,
  "latitude": 33.764853,
  "longitude": -84.338659
},
{
  "trip_id": 7,
  "latitude": 33.764844,
  "longitude": -84.338557
},
{
  "trip_id": 7,
  "latitude": 33.764847,
  "longitude": -84.338346
},
{
  "trip_id": 7,
  "latitude": 33.764842,
  "longitude": -84.338241
},
{
  "trip_id": 7,
  "latitude": 33.764835,
  "longitude": -84.338046
},
{
  "trip_id": 7,
  "latitude": 33.76484,
  "longitude": -84.33784
},
{
  "trip_id": 7,
  "latitude": 33.764847,
  "longitude": -84.337731
},
{
  "trip_id": 7,
  "latitude": 33.764844,
  "longitude": -84.337617
},
{
  "trip_id": 7,
  "latitude": 33.764841,
  "longitude": -84.337397
},
{
  "trip_id": 7,
  "latitude": 33.764844,
  "longitude": -84.337289
},
{
  "trip_id": 7,
  "latitude": 33.764853,
  "longitude": -84.337172
},
{
  "trip_id": 7,
  "latitude": 33.764858,
  "longitude": -84.33696
},
{
  "trip_id": 7,
  "latitude": 33.764843,
  "longitude": -84.336742
},
{
  "trip_id": 7,
  "latitude": 33.764846,
  "longitude": -84.336513
},
{
  "trip_id": 7,
  "latitude": 33.764848,
  "longitude": -84.336292
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.336185
},
{
  "trip_id": 7,
  "latitude": 33.764859,
  "longitude": -84.336072
},
{
  "trip_id": 7,
  "latitude": 33.764856,
  "longitude": -84.335848
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.335738
},
{
  "trip_id": 7,
  "latitude": 33.764859,
  "longitude": -84.335627
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.335392
},
{
  "trip_id": 7,
  "latitude": 33.764867,
  "longitude": -84.335151
},
{
  "trip_id": 7,
  "latitude": 33.764874,
  "longitude": -84.335042
},
{
  "trip_id": 7,
  "latitude": 33.764864,
  "longitude": -84.334923
},
{
  "trip_id": 7,
  "latitude": 33.764859,
  "longitude": -84.334678
},
{
  "trip_id": 7,
  "latitude": 33.764862,
  "longitude": -84.334564
},
{
  "trip_id": 7,
  "latitude": 33.764858,
  "longitude": -84.334447
},
{
  "trip_id": 7,
  "latitude": 33.764834,
  "longitude": -84.334104
},
{
  "trip_id": 7,
  "latitude": 33.76486,
  "longitude": -84.33388
},
{
  "trip_id": 7,
  "latitude": 33.76484,
  "longitude": -84.333676
},
{
  "trip_id": 7,
  "latitude": 33.764823,
  "longitude": -84.333568
},
{
  "trip_id": 7,
  "latitude": 33.76484,
  "longitude": -84.333378
},
{
  "trip_id": 7,
  "latitude": 33.764854,
  "longitude": -84.333244
},
{
  "trip_id": 7,
  "latitude": 33.764852,
  "longitude": -84.333209
},
{
  "trip_id": 7,
  "latitude": 33.764853,
  "longitude": -84.333196
},
{
  "trip_id": 7,
  "latitude": 33.764858,
  "longitude": -84.333199
},
{
  "trip_id": 7,
  "latitude": 33.76486,
  "longitude": -84.333204
},
{
  "trip_id": 7,
  "latitude": 33.76486,
  "longitude": -84.333203
},
{
  "trip_id": 7,
  "latitude": 33.764858,
  "longitude": -84.333188
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.333162
},
{
  "trip_id": 7,
  "latitude": 33.764853,
  "longitude": -84.333067
},
{
  "trip_id": 7,
  "latitude": 33.764856,
  "longitude": -84.332942
},
{
  "trip_id": 7,
  "latitude": 33.764866,
  "longitude": -84.332904
},
{
  "trip_id": 7,
  "latitude": 33.764871,
  "longitude": -84.332839
},
{
  "trip_id": 7,
  "latitude": 33.764859,
  "longitude": -84.332717
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.332585
},
{
  "trip_id": 7,
  "latitude": 33.76486,
  "longitude": -84.332528
},
{
  "trip_id": 7,
  "latitude": 33.764867,
  "longitude": -84.332383
},
{
  "trip_id": 7,
  "latitude": 33.764862,
  "longitude": -84.332314
},
{
  "trip_id": 7,
  "latitude": 33.76486,
  "longitude": -84.332168
},
{
  "trip_id": 7,
  "latitude": 33.764863,
  "longitude": -84.332091
},
{
  "trip_id": 7,
  "latitude": 33.764851,
  "longitude": -84.33196
},
{
  "trip_id": 7,
  "latitude": 33.764846,
  "longitude": -84.331893
},
{
  "trip_id": 7,
  "latitude": 33.764842,
  "longitude": -84.331773
},
{
  "trip_id": 7,
  "latitude": 33.764848,
  "longitude": -84.331713
},
{
  "trip_id": 7,
  "latitude": 33.764853,
  "longitude": -84.331585
},
{
  "trip_id": 7,
  "latitude": 33.764848,
  "longitude": -84.331516
},
{
  "trip_id": 7,
  "latitude": 33.764851,
  "longitude": -84.331456
},
{
  "trip_id": 7,
  "latitude": 33.764852,
  "longitude": -84.331392
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.331274
},
{
  "trip_id": 7,
  "latitude": 33.764853,
  "longitude": -84.331218
},
{
  "trip_id": 7,
  "latitude": 33.764838,
  "longitude": -84.3311
},
{
  "trip_id": 7,
  "latitude": 33.764841,
  "longitude": -84.330981
},
{
  "trip_id": 7,
  "latitude": 33.764865,
  "longitude": -84.33086
},
{
  "trip_id": 7,
  "latitude": 33.764871,
  "longitude": -84.330798
},
{
  "trip_id": 7,
  "latitude": 33.764871,
  "longitude": -84.330739
},
{
  "trip_id": 7,
  "latitude": 33.764864,
  "longitude": -84.330619
},
{
  "trip_id": 7,
  "latitude": 33.764868,
  "longitude": -84.330558
},
{
  "trip_id": 7,
  "latitude": 33.764863,
  "longitude": -84.33043
},
{
  "trip_id": 7,
  "latitude": 33.764862,
  "longitude": -84.330235
},
{
  "trip_id": 7,
  "latitude": 33.764867,
  "longitude": -84.330159
},
{
  "trip_id": 7,
  "latitude": 33.76487,
  "longitude": -84.330083
},
{
  "trip_id": 7,
  "latitude": 33.764852,
  "longitude": -84.329846
},
{
  "trip_id": 7,
  "latitude": 33.764852,
  "longitude": -84.329756
},
{
  "trip_id": 7,
  "latitude": 33.764851,
  "longitude": -84.329656
},
{
  "trip_id": 7,
  "latitude": 33.764856,
  "longitude": -84.329465
},
{
  "trip_id": 7,
  "latitude": 33.764851,
  "longitude": -84.329263
},
{
  "trip_id": 7,
  "latitude": 33.76485,
  "longitude": -84.329043
},
{
  "trip_id": 7,
  "latitude": 33.764844,
  "longitude": -84.328815
},
{
  "trip_id": 7,
  "latitude": 33.764835,
  "longitude": -84.328578
},
{
  "trip_id": 7,
  "latitude": 33.764841,
  "longitude": -84.32846
},
{
  "trip_id": 7,
  "latitude": 33.764836,
  "longitude": -84.328222
},
{
  "trip_id": 7,
  "latitude": 33.764843,
  "longitude": -84.328092
},
{
  "trip_id": 7,
  "latitude": 33.764842,
  "longitude": -84.327972
},
{
  "trip_id": 7,
  "latitude": 33.764836,
  "longitude": -84.32785
},
{
  "trip_id": 7,
  "latitude": 33.764838,
  "longitude": -84.327728
},
{
  "trip_id": 7,
  "latitude": 33.764846,
  "longitude": -84.327599
},
{
  "trip_id": 7,
  "latitude": 33.764851,
  "longitude": -84.327335
},
{
  "trip_id": 7,
  "latitude": 33.764846,
  "longitude": -84.327049
},
{
  "trip_id": 7,
  "latitude": 33.764839,
  "longitude": -84.326776
},
{
  "trip_id": 7,
  "latitude": 33.764843,
  "longitude": -84.326646
},
{
  "trip_id": 7,
  "latitude": 33.764857,
  "longitude": -84.326522
},
{
  "trip_id": 7,
  "latitude": 33.764861,
  "longitude": -84.32638
},
{
  "trip_id": 7,
  "latitude": 33.764854,
  "longitude": -84.326141
},
{
  "trip_id": 7,
  "latitude": 33.764852,
  "longitude": -84.32602
},
{
  "trip_id": 7,
  "latitude": 33.764837,
  "longitude": -84.325802
},
{
  "trip_id": 7,
  "latitude": 33.764826,
  "longitude": -84.325597
},
{
  "trip_id": 7,
  "latitude": 33.764808,
  "longitude": -84.325411
},
{
  "trip_id": 7,
  "latitude": 33.764801,
  "longitude": -84.325322
},
{
  "trip_id": 7,
  "latitude": 33.764774,
  "longitude": -84.325143
},
{
  "trip_id": 7,
  "latitude": 33.764763,
  "longitude": -84.325055
},
{
  "trip_id": 7,
  "latitude": 33.764754,
  "longitude": -84.324967
},
{
  "trip_id": 7,
  "latitude": 33.764734,
  "longitude": -84.324872
},
{
  "trip_id": 7,
  "latitude": 33.764692,
  "longitude": -84.324672
},
{
  "trip_id": 7,
  "latitude": 33.764694,
  "longitude": -84.324557
},
{
  "trip_id": 7,
  "latitude": 33.76466,
  "longitude": -84.324341
},
{
  "trip_id": 7,
  "latitude": 33.764648,
  "longitude": -84.324234
},
{
  "trip_id": 7,
  "latitude": 33.764615,
  "longitude": -84.324034
},
{
  "trip_id": 7,
  "latitude": 33.764597,
  "longitude": -84.323824
},
{
  "trip_id": 7,
  "latitude": 33.76459,
  "longitude": -84.323728
},
{
  "trip_id": 7,
  "latitude": 33.764554,
  "longitude": -84.323527
},
{
  "trip_id": 7,
  "latitude": 33.764528,
  "longitude": -84.323351
},
{
  "trip_id": 7,
  "latitude": 33.76452,
  "longitude": -84.32326
},
{
  "trip_id": 7,
  "latitude": 33.764503,
  "longitude": -84.323106
},
{
  "trip_id": 7,
  "latitude": 33.764492,
  "longitude": -84.323029
},
{
  "trip_id": 7,
  "latitude": 33.764468,
  "longitude": -84.32289
},
{
  "trip_id": 7,
  "latitude": 33.764465,
  "longitude": -84.322818
},
{
  "trip_id": 7,
  "latitude": 33.764465,
  "longitude": -84.322655
},
{
  "trip_id": 7,
  "latitude": 33.764473,
  "longitude": -84.32257
},
{
  "trip_id": 7,
  "latitude": 33.764475,
  "longitude": -84.322484
},
{
  "trip_id": 7,
  "latitude": 33.764459,
  "longitude": -84.322326
},
{
  "trip_id": 7,
  "latitude": 33.764427,
  "longitude": -84.32217
},
{
  "trip_id": 7,
  "latitude": 33.764413,
  "longitude": -84.322104
},
{
  "trip_id": 7,
  "latitude": 33.764399,
  "longitude": -84.322034
},
{
  "trip_id": 7,
  "latitude": 33.76438,
  "longitude": -84.321963
},
{
  "trip_id": 7,
  "latitude": 33.764333,
  "longitude": -84.321849
},
{
  "trip_id": 7,
  "latitude": 33.76432,
  "longitude": -84.321786
},
{
  "trip_id": 7,
  "latitude": 33.764262,
  "longitude": -84.321673
},
{
  "trip_id": 7,
  "latitude": 33.764227,
  "longitude": -84.321633
},
{
  "trip_id": 7,
  "latitude": 33.764179,
  "longitude": -84.321521
},
{
  "trip_id": 7,
  "latitude": 33.764133,
  "longitude": -84.32141
},
{
  "trip_id": 7,
  "latitude": 33.764084,
  "longitude": -84.321301
},
{
  "trip_id": 7,
  "latitude": 33.764038,
  "longitude": -84.32118
},
{
  "trip_id": 7,
  "latitude": 33.76401,
  "longitude": -84.32106
},
{
  "trip_id": 7,
  "latitude": 33.763979,
  "longitude": -84.32094
},
{
  "trip_id": 7,
  "latitude": 33.763961,
  "longitude": -84.320879
},
{
  "trip_id": 7,
  "latitude": 33.763951,
  "longitude": -84.320821
},
{
  "trip_id": 7,
  "latitude": 33.763928,
  "longitude": -84.320724
},
{
  "trip_id": 7,
  "latitude": 33.763903,
  "longitude": -84.320627
},
{
  "trip_id": 7,
  "latitude": 33.763884,
  "longitude": -84.320546
},
{
  "trip_id": 7,
  "latitude": 33.763835,
  "longitude": -84.320465
},
{
  "trip_id": 7,
  "latitude": 33.76382,
  "longitude": -84.320428
},
{
  "trip_id": 7,
  "latitude": 33.763788,
  "longitude": -84.320358
},
{
  "trip_id": 7,
  "latitude": 33.763764,
  "longitude": -84.320338
},
{
  "trip_id": 7,
  "latitude": 33.76375,
  "longitude": -84.320319
},
{
  "trip_id": 7,
  "latitude": 33.763734,
  "longitude": -84.320293
},
{
  "trip_id": 7,
  "latitude": 33.763732,
  "longitude": -84.320279
},
{
  "trip_id": 7,
  "latitude": 33.763728,
  "longitude": -84.320274
},
{
  "trip_id": 7,
  "latitude": 33.763721,
  "longitude": -84.320261
},
{
  "trip_id": 7,
  "latitude": 33.763712,
  "longitude": -84.320231
},
{
  "trip_id": 7,
  "latitude": 33.763707,
  "longitude": -84.320208
},
{
  "trip_id": 7,
  "latitude": 33.763704,
  "longitude": -84.320201
},
{
  "trip_id": 7,
  "latitude": 33.763684,
  "longitude": -84.320174
},
{
  "trip_id": 7,
  "latitude": 33.763605,
  "longitude": -84.320102
},
{
  "trip_id": 7,
  "latitude": 33.763536,
  "longitude": -84.320061
},
{
  "trip_id": 7,
  "latitude": 33.763396,
  "longitude": -84.319981
},
{
  "trip_id": 7,
  "latitude": 33.763298,
  "longitude": -84.319941
},
{
  "trip_id": 7,
  "latitude": 33.763221,
  "longitude": -84.319903
},
{
  "trip_id": 7,
  "latitude": 33.763195,
  "longitude": -84.319885
},
{
  "trip_id": 7,
  "latitude": 33.763203,
  "longitude": -84.319887
},
{
  "trip_id": 7,
  "latitude": 33.763239,
  "longitude": -84.319907
},
{
  "trip_id": 7,
  "latitude": 33.763284,
  "longitude": -84.319945
},
{
  "trip_id": 7,
  "latitude": 33.763331,
  "longitude": -84.319978
},
{
  "trip_id": 7,
  "latitude": 33.763359,
  "longitude": -84.320006
},
{
  "trip_id": 7,
  "latitude": 33.763382,
  "longitude": -84.320037
},
{
  "trip_id": 7,
  "latitude": 33.763362,
  "longitude": -84.32005
},
{
  "trip_id": 7,
  "latitude": 33.763353,
  "longitude": -84.320028
},
{
  "trip_id": 7,
  "latitude": 33.763342,
  "longitude": -84.320021
},
{
  "trip_id": 7,
  "latitude": 33.763324,
  "longitude": -84.320019
},
{
  "trip_id": 7,
  "latitude": 33.76327,
  "longitude": -84.319982
},
{
  "trip_id": 7,
  "latitude": 33.763249,
  "longitude": -84.319955
},
{
  "trip_id": 7,
  "latitude": 33.763229,
  "longitude": -84.319926
},
{
  "trip_id": 7,
  "latitude": 33.763182,
  "longitude": -84.31989
},
{
  "trip_id": 7,
  "latitude": 33.763159,
  "longitude": -84.319884
},
{
  "trip_id": 7,
  "latitude": 33.763168,
  "longitude": -84.319896
},
{
  "trip_id": 7,
  "latitude": 33.76317,
  "longitude": -84.319903
},
{
  "trip_id": 7,
  "latitude": 33.76317,
  "longitude": -84.319906
},
{
  "trip_id": 7,
  "latitude": 33.763168,
  "longitude": -84.319911
},
{
  "trip_id": 7,
  "latitude": 33.763167,
  "longitude": -84.319913
},
{
  "trip_id": 7,
  "latitude": 33.763166,
  "longitude": -84.319914
},
{
  "trip_id": 7,
  "latitude": 33.763164,
  "longitude": -84.319915
},
{
  "trip_id": 7,
  "latitude": 33.763162,
  "longitude": -84.319916
},
{
  "trip_id": 7,
  "latitude": 33.763161,
  "longitude": -84.319916
},
{
  "trip_id": 7,
  "latitude": 33.76316,
  "longitude": -84.31992
},
{
  "trip_id": 7,
  "latitude": 33.763157,
  "longitude": -84.319924
},
{
  "trip_id": 7,
  "latitude": 33.763156,
  "longitude": -84.319925
},
{
  "trip_id": 7,
  "latitude": 33.763155,
  "longitude": -84.319926
},
{
  "trip_id": 7,
  "latitude": 33.763153,
  "longitude": -84.319925
},
{
  "trip_id": 7,
  "latitude": 33.763152,
  "longitude": -84.319923
},
{
  "trip_id": 7,
  "latitude": 33.763151,
  "longitude": -84.31992
},
{
  "trip_id": 7,
  "latitude": 33.76315,
  "longitude": -84.319919
},
{
  "trip_id": 7,
  "latitude": 33.763149,
  "longitude": -84.319918
},
{
  "trip_id": 7,
  "latitude": 33.763149,
  "longitude": -84.319917
},
{
  "trip_id": 7,
  "latitude": 33.763142,
  "longitude": -84.319915
},
{
  "trip_id": 7,
  "latitude": 33.763111,
  "longitude": -84.319903
},
{
  "trip_id": 7,
  "latitude": 33.763084,
  "longitude": -84.31989
},
{
  "trip_id": 7,
  "latitude": 33.763003,
  "longitude": -84.31985
},
{
  "trip_id": 7,
  "latitude": 33.762899,
  "longitude": -84.319802
},
{
  "trip_id": 7,
  "latitude": 33.762803,
  "longitude": -84.319748
},
{
  "trip_id": 7,
  "latitude": 33.762764,
  "longitude": -84.31973
},
{
  "trip_id": 7,
  "latitude": 33.7627,
  "longitude": -84.319699
},
{
  "trip_id": 7,
  "latitude": 33.76268,
  "longitude": -84.319689
},
{
  "trip_id": 7,
  "latitude": 33.762663,
  "longitude": -84.319677
},
{
  "trip_id": 7,
  "latitude": 33.762666,
  "longitude": -84.319668
},
{
  "trip_id": 7,
  "latitude": 33.762665,
  "longitude": -84.319662
},
{
  "trip_id": 7,
  "latitude": 33.762649,
  "longitude": -84.31964
},
{
  "trip_id": 7,
  "latitude": 33.762627,
  "longitude": -84.31963
},
{
  "trip_id": 7,
  "latitude": 33.762606,
  "longitude": -84.319586
},
{
  "trip_id": 7,
  "latitude": 33.762635,
  "longitude": -84.319364
},
{
  "trip_id": 7,
  "latitude": 33.762693,
  "longitude": -84.319225
},
{
  "trip_id": 7,
  "latitude": 33.762727,
  "longitude": -84.31916
},
{
  "trip_id": 7,
  "latitude": 33.762794,
  "longitude": -84.31903
},
{
  "trip_id": 7,
  "latitude": 33.762861,
  "longitude": -84.318904
},
{
  "trip_id": 7,
  "latitude": 33.762886,
  "longitude": -84.318844
},
{
  "trip_id": 7,
  "latitude": 33.762918,
  "longitude": -84.318789
},
{
  "trip_id": 7,
  "latitude": 33.762984,
  "longitude": -84.31869
},
{
  "trip_id": 7,
  "latitude": 33.763016,
  "longitude": -84.318636
},
{
  "trip_id": 7,
  "latitude": 33.763047,
  "longitude": -84.318582
},
{
  "trip_id": 7,
  "latitude": 33.763122,
  "longitude": -84.318483
},
{
  "trip_id": 7,
  "latitude": 33.763159,
  "longitude": -84.318432
},
{
  "trip_id": 7,
  "latitude": 33.763193,
  "longitude": -84.318377
},
{
  "trip_id": 7,
  "latitude": 33.763241,
  "longitude": -84.318271
},
{
  "trip_id": 7,
  "latitude": 33.763268,
  "longitude": -84.318213
},
{
  "trip_id": 7,
  "latitude": 33.763295,
  "longitude": -84.318158
},
{
  "trip_id": 7,
  "latitude": 33.763357,
  "longitude": -84.318045
},
{
  "trip_id": 7,
  "latitude": 33.763393,
  "longitude": -84.317994
},
{
  "trip_id": 7,
  "latitude": 33.763422,
  "longitude": -84.317948
},
{
  "trip_id": 7,
  "latitude": 33.763481,
  "longitude": -84.317842
},
{
  "trip_id": 7,
  "latitude": 33.763542,
  "longitude": -84.317724
},
{
  "trip_id": 7,
  "latitude": 33.763575,
  "longitude": -84.317666
},
{
  "trip_id": 7,
  "latitude": 33.763647,
  "longitude": -84.317548
},
{
  "trip_id": 7,
  "latitude": 33.763719,
  "longitude": -84.317419
},
{
  "trip_id": 7,
  "latitude": 33.763762,
  "longitude": -84.317368
},
{
  "trip_id": 7,
  "latitude": 33.763833,
  "longitude": -84.317243
},
{
  "trip_id": 7,
  "latitude": 33.763907,
  "longitude": -84.317111
},
{
  "trip_id": 7,
  "latitude": 33.763947,
  "longitude": -84.317041
},
{
  "trip_id": 7,
  "latitude": 33.764016,
  "longitude": -84.316908
},
{
  "trip_id": 7,
  "latitude": 33.764088,
  "longitude": -84.316768
},
{
  "trip_id": 7,
  "latitude": 33.764169,
  "longitude": -84.316631
},
{
  "trip_id": 7,
  "latitude": 33.764233,
  "longitude": -84.31648
},
{
  "trip_id": 7,
  "latitude": 33.764294,
  "longitude": -84.316334
},
{
  "trip_id": 7,
  "latitude": 33.764315,
  "longitude": -84.316265
},
{
  "trip_id": 7,
  "latitude": 33.764366,
  "longitude": -84.316108
},
{
  "trip_id": 7,
  "latitude": 33.764431,
  "longitude": -84.315956
},
{
  "trip_id": 7,
  "latitude": 33.764477,
  "longitude": -84.315807
},
{
  "trip_id": 7,
  "latitude": 33.764499,
  "longitude": -84.315727
},
{
  "trip_id": 7,
  "latitude": 33.764517,
  "longitude": -84.315647
},
{
  "trip_id": 7,
  "latitude": 33.764551,
  "longitude": -84.315503
},
{
  "trip_id": 7,
  "latitude": 33.764589,
  "longitude": -84.315365
},
{
  "trip_id": 7,
  "latitude": 33.764629,
  "longitude": -84.315222
},
{
  "trip_id": 7,
  "latitude": 33.764662,
  "longitude": -84.315093
},
{
  "trip_id": 7,
  "latitude": 33.764675,
  "longitude": -84.315027
},
{
  "trip_id": 7,
  "latitude": 33.764694,
  "longitude": -84.314884
},
{
  "trip_id": 7,
  "latitude": 33.764709,
  "longitude": -84.314739
},
{
  "trip_id": 7,
  "latitude": 33.764719,
  "longitude": -84.314674
},
{
  "trip_id": 7,
  "latitude": 33.764734,
  "longitude": -84.314605
},
{
  "trip_id": 7,
  "latitude": 33.764754,
  "longitude": -84.314461
},
{
  "trip_id": 7,
  "latitude": 33.764752,
  "longitude": -84.314296
},
{
  "trip_id": 7,
  "latitude": 33.764776,
  "longitude": -84.314149
},
{
  "trip_id": 7,
  "latitude": 33.764771,
  "longitude": -84.314009
},
{
  "trip_id": 7,
  "latitude": 33.764772,
  "longitude": -84.313852
},
{
  "trip_id": 7,
  "latitude": 33.764768,
  "longitude": -84.313781
},
{
  "trip_id": 7,
  "latitude": 33.764771,
  "longitude": -84.313641
},
{
  "trip_id": 7,
  "latitude": 33.764777,
  "longitude": -84.313571
},
{
  "trip_id": 7,
  "latitude": 33.76479,
  "longitude": -84.313505
},
{
  "trip_id": 7,
  "latitude": 33.764802,
  "longitude": -84.31343
},
{
  "trip_id": 7,
  "latitude": 33.764801,
  "longitude": -84.313288
},
{
  "trip_id": 7,
  "latitude": 33.764819,
  "longitude": -84.313141
},
{
  "trip_id": 7,
  "latitude": 33.764824,
  "longitude": -84.313007
},
{
  "trip_id": 7,
  "latitude": 33.764831,
  "longitude": -84.312853
},
{
  "trip_id": 7,
  "latitude": 33.764833,
  "longitude": -84.312781
},
{
  "trip_id": 7,
  "latitude": 33.764838,
  "longitude": -84.312629
},
{
  "trip_id": 7,
  "latitude": 33.764848,
  "longitude": -84.312478
},
{
  "trip_id": 7,
  "latitude": 33.764861,
  "longitude": -84.312323
},
{
  "trip_id": 7,
  "latitude": 33.76487,
  "longitude": -84.31218
},
{
  "trip_id": 7,
  "latitude": 33.764884,
  "longitude": -84.312105
},
{
  "trip_id": 7,
  "latitude": 33.764894,
  "longitude": -84.311959
},
{
  "trip_id": 7,
  "latitude": 33.764894,
  "longitude": -84.311885
},
{
  "trip_id": 7,
  "latitude": 33.764904,
  "longitude": -84.311803
},
{
  "trip_id": 7,
  "latitude": 33.764913,
  "longitude": -84.311719
},
{
  "trip_id": 7,
  "latitude": 33.764928,
  "longitude": -84.311537
},
{
  "trip_id": 7,
  "latitude": 33.764947,
  "longitude": -84.31136
},
{
  "trip_id": 7,
  "latitude": 33.764972,
  "longitude": -84.311173
},
{
  "trip_id": 7,
  "latitude": 33.764986,
  "longitude": -84.311079
},
{
  "trip_id": 7,
  "latitude": 33.765019,
  "longitude": -84.310882
},
{
  "trip_id": 7,
  "latitude": 33.765047,
  "longitude": -84.310676
},
{
  "trip_id": 7,
  "latitude": 33.765061,
  "longitude": -84.310565
},
{
  "trip_id": 7,
  "latitude": 33.765071,
  "longitude": -84.310455
},
{
  "trip_id": 7,
  "latitude": 33.765108,
  "longitude": -84.310235
},
{
  "trip_id": 7,
  "latitude": 33.765144,
  "longitude": -84.310023
},
{
  "trip_id": 7,
  "latitude": 33.765161,
  "longitude": -84.309917
},
{
  "trip_id": 7,
  "latitude": 33.765182,
  "longitude": -84.309807
},
{
  "trip_id": 7,
  "latitude": 33.765232,
  "longitude": -84.309602
},
{
  "trip_id": 7,
  "latitude": 33.765286,
  "longitude": -84.309403
},
{
  "trip_id": 7,
  "latitude": 33.765315,
  "longitude": -84.309312
},
{
  "trip_id": 7,
  "latitude": 33.765344,
  "longitude": -84.309214
},
{
  "trip_id": 7,
  "latitude": 33.765399,
  "longitude": -84.309019
},
{
  "trip_id": 7,
  "latitude": 33.765449,
  "longitude": -84.308844
},
{
  "trip_id": 7,
  "latitude": 33.76547,
  "longitude": -84.308752
},
{
  "trip_id": 7,
  "latitude": 33.765521,
  "longitude": -84.308588
},
{
  "trip_id": 7,
  "latitude": 33.765583,
  "longitude": -84.308429
},
{
  "trip_id": 7,
  "latitude": 33.765608,
  "longitude": -84.308357
},
{
  "trip_id": 7,
  "latitude": 33.76563,
  "longitude": -84.308282
},
{
  "trip_id": 7,
  "latitude": 33.765686,
  "longitude": -84.308115
},
{
  "trip_id": 7,
  "latitude": 33.765713,
  "longitude": -84.308035
},
{
  "trip_id": 7,
  "latitude": 33.765769,
  "longitude": -84.30788
},
{
  "trip_id": 7,
  "latitude": 33.765799,
  "longitude": -84.307802
},
{
  "trip_id": 7,
  "latitude": 33.765833,
  "longitude": -84.307642
},
{
  "trip_id": 7,
  "latitude": 33.765887,
  "longitude": -84.307477
},
{
  "trip_id": 7,
  "latitude": 33.765909,
  "longitude": -84.307392
},
{
  "trip_id": 7,
  "latitude": 33.765966,
  "longitude": -84.307232
},
{
  "trip_id": 7,
  "latitude": 33.766027,
  "longitude": -84.307056
},
{
  "trip_id": 7,
  "latitude": 33.766058,
  "longitude": -84.306972
},
{
  "trip_id": 7,
  "latitude": 33.766121,
  "longitude": -84.306795
},
{
  "trip_id": 7,
  "latitude": 33.766111,
  "longitude": -84.306615
},
{
  "trip_id": 7,
  "latitude": 33.766056,
  "longitude": -84.30656
},
{
  "trip_id": 7,
  "latitude": 33.765928,
  "longitude": -84.306494
},
{
  "trip_id": 7,
  "latitude": 33.765797,
  "longitude": -84.306421
},
{
  "trip_id": 7,
  "latitude": 33.765734,
  "longitude": -84.306381
},
{
  "trip_id": 7,
  "latitude": 33.765598,
  "longitude": -84.306318
},
{
  "trip_id": 7,
  "latitude": 33.765455,
  "longitude": -84.306257
},
{
  "trip_id": 7,
  "latitude": 33.765321,
  "longitude": -84.306184
},
{
  "trip_id": 7,
  "latitude": 33.76525,
  "longitude": -84.306154
},
{
  "trip_id": 7,
  "latitude": 33.765133,
  "longitude": -84.306088
},
{
  "trip_id": 7,
  "latitude": 33.765021,
  "longitude": -84.306015
},
{
  "trip_id": 7,
  "latitude": 33.764971,
  "longitude": -84.305998
},
{
  "trip_id": 7,
  "latitude": 33.764909,
  "longitude": -84.306072
},
{
  "trip_id": 7,
  "latitude": 33.764872,
  "longitude": -84.306145
},
{
  "trip_id": 7,
  "latitude": 33.764861,
  "longitude": -84.306176
},
{
  "trip_id": 7,
  "latitude": 33.764828,
  "longitude": -84.306249
},
{
  "trip_id": 7,
  "latitude": 33.764788,
  "longitude": -84.306329
},
{
  "trip_id": 7,
  "latitude": 33.764778,
  "longitude": -84.306361
},
{
  "trip_id": 7,
  "latitude": 33.76477,
  "longitude": -84.306414
},
{
  "trip_id": 7,
  "latitude": 33.764757,
  "longitude": -84.306407
},
{
  "trip_id": 7,
  "latitude": 33.764753,
  "longitude": -84.306416
},
{
  "trip_id": 7,
  "latitude": 33.764752,
  "longitude": -84.306418
},
{
  "trip_id": 7,
  "latitude": 33.764771,
  "longitude": -84.306417
},
{
  "trip_id": 7,
  "latitude": 33.764786,
  "longitude": -84.306414
},
{
  "trip_id": 7,
  "latitude": 33.764782,
  "longitude": -84.306407
},
{
  "trip_id": 7,
  "latitude": 33.764762,
  "longitude": -84.306403
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.82481,
  "longitude": -84.338807,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824813,
  "longitude": -84.339192,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824813,
  "longitude": -84.339226,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824816,
  "longitude": -84.33946,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824818,
  "longitude": -84.339688,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.82482,
  "longitude": -84.33997,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824822,
  "longitude": -84.340205,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824824,
  "longitude": -84.340506,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824827,
  "longitude": -84.340609,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824831,
  "longitude": -84.340764,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824837,
  "longitude": -84.340963,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824833,
  "longitude": -84.341058,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824831,
  "longitude": -84.341122,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824803,
  "longitude": -84.341542,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824799,
  "longitude": -84.341604,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824786,
  "longitude": -84.341683,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824772,
  "longitude": -84.341773,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824743,
  "longitude": -84.341952,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824547,
  "longitude": -84.342438,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.82446,
  "longitude": -84.34265,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824386,
  "longitude": -84.34283,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824327,
  "longitude": -84.342966,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824268,
  "longitude": -84.343084,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "1.3200000524521,3.289999961853,3.5599999427795,3.210000038147,3.210000038147,4.3299999237061,6.9400000572205,9.4700002670288",
  "recorded": "2017-04-17 13:52:40,2017-04-17 13:52:53,2017-04-17 13:53:06,2017-04-17 13:53:19,2017-04-17 13:53:31,2017-04-17 13:53:43,2017-04-17 13:53:56,2017-04-17 13:54:08",
  "latitude": 33.824252,
  "longitude": -84.343108,
  "node_id": "5424478978,660525907,5424478978,660525907,68215677,68383965,68215677,68383965,68383962,68383965,68383962,5416399997,68383962,5416399997,68383956,68383953,68383956,68383953,5416399994,68383951,8481851803,68383944,8481851803,68383944,68383941,68383938,68383941,68383938,3583561360,68383933,68374937"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.824144,
  "longitude": -84.343228,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.824048,
  "longitude": -84.343322,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823897,
  "longitude": -84.343374,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823679,
  "longitude": -84.34346,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823552,
  "longitude": -84.343501,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.82342,
  "longitude": -84.343551,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823348,
  "longitude": -84.343566,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823257,
  "longitude": -84.343584,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823089,
  "longitude": -84.343603,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.823046,
  "longitude": -84.343608,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.822606,
  "longitude": -84.343732,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.822549,
  "longitude": -84.34375,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.822442,
  "longitude": -84.343788,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.822241,
  "longitude": -84.34386,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.822093,
  "longitude": -84.343948,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.822047,
  "longitude": -84.343976,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821935,
  "longitude": -84.344047,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821686,
  "longitude": -84.34424,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821424,
  "longitude": -84.344502,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821216,
  "longitude": -84.344778,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821148,
  "longitude": -84.344934,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821123,
  "longitude": -84.345022,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821105,
  "longitude": -84.345092,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.821027,
  "longitude": -84.345384,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.82102,
  "longitude": -84.345412,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.82085,
  "longitude": -84.346091,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820817,
  "longitude": -84.346221,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820717,
  "longitude": -84.346683,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820711,
  "longitude": -84.346712,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820676,
  "longitude": -84.346877,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820599,
  "longitude": -84.34716,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820537,
  "longitude": -84.347391,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820511,
  "longitude": -84.347533,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.8205,
  "longitude": -84.347593,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "7.8200001716614,9.6199998855591,11.619999885559,9.8900003433228,4.7699999809265,2.6900000572205,2.0499999523163,2.7999999523163",
  "recorded": "2017-04-17 13:54:14,2017-04-17 13:54:26,2017-04-17 13:54:41,2017-04-17 13:54:55,2017-04-17 13:55:07,2017-04-17 13:55:21,2017-04-17 13:55:36,2017-04-17 13:55:49",
  "latitude": 33.820481,
  "longitude": -84.347685,
  "node_id": "68374937,68383928,68383926,68383923,3583561336,68383919,68215769,68383919,68215769,68383917,68383914,68364537,68383912,8481506898,68383909,68215639,68383909,68215639,68383906,68383902,68383900,68383897,6908487256,3583557689,68362350,3583557689,68362350,68383895,68383893,68383895,68383893,8481506893,8481506881,8481506893,8481506881,68383890,8481506881,68383890,6837450372,68383890,6837450372,9672805969"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.82047,
  "longitude": -84.347741,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820412,
  "longitude": -84.348025,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820402,
  "longitude": -84.348119,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.82038,
  "longitude": -84.348334,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820375,
  "longitude": -84.348463,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820379,
  "longitude": -84.348728,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820384,
  "longitude": -84.349046,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820386,
  "longitude": -84.349143,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820394,
  "longitude": -84.349661,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820398,
  "longitude": -84.349924,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820403,
  "longitude": -84.350287,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820404,
  "longitude": -84.350337,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820407,
  "longitude": -84.350553,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820409,
  "longitude": -84.350679,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820416,
  "longitude": -84.351118,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820417,
  "longitude": -84.351202,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820408,
  "longitude": -84.351358,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820156,
  "longitude": -84.351325,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.820089,
  "longitude": -84.351316,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819899,
  "longitude": -84.351303,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819754,
  "longitude": -84.351304,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819678,
  "longitude": -84.351305,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.81967,
  "longitude": -84.351306,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819458,
  "longitude": -84.351327,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819396,
  "longitude": -84.351339,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.81926,
  "longitude": -84.351364,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819194,
  "longitude": -84.351382,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819114,
  "longitude": -84.351404,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "2.0999999046326,4.4800000190735,8.3400001525879,6.7300000190735,4.6300001144409,3.4400000572205,2.1199998855591,1.1699999570847",
  "recorded": "2017-04-17 13:55:56,2017-04-17 13:56:08,2017-04-17 13:56:23,2017-04-17 13:56:36,2017-04-17 13:56:49,2017-04-17 13:57:05,2017-04-17 13:57:19,2017-04-17 13:57:30",
  "latitude": 33.819092,
  "longitude": -84.35141,
  "node_id": "6837450372,9672805969,384327606,9672805969,384327606,8973164443,69568574,69452701,69568574,69452701,5416412405,5416412411,5416412406,5416412411,5416412406,5416412403,5416412398,69568572,5416412398,69568572,69506241,3471592135,69506239,69506236,69506233,69506236,69506233,3471591927,69506231,69506229,69506231,69506229,3471592134,69506229,3471592134,69506225"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.819007,
  "longitude": -84.351439,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818958,
  "longitude": -84.351457,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818841,
  "longitude": -84.3515,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818631,
  "longitude": -84.351578,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818433,
  "longitude": -84.351651,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818292,
  "longitude": -84.351701,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818206,
  "longitude": -84.351732,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818198,
  "longitude": -84.351735,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.818141,
  "longitude": -84.351755,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817946,
  "longitude": -84.351822,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817738,
  "longitude": -84.351899,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817723,
  "longitude": -84.351904,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817603,
  "longitude": -84.351947,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817349,
  "longitude": -84.352037,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817295,
  "longitude": -84.352056,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817183,
  "longitude": -84.352096,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.817018,
  "longitude": -84.352154,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.816871,
  "longitude": -84.352205,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.816804,
  "longitude": -84.352228,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.8168,
  "longitude": -84.352229,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.816757,
  "longitude": -84.352245,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "4.2300000190735,3.8399999141693,4.3899998664856,3.8599998950958,3.4500000476837,3.4100000858307,0.0,3.039999961853",
  "recorded": "2017-04-17 13:57:36,2017-04-17 13:57:47,2017-04-17 13:58:00,2017-04-17 13:58:13,2017-04-17 13:58:25,2017-04-17 13:58:38,2017-04-17 13:58:53,2017-04-17 13:59:05",
  "latitude": 33.816589,
  "longitude": -84.352306,
  "node_id": "69506225,3471591926,3471591930,69324227,3471591930,69324227,10017820191,10017820168,10017820187,10017820168,10017820187,10017820204,5424381092,10017820204,5424381092,5416361702,5424381095,69506222,5424381095,69506222,5424381427,5416362075,5424381427,5416362075,10971204375,5416362075,10971204375,5416362075,10971204375"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.816526,
  "longitude": -84.352329,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.816453,
  "longitude": -84.352355,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.816343,
  "longitude": -84.352394,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.81616,
  "longitude": -84.35247,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.816069,
  "longitude": -84.352508,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.8159,
  "longitude": -84.352579,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815795,
  "longitude": -84.352629,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815614,
  "longitude": -84.352716,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815547,
  "longitude": -84.352749,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815486,
  "longitude": -84.352778,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815415,
  "longitude": -84.352817,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815255,
  "longitude": -84.352903,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815236,
  "longitude": -84.352914,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815177,
  "longitude": -84.352946,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815039,
  "longitude": -84.353021,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.815022,
  "longitude": -84.35303,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814964,
  "longitude": -84.352881,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814901,
  "longitude": -84.352719,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814804,
  "longitude": -84.35247,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814804,
  "longitude": -84.35247,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814541,
  "longitude": -84.351795,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814541,
  "longitude": -84.351795,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.814373,
  "longitude": -84.351767,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813987,
  "longitude": -84.351651,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813966,
  "longitude": -84.351642,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813876,
  "longitude": -84.351602,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813795,
  "longitude": -84.351555,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813732,
  "longitude": -84.351518,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813432,
  "longitude": -84.351339,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813315,
  "longitude": -84.351269,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813172,
  "longitude": -84.35121,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.813024,
  "longitude": -84.351171,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.8129,
  "longitude": -84.351155,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.812868,
  "longitude": -84.351151,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.812707,
  "longitude": -84.351154,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.812587,
  "longitude": -84.351171,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "3.8299999237061,3.9300000667572,5.9000000953674,2.6099998950958,5.5,4.0700001716614,8.6899995803833,11.939999580383",
  "recorded": "2017-04-17 13:59:12,2017-04-17 13:59:24,2017-04-17 13:59:35,2017-04-17 13:59:50,2017-04-17 14:00:03,2017-04-17 14:00:17,2017-04-17 14:00:30,2017-04-17 14:00:41",
  "latitude": 33.812498,
  "longitude": -84.351191,
  "node_id": "5416362075,10971204375,69506219,10971204372,69506216,10971204372,69506216,5416362080,5416367837,5416362080,5416367837,69506212,5416367850,5416367833,8880842101,5416383447,69506208,5416383447,69506208,5416367830,5424413189,8410672258,69440696,8410672258,69440696,69440695,69440696,69440695,69440692,69440690,69440692,69440690,5837742289,69440688,5424413159,69440686,69440683,69440681,69440680,69440681,69440680,69440678,69440674,69440670"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.812331,
  "longitude": -84.351229,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.812304,
  "longitude": -84.351235,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.811575,
  "longitude": -84.351399,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.811292,
  "longitude": -84.351463,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.811124,
  "longitude": -84.3515,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.810814,
  "longitude": -84.351569,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.810259,
  "longitude": -84.351693,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.810226,
  "longitude": -84.3517,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.810067,
  "longitude": -84.351738,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.80999,
  "longitude": -84.351755,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809937,
  "longitude": -84.351767,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809806,
  "longitude": -84.351774,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809794,
  "longitude": -84.351773,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809691,
  "longitude": -84.351763,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809661,
  "longitude": -84.351755,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809638,
  "longitude": -84.351749,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809547,
  "longitude": -84.351725,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.80941,
  "longitude": -84.35166,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809282,
  "longitude": -84.351571,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.80924,
  "longitude": -84.351529,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809152,
  "longitude": -84.351439,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809089,
  "longitude": -84.351358,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.809031,
  "longitude": -84.351263,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808805,
  "longitude": -84.35082,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808789,
  "longitude": -84.350788,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808702,
  "longitude": -84.350664,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808593,
  "longitude": -84.350544,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808462,
  "longitude": -84.350434,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808307,
  "longitude": -84.350342,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808142,
  "longitude": -84.35028,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.808036,
  "longitude": -84.35026,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.80799,
  "longitude": -84.350251,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.807836,
  "longitude": -84.350248,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "9.3000001907349,6.6999998092651,5.7699999809265,3.539999961853,4.8400001525879,5.3299999237061,6.7600002288818,8.1199998855591",
  "recorded": "2017-04-17 14:00:46,2017-04-17 14:00:59,2017-04-17 14:01:13,2017-04-17 14:01:25,2017-04-17 14:01:37,2017-04-17 14:01:51,2017-04-17 14:02:06,2017-04-17 14:02:19",
  "latitude": 33.807764,
  "longitude": -84.350259,
  "node_id": "69440674,69440670,69440669,69440670,69440669,6908348908,69440668,6908348908,69440668,6908348908,69440668,1485045598,7249890103,69440667,69440664,69440661,69440664,69440661,7249890112,1485045575,69440659,69440657,69440655,69440653,69440655,69440653,69440650,69440648,69440646,69440648,69440646,69440644,69317929,69440643,69440640,69440637,69440635,69440637,69440635,69440633,69440632"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.807626,
  "longitude": -84.350287,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.807516,
  "longitude": -84.350324,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.807326,
  "longitude": -84.35042,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.806957,
  "longitude": -84.350611,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.806456,
  "longitude": -84.350871,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.806347,
  "longitude": -84.350916,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.806277,
  "longitude": -84.350936,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.80624,
  "longitude": -84.350946,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.806076,
  "longitude": -84.350965,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805894,
  "longitude": -84.350951,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805862,
  "longitude": -84.350943,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805751,
  "longitude": -84.350914,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805719,
  "longitude": -84.350906,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805671,
  "longitude": -84.350893,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805594,
  "longitude": -84.350874,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805535,
  "longitude": -84.350849,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.805431,
  "longitude": -84.350804,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804909,
  "longitude": -84.350466,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804857,
  "longitude": -84.350433,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804851,
  "longitude": -84.350429,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804742,
  "longitude": -84.350371,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804646,
  "longitude": -84.350337,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804624,
  "longitude": -84.350332,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804551,
  "longitude": -84.350317,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804365,
  "longitude": -84.350301,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.80433,
  "longitude": -84.350302,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804278,
  "longitude": -84.350304,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804234,
  "longitude": -84.350313,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804201,
  "longitude": -84.350319,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.804125,
  "longitude": -84.350345,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.803938,
  "longitude": -84.350449,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.80377,
  "longitude": -84.350574,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.803608,
  "longitude": -84.350694,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.80341,
  "longitude": -84.350841,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.803203,
  "longitude": -84.350995,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.80317,
  "longitude": -84.351017,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.803076,
  "longitude": -84.351078,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "7.3200001716614,9.039999961853,7.0100002288818,7.6599998474121,4.6900000572205,5.8800001144409,5.3000001907349,5.0300002098083",
  "recorded": "2017-04-17 14:02:24,2017-04-17 14:02:35,2017-04-17 14:02:48,2017-04-17 14:02:59,2017-04-17 14:03:11,2017-04-17 14:03:23,2017-04-17 14:03:34,2017-04-17 14:03:49",
  "latitude": 33.802857,
  "longitude": -84.351184,
  "node_id": "69440632,69440626,69317939,69440624,69317939,69440624,69440622,69440620,69440622,69440620,69440619,69440616,10231002027,69440612,69440610,10231002028,69440608,69379393,69440608,69379393,6308484066,69440605,6308484066,69440605,69440601,69440599,6308484073,69440597,69440595,7848320913,69440594,69440593,69440594,69440593,69440588,69440586,6866325073,69440586,6866325073,6723970360,69440584,69440583,69440584,69440583,69440582"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.802766,
  "longitude": -84.351229,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.802292,
  "longitude": -84.351459,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.801664,
  "longitude": -84.351764,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.801475,
  "longitude": -84.351856,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.801303,
  "longitude": -84.351917,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.801147,
  "longitude": -84.351918,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.801127,
  "longitude": -84.351918,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800969,
  "longitude": -84.351883,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.80082,
  "longitude": -84.35181,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800776,
  "longitude": -84.351774,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800687,
  "longitude": -84.351702,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800582,
  "longitude": -84.351577,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800485,
  "longitude": -84.351425,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800422,
  "longitude": -84.351326,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800361,
  "longitude": -84.351197,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800317,
  "longitude": -84.351074,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800273,
  "longitude": -84.350954,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.80022,
  "longitude": -84.350832,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800144,
  "longitude": -84.350695,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800128,
  "longitude": -84.350671,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800053,
  "longitude": -84.350564,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800027,
  "longitude": -84.350534,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "5.6100001335144,4.8800001144409,5.5799999237061,3.6800000667572,2.9200000762939,2.8399999141693,3.0099999904633,2.5599999427795",
  "recorded": "2017-04-17 14:03:56,2017-04-17 14:04:09,2017-04-17 14:04:23,2017-04-17 14:04:36,2017-04-17 14:04:48,2017-04-17 14:05:01,2017-04-17 14:05:13,2017-04-17 14:05:26",
  "latitude": 33.800024,
  "longitude": -84.350531,
  "node_id": "69440583,69440582,69440583,69440582,69440583,69440582,69440578,69440577,69440578,69440577,69440575,69440574,69440573,69440574,69440573,69440571,69440568,69440571,69440568,69440565,69440564,69440565,69440564,69440562,69440559,69440557,69440559,69440557,6723970367,69440554"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.800007,
  "longitude": -84.350511,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.79995,
  "longitude": -84.350447,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799773,
  "longitude": -84.350274,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799579,
  "longitude": -84.350084,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799453,
  "longitude": -84.34998,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799331,
  "longitude": -84.349881,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799194,
  "longitude": -84.3498,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799078,
  "longitude": -84.349759,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.799027,
  "longitude": -84.349751,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.798956,
  "longitude": -84.349739,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.798607,
  "longitude": -84.349739,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.798388,
  "longitude": -84.349739,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.798245,
  "longitude": -84.349739,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.798216,
  "longitude": -84.349739,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797932,
  "longitude": -84.34974,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797728,
  "longitude": -84.349741,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797508,
  "longitude": -84.349742,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797446,
  "longitude": -84.349753,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797428,
  "longitude": -84.349747,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797376,
  "longitude": -84.349784,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797345,
  "longitude": -84.349799,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "2.1800000667572,2.75,3.8399999141693,3.1600000858307,3.4500000476837,3.5,4.1199998855591,5.2800002098083",
  "recorded": "2017-04-17 14:05:32,2017-04-17 14:05:46,2017-04-17 14:05:59,2017-04-17 14:06:13,2017-04-17 14:06:25,2017-04-17 14:06:37,2017-04-17 14:06:51,2017-04-17 14:07:02",
  "latitude": 33.797097,
  "longitude": -84.349918,
  "node_id": "6723970367,69440554,69440551,69440554,69440551,69440549,69440551,69440549,69440547,69440544,69440541,69440544,69440541,69440538,69440541,69440538,6003286329,69139608,6003286329,69139608,69440536,69139608,69440536,69440535,69440533,69656278,69656276,69656278,69656276"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.797042,
  "longitude": -84.349945,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.79695,
  "longitude": -84.349989,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.796817,
  "longitude": -84.35004,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.796445,
  "longitude": -84.350231,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.795873,
  "longitude": -84.350525,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.795637,
  "longitude": -84.350646,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.795333,
  "longitude": -84.350773,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.795288,
  "longitude": -84.350792,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.794859,
  "longitude": -84.350934,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.794682,
  "longitude": -84.350992,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.79474,
  "longitude": -84.351102,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.794738,
  "longitude": -84.351572,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.794736,
  "longitude": -84.351987,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.794736,
  "longitude": -84.352,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "1",
  "speed": "5.75,5.8299999237061,5.2199997901917,4.7800002098083,3.9400000572205,5.1999998092651,1.0199999809265,0.0",
  "recorded": "2017-04-17 14:07:06,2017-04-17 14:07:20,2017-04-17 14:07:32,2017-04-17 14:07:44,2017-04-17 14:07:57,2017-04-17 14:08:10,2017-04-17 14:08:23,2017-04-17 14:08:37",
  "latitude": 33.794736,
  "longitude": -84.351999,
  "node_id": "69656278,69656276,69528869,69519448,69528869,69519448,69528869,69519448,69528867,69519448,69528867,69528865,69528867,69528865,69654304,69654302,69654304,69654302,69654304,69654302,69654302,69654304"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741296,
  "longitude": -84.346696,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741287,
  "longitude": -84.346734,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741283,
  "longitude": -84.346751,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741207,
  "longitude": -84.347067,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741168,
  "longitude": -84.347127,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741149,
  "longitude": -84.34716,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741136,
  "longitude": -84.347182,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.741079,
  "longitude": -84.347193,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740979,
  "longitude": -84.347157,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740883,
  "longitude": -84.347097,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740778,
  "longitude": -84.347029,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.74074,
  "longitude": -84.347005,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740676,
  "longitude": -84.346947,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740622,
  "longitude": -84.346832,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740624,
  "longitude": -84.346767,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740624,
  "longitude": -84.346767,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740502,
  "longitude": -84.346782,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740263,
  "longitude": -84.346773,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740226,
  "longitude": -84.346771,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740226,
  "longitude": -84.346771,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740226,
  "longitude": -84.346771,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740226,
  "longitude": -84.346771,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,1.5599999427795,3.4000000953674,2.5099999904633,3.6800000667572,0.0",
  "recorded": "2017-05-12 16:38:01,2017-05-12 16:38:16,2017-05-12 16:38:31,2017-05-12 16:38:43,2017-05-12 16:38:57,2017-05-12 16:39:10",
  "latitude": 33.740226,
  "longitude": -84.346771,
  "node_id": "5406907022,7956052641,5406907022,7956052641,7039477281,5406907021,7039477282,5406907021,7039477282,5406907019,5406907018,5406907017,7039478888,5406907017,7039478888,5406907016,7039478887,5406907015,5406907013,5406907015,5406907013,7039477283,7956052623,7956052624,7956052624,7956052623,5406907014,7956052623,5406907014"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740155,
  "longitude": -84.346994,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740155,
  "longitude": -84.347008,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740156,
  "longitude": -84.347112,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740158,
  "longitude": -84.347343,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740161,
  "longitude": -84.347811,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740161,
  "longitude": -84.348021,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740161,
  "longitude": -84.348052,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740162,
  "longitude": -84.348098,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740169,
  "longitude": -84.348434,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.74017,
  "longitude": -84.348503,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740172,
  "longitude": -84.348578,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740199,
  "longitude": -84.348995,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.74021,
  "longitude": -84.349167,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740263,
  "longitude": -84.349165,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740263,
  "longitude": -84.349165,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740325,
  "longitude": -84.349165,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740409,
  "longitude": -84.349164,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740418,
  "longitude": -84.349164,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "0.0,4.8800001144409,3.9200000762939,2.8299999237061,2.8299999237061,0.0",
  "recorded": "2017-05-12 16:39:26,2017-05-12 16:39:39,2017-05-12 16:39:53,2017-05-12 16:40:06,2017-05-12 16:40:23,2017-05-12 16:40:36",
  "latitude": 33.740418,
  "longitude": -84.349164,
  "node_id": "68196080,7039477278,405862524,5406924457,405862524,5406924457,68196078,5674733616,68196078,5674733616,5406924462,5674733616,5406924462,8026326799,7956052662,8026326799,7956052662,7956052661,7956052662,7956052661,7956052660,7956052668,7956052659,7956052668,7956052659"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.74041,
  "longitude": -84.349482,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.74041,
  "longitude": -84.349496,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.74042,
  "longitude": -84.349659,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740444,
  "longitude": -84.349883,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740449,
  "longitude": -84.35001,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740464,
  "longitude": -84.350393,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740464,
  "longitude": -84.350453,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740465,
  "longitude": -84.350513,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.74047,
  "longitude": -84.350769,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.74048,
  "longitude": -84.351251,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740481,
  "longitude": -84.351288,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740484,
  "longitude": -84.35137,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740469,
  "longitude": -84.351586,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740467,
  "longitude": -84.351608,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740458,
  "longitude": -84.351695,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740418,
  "longitude": -84.351975,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740355,
  "longitude": -84.352366,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740347,
  "longitude": -84.352422,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740334,
  "longitude": -84.352505,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740301,
  "longitude": -84.352698,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740269,
  "longitude": -84.352844,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740159,
  "longitude": -84.353353,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740149,
  "longitude": -84.353407,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740132,
  "longitude": -84.353493,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740056,
  "longitude": -84.353854,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.740044,
  "longitude": -84.353909,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.739987,
  "longitude": -84.354218,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.739976,
  "longitude": -84.354276,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.739956,
  "longitude": -84.354372,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.739891,
  "longitude": -84.354685,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.2300000190735,4.75,4.9299998283386,6.3299999237061,7.7399997711182,5.4400000572205",
  "recorded": "2017-05-12 16:40:52,2017-05-12 16:41:04,2017-05-12 16:41:19,2017-05-12 16:41:34,2017-05-12 16:41:50,2017-05-12 16:42:04",
  "latitude": 33.739891,
  "longitude": -84.354685,
  "node_id": "6939460212,6939460213,6939460214,6939460215,6939460210,6939460215,6939460210,6939460211,6939460209,4283381858,6939460209,4283381858,6939460182,4283381859,6939460184,6939460185,6939460184,6939460185,6939460186,6939460187,6939460191,6939460190,6939460192,6939460193,6939460192,6939460193,6939460195,6939460194,6939460196,6939460194,6939460196,6939460197,6939460199,6939460198,6939460200,6939460198,6939460200"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739822,
  "longitude": -84.354723,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739786,
  "longitude": -84.354919,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739751,
  "longitude": -84.355234,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739741,
  "longitude": -84.355527,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739734,
  "longitude": -84.355709,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739744,
  "longitude": -84.356294,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739745,
  "longitude": -84.356372,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739746,
  "longitude": -84.356455,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739748,
  "longitude": -84.356627,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739754,
  "longitude": -84.357081,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739758,
  "longitude": -84.357694,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739759,
  "longitude": -84.357896,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739762,
  "longitude": -84.358084,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739762,
  "longitude": -84.358106,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739763,
  "longitude": -84.358213,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739763,
  "longitude": -84.35827,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739764,
  "longitude": -84.358348,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739765,
  "longitude": -84.358466,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739765,
  "longitude": -84.35852,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739828,
  "longitude": -84.358522,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739834,
  "longitude": -84.358638,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739872,
  "longitude": -84.358639,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739907,
  "longitude": -84.359293,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739928,
  "longitude": -84.359292,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739929,
  "longitude": -84.359321,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.73993,
  "longitude": -84.359349,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739938,
  "longitude": -84.359377,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739938,
  "longitude": -84.359377,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "4.710000038147,7.1799998283386,8.4899997711182,4.8499999046326,0.0,5.1399998664856",
  "recorded": "2017-05-12 16:42:18,2017-05-12 16:42:33,2017-05-12 16:42:48,2017-05-12 16:43:01,2017-05-12 16:43:14,2017-05-12 16:43:27",
  "latitude": 33.739938,
  "longitude": -84.359377,
  "node_id": "69221915,69221914,69221910,69221908,69221910,69221908,5674725154,462956328,5674725155,462956368,5674725155,462956368,69221905,462956368,69221905,11267486603,69221903,11267486603,69221903,69221899,6939460162,5412126118,6939460162,5412126118,6939460163,6939460155,6939460154,6939460149,6939460151,6939460152,6939460150,6939460153,6939460150,6939460153,69221890"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740002,
  "longitude": -84.359568,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740147,
  "longitude": -84.359965,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740329,
  "longitude": -84.360592,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740401,
  "longitude": -84.360838,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740588,
  "longitude": -84.361533,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740597,
  "longitude": -84.361565,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740625,
  "longitude": -84.36167,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.74065,
  "longitude": -84.361786,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740739,
  "longitude": -84.362137,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740717,
  "longitude": -84.362176,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740711,
  "longitude": -84.362225,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740726,
  "longitude": -84.362329,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740733,
  "longitude": -84.362374,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740809,
  "longitude": -84.362614,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740913,
  "longitude": -84.362882,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.740948,
  "longitude": -84.362974,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.741145,
  "longitude": -84.363433,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.741277,
  "longitude": -84.36374,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.741392,
  "longitude": -84.364018,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "7.6900000572205,8.4099998474121,5.960000038147,4.4899997711182,4.2600002288818,4.3000001907349",
  "recorded": "2017-05-12 16:43:42,2017-05-12 16:43:56,2017-05-12 16:44:09,2017-05-12 16:44:21,2017-05-12 16:44:34,2017-05-12 16:44:48",
  "latitude": 33.741392,
  "longitude": -84.364018,
  "node_id": "6939460128,6939460028,6939460029,6939460028,6939460029,6939460030,6939460036,6939460030,6939460036,6939460034,6939460037,6939460038,6939460039,6939460040,6939460039,6939460040,6939460041,6939460042,6939460041,6939460042,6939460047,6939460042,6939460047,6939460043,6939460047,6939460043"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.74143,
  "longitude": -84.364099,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.741467,
  "longitude": -84.364179,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.741587,
  "longitude": -84.364415,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.741676,
  "longitude": -84.364563,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.741937,
  "longitude": -84.364994,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742002,
  "longitude": -84.365102,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742047,
  "longitude": -84.365178,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742097,
  "longitude": -84.365263,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742225,
  "longitude": -84.365477,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742501,
  "longitude": -84.365939,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742541,
  "longitude": -84.366008,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742554,
  "longitude": -84.366029,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742585,
  "longitude": -84.366145,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742588,
  "longitude": -84.366487,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742588,
  "longitude": -84.366655,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742588,
  "longitude": -84.366693,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.74259,
  "longitude": -84.36677,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.74259,
  "longitude": -84.366835,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742594,
  "longitude": -84.367378,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "4.1900000572205,3.7000000476837,4.0999999046326,4.0100002288818,3.9900000095367,4.3299999237061",
  "recorded": "2017-05-12 16:45:02,2017-05-12 16:45:15,2017-05-12 16:45:28,2017-05-12 16:45:41,2017-05-12 16:45:56,2017-05-12 16:46:10",
  "latitude": 33.742594,
  "longitude": -84.367378,
  "node_id": "6939460043,6939460044,6939460045,6939460046,6939460045,6939460046,6939460045,6939460046,6939460049,6939460048,6939460052,6939460048,6939460052,6939460053,6939460052,6939460053,6939460054,6939460059,6939460061,6939460059,6939460061,6939460062,6939460060,6939460055,6939460060,6939460055"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742482,
  "longitude": -84.367662,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742482,
  "longitude": -84.367662,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.74253,
  "longitude": -84.367662,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742531,
  "longitude": -84.367922,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742535,
  "longitude": -84.367977,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742535,
  "longitude": -84.367977,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742542,
  "longitude": -84.368088,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742543,
  "longitude": -84.368102,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742599,
  "longitude": -84.368086,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.74264,
  "longitude": -84.368083,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742677,
  "longitude": -84.368081,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.74272,
  "longitude": -84.368079,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742729,
  "longitude": -84.368086,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742763,
  "longitude": -84.368113,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742799,
  "longitude": -84.368142,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742715,
  "longitude": -84.36818,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742715,
  "longitude": -84.36818,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742693,
  "longitude": -84.368309,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742682,
  "longitude": -84.368309,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.74255,
  "longitude": -84.368265,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742478,
  "longitude": -84.368241,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742479,
  "longitude": -84.368433,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742491,
  "longitude": -84.368529,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742507,
  "longitude": -84.368701,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742538,
  "longitude": -84.368878,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "3.7799999713898,2.8299999237061,2.4900000095367,0.0,3.2200000286102,3.8599998950958",
  "recorded": "2017-05-12 16:46:25,2017-05-12 16:46:37,2017-05-12 16:46:49,2017-05-12 16:47:02,2017-05-12 16:47:17,2017-05-12 16:47:30",
  "latitude": 33.742538,
  "longitude": -84.368878,
  "node_id": "5406942748,6939460018,5406942747,5406942743,7105216067,5430623421,7105216067,5430623421,5430622620,5430623422,5430623424,5430623422,5430623424,7104853662,7105216074,69124550,7105216074,69124550,7105216075,69124550,7105216075,7105216073,7104853634,7104853646,7104853634,7104853646,7104853647,69221845,5430622616,69221843,5430622616,69221843"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742731,
  "longitude": -84.369308,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742793,
  "longitude": -84.369476,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742869,
  "longitude": -84.369729,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742934,
  "longitude": -84.370035,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742942,
  "longitude": -84.3701,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742972,
  "longitude": -84.370346,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.742997,
  "longitude": -84.371328,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743009,
  "longitude": -84.371798,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743025,
  "longitude": -84.37241,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743035,
  "longitude": -84.372803,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743047,
  "longitude": -84.373281,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743091,
  "longitude": -84.37327,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743251,
  "longitude": -84.37327,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743674,
  "longitude": -84.373271,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743721,
  "longitude": -84.373295,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.743738,
  "longitude": -84.373295,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "5.6100001335144,8.3500003814697,8.3999996185303,3.9100000858307,4.1799998283386,4.2199997901917",
  "recorded": "2017-05-12 16:47:45,2017-05-12 16:47:59,2017-05-12 16:48:15,2017-05-12 16:48:30,2017-05-12 16:48:46,2017-05-12 16:48:59",
  "latitude": 33.744181,
  "longitude": -84.37329,
  "node_id": "69221840,69221836,69221835,69221830,69221828,69221830,69221828,69221825,5416216213,69221825,5416216213,6939548968,5416216213,6939548968,6939548967,6939548975,6939548967,6939548975,6939548976,6939548977,6939548976,6939548977"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.744251,
  "longitude": -84.37329,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.744282,
  "longitude": -84.37329,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.744356,
  "longitude": -84.373293,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.744676,
  "longitude": -84.3733,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.744881,
  "longitude": -84.373304,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745198,
  "longitude": -84.37331,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745488,
  "longitude": -84.373316,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745483,
  "longitude": -84.372875,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745483,
  "longitude": -84.372875,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745474,
  "longitude": -84.37216,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745464,
  "longitude": -84.371434,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745464,
  "longitude": -84.371399,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.74552,
  "longitude": -84.371439,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745588,
  "longitude": -84.371489,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745584,
  "longitude": -84.371411,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.745582,
  "longitude": -84.371338,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "3.6099998950958,3.8900001049042,5.0300002098083,4.9899997711182,4.9099998474121,5.4099998474121",
  "recorded": "2017-05-12 16:49:11,2017-05-12 16:49:24,2017-05-12 16:49:39,2017-05-12 16:49:56,2017-05-12 16:50:09,2017-05-12 16:50:23",
  "latitude": 33.74558,
  "longitude": -84.371238,
  "node_id": "6939548977,6939548980,6939548978,6943847210,6939548978,6943847210,6939548982,6943847210,6939548982,6943847218,6939548982,6943847218,6943847206,6943847218,6943847206,6943847218,6943847206,6943847252,6943847250,6943847251,6943847241,6943847249"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.745515,
  "longitude": -84.371004,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.745513,
  "longitude": -84.370802,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.74551,
  "longitude": -84.370492,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.745509,
  "longitude": -84.370414,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.745509,
  "longitude": -84.370403,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.745509,
  "longitude": -84.370397,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": "176",
  "speed": "2.2200000286102,2.6199998855591,1.710000038147,0.0,0.20999999344349,0.52999997138977",
  "recorded": "2017-05-12 16:50:36,2017-05-12 16:50:50,2017-05-12 16:51:03,2017-05-12 16:51:18,2017-05-12 16:51:30,2017-05-12 16:51:44",
  "latitude": 33.745509,
  "longitude": -84.370403,
  "node_id": "6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,6925636942,7865808051,7865808051,6925636942"
},
{
  "trip_id": 17,
  "latitude": 33.741332,
  "longitude": -84.346708
},
{
  "trip_id": 17,
  "latitude": 33.741331,
  "longitude": -84.346708
},
{
  "trip_id": 17,
  "latitude": 33.741332,
  "longitude": -84.346707
},
{
  "trip_id": 17,
  "latitude": 33.741333,
  "longitude": -84.346707
},
{
  "trip_id": 17,
  "latitude": 33.741338,
  "longitude": -84.346721
},
{
  "trip_id": 17,
  "latitude": 33.741337,
  "longitude": -84.34672
},
{
  "trip_id": 17,
  "latitude": 33.741332,
  "longitude": -84.346724
},
{
  "trip_id": 17,
  "latitude": 33.74133,
  "longitude": -84.346728
},
{
  "trip_id": 17,
  "latitude": 33.741333,
  "longitude": -84.34675
},
{
  "trip_id": 17,
  "latitude": 33.741319,
  "longitude": -84.346776
},
{
  "trip_id": 17,
  "latitude": 33.741304,
  "longitude": -84.346837
},
{
  "trip_id": 17,
  "latitude": 33.741293,
  "longitude": -84.346879
},
{
  "trip_id": 17,
  "latitude": 33.741289,
  "longitude": -84.346916
},
{
  "trip_id": 17,
  "latitude": 33.741272,
  "longitude": -84.34698
},
{
  "trip_id": 17,
  "latitude": 33.741258,
  "longitude": -84.347041
},
{
  "trip_id": 17,
  "latitude": 33.74125,
  "longitude": -84.34707
},
{
  "trip_id": 17,
  "latitude": 33.741223,
  "longitude": -84.347127
},
{
  "trip_id": 17,
  "latitude": 33.741165,
  "longitude": -84.347174
},
{
  "trip_id": 17,
  "latitude": 33.741108,
  "longitude": -84.347202
},
{
  "trip_id": 17,
  "latitude": 33.741078,
  "longitude": -84.347205
},
{
  "trip_id": 17,
  "latitude": 33.741008,
  "longitude": -84.347186
},
{
  "trip_id": 17,
  "latitude": 33.740949,
  "longitude": -84.34715
},
{
  "trip_id": 17,
  "latitude": 33.740932,
  "longitude": -84.347118
},
{
  "trip_id": 17,
  "latitude": 33.740872,
  "longitude": -84.347046
},
{
  "trip_id": 17,
  "latitude": 33.740841,
  "longitude": -84.34704
},
{
  "trip_id": 17,
  "latitude": 33.740809,
  "longitude": -84.347029
},
{
  "trip_id": 17,
  "latitude": 33.740782,
  "longitude": -84.34702
},
{
  "trip_id": 17,
  "latitude": 33.740759,
  "longitude": -84.347015
},
{
  "trip_id": 17,
  "latitude": 33.740731,
  "longitude": -84.346988
},
{
  "trip_id": 17,
  "latitude": 33.740728,
  "longitude": -84.346981
},
{
  "trip_id": 17,
  "latitude": 33.740725,
  "longitude": -84.34696
},
{
  "trip_id": 17,
  "latitude": 33.740714,
  "longitude": -84.346928
},
{
  "trip_id": 17,
  "latitude": 33.740706,
  "longitude": -84.346909
},
{
  "trip_id": 17,
  "latitude": 33.740694,
  "longitude": -84.346889
},
{
  "trip_id": 17,
  "latitude": 33.740666,
  "longitude": -84.346846
},
{
  "trip_id": 17,
  "latitude": 33.740638,
  "longitude": -84.34683
},
{
  "trip_id": 17,
  "latitude": 33.740572,
  "longitude": -84.346855
},
{
  "trip_id": 17,
  "latitude": 33.740542,
  "longitude": -84.346883
},
{
  "trip_id": 17,
  "latitude": 33.740524,
  "longitude": -84.34693
},
{
  "trip_id": 17,
  "latitude": 33.74047,
  "longitude": -84.347014
},
{
  "trip_id": 17,
  "latitude": 33.740422,
  "longitude": -84.34703
},
{
  "trip_id": 17,
  "latitude": 33.740327,
  "longitude": -84.347012
},
{
  "trip_id": 17,
  "latitude": 33.740263,
  "longitude": -84.347002
},
{
  "trip_id": 17,
  "latitude": 33.740252,
  "longitude": -84.347002
},
{
  "trip_id": 17,
  "latitude": 33.740238,
  "longitude": -84.347006
},
{
  "trip_id": 17,
  "latitude": 33.740248,
  "longitude": -84.347007
},
{
  "trip_id": 17,
  "latitude": 33.740255,
  "longitude": -84.347014
},
{
  "trip_id": 17,
  "latitude": 33.740264,
  "longitude": -84.34701
},
{
  "trip_id": 17,
  "latitude": 33.740264,
  "longitude": -84.347003
},
{
  "trip_id": 17,
  "latitude": 33.740264,
  "longitude": -84.346999
},
{
  "trip_id": 17,
  "latitude": 33.740259,
  "longitude": -84.346997
},
{
  "trip_id": 17,
  "latitude": 33.74025,
  "longitude": -84.346997
},
{
  "trip_id": 17,
  "latitude": 33.740246,
  "longitude": -84.346998
},
{
  "trip_id": 17,
  "latitude": 33.740244,
  "longitude": -84.346998
},
{
  "trip_id": 17,
  "latitude": 33.740245,
  "longitude": -84.346993
},
{
  "trip_id": 17,
  "latitude": 33.740244,
  "longitude": -84.346994
},
{
  "trip_id": 17,
  "latitude": 33.740226,
  "longitude": -84.346997
},
{
  "trip_id": 17,
  "latitude": 33.740206,
  "longitude": -84.34701
},
{
  "trip_id": 17,
  "latitude": 33.740191,
  "longitude": -84.347065
},
{
  "trip_id": 17,
  "latitude": 33.740207,
  "longitude": -84.347142
},
{
  "trip_id": 17,
  "latitude": 33.740201,
  "longitude": -84.347195
},
{
  "trip_id": 17,
  "latitude": 33.740206,
  "longitude": -84.347246
},
{
  "trip_id": 17,
  "latitude": 33.740201,
  "longitude": -84.347343
},
{
  "trip_id": 17,
  "latitude": 33.740199,
  "longitude": -84.347401
},
{
  "trip_id": 17,
  "latitude": 33.7402,
  "longitude": -84.347523
},
{
  "trip_id": 17,
  "latitude": 33.740213,
  "longitude": -84.347627
},
{
  "trip_id": 17,
  "latitude": 33.740215,
  "longitude": -84.347725
},
{
  "trip_id": 17,
  "latitude": 33.740214,
  "longitude": -84.347774
},
{
  "trip_id": 17,
  "latitude": 33.740214,
  "longitude": -84.34782
},
{
  "trip_id": 17,
  "latitude": 33.740222,
  "longitude": -84.347914
},
{
  "trip_id": 17,
  "latitude": 33.740222,
  "longitude": -84.347962
},
{
  "trip_id": 17,
  "latitude": 33.740228,
  "longitude": -84.348051
},
{
  "trip_id": 17,
  "latitude": 33.740224,
  "longitude": -84.348096
},
{
  "trip_id": 17,
  "latitude": 33.740234,
  "longitude": -84.348171
},
{
  "trip_id": 17,
  "latitude": 33.740241,
  "longitude": -84.348207
},
{
  "trip_id": 17,
  "latitude": 33.740241,
  "longitude": -84.348235
},
{
  "trip_id": 17,
  "latitude": 33.740243,
  "longitude": -84.348266
},
{
  "trip_id": 17,
  "latitude": 33.740246,
  "longitude": -84.348332
},
{
  "trip_id": 17,
  "latitude": 33.740251,
  "longitude": -84.348349
},
{
  "trip_id": 17,
  "latitude": 33.740256,
  "longitude": -84.348385
},
{
  "trip_id": 17,
  "latitude": 33.740257,
  "longitude": -84.348431
},
{
  "trip_id": 17,
  "latitude": 33.740258,
  "longitude": -84.348459
},
{
  "trip_id": 17,
  "latitude": 33.740256,
  "longitude": -84.348533
},
{
  "trip_id": 17,
  "latitude": 33.740246,
  "longitude": -84.3486
},
{
  "trip_id": 17,
  "latitude": 33.740243,
  "longitude": -84.348678
},
{
  "trip_id": 17,
  "latitude": 33.740246,
  "longitude": -84.34871
},
{
  "trip_id": 17,
  "latitude": 33.74025,
  "longitude": -84.348794
},
{
  "trip_id": 17,
  "latitude": 33.740256,
  "longitude": -84.348871
},
{
  "trip_id": 17,
  "latitude": 33.740273,
  "longitude": -84.348946
},
{
  "trip_id": 17,
  "latitude": 33.740328,
  "longitude": -84.348983
},
{
  "trip_id": 17,
  "latitude": 33.740354,
  "longitude": -84.34904
},
{
  "trip_id": 17,
  "latitude": 33.740366,
  "longitude": -84.349064
},
{
  "trip_id": 17,
  "latitude": 33.74039,
  "longitude": -84.349115
},
{
  "trip_id": 17,
  "latitude": 33.740425,
  "longitude": -84.349161
},
{
  "trip_id": 17,
  "latitude": 33.740433,
  "longitude": -84.349182
},
{
  "trip_id": 17,
  "latitude": 33.740437,
  "longitude": -84.349188
},
{
  "trip_id": 17,
  "latitude": 33.740429,
  "longitude": -84.349194
},
{
  "trip_id": 17,
  "latitude": 33.740429,
  "longitude": -84.349193
},
{
  "trip_id": 17,
  "latitude": 33.740432,
  "longitude": -84.349191
},
{
  "trip_id": 17,
  "latitude": 33.740431,
  "longitude": -84.349194
},
{
  "trip_id": 17,
  "latitude": 33.740433,
  "longitude": -84.349192
},
{
  "trip_id": 17,
  "latitude": 33.740433,
  "longitude": -84.349191
},
{
  "trip_id": 17,
  "latitude": 33.740431,
  "longitude": -84.34919
},
{
  "trip_id": 17,
  "latitude": 33.740432,
  "longitude": -84.349189
},
{
  "trip_id": 17,
  "latitude": 33.740432,
  "longitude": -84.349214
},
{
  "trip_id": 17,
  "latitude": 33.740434,
  "longitude": -84.349237
},
{
  "trip_id": 17,
  "latitude": 33.740435,
  "longitude": -84.349303
},
{
  "trip_id": 17,
  "latitude": 33.740419,
  "longitude": -84.349387
},
{
  "trip_id": 17,
  "latitude": 33.740412,
  "longitude": -84.349482
},
{
  "trip_id": 17,
  "latitude": 33.740419,
  "longitude": -84.349527
},
{
  "trip_id": 17,
  "latitude": 33.740424,
  "longitude": -84.349578
},
{
  "trip_id": 17,
  "latitude": 33.740432,
  "longitude": -84.349676
},
{
  "trip_id": 17,
  "latitude": 33.740431,
  "longitude": -84.349724
},
{
  "trip_id": 17,
  "latitude": 33.740439,
  "longitude": -84.349815
},
{
  "trip_id": 17,
  "latitude": 33.740442,
  "longitude": -84.349865
},
{
  "trip_id": 17,
  "latitude": 33.740449,
  "longitude": -84.349908
},
{
  "trip_id": 17,
  "latitude": 33.740455,
  "longitude": -84.35001
},
{
  "trip_id": 17,
  "latitude": 33.740456,
  "longitude": -84.350064
},
{
  "trip_id": 17,
  "latitude": 33.740458,
  "longitude": -84.350112
},
{
  "trip_id": 17,
  "latitude": 33.740463,
  "longitude": -84.35021
},
{
  "trip_id": 17,
  "latitude": 33.740467,
  "longitude": -84.350268
},
{
  "trip_id": 17,
  "latitude": 33.740467,
  "longitude": -84.350365
},
{
  "trip_id": 17,
  "latitude": 33.740459,
  "longitude": -84.350463
},
{
  "trip_id": 17,
  "latitude": 33.740466,
  "longitude": -84.350566
},
{
  "trip_id": 17,
  "latitude": 33.740466,
  "longitude": -84.350666
},
{
  "trip_id": 17,
  "latitude": 33.740469,
  "longitude": -84.350769
},
{
  "trip_id": 17,
  "latitude": 33.740469,
  "longitude": -84.350824
},
{
  "trip_id": 17,
  "latitude": 33.740471,
  "longitude": -84.350922
},
{
  "trip_id": 17,
  "latitude": 33.740475,
  "longitude": -84.351027
},
{
  "trip_id": 17,
  "latitude": 33.740473,
  "longitude": -84.351134
},
{
  "trip_id": 17,
  "latitude": 33.740473,
  "longitude": -84.351188
},
{
  "trip_id": 17,
  "latitude": 33.740476,
  "longitude": -84.3513
},
{
  "trip_id": 17,
  "latitude": 33.740475,
  "longitude": -84.351421
},
{
  "trip_id": 17,
  "latitude": 33.74048,
  "longitude": -84.351472
},
{
  "trip_id": 17,
  "latitude": 33.74047,
  "longitude": -84.351608
},
{
  "trip_id": 17,
  "latitude": 33.740461,
  "longitude": -84.351676
},
{
  "trip_id": 17,
  "latitude": 33.740434,
  "longitude": -84.351827
},
{
  "trip_id": 17,
  "latitude": 33.740417,
  "longitude": -84.351985
},
{
  "trip_id": 17,
  "latitude": 33.740393,
  "longitude": -84.352151
},
{
  "trip_id": 17,
  "latitude": 33.74037,
  "longitude": -84.352236
},
{"trip_id":2,"latitude":33.7947,"longitude":-84.352},{"trip_id":2,"latitude":33.7947,"longitude":-84.352},{"trip_id":2,"latitude":33.7947,"longitude":-84.3512},{"trip_id":2,"latitude":33.7947,"longitude":-84.3511},{"trip_id":2,"latitude":33.7947,"longitude":-84.351},{"trip_id":2,"latitude":33.795,"longitude":-84.3509},{"trip_id":2,"latitude":33.7953,"longitude":-84.3508},{"trip_id":2,"latitude":33.7956,"longitude":-84.3507},{"trip_id":2,"latitude":33.7956,"longitude":-84.3506},{"trip_id":2,"latitude":33.796,"longitude":-84.3504},{"trip_id":2,"latitude":33.7965,"longitude":-84.3502},{"trip_id":2,"latitude":33.7968,"longitude":-84.35},{"trip_id":2,"latitude":33.797,"longitude":-84.35},{"trip_id":2,"latitude":33.7972,"longitude":-84.3499},{"trip_id":2,"latitude":33.7972,"longitude":-84.3499},{"trip_id":2,"latitude":33.7972,"longitude":-84.3499},{"trip_id":2,"latitude":33.7973,"longitude":-84.3498},{"trip_id":2,"latitude":33.7973,"longitude":-84.3498},{"trip_id":2,"latitude":33.7974,"longitude":-84.3498},{"trip_id":2,"latitude":33.7974,"longitude":-84.3497},{"trip_id":2,"latitude":33.7974,"longitude":-84.3498},{"trip_id":2,"latitude":33.7975,"longitude":-84.3497},{"trip_id":2,"latitude":33.7977,"longitude":-84.3497},{"trip_id":2,"latitude":33.7979,"longitude":-84.3497},{"trip_id":2,"latitude":33.7982,"longitude":-84.3497},{"trip_id":2,"latitude":33.7984,"longitude":-84.3497},{"trip_id":2,"latitude":33.7987,"longitude":-84.3497},{"trip_id":2,"latitude":33.799,"longitude":-84.3497},{"trip_id":2,"latitude":33.7991,"longitude":-84.3498},{"trip_id":2,"latitude":33.7992,"longitude":-84.3498},{"trip_id":2,"latitude":33.7993,"longitude":-84.3499},{"trip_id":2,"latitude":33.7996,"longitude":-84.3501},{"trip_id":2,"latitude":33.7997,"longitude":-84.3502},{"trip_id":2,"latitude":33.7999,"longitude":-84.3504},{"trip_id":2,"latitude":33.8,"longitude":-84.3505},{"trip_id":2,"latitude":33.8001,"longitude":-84.3506},{"trip_id":2,"latitude":33.8001,"longitude":-84.3507},{"trip_id":2,"latitude":33.8002,"longitude":-84.3508},{"trip_id":2,"latitude":33.8003,"longitude":-84.351},{"trip_id":2,"latitude":33.8004,"longitude":-84.3512},{"trip_id":2,"latitude":33.8004,"longitude":-84.3513},{"trip_id":2,"latitude":33.8004,"longitude":-84.3514},{"trip_id":2,"latitude":33.8006,"longitude":-84.3516},{"trip_id":2,"latitude":33.8007,"longitude":-84.3517},{"trip_id":2,"latitude":33.8008,"longitude":-84.3518},{"trip_id":2,"latitude":33.801,"longitude":-84.3519},{"trip_id":2,"latitude":33.8011,"longitude":-84.3519},{"trip_id":2,"latitude":33.8013,"longitude":-84.3519},{"trip_id":2,"latitude":33.8015,"longitude":-84.3519},{"trip_id":2,"latitude":33.8017,"longitude":-84.3518},{"trip_id":2,"latitude":33.8017,"longitude":-84.3518},{"trip_id":2,"latitude":33.8019,"longitude":-84.3517},{"trip_id":2,"latitude":33.803,"longitude":-84.3511},{"trip_id":2,"latitude":33.8031,"longitude":-84.3511},{"trip_id":2,"latitude":33.8032,"longitude":-84.351},{"trip_id":2,"latitude":33.8034,"longitude":-84.3508},{"trip_id":2,"latitude":33.8036,"longitude":-84.3507},{"trip_id":2,"latitude":33.8038,"longitude":-84.3505},{"trip_id":2,"latitude":33.8039,"longitude":-84.3504},{"trip_id":2,"latitude":33.8041,"longitude":-84.3503},{"trip_id":2,"latitude":33.8042,"longitude":-84.3503},{"trip_id":2,"latitude":33.8043,"longitude":-84.3503},{"trip_id":2,"latitude":33.8043,"longitude":-84.3503},{"trip_id":2,"latitude":33.8044,"longitude":-84.3503},{"trip_id":2,"latitude":33.8046,"longitude":-84.3503},{"trip_id":2,"latitude":33.8046,"longitude":-84.3503},{"trip_id":2,"latitude":33.8046,"longitude":-84.3503},{"trip_id":2,"latitude":33.8047,"longitude":-84.3504},{"trip_id":2,"latitude":33.8049,"longitude":-84.3504},{"trip_id":2,"latitude":33.8049,"longitude":-84.3504},{"trip_id":2,"latitude":33.8049,"longitude":-84.3505},{"trip_id":2,"latitude":33.8054,"longitude":-84.3508},{"trip_id":2,"latitude":33.8056,"longitude":-84.3509},{"trip_id":2,"latitude":33.8057,"longitude":-84.3509},{"trip_id":2,"latitude":33.8057,"longitude":-84.3509},{"trip_id":2,"latitude":33.8058,"longitude":-84.3509},{"trip_id":2,"latitude":33.8059,"longitude":-84.3509},{"trip_id":2,"latitude":33.8059,"longitude":-84.351},{"trip_id":2,"latitude":33.8059,"longitude":-84.351},{"trip_id":2,"latitude":33.8061,"longitude":-84.351},{"trip_id":2,"latitude":33.8062,"longitude":-84.3509},{"trip_id":2,"latitude":33.8063,"longitude":-84.3509},{"trip_id":2,"latitude":33.8065,"longitude":-84.3509},{"trip_id":2,"latitude":33.8066,"longitude":-84.3508},{"trip_id":2,"latitude":33.8073,"longitude":-84.3504},{"trip_id":2,"latitude":33.8073,"longitude":-84.3504},{"trip_id":2,"latitude":33.8075,"longitude":-84.3503},{"trip_id":2,"latitude":33.8077,"longitude":-84.3503},{"trip_id":2,"latitude":33.8078,"longitude":-84.3503},{"trip_id":2,"latitude":33.8078,"longitude":-84.3503},{"trip_id":2,"latitude":33.8079,"longitude":-84.3503},{"trip_id":2,"latitude":33.808,"longitude":-84.3503},{"trip_id":2,"latitude":33.8081,"longitude":-84.3503},{"trip_id":2,"latitude":33.8083,"longitude":-84.3503},{"trip_id":2,"latitude":33.8084,"longitude":-84.3504},{"trip_id":2,"latitude":33.8085,"longitude":-84.3504},{"trip_id":2,"latitude":33.8086,"longitude":-84.3505},{"trip_id":2,"latitude":33.8087,"longitude":-84.3507},{"trip_id":2,"latitude":33.8088,"longitude":-84.3508},{"trip_id":2,"latitude":33.8088,"longitude":-84.3509},{"trip_id":2,"latitude":33.809,"longitude":-84.3513},{"trip_id":2,"latitude":33.8091,"longitude":-84.3514},{"trip_id":2,"latitude":33.8091,"longitude":-84.3514},{"trip_id":2,"latitude":33.8092,"longitude":-84.3514},{"trip_id":2,"latitude":33.8093,"longitude":-84.3516},{"trip_id":2,"latitude":33.8094,"longitude":-84.3517},{"trip_id":2,"latitude":33.8095,"longitude":-84.3517},{"trip_id":2,"latitude":33.8096,"longitude":-84.3517},{"trip_id":2,"latitude":33.8096,"longitude":-84.3517},{"trip_id":2,"latitude":33.8097,"longitude":-84.3518},{"trip_id":2,"latitude":33.8097,"longitude":-84.3518},{"trip_id":2,"latitude":33.8098,"longitude":-84.3518},{"trip_id":2,"latitude":33.8099,"longitude":-84.3518},{"trip_id":2,"latitude":33.81,"longitude":-84.3518},{"trip_id":2,"latitude":33.8101,"longitude":-84.3517},{"trip_id":2,"latitude":33.8102,"longitude":-84.3517},{"trip_id":2,"latitude":33.8102,"longitude":-84.3517},{"trip_id":2,"latitude":33.811,"longitude":-84.3515},{"trip_id":2,"latitude":33.8111,"longitude":-84.3515},{"trip_id":2,"latitude":33.8113,"longitude":-84.3515},{"trip_id":2,"latitude":33.8115,"longitude":-84.3514},{"trip_id":2,"latitude":33.8115,"longitude":-84.3514},{"trip_id":2,"latitude":33.8115,"longitude":-84.3514},{"trip_id":2,"latitude":33.8121,"longitude":-84.3513},{"trip_id":2,"latitude":33.8123,"longitude":-84.3512},{"trip_id":2,"latitude":33.8126,"longitude":-84.3512},{"trip_id":2,"latitude":33.8127,"longitude":-84.3512},{"trip_id":2,"latitude":33.8129,"longitude":-84.3512},{"trip_id":2,"latitude":33.8129,"longitude":-84.3512},{"trip_id":2,"latitude":33.813,"longitude":-84.3512},{"trip_id":2,"latitude":33.8132,"longitude":-84.3512},{"trip_id":2,"latitude":33.8133,"longitude":-84.3513},{"trip_id":2,"latitude":33.8134,"longitude":-84.3513},{"trip_id":2,"latitude":33.8135,"longitude":-84.3514},{"trip_id":2,"latitude":33.8137,"longitude":-84.3515},{"trip_id":2,"latitude":33.8138,"longitude":-84.3516},{"trip_id":2,"latitude":33.8139,"longitude":-84.3516},{"trip_id":2,"latitude":33.8139,"longitude":-84.3516},{"trip_id":2,"latitude":33.814,"longitude":-84.3517},{"trip_id":2,"latitude":33.8143,"longitude":-84.3517},{"trip_id":2,"latitude":33.8144,"longitude":-84.3518},{"trip_id":2,"latitude":33.8145,"longitude":-84.3518},{"trip_id":2,"latitude":33.8146,"longitude":-84.3518},{"trip_id":2,"latitude":33.8151,"longitude":-84.3518},{"trip_id":2,"latitude":33.8151,"longitude":-84.3518},{"trip_id":2,"latitude":33.8151,"longitude":-84.3518},{"trip_id":2,"latitude":33.8152,"longitude":-84.3518},{"trip_id":2,"latitude":33.8154,"longitude":-84.3518},{"trip_id":2,"latitude":33.8155,"longitude":-84.3518},{"trip_id":2,"latitude":33.8155,"longitude":-84.3518},{"trip_id":2,"latitude":33.8155,"longitude":-84.3518},{"trip_id":2,"latitude":33.8157,"longitude":-84.3518},{"trip_id":2,"latitude":33.8159,"longitude":-84.3518},{"trip_id":2,"latitude":33.816,"longitude":-84.3519},{"trip_id":2,"latitude":33.8162,"longitude":-84.352},{"trip_id":2,"latitude":33.8164,"longitude":-84.352},{"trip_id":2,"latitude":33.8164,"longitude":-84.352},{"trip_id":2,"latitude":33.8165,"longitude":-84.3521},{"trip_id":2,"latitude":33.8167,"longitude":-84.3521},{"trip_id":2,"latitude":33.8167,"longitude":-84.3521},{"trip_id":2,"latitude":33.8168,"longitude":-84.3522},{"trip_id":2,"latitude":33.8169,"longitude":-84.3522},{"trip_id":2,"latitude":33.817,"longitude":-84.3522},{"trip_id":2,"latitude":33.8172,"longitude":-84.3521},{"trip_id":2,"latitude":33.8173,"longitude":-84.352},{"trip_id":2,"latitude":33.8176,"longitude":-84.352},{"trip_id":2,"latitude":33.8176,"longitude":-84.3519},{"trip_id":2,"latitude":33.8177,"longitude":-84.3519},{"trip_id":2,"latitude":33.8179,"longitude":-84.3518},{"trip_id":2,"latitude":33.8181,"longitude":-84.3518},{"trip_id":2,"latitude":33.8182,"longitude":-84.3517},{"trip_id":2,"latitude":33.8182,"longitude":-84.3517},{"trip_id":2,"latitude":33.8183,"longitude":-84.3517},{"trip_id":2,"latitude":33.8184,"longitude":-84.3517},{"trip_id":2,"latitude":33.8188,"longitude":-84.3515},{"trip_id":2,"latitude":33.8189,"longitude":-84.3515},{"trip_id":2,"latitude":33.8189,"longitude":-84.3515},{"trip_id":2,"latitude":33.8195,"longitude":-84.3516},{"trip_id":2,"latitude":33.8197,"longitude":-84.3516},{"trip_id":2,"latitude":33.8197,"longitude":-84.3516},{"trip_id":2,"latitude":33.8198,"longitude":-84.3516},{"trip_id":2,"latitude":33.82,"longitude":-84.3516},{"trip_id":2,"latitude":33.82,"longitude":-84.3516},{"trip_id":2,"latitude":33.82,"longitude":-84.3516},{"trip_id":2,"latitude":33.8201,"longitude":-84.3516},{"trip_id":2,"latitude":33.8201,"longitude":-84.3516},{"trip_id":2,"latitude":33.8201,"longitude":-84.3514},{"trip_id":2,"latitude":33.8202,"longitude":-84.3514},{"trip_id":2,"latitude":33.8205,"longitude":-84.3514},{"trip_id":2,"latitude":33.8205,"longitude":-84.3514},{"trip_id":2,"latitude":33.8204,"longitude":-84.3514},{"trip_id":2,"latitude":33.8204,"longitude":-84.3514},{"trip_id":2,"latitude":33.8204,"longitude":-84.3512},{"trip_id":2,"latitude":33.8204,"longitude":-84.3508},{"trip_id":2,"latitude":33.8204,"longitude":-84.3507},{"trip_id":2,"latitude":33.8204,"longitude":-84.3506},{"trip_id":2,"latitude":33.8204,"longitude":-84.3503},{"trip_id":2,"latitude":33.8204,"longitude":-84.3502},{"trip_id":2,"latitude":33.8204,"longitude":-84.3499},{"trip_id":2,"latitude":33.8204,"longitude":-84.3497},{"trip_id":2,"latitude":33.8204,"longitude":-84.3494},{"trip_id":2,"latitude":33.8204,"longitude":-84.3491},{"trip_id":2,"latitude":33.8204,"longitude":-84.3489},{"trip_id":2,"latitude":33.8204,"longitude":-84.3487},{"trip_id":2,"latitude":33.8204,"longitude":-84.3485},{"trip_id":2,"latitude":33.8204,"longitude":-84.3483},{"trip_id":2,"latitude":33.8204,"longitude":-84.3483},{"trip_id":2,"latitude":33.8204,"longitude":-84.3483},{"trip_id":2,"latitude":33.8204,"longitude":-84.348},{"trip_id":2,"latitude":33.8205,"longitude":-84.3477},{"trip_id":2,"latitude":33.8205,"longitude":-84.3476},{"trip_id":2,"latitude":33.8205,"longitude":-84.3474},{"trip_id":2,"latitude":33.8207,"longitude":-84.3469},{"trip_id":2,"latitude":33.8207,"longitude":-84.3467},{"trip_id":2,"latitude":33.8207,"longitude":-84.3466},{"trip_id":2,"latitude":33.8208,"longitude":-84.3462},{"trip_id":2,"latitude":33.821,"longitude":-84.3454},{"trip_id":2,"latitude":33.821,"longitude":-84.3454},{"trip_id":2,"latitude":33.8211,"longitude":-84.3452},{"trip_id":2,"latitude":33.8211,"longitude":-84.345},{"trip_id":2,"latitude":33.8211,"longitude":-84.3449},{"trip_id":2,"latitude":33.8212,"longitude":-84.3448},{"trip_id":2,"latitude":33.8214,"longitude":-84.3445},{"trip_id":2,"latitude":33.8215,"longitude":-84.3444},{"trip_id":2,"latitude":33.8217,"longitude":-84.3442},{"trip_id":2,"latitude":33.8219,"longitude":-84.344},{"trip_id":2,"latitude":33.822,"longitude":-84.344},{"trip_id":2,"latitude":33.822,"longitude":-84.344},{"trip_id":2,"latitude":33.8222,"longitude":-84.3439},{"trip_id":2,"latitude":33.8224,"longitude":-84.3438},{"trip_id":2,"latitude":33.8224,"longitude":-84.3438},{"trip_id":2,"latitude":33.8225,"longitude":-84.3438},{"trip_id":2,"latitude":33.8226,"longitude":-84.3437},{"trip_id":2,"latitude":33.8227,"longitude":-84.3437},{"trip_id":2,"latitude":33.8227,"longitude":-84.3437},{"trip_id":2,"latitude":33.823,"longitude":-84.3436},{"trip_id":2,"latitude":33.8231,"longitude":-84.3436},{"trip_id":2,"latitude":33.8231,"longitude":-84.3436},{"trip_id":2,"latitude":33.8233,"longitude":-84.3436},{"trip_id":2,"latitude":33.8234,"longitude":-84.3436},{"trip_id":2,"latitude":33.8235,"longitude":-84.3435},{"trip_id":2,"latitude":33.8236,"longitude":-84.3435},{"trip_id":2,"latitude":33.8237,"longitude":-84.3435},{"trip_id":2,"latitude":33.8238,"longitude":-84.3434},{"trip_id":2,"latitude":33.8239,"longitude":-84.3434},{"trip_id":2,"latitude":33.824,"longitude":-84.3433},{"trip_id":2,"latitude":33.8242,"longitude":-84.3432},{"trip_id":2,"latitude":33.8242,"longitude":-84.3431},{"trip_id":2,"latitude":33.8243,"longitude":-84.3431},{"trip_id":2,"latitude":33.8243,"longitude":-84.343},{"trip_id":2,"latitude":33.8244,"longitude":-84.3428},{"trip_id":2,"latitude":33.8244,"longitude":-84.3428},{"trip_id":2,"latitude":33.8245,"longitude":-84.3425},{"trip_id":2,"latitude":33.8245,"longitude":-84.3424},{"trip_id":2,"latitude":33.8246,"longitude":-84.3422},{"trip_id":2,"latitude":33.8246,"longitude":-84.3422},{"trip_id":2,"latitude":33.8247,"longitude":-84.342},{"trip_id":2,"latitude":33.8247,"longitude":-84.3418},{"trip_id":2,"latitude":33.8247,"longitude":-84.3417},{"trip_id":2,"latitude":33.8248,"longitude":-84.3415},{"trip_id":2,"latitude":33.8248,"longitude":-84.3414},{"trip_id":2,"latitude":33.8248,"longitude":-84.3412},{"trip_id":2,"latitude":33.8248,"longitude":-84.3408},{"trip_id":2,"latitude":33.8248,"longitude":-84.3406},{"trip_id":2,"latitude":33.8248,"longitude":-84.3405},{"trip_id":2,"latitude":33.8248,"longitude":-84.3402},{"trip_id":2,"latitude":33.8248,"longitude":-84.3398},{"trip_id":2,"latitude":33.8248,"longitude":-84.3396},{"trip_id":2,"latitude":33.8248,"longitude":-84.3395},{"trip_id":2,"latitude":33.8248,"longitude":-84.3392},{"trip_id":2,"latitude":33.8248,"longitude":-84.3388},{"trip_id":2,"latitude":33.8248,"longitude":-84.3386},{"trip_id":2,"latitude":33.8248,"longitude":-84.3386},{"trip_id":2,"latitude":33.8246,"longitude":-84.3386},{"trip_id":2,"latitude":33.8246,"longitude":-84.3386},{"trip_id":2,"latitude":33.8244,"longitude":-84.3386},{"trip_id":2,"latitude":33.8244,"longitude":-84.3381},{"trip_id":2,"latitude":33.8244,"longitude":-84.3381},{"trip_id":2,"latitude":33.7947,"longitude":-84.352},{"trip_id":2,"latitude":33.7947,"longitude":-84.352},{"trip_id":2,"latitude":33.7947,"longitude":-84.3512},{"trip_id":2,"latitude":33.7947,"longitude":-84.3511},{"trip_id":2,"latitude":33.7947,"longitude":-84.351},{"trip_id":2,"latitude":33.795,"longitude":-84.3509},{"trip_id":2,"latitude":33.7953,"longitude":-84.3508},{"trip_id":2,"latitude":33.7956,"longitude":-84.3507},{"trip_id":2,"latitude":33.7956,"longitude":-84.3506},{"trip_id":2,"latitude":33.796,"longitude":-84.3504},{"trip_id":2,"latitude":33.7965,"longitude":-84.3502},{"trip_id":2,"latitude":33.7968,"longitude":-84.35},{"trip_id":2,"latitude":33.797,"longitude":-84.35},{"trip_id":2,"latitude":33.7972,"longitude":-84.3499},{"trip_id":2,"latitude":33.7972,"longitude":-84.3499},{"trip_id":2,"latitude":33.7972,"longitude":-84.3499},{"trip_id":2,"latitude":33.7973,"longitude":-84.3498},{"trip_id":2,"latitude":33.7973,"longitude":-84.3498},{"trip_id":2,"latitude":33.7974,"longitude":-84.3498},{"trip_id":2,"latitude":33.7974,"longitude":-84.3497},{"trip_id":2,"latitude":33.7974,"longitude":-84.3498},{"trip_id":2,"latitude":33.7975,"longitude":-84.3497},{"trip_id":2,"latitude":33.7977,"longitude":-84.3497},{"trip_id":2,"latitude":33.7979,"longitude":-84.3497},{"trip_id":2,"latitude":33.7982,"longitude":-84.3497},{"trip_id":2,"latitude":33.7984,"longitude":-84.3497},{"trip_id":2,"latitude":33.7987,"longitude":-84.3497},{"trip_id":2,"latitude":33.799,"longitude":-84.3497},{"trip_id":2,"latitude":33.7991,"longitude":-84.3498},{"trip_id":2,"latitude":33.7992,"longitude":-84.3498},{"trip_id":2,"latitude":33.7993,"longitude":-84.3499},{"trip_id":2,"latitude":33.7996,"longitude":-84.3501},{"trip_id":2,"latitude":33.7997,"longitude":-84.3502},{"trip_id":2,"latitude":33.7999,"longitude":-84.3504},{"trip_id":2,"latitude":33.8,"longitude":-84.3505},{"trip_id":2,"latitude":33.8001,"longitude":-84.3506},{"trip_id":2,"latitude":33.8001,"longitude":-84.3507},{"trip_id":2,"latitude":33.8002,"longitude":-84.3508},{"trip_id":2,"latitude":33.8003,"longitude":-84.351},{"trip_id":2,"latitude":33.8004,"longitude":-84.3512},{"trip_id":2,"latitude":33.8004,"longitude":-84.3513},{"trip_id":2,"latitude":33.8004,"longitude":-84.3514},{"trip_id":2,"latitude":33.8006,"longitude":-84.3516},{"trip_id":2,"latitude":33.8007,"longitude":-84.3517},{"trip_id":2,"latitude":33.8008,"longitude":-84.3518},{"trip_id":2,"latitude":33.801,"longitude":-84.3519},{"trip_id":2,"latitude":33.8011,"longitude":-84.3519},{"trip_id":2,"latitude":33.8013,"longitude":-84.3519},{"trip_id":2,"latitude":33.8015,"longitude":-84.3519},{"trip_id":2,"latitude":33.8017,"longitude":-84.3518},{"trip_id":2,"latitude":33.8017,"longitude":-84.3518},{"trip_id":2,"latitude":33.8019,"longitude":-84.3517},{"trip_id":2,"latitude":33.803,"longitude":-84.3511},{"trip_id":2,"latitude":33.8031,"longitude":-84.3511},{"trip_id":2,"latitude":33.8032,"longitude":-84.351},{"trip_id":2,"latitude":33.8034,"longitude":-84.3508},{"trip_id":2,"latitude":33.8036,"longitude":-84.3507},{"trip_id":2,"latitude":33.8038,"longitude":-84.3505},{"trip_id":2,"latitude":33.8039,"longitude":-84.3504},{"trip_id":2,"latitude":33.8041,"longitude":-84.3503},{"trip_id":2,"latitude":33.8042,"longitude":-84.3503},{"trip_id":2,"latitude":33.8043,"longitude":-84.3503},{"trip_id":2,"latitude":33.8043,"longitude":-84.3503},{"trip_id":2,"latitude":33.8044,"longitude":-84.3503},{"trip_id":2,"latitude":33.8046,"longitude":-84.3503},{"trip_id":2,"latitude":33.8046,"longitude":-84.3503},{"trip_id":2,"latitude":33.8046,"longitude":-84.3503},{"trip_id":2,"latitude":33.8047,"longitude":-84.3504},{"trip_id":2,"latitude":33.8049,"longitude":-84.3504},{"trip_id":2,"latitude":33.8049,"longitude":-84.3504},{"trip_id":2,"latitude":33.8049,"longitude":-84.3505},{"trip_id":2,"latitude":33.8054,"longitude":-84.3508},{"trip_id":2,"latitude":33.8056,"longitude":-84.3509},{"trip_id":2,"latitude":33.8057,"longitude":-84.3509},{"trip_id":2,"latitude":33.8057,"longitude":-84.3509},{"trip_id":2,"latitude":33.8058,"longitude":-84.3509},{"trip_id":2,"latitude":33.8059,"longitude":-84.3509},{"trip_id":2,"latitude":33.8059,"longitude":-84.351},{"trip_id":2,"latitude":33.8059,"longitude":-84.351},{"trip_id":2,"latitude":33.8061,"longitude":-84.351},{"trip_id":2,"latitude":33.8062,"longitude":-84.3509},{"trip_id":2,"latitude":33.8063,"longitude":-84.3509},{"trip_id":2,"latitude":33.8065,"longitude":-84.3509},{"trip_id":2,"latitude":33.8066,"longitude":-84.3508},{"trip_id":2,"latitude":33.8073,"longitude":-84.3504},{"trip_id":2,"latitude":33.8073,"longitude":-84.3504},{"trip_id":2,"latitude":33.8075,"longitude":-84.3503},{"trip_id":2,"latitude":33.8077,"longitude":-84.3503},{"trip_id":2,"latitude":33.8078,"longitude":-84.3503},{"trip_id":2,"latitude":33.8078,"longitude":-84.3503},{"trip_id":2,"latitude":33.8079,"longitude":-84.3503},{"trip_id":2,"latitude":33.808,"longitude":-84.3503},{"trip_id":2,"latitude":33.8081,"longitude":-84.3503},{"trip_id":2,"latitude":33.8083,"longitude":-84.3503},{"trip_id":2,"latitude":33.8084,"longitude":-84.3504},{"trip_id":2,"latitude":33.8085,"longitude":-84.3504},{"trip_id":2,"latitude":33.8086,"longitude":-84.3505},{"trip_id":2,"latitude":33.8087,"longitude":-84.3507},{"trip_id":2,"latitude":33.8088,"longitude":-84.3508},{"trip_id":2,"latitude":33.8088,"longitude":-84.3509},{"trip_id":2,"latitude":33.809,"longitude":-84.3513},{"trip_id":2,"latitude":33.8091,"longitude":-84.3514},{"trip_id":2,"latitude":33.8091,"longitude":-84.3514},{"trip_id":2,"latitude":33.8092,"longitude":-84.3514},{"trip_id":2,"latitude":33.8093,"longitude":-84.3516},{"trip_id":2,"latitude":33.8094,"longitude":-84.3517},{"trip_id":2,"latitude":33.8095,"longitude":-84.3517},{"trip_id":2,"latitude":33.8096,"longitude":-84.3517},{"trip_id":2,"latitude":33.8096,"longitude":-84.3517},{"trip_id":2,"latitude":33.8097,"longitude":-84.3518},{"trip_id":2,"latitude":33.8097,"longitude":-84.3518},{"trip_id":2,"latitude":33.8098,"longitude":-84.3518},{"trip_id":2,"latitude":33.8099,"longitude":-84.3518},{"trip_id":2,"latitude":33.81,"longitude":-84.3518},{"trip_id":2,"latitude":33.8101,"longitude":-84.3517},{"trip_id":2,"latitude":33.8102,"longitude":-84.3517},{"trip_id":2,"latitude":33.8102,"longitude":-84.3517},{"trip_id":2,"latitude":33.811,"longitude":-84.3515},{"trip_id":2,"latitude":33.8111,"longitude":-84.3515},{"trip_id":2,"latitude":33.8113,"longitude":-84.3515},{"trip_id":2,"latitude":33.8115,"longitude":-84.3514},{"trip_id":2,"latitude":33.8115,"longitude":-84.3514},{"trip_id":2,"latitude":33.8115,"longitude":-84.3514},{"trip_id":2,"latitude":33.8121,"longitude":-84.3513},{"trip_id":2,"latitude":33.8123,"longitude":-84.3512},{"trip_id":2,"latitude":33.8126,"longitude":-84.3512},{"trip_id":2,"latitude":33.8127,"longitude":-84.3512},{"trip_id":2,"latitude":33.8129,"longitude":-84.3512},{"trip_id":2,"latitude":33.8129,"longitude":-84.3512},{"trip_id":2,"latitude":33.813,"longitude":-84.3512},{"trip_id":2,"latitude":33.8132,"longitude":-84.3512},{"trip_id":2,"latitude":33.8133,"longitude":-84.3513},{"trip_id":2,"latitude":33.8134,"longitude":-84.3513},{"trip_id":2,"latitude":33.8135,"longitude":-84.3514},{"trip_id":2,"latitude":33.8137,"longitude":-84.3515},{"trip_id":2,"latitude":33.8138,"longitude":-84.3516},{"trip_id":2,"latitude":33.8139,"longitude":-84.3516},{"trip_id":2,"latitude":33.8139,"longitude":-84.3516},{"trip_id":2,"latitude":33.814,"longitude":-84.3517},{"trip_id":2,"latitude":33.8143,"longitude":-84.3517},{"trip_id":2,"latitude":33.8144,"longitude":-84.3518},{"trip_id":2,"latitude":33.8145,"longitude":-84.3518},{"trip_id":2,"latitude":33.8146,"longitude":-84.3518},{"trip_id":2,"latitude":33.8151,"longitude":-84.3518},{"trip_id":2,"latitude":33.8151,"longitude":-84.3518},{"trip_id":2,"latitude":33.8151,"longitude":-84.3518},{"trip_id":2,"latitude":33.8152,"longitude":-84.3518},{"trip_id":2,"latitude":33.8154,"longitude":-84.3518},{"trip_id":2,"latitude":33.8155,"longitude":-84.3518},{"trip_id":2,"latitude":33.8155,"longitude":-84.3518},{"trip_id":2,"latitude":33.8155,"longitude":-84.3518},{"trip_id":2,"latitude":33.8157,"longitude":-84.3518},{"trip_id":2,"latitude":33.8159,"longitude":-84.3518},{"trip_id":2,"latitude":33.816,"longitude":-84.3519},{"trip_id":2,"latitude":33.8162,"longitude":-84.352},{"trip_id":2,"latitude":33.8164,"longitude":-84.352},{"trip_id":2,"latitude":33.8164,"longitude":-84.352},{"trip_id":2,"latitude":33.8165,"longitude":-84.3521},{"trip_id":2,"latitude":33.8167,"longitude":-84.3521},{"trip_id":2,"latitude":33.8167,"longitude":-84.3521},{"trip_id":2,"latitude":33.8168,"longitude":-84.3522},{"trip_id":2,"latitude":33.8169,"longitude":-84.3522},{"trip_id":2,"latitude":33.817,"longitude":-84.3522},{"trip_id":2,"latitude":33.8172,"longitude":-84.3521},{"trip_id":2,"latitude":33.8173,"longitude":-84.352},{"trip_id":2,"latitude":33.8176,"longitude":-84.352},{"trip_id":2,"latitude":33.8176,"longitude":-84.3519},{"trip_id":2,"latitude":33.8177,"longitude":-84.3519},{"trip_id":2,"latitude":33.8179,"longitude":-84.3518},{"trip_id":2,"latitude":33.8181,"longitude":-84.3518},{"trip_id":2,"latitude":33.8182,"longitude":-84.3517},{"trip_id":2,"latitude":33.8182,"longitude":-84.3517},{"trip_id":2,"latitude":33.8183,"longitude":-84.3517},{"trip_id":2,"latitude":33.8184,"longitude":-84.3517},{"trip_id":2,"latitude":33.8188,"longitude":-84.3515},{"trip_id":2,"latitude":33.8189,"longitude":-84.3515},{"trip_id":2,"latitude":33.8189,"longitude":-84.3515},{"trip_id":2,"latitude":33.8195,"longitude":-84.3516},{"trip_id":2,"latitude":33.8197,"longitude":-84.3516},{"trip_id":2,"latitude":33.8197,"longitude":-84.3516},{"trip_id":2,"latitude":33.8198,"longitude":-84.3516},{"trip_id":2,"latitude":33.82,"longitude":-84.3516},{"trip_id":2,"latitude":33.82,"longitude":-84.3516},{"trip_id":2,"latitude":33.82,"longitude":-84.3516},{"trip_id":2,"latitude":33.8201,"longitude":-84.3516},{"trip_id":2,"latitude":33.8201,"longitude":-84.3516},{"trip_id":2,"latitude":33.8201,"longitude":-84.3514},{"trip_id":2,"latitude":33.8202,"longitude":-84.3514},{"trip_id":2,"latitude":33.8205,"longitude":-84.3514},{"trip_id":2,"latitude":33.8205,"longitude":-84.3514},{"trip_id":2,"latitude":33.8204,"longitude":-84.3514},{"trip_id":2,"latitude":33.8204,"longitude":-84.3514},{"trip_id":2,"latitude":33.8204,"longitude":-84.3512},{"trip_id":2,"latitude":33.8204,"longitude":-84.3508},{"trip_id":2,"latitude":33.8204,"longitude":-84.3507},{"trip_id":2,"latitude":33.8204,"longitude":-84.3506},{"trip_id":2,"latitude":33.8204,"longitude":-84.3503},{"trip_id":2,"latitude":33.8204,"longitude":-84.3502},{"trip_id":2,"latitude":33.8204,"longitude":-84.3499},{"trip_id":2,"latitude":33.8204,"longitude":-84.3497},{"trip_id":2,"latitude":33.8204,"longitude":-84.3494},{"trip_id":2,"latitude":33.8204,"longitude":-84.3491},{"trip_id":2,"latitude":33.8204,"longitude":-84.3489},{"trip_id":2,"latitude":33.8204,"longitude":-84.3487},{"trip_id":2,"latitude":33.8204,"longitude":-84.3485},{"trip_id":2,"latitude":33.8204,"longitude":-84.3483},{"trip_id":2,"latitude":33.8204,"longitude":-84.3483},{"trip_id":2,"latitude":33.8204,"longitude":-84.3483},{"trip_id":2,"latitude":33.8204,"longitude":-84.348},{"trip_id":2,"latitude":33.8205,"longitude":-84.3477},{"trip_id":2,"latitude":33.8205,"longitude":-84.3476},{"trip_id":2,"latitude":33.8205,"longitude":-84.3474},{"trip_id":2,"latitude":33.8207,"longitude":-84.3469},{"trip_id":2,"latitude":33.8207,"longitude":-84.3467},{"trip_id":2,"latitude":33.8207,"longitude":-84.3466},{"trip_id":2,"latitude":33.8208,"longitude":-84.3462},{"trip_id":2,"latitude":33.821,"longitude":-84.3454},{"trip_id":2,"latitude":33.821,"longitude":-84.3454},{"trip_id":2,"latitude":33.8211,"longitude":-84.3452},{"trip_id":2,"latitude":33.8211,"longitude":-84.345},{"trip_id":2,"latitude":33.8211,"longitude":-84.3449},{"trip_id":2,"latitude":33.8212,"longitude":-84.3448},{"trip_id":2,"latitude":33.8214,"longitude":-84.3445},{"trip_id":2,"latitude":33.8215,"longitude":-84.3444},{"trip_id":2,"latitude":33.8217,"longitude":-84.3442},{"trip_id":2,"latitude":33.8219,"longitude":-84.344},{"trip_id":2,"latitude":33.822,"longitude":-84.344},{"trip_id":2,"latitude":33.822,"longitude":-84.344},{"trip_id":2,"latitude":33.8222,"longitude":-84.3439},{"trip_id":2,"latitude":33.8224,"longitude":-84.3438},{"trip_id":2,"latitude":33.8224,"longitude":-84.3438},{"trip_id":2,"latitude":33.8225,"longitude":-84.3438},{"trip_id":2,"latitude":33.8226,"longitude":-84.3437},{"trip_id":2,"latitude":33.8227,"longitude":-84.3437},{"trip_id":2,"latitude":33.8227,"longitude":-84.3437},{"trip_id":2,"latitude":33.823,"longitude":-84.3436},{"trip_id":2,"latitude":33.8231,"longitude":-84.3436},{"trip_id":2,"latitude":33.8231,"longitude":-84.3436},{"trip_id":2,"latitude":33.8233,"longitude":-84.3436},{"trip_id":2,"latitude":33.8234,"longitude":-84.3436},{"trip_id":2,"latitude":33.8235,"longitude":-84.3435},{"trip_id":2,"latitude":33.8236,"longitude":-84.3435},{"trip_id":2,"latitude":33.8237,"longitude":-84.3435},{"trip_id":2,"latitude":33.8238,"longitude":-84.3434},{"trip_id":2,"latitude":33.8239,"longitude":-84.3434},{"trip_id":2,"latitude":33.824,"longitude":-84.3433},{"trip_id":2,"latitude":33.8242,"longitude":-84.3432},{"trip_id":2,"latitude":33.8242,"longitude":-84.3431},{"trip_id":2,"latitude":33.8243,"longitude":-84.3431},{"trip_id":2,"latitude":33.8243,"longitude":-84.343},{"trip_id":2,"latitude":33.8244,"longitude":-84.3428},{"trip_id":2,"latitude":33.8244,"longitude":-84.3428},{"trip_id":2,"latitude":33.8245,"longitude":-84.3425},{"trip_id":2,"latitude":33.8245,"longitude":-84.3424},{"trip_id":2,"latitude":33.8246,"longitude":-84.3422},{"trip_id":2,"latitude":33.8246,"longitude":-84.3422},{"trip_id":2,"latitude":33.8247,"longitude":-84.342},{"trip_id":2,"latitude":33.8247,"longitude":-84.3418},{"trip_id":2,"latitude":33.8247,"longitude":-84.3417},{"trip_id":2,"latitude":33.8248,"longitude":-84.3415},{"trip_id":2,"latitude":33.8248,"longitude":-84.3414},{"trip_id":2,"latitude":33.8248,"longitude":-84.3412},{"trip_id":2,"latitude":33.8248,"longitude":-84.3408},{"trip_id":2,"latitude":33.8248,"longitude":-84.3406},{"trip_id":2,"latitude":33.8248,"longitude":-84.3405},{"trip_id":2,"latitude":33.8248,"longitude":-84.3402},{"trip_id":2,"latitude":33.8248,"longitude":-84.3398},{"trip_id":2,"latitude":33.8248,"longitude":-84.3396},{"trip_id":2,"latitude":33.8248,"longitude":-84.3395},{"trip_id":2,"latitude":33.8248,"longitude":-84.3392},{"trip_id":2,"latitude":33.8248,"longitude":-84.3388},{"trip_id":2,"latitude":33.8248,"longitude":-84.3386},{"trip_id":2,"latitude":33.8248,"longitude":-84.3386},{"trip_id":2,"latitude":33.8246,"longitude":-84.3386},{"trip_id":2,"latitude":33.8246,"longitude":-84.3386},{"trip_id":2,"latitude":33.8244,"longitude":-84.3386},{"trip_id":2,"latitude":33.8244,"longitude":-84.3381},{"trip_id":2,"latitude":33.8244,"longitude":-84.3381}
]

var nodecord = [
  {'Node_id': 68319813, 'trip_id': '5,7', 'Lat': 33.7645449, 'Long': -84.3155840},
  {'Node_id': 5423976977, 'trip_id': '5,7', 'Lat': 33.7646907, 'Long': -84.3148985},
  {'Node_id': 3536526090, 'trip_id': '5,7', 'Lat': 33.7647238, 'Long': -84.3146670},
  {'Node_id': 68433838, 'trip_id': 5, 'Lat': 33.7647998, 'Long': -84.3138489},
  {'Node_id': 1586451101, 'trip_id': 5, 'Lat': 33.7648913, 'Long': -84.3124455},
  {'Node_id': 1345495259, 'trip_id': 5, 'Lat': 33.7649294, 'Long': -84.3119766},
  {'Node_id': 9468068439, 'trip_id': 5, 'Lat': 33.7649640, 'Long': -84.3115708},
  {'Node_id': 1345495260, 'trip_id': 5, 'Lat': 33.7649916, 'Long': -84.3112671},
  {'Node_id': 259192898, 'trip_id': 5, 'Lat': 33.7650092, 'Long': -84.3110818}
]


  var colorMapping = {
    // 7: 'red',   // Assign red to trip_id 1
    2: 'red', // Assign yellow to trip_id 2
    17: 'blue'
    // Add more entries for other trip_id values and their colors
};

     // Group coordinates by trip_id
     var groupedCoordinates = {};
     testData.forEach(entry => {
         if (!groupedCoordinates[entry.trip_id]) {
             groupedCoordinates[entry.trip_id] = [];
         }
         groupedCoordinates[entry.trip_id].push(L.latLng(entry.latitude, entry.longitude));
         
     });

     nodecord.forEach(coord => {
      // Create a marker with the given coordinates
      var marker = L.marker([coord.Lat, coord.Long]);
  
      // Add a tooltip to the marker with the Node_id
      marker.bindTooltip(`Node_id: ${coord.Node_id}, Trip_id: ${coord.trip_id}`, { permanent: true, direction: 'top', className: 'tooltip-class' });
  
      // Add the marker to the map
      marker.addTo(map);
      });
 
     // Create and add polylines to the map with different colors for each trip_id
     Object.keys(groupedCoordinates).forEach(id => {
        var color = colorMapping[id];// Use a function to get a random color
         var polyline = L.polyline(groupedCoordinates[id], { color: color, weight: 5, opacity: 0.7 }).addTo(map);
         map.fitBounds(polyline.getBounds());
     });
     
 });
 
