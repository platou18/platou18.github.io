gdjs.Checkin_45mainCode = {};
gdjs.Checkin_45mainCode.GDNewObjectObjects1= [];
gdjs.Checkin_45mainCode.GDNewObjectObjects2= [];
gdjs.Checkin_45mainCode.GDspr_95blankObjects1= [];
gdjs.Checkin_45mainCode.GDspr_95blankObjects2= [];
gdjs.Checkin_45mainCode.GDspr_95buttonObjects1= [];
gdjs.Checkin_45mainCode.GDspr_95buttonObjects2= [];
gdjs.Checkin_45mainCode.GDTxt_9507Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9507Objects2= [];
gdjs.Checkin_45mainCode.GDTxt_9506Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9506Objects2= [];
gdjs.Checkin_45mainCode.GDTxt_9505Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9505Objects2= [];
gdjs.Checkin_45mainCode.GDTxt_9504Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9504Objects2= [];
gdjs.Checkin_45mainCode.GDTxt_9503Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9503Objects2= [];
gdjs.Checkin_45mainCode.GDTxt_9502Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9502Objects2= [];
gdjs.Checkin_45mainCode.GDTxt_9501Objects1= [];
gdjs.Checkin_45mainCode.GDTxt_9501Objects2= [];
gdjs.Checkin_45mainCode.GDspr_95languageuiObjects1= [];
gdjs.Checkin_45mainCode.GDspr_95languageuiObjects2= [];
gdjs.Checkin_45mainCode.GDspr_95languaheObjects1= [];
gdjs.Checkin_45mainCode.GDspr_95languaheObjects2= [];
gdjs.Checkin_45mainCode.GDSpr_95globeObjects1= [];
gdjs.Checkin_45mainCode.GDSpr_95globeObjects2= [];

gdjs.Checkin_45mainCode.conditionTrue_0 = {val:false};
gdjs.Checkin_45mainCode.condition0IsTrue_0 = {val:false};
gdjs.Checkin_45mainCode.condition1IsTrue_0 = {val:false};
gdjs.Checkin_45mainCode.condition2IsTrue_0 = {val:false};


gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDspr_9595buttonObjects1Objects = Hashtable.newFrom({"spr_button": gdjs.Checkin_45mainCode.GDspr_95buttonObjects1});gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDspr_9595buttonObjects1Objects = Hashtable.newFrom({"spr_button": gdjs.Checkin_45mainCode.GDspr_95buttonObjects1});gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDTxt_959507Objects1Objects = Hashtable.newFrom({"Txt_07": gdjs.Checkin_45mainCode.GDTxt_9507Objects1});gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDTxt_959502Objects1Objects = Hashtable.newFrom({"Txt_02": gdjs.Checkin_45mainCode.GDTxt_9502Objects1});gdjs.Checkin_45mainCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.Checkin_45mainCode.GDspr_95buttonObjects1.createFrom(runtimeScene.getObjects("spr_button"));

gdjs.Checkin_45mainCode.condition0IsTrue_0.val = false;
{
gdjs.Checkin_45mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDspr_9595buttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Checkin_45mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Checkin_45mainCode.GDspr_95buttonObjects1 */
{for(var i = 0, len = gdjs.Checkin_45mainCode.GDspr_95buttonObjects1.length ;i < len;++i) {
    gdjs.Checkin_45mainCode.GDspr_95buttonObjects1[i].setColor("175;175;175");
}
}}

}


{

gdjs.Checkin_45mainCode.GDspr_95buttonObjects1.createFrom(runtimeScene.getObjects("spr_button"));

gdjs.Checkin_45mainCode.condition0IsTrue_0.val = false;
{
gdjs.Checkin_45mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDspr_9595buttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Checkin_45mainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Checkin_45mainCode.GDspr_95buttonObjects1 */
{for(var i = 0, len = gdjs.Checkin_45mainCode.GDspr_95buttonObjects1.length ;i < len;++i) {
    gdjs.Checkin_45mainCode.GDspr_95buttonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.Checkin_45mainCode.GDTxt_9507Objects1.createFrom(runtimeScene.getObjects("Txt_07"));

gdjs.Checkin_45mainCode.condition0IsTrue_0.val = false;
gdjs.Checkin_45mainCode.condition1IsTrue_0.val = false;
{
gdjs.Checkin_45mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDTxt_959507Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Checkin_45mainCode.condition0IsTrue_0.val ) {
{
gdjs.Checkin_45mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Checkin_45mainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.Checkin_45mainCode.GDTxt_9502Objects1.createFrom(runtimeScene.getObjects("Txt_02"));

gdjs.Checkin_45mainCode.condition0IsTrue_0.val = false;
gdjs.Checkin_45mainCode.condition1IsTrue_0.val = false;
{
gdjs.Checkin_45mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Checkin_45mainCode.mapOfGDgdjs_46Checkin_9545mainCode_46GDTxt_959502Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Checkin_45mainCode.condition0IsTrue_0.val ) {
{
gdjs.Checkin_45mainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Checkin_45mainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Checkin-ฺBooking-Number", false);
}}

}


}; //End of gdjs.Checkin_45mainCode.eventsList0xb43b0


gdjs.Checkin_45mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Checkin_45mainCode.GDNewObjectObjects1.length = 0;
gdjs.Checkin_45mainCode.GDNewObjectObjects2.length = 0;
gdjs.Checkin_45mainCode.GDspr_95blankObjects1.length = 0;
gdjs.Checkin_45mainCode.GDspr_95blankObjects2.length = 0;
gdjs.Checkin_45mainCode.GDspr_95buttonObjects1.length = 0;
gdjs.Checkin_45mainCode.GDspr_95buttonObjects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9507Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9507Objects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9506Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9506Objects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9505Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9505Objects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9504Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9504Objects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9503Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9503Objects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9502Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9502Objects2.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9501Objects1.length = 0;
gdjs.Checkin_45mainCode.GDTxt_9501Objects2.length = 0;
gdjs.Checkin_45mainCode.GDspr_95languageuiObjects1.length = 0;
gdjs.Checkin_45mainCode.GDspr_95languageuiObjects2.length = 0;
gdjs.Checkin_45mainCode.GDspr_95languaheObjects1.length = 0;
gdjs.Checkin_45mainCode.GDspr_95languaheObjects2.length = 0;
gdjs.Checkin_45mainCode.GDSpr_95globeObjects1.length = 0;
gdjs.Checkin_45mainCode.GDSpr_95globeObjects2.length = 0;

gdjs.Checkin_45mainCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['Checkin_45mainCode'] = gdjs.Checkin_45mainCode;
