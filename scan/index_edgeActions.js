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
      
      
      Symbol.bindElementAction(compId, symbolName, "window", "orientationchange", function(sym, e) {
         // 插入代码——当此处发生方向变化事件
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${light}", "focus", function(sym, e) {
         // 当元素获得焦点时插入的代码将运行
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'focus'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("focus");
   //Edge symbol end:'focus'

   //=========================================================
   
   //Edge symbol: 'light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30076, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("light");
   //Edge symbol end:'light'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13287302");