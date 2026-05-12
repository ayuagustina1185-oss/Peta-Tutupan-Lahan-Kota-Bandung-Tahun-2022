var wms_layers = [];

var lyr_Raster_2022_new_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Raster_2022_new<br />\
    <img src="styles/legend/Raster_2022_new_0_0.png" /> 0<br />\
    <img src="styles/legend/Raster_2022_new_0_1.png" /> 1<br />\
    <img src="styles/legend/Raster_2022_new_0_2.png" /> 2<br />\
    <img src="styles/legend/Raster_2022_new_0_3.png" /> 3<br />\
    <img src="styles/legend/Raster_2022_new_0_4.png" /> 4<br />\
    <img src="styles/legend/Raster_2022_new_0_5.png" /> 5<br />\
    <img src="styles/legend/Raster_2022_new_0_6.png" /> 6<br />\
    <img src="styles/legend/Raster_2022_new_0_7.png" /> 7<br />\
    <img src="styles/legend/Raster_2022_new_0_8.png" /> 8<br />\
    <img src="styles/legend/Raster_2022_new_0_9.png" /> 9<br />\
    <img src="styles/legend/Raster_2022_new_0_10.png" /> 10<br />\
    <img src="styles/legend/Raster_2022_new_0_11.png" /> 11<br />\
    <img src="styles/legend/Raster_2022_new_0_12.png" /> 12<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Raster_2022_new_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11967290.968146, -781651.990662, 11995296.789706, -760967.514894]
        })
    });
var lyr_Clippedmask_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_1_0.png" /> 0<br />\
    <img src="styles/legend/Clippedmask_1_1.png" /> 1<br />\
    <img src="styles/legend/Clippedmask_1_2.png" /> 2<br />\
    <img src="styles/legend/Clippedmask_1_3.png" /> 3<br />\
    <img src="styles/legend/Clippedmask_1_4.png" /> 4<br />\
    <img src="styles/legend/Clippedmask_1_5.png" /> 5<br />\
    <img src="styles/legend/Clippedmask_1_6.png" /> 6<br />\
    <img src="styles/legend/Clippedmask_1_7.png" /> 7<br />\
    <img src="styles/legend/Clippedmask_1_8.png" /> 8<br />\
    <img src="styles/legend/Clippedmask_1_9.png" /> 9<br />\
    <img src="styles/legend/Clippedmask_1_10.png" /> 10<br />\
    <img src="styles/legend/Clippedmask_1_11.png" /> 11<br />\
    <img src="styles/legend/Clippedmask_1_12.png" /> 12<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11971709.062238, -777878.094093, 11993543.580057, -762811.018970]
        })
    });
var format_Kota_BandungADMNew_2 = new ol.format.GeoJSON();
var features_Kota_BandungADMNew_2 = format_Kota_BandungADMNew_2.readFeatures(json_Kota_BandungADMNew_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kota_BandungADMNew_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_BandungADMNew_2.addFeatures(features_Kota_BandungADMNew_2);
var lyr_Kota_BandungADMNew_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kota_BandungADMNew_2, 
                style: style_Kota_BandungADMNew_2,
                popuplayertitle: 'Kota_Bandung-ADM-New',
                interactive: true,
    title: 'Kota_Bandung-ADM-New<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_0.png" /> Andir<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_1.png" /> Antapani<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_2.png" /> Arcamanik<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_3.png" /> Astana Anyar<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_4.png" /> Babakan Ciparay<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_5.png" /> Bandung Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_6.png" /> Bandung Kulon<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_7.png" /> Bandung Wetan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_8.png" /> Batununggal<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_9.png" /> Bojongloa Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_10.png" /> Bojongloa Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_11.png" /> Buahbatu<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_12.png" /> Cibeunying Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_13.png" /> Cibeunying Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_14.png" /> Cibiru<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_15.png" /> Cicendo<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_16.png" /> Cidadap<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_17.png" /> Cimahi Utara<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_18.png" /> Cinambo<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_19.png" /> Coblong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_20.png" /> Gedebage<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_21.png" /> Kiaracondong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_22.png" /> Lengkong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_23.png" /> Mandalajati<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_24.png" /> Panyileukan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_25.png" /> Rancasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_26.png" /> Regol<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_27.png" /> Sukajadi<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_28.png" /> Sukasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_29.png" /> Sumur Bandung<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_30.png" /> Ujungberung<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_31.png" /> <br />\
    <img src="styles/legend/Kota_BandungADMNew_2_32.png" /> Ancol<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_33.png" /> Antapani Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_34.png" /> Antapani Tengah<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_35.png" /> Arjuna<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_36.png" /> Babakan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_37.png" /> Babakan Ciamis<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_38.png" /> Babakan Taroggong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_39.png" /> Babakanasih<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_40.png" /> Babakansari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_41.png" /> Babakansurabaya<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_42.png" /> Balonggede<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_43.png" /> Beraga<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_44.png" /> Binong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_45.png" /> Burangrang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_46.png" /> Campaka<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_47.png" /> Caringin<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_48.png" /> Ciateul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_49.png" /> Cibadak<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_50.png" /> Cibaduyut<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_51.png" /> Cibaduyut Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_52.png" /> Cibaduyut Wetan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_53.png" /> Cibangkong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_54.png" /> Cibuntu<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_55.png" /> Cicadas<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_56.png" /> Cicaheum<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_57.png" /> Cigadung<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_58.png" /> Cigending<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_59.png" /> Cigereleng<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_60.png" /> Cigondewah Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_61.png" /> Cigondewah Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_62.png" /> Cigondewah Rahayu<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_63.png" /> Cihapit<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_64.png" /> Cihaurgeulis<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_65.png" /> Cijagra<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_66.png" /> Cijerah<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_67.png" /> Cikawao<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_68.png" /> Cikutra<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_69.png" /> Cipadung<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_70.png" /> Cipadung Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_71.png" /> Cipadung Kulon<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_72.png" /> Cipaganti<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_73.png" /> Cipamokalan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_74.png" /> Cipedes<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_75.png" /> Cirangrang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_76.png" /> Ciroyom<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_77.png" /> Cisaranten Binaharapan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_78.png" /> Cisaranten Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_79.png" /> Cisaranten Kulon<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_80.png" /> Cisaranten Wetan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_81.png" /> Ciseureuh<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_82.png" /> Cisurupan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_83.png" /> Citarum<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_84.png" /> Ciumbuleuit<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_85.png" /> Dago<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_86.png" /> Derwati<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_87.png" /> Dunguscariang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_88.png" /> Garuda<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_89.png" /> Gegerkalong<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_90.png" /> Gempolsari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_91.png" /> Gemuruh<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_92.png" /> Hegarmanah<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_93.png" /> Husein Sastranegara<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_94.png" /> Isola<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_95.png" /> Jamika<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_96.png" /> Kacapiring<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_97.png" /> Karanganyar<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_98.png" /> Karangpamulang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_99.png" /> Karasak<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_100.png" /> Kebon Kangkung<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_101.png" /> Kebongedang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_102.png" /> Kebonjayanti<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_103.png" /> Kebonjeruk<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_104.png" /> Kebonlega<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_105.png" /> Kebonpisang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_106.png" /> Kebonwaru<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_107.png" /> Kopo<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_108.png" /> Kujangsari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_109.png" /> Lebak Siliwangi<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_110.png" /> Lebakgede<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_111.png" /> Ledeng<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_112.png" /> Lingkarselatan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_113.png" /> Malabar<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_114.png" /> Maleber<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_115.png" /> Maleer<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_116.png" /> Margahayu Utara<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_117.png" /> Margasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_118.png" /> Margasenang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_119.png" /> Margasuka<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_120.png" /> Mekarmulya<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_121.png" /> Mekarwangi<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_122.png" /> Mengger<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_123.png" /> Merdeka<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_124.png" /> Neglasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_125.png" /> Nyengseret<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_126.png" /> Padasuka<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_127.png" /> Pajajaran<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_128.png" /> Palasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_129.png" /> Paledang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_130.png" /> Pamoyanan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_131.png" /> Panjunan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_132.png" /> Pasanggrahan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_133.png" /> Pasirbiru<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_134.png" /> Pasirendah<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_135.png" /> Pasirjati<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_136.png" /> Pasirkaliki<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_137.png" /> Pasirlayung<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_138.png" /> Pasirluyu<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_139.png" /> Pasirwangi<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_140.png" /> Pasteur<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_141.png" /> Pelindungwetan<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_142.png" /> Pungkur<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_143.png" /> Sadangserang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_144.png" /> Samoja<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_145.png" /> Sarijadi<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_146.png" /> Sekejati<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_147.png" /> Sekeloa<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_148.png" /> Sindangjaya<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_149.png" /> Situsaeur<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_150.png" /> Sukaasih<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_151.png" /> Sukabungah<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_152.png" /> Sukagalih<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_153.png" /> Sukahaji<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_154.png" /> Sukaluyu<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_155.png" /> Sukamaju<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_156.png" /> Sukamiskin<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_157.png" /> Sukapada<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_158.png" /> Sukapura<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_159.png" /> Sukaraja<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_160.png" /> Sukarasa<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_161.png" /> Sukawarna<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_162.png" /> Tamansari<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_163.png" /> Turangga<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_164.png" /> Warungmuncang<br />\
    <img src="styles/legend/Kota_BandungADMNew_2_165.png" /> Wates<br />' });

lyr_Raster_2022_new_0.setVisible(true);lyr_Clippedmask_1.setVisible(true);lyr_Kota_BandungADMNew_2.setVisible(true);
var layersList = [lyr_Raster_2022_new_0,lyr_Clippedmask_1,lyr_Kota_BandungADMNew_2];
lyr_Kota_BandungADMNew_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kota_BandungADMNew_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kota_BandungADMNew_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kota_BandungADMNew_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});