/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'focus'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();// 在此处插入代码

      });
      //Edge binding end

   })("focus");
   //Edge symbol end:'focus'

   //=========================================================
   
   //Edge symbol: 'title'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("title");
   //Edge symbol end:'title'

   //=========================================================
   
   //Edge symbol: 'light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("light");
   //Edge symbol end:'light'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("main");
   //Edge symbol end:'main'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-29706186");



/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId1){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage1");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("bottom");
   //Edge symbol end:'bottom'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-40685479");