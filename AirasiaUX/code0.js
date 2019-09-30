gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDLogoObjects1= [];
gdjs.NewSceneCode.GDLogoObjects2= [];
gdjs.NewSceneCode.GDNewObject2Objects1= [];
gdjs.NewSceneCode.GDNewObject2Objects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLogoObjects1Objects = Hashtable.newFrom({"Logo": gdjs.NewSceneCode.GDLogoObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLogoObjects1Objects = Hashtable.newFrom({"Logo": gdjs.NewSceneCode.GDLogoObjects1});gdjs.NewSceneCode.eventsList0xb4320 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDLogoObjects1.createFrom(runtimeScene.getObjects("Logo"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLogoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDLogoObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLogoObjects1Objects, 50, 50, "");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4320


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDLogoObjects1.length = 0;
gdjs.NewSceneCode.GDLogoObjects2.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects2.length = 0;

gdjs.NewSceneCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
