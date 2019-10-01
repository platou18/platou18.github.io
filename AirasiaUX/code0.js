gdjs.MainCode = {};
gdjs.MainCode.GDNewObjectObjects1= [];
gdjs.MainCode.GDNewObjectObjects2= [];
gdjs.MainCode.GDspr_95blankObjects1= [];
gdjs.MainCode.GDspr_95blankObjects2= [];
gdjs.MainCode.GDspr_95buttonObjects1= [];
gdjs.MainCode.GDspr_95buttonObjects2= [];
gdjs.MainCode.GDTxt_9507Objects1= [];
gdjs.MainCode.GDTxt_9507Objects2= [];
gdjs.MainCode.GDTxt_9506Objects1= [];
gdjs.MainCode.GDTxt_9506Objects2= [];
gdjs.MainCode.GDTxt_9505Objects1= [];
gdjs.MainCode.GDTxt_9505Objects2= [];
gdjs.MainCode.GDTxt_9504Objects1= [];
gdjs.MainCode.GDTxt_9504Objects2= [];
gdjs.MainCode.GDTxt_9503Objects1= [];
gdjs.MainCode.GDTxt_9503Objects2= [];
gdjs.MainCode.GDTxt_9502Objects1= [];
gdjs.MainCode.GDTxt_9502Objects2= [];
gdjs.MainCode.GDTxt_9501Objects1= [];
gdjs.MainCode.GDTxt_9501Objects2= [];
gdjs.MainCode.GDspr_95languageuiObjects1= [];
gdjs.MainCode.GDspr_95languageuiObjects2= [];
gdjs.MainCode.GDspr_95languaheObjects1= [];
gdjs.MainCode.GDspr_95languaheObjects2= [];
gdjs.MainCode.GDSpr_95globeObjects1= [];
gdjs.MainCode.GDSpr_95globeObjects2= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDspr_9595buttonObjects1Objects = Hashtable.newFrom({"spr_button": gdjs.MainCode.GDspr_95buttonObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDspr_9595buttonObjects1Objects = Hashtable.newFrom({"spr_button": gdjs.MainCode.GDspr_95buttonObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDTxt_959502Objects1Objects = Hashtable.newFrom({"Txt_02": gdjs.MainCode.GDTxt_9502Objects1});gdjs.MainCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.MainCode.GDspr_95buttonObjects1.createFrom(runtimeScene.getObjects("spr_button"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDspr_9595buttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDspr_95buttonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDspr_95buttonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDspr_95buttonObjects1[i].setColor("175;175;175");
}
}}

}


{

gdjs.MainCode.GDspr_95buttonObjects1.createFrom(runtimeScene.getObjects("spr_button"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDspr_9595buttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDspr_95buttonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDspr_95buttonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDspr_95buttonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.MainCode.GDTxt_9502Objects1.createFrom(runtimeScene.getObjects("Txt_02"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDTxt_959502Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Checkin-main", false);
}}

}


}; //End of gdjs.MainCode.eventsList0xb43b0


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDNewObjectObjects1.length = 0;
gdjs.MainCode.GDNewObjectObjects2.length = 0;
gdjs.MainCode.GDspr_95blankObjects1.length = 0;
gdjs.MainCode.GDspr_95blankObjects2.length = 0;
gdjs.MainCode.GDspr_95buttonObjects1.length = 0;
gdjs.MainCode.GDspr_95buttonObjects2.length = 0;
gdjs.MainCode.GDTxt_9507Objects1.length = 0;
gdjs.MainCode.GDTxt_9507Objects2.length = 0;
gdjs.MainCode.GDTxt_9506Objects1.length = 0;
gdjs.MainCode.GDTxt_9506Objects2.length = 0;
gdjs.MainCode.GDTxt_9505Objects1.length = 0;
gdjs.MainCode.GDTxt_9505Objects2.length = 0;
gdjs.MainCode.GDTxt_9504Objects1.length = 0;
gdjs.MainCode.GDTxt_9504Objects2.length = 0;
gdjs.MainCode.GDTxt_9503Objects1.length = 0;
gdjs.MainCode.GDTxt_9503Objects2.length = 0;
gdjs.MainCode.GDTxt_9502Objects1.length = 0;
gdjs.MainCode.GDTxt_9502Objects2.length = 0;
gdjs.MainCode.GDTxt_9501Objects1.length = 0;
gdjs.MainCode.GDTxt_9501Objects2.length = 0;
gdjs.MainCode.GDspr_95languageuiObjects1.length = 0;
gdjs.MainCode.GDspr_95languageuiObjects2.length = 0;
gdjs.MainCode.GDspr_95languaheObjects1.length = 0;
gdjs.MainCode.GDspr_95languaheObjects2.length = 0;
gdjs.MainCode.GDSpr_95globeObjects1.length = 0;
gdjs.MainCode.GDSpr_95globeObjects2.length = 0;

gdjs.MainCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['MainCode'] = gdjs.MainCode;
