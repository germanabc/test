Page({data:{swiperShow:!1,swiper:{autoplay:!0,circular:!0,indicatordots:!1},pics:[],menu:[],pageIndex:0,bannerheight:0,vipCourse:!1,recomCourse:!1,recomCourseList:[],recomCourseLength:8,recomClassPackage:!1,recomClassPackageList:[],packageLength:4,openCourse:!1,openCourseList:[],hotCourse:!1,hotCourseList:[],vipCourse:!1,vipCourseList:[]},onLoad:function(e){console.log(e),wx.showLoading({title:"",icon:"none"});let o=["loadIndex","loadSchool"],t=this,a=e.url;a?wx.setStorageSync("domain",a):wx.setStorageSync("domain","lijt.yunduoketang.cn"),this.loadWelCome(function(){t.getCurrtCompany(function(){if(wx.getStorageSync("token"))for(let e in o)"function"==typeof t[o[e]]&&t[o[e]]();else wx.showToast({title:"缺少必要参数",icon:"none"}),console.log("没有获取到必要信息")})}),this.setData({bannerheight:9*wx.getStorageSync("screenWidth")/16+"px"})},loadWelCome:function(e){let o={url:wx.getStorageSync("host")+"/company/welcome",data:{domain:wx.getStorageSync("domain")},header:{},method:"POST",dataType:"json",success:function(o){let t;200!==o.statusCode||+o.data.flag||(t=o.data.data,wx.setStorageSync("token",t.token),wx.setStorageSync("videoAccount",t.videoAccount)),"function"==typeof e&&e()},fail:function(){},complete:function(){}};wx.getStorageSync("host")?wx.request(o):console.log("获取API域名失败")},getCurrtCompany:function(e){let o={url:wx.getStorageSync("host")+"/company/getCurrtCompany",data:{domain:wx.getStorageSync("domain")},header:{},method:"POST",dataType:"json",success:function(o){let t;if(200===o.statusCode&&!+o.data.flag){t=o.data.data;for(let e in t)wx.setStorageSync(e,t[e]);for(let e in t.school)t.school[e].defaultFlag&&(wx.setStorageSync("schoolId",t.school[e].id),wx.setStorageSync("schoolName",t.school[e].schoolName));"function"==typeof e&&e()}},fail:function(){},complete:function(){}};wx.getStorageSync("token")?wx.request(o):console.log("获取域名失败")},loadSchool:function(){wx.setNavigationBarTitle({title:wx.getStorageSync("company").companyNameShort+" ["+wx.getStorageSync("schoolName")+"]"}),this.setData({menu:wx.getStorageSync("menu")||[]})},loadIndex:function(){let e=this,o={url:wx.getStorageSync("host")+"/company/index",data:{token:wx.getStorageSync("token"),schoolId:wx.getStorageSync("schoolId")},method:"POST",dataType:"json",success:function(o){if(wx.hideLoading(),200===o.statusCode&&!+o.data.flag){let t=o.data.data,a=[],n=["faceFlag","liveFlag","videoFlag","remoteFlag"];if(+t.cycle.length){e.setData({swiperShow:!0});for(let e in t.cycle)a.push({src:t.cycle[e].picUrl,clickUrl:""})}e.setData({pics:a,showtoolbar:!0});for(let e in t.openCourse)t.openCourse[e].realPrice=t.openCourse[e].realPrice.toFixed(2);e.setData({openCourseList:t.openCourse}),t.recomCourse.length>e.data.recomCourseLength?t.recomCourse.length=e.data.recomCourseLength:t.recomCourse.length=t.recomCourse.length-t.recomCourse.length%2;for(let e in t.recomCourse){t.recomCourse[e].realPrice=t.recomCourse[e].realPrice.toFixed(2),t.recomCourse[e].originalPrice=t.recomCourse[e].originalPrice.toFixed(2);for(let o in n)if(t.recomCourse[e][n[o]]){t.recomCourse[e].classtype=n[o].replace("Flag","");break}}e.setData({recomCourse:!!t.recomCourse.length}),e.setData({recomCourseList:t.recomCourse}),console.log(t.recomCourse);for(let e in t.vipCourse)t.vipCourse[e].realPrice=t.vipCourse[e].realPrice.toFixed(2);e.setData({vipCourseList:t.vipCourse}),t.recomClassPackage.length>e.data.packageLength&&(t.recomClassPackage.length=e.data.packageLength);for(let e in t.recomClassPackage)t.recomClassPackage[e].realPrice=t.recomClassPackage[e].realPrice.toFixed(2),t.recomClassPackage[e].originalPrice=t.recomClassPackage[e].originalPrice.toFixed(2);e.setData({recomClassPackage:!!t.recomClassPackage.length}),e.setData({recomClassPackageList:t.recomClassPackage})}},fail:function(){},complete:function(){}};wx.getStorageSync("token")&&wx.getStorageSync("company").id?wx.request(o):(wx.showToast({title:"获取信息失败",icon:"none"}),console.log("获取域名失败",wx.getStorageSync("token"),wx.getStorageSync("company").id))},showTitle:function(e){e.currentTarget.dataset.title;console.log(e)},linkClassinfo:function(e){let o=e.currentTarget.dataset,t=o.id||"",a="/pages/class/index?id="+t+"&type="+(o.type||"");t&&wx.navigateTo({url:a})},getClassMore:function(){wx.navigateTo({url:"/pages/list/index"})},getClassMorePackage:function(){wx.navigateTo({url:"/pages/package/index"})},swiperChange:function(e){console.log(e)}});