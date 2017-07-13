## h5cs文件夹 解释！！！  处理ie浏览器使用HTML5的兼容等问题！！！（可以引入两个.js文件来实现html5的正常使用）

----------------------------
#### 想必大家都知道ie9以下浏览器不支持html5标签（这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。），使用html5shiv.js可以解决这个问题。

关于html5shiv.js文件的解释！！

html5shiv的使用非常的简单，考虑到IE9是支持html5的，所以只需要在页面head（必须要在head中）中添加如下代码即可：

<!--[if lt IE9]>
<script src="html5shiv.js"></script>
<![endif]-->

让CSS 样式应用在未知元素上只需执行document.createElement(elementName) 即可实现。html5shiv就是根据这个原理创建的。

这句话看似简单，但需要仔细琢磨，真正理解其含义。

以前我一直这样认为的：

如果一个未知的标签<mytag>xxx</mytag>，如果想应用css样式，那么这个标签必须要是使用document.createElement(mytag)创建的对象。
这也导致了我对html5shiv的工作原理产生了误解，以为html5shiv.js是在执行的过程中对html文档进行遍历，将文档中所有html5标签用document.createElement(tagName)创建的对象进行替换。
但这样就产生了一个问题，html5shiv.js是放在head中（放在body中无效）的，那么html5shiv.js执行时，head标签后的节点根本还没渲染出来，那么 html5shiv.js是如何遍历html文档并替换html5标签的呢？？？？

这个问题我困惑了很久，后面才弄懂html5shiv.js的原理其实是这样的：

对于未知的标签元素mytag，只要在head中执行一次document.createElement(mytag)，那么body里所有mytag标签在渲染时就会自动正确应用css样式了。
”让CSS 样式应用在未知元素上只需执行 document.createElement(elementName) 即可实现。“，
这句话的意思其实是对于未知元素mytag，只要执行过document.createElement(mytag)，那么后续所有的mytag元素在浏览器渲染时都能自动正确应用css样式了。

所以，html5shiv.js的原理是在执行时先往head中插入应用到html5标签的css样式，
然后对于所有html5标签都执行一次document.createElement(nodeName)，
这样，浏览器在渲染body部分时，对于html5标签就能够正确的应用css样式，这也就是html5shiv.js必须放置在head中的原因。

---------------------------
#### respond.js也是用来实现ie浏览器的兼容问题的！

Respond.js 是一个快速、轻量的 polyfill，用于为 IE6-8 以及其它不支持 CSS3 Media Queries 的浏览器提供媒体查询的 min-width 和 max-width 特性，
实现响应式网页设计（Responsive Web Design）。
Respond.js让IE6-8支持CSS3 Media Query。
Bootstrap里面就引入了这个js文件，从名字看出来是自适应的兼容。打开IE看了一下，效果挺好的，自适应的效果挺好的。Respond.js让不支持CSS3 Media Query的浏览器包括IE6-IE8等其他浏览器支持查询。
的css路径取出来放入数组
2.然后遍历数组一个个发ajax请求
3.ajax回调后仅分析response中的media query的min-width和max-width语法，分析出viewport变化区间对应相应的css块
4.页面初始化时和window.resize时，根据当前viewport使用相应的css块。
使用：考虑到IE9是支持CSS3的，所以直接在HTML页面的head标签中添加脚本引用即可：
<!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]—>
 
<!--[if lt IE 9]>
<script src = "http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js" > </script>
<![endif]—>    
官方demo地址：http://scottjehl.github.com/Respond/test/test.html 1.在css中正常用 min/max-width media queries
 
@media screen and (min-width: 480px){
    ...styles for 480px and up go here
}
 
@media screen and (min-width: 480px){...styles for 480px and up go here}    
2.引入respond.min.js，但要在css的后面
（越早引入越好，在ie下面看到页面闪屏的概率就越低，因为最初css会先渲染出来，如果respond.js加载得很后面，这时重新根据media query解析出来的css会再改变一次页面的布局等，所以看起来有闪屏的现象）


---------------------------
ol.html文件夹： <ol type="a" start="3">



