<template>
   <div style="width:100%;height:100%;" id="dituContent"></div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    mounted () {
      this.initMap()
    },
    methods: {
    //这几个地方加this
      initMap () {
        this.createMap() ; //创建地图 
        this.setMapEvent();//设置地图事件
        this.addMapControl();//向地图添加控件
        this.addMarker();//向地图中添加marker
      },
      createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(104.062952,30.592157);//定义一个中心点坐标
        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
      },
      setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
      },
      addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
      },
      //标注点数组
      //创建marker
      addMarker(){
        var markerArr = [{title:"深圳匠人网络科技有限公司",content:"地址：成都市府城大道399号天府新谷10号楼<br/>电话：15061509527",point:"104.063290|30.592157",isOpen:1,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}];
        for(var i=0;i<markerArr.length;i++){
          var json = markerArr[i];
          var p0 = json.point.split("|")[0];
          var p1 = json.point.split("|")[1];
          var point = new BMap.Point(p0,p1);
          //这个地方加this
          var iconImg = this.createIcon(json.icon);
          var marker = new BMap.Marker(point,{icon:iconImg});
          //这个地方加this
          var iw = this.createInfoWindow(i);
          var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
          marker.setLabel(label);
          map.addOverlay(marker);
          label.setStyle({
            borderColor:"#808080",
            color:"#333",
            cursor:"pointer"
          });
          var index = i;
          //这个地方加this
          var _iw = this.createInfoWindow(i);
          var _marker = marker;
          marker.addEventListener("click",function(){
          //这个地方加this
            this.openInfoWindow(_iw);
          });
          iw.addEventListener("open",function(){
            _marker.getLabel().hide();
          })
          _iw.addEventListener("close",function(){
            _marker.getLabel().show();
          })
          label.addEventListener("click",function(){
            _marker.openInfoWindow(_iw);
          })
          if(!!json.isOpen){
            label.hide();
            _marker.openInfoWindow(_iw);
          }
        }
      },
      //创建InfoWindow
      createInfoWindow(i){
      //这个地方复制一下上面的var markerArr 不然会不显示报错
        var markerArr = [{title:"深圳匠人网络科技有限公司",content:"地址：成都市府城大道399号天府新谷10号楼<br/>电话：15061509527",point:"104.063290|30.592157",isOpen:1,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}];
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
      },
      //创建一个Icon
      createIcon(json){
      //这个地方我是用本地图标图片的
        var tubiao=require("../assets/2.png")
        var icon = new BMap.Icon(tubiao, new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
      }
    }
  }
</script>