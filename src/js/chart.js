var vg_1 = "./src/json/ArrivalsMap.vg.json";
var vg_2 = "./src/json/ArrivalsState.vg.json";
var vg_3 = "./src/json/ArrivalVisas.vg.json";

vegaEmbed("#Arrivals_Map_by_Home_Country", vg_1).catch(console.error);
vegaEmbed("#Arrivals_Stacked_Area_by_State", vg_2).catch(console.error);
vegaEmbed("#Arrivals_Stacked_Bar_by_Visa", vg_3).catch(console.error);
