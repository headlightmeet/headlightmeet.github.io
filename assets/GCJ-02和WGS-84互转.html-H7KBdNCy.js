import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d as l,a as s,e as t}from"./app-PxqKmrwv.js";const a={},d=s("p",null," ",-1),r=t(`<h1 id="gcj-02和wgs-84互转" tabindex="-1"><a class="header-anchor" href="#gcj-02和wgs-84互转" aria-hidden="true">#</a> GCJ-02和WGS-84互转</h1><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h1><p>在uniapp中直接使用GCJ-02会出现很大几率获取不到当前定位，所以在网上找到GCJ-02和WGS-84互转教程</p><h1 id="封装js代码" tabindex="-1"><a class="header-anchor" href="#封装js代码" aria-hidden="true">#</a> 封装JS代码</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class GCJ02_WGS84 {
    static x_pi = 3.14159265358979324 * 3000.0 / 180.0
    static pi = 3.1415926535897932384626 //π
    static a = 6378245.0 // 长半轴
    static ee = 0.00669342162296594323 // 扁率


    static wgs84togcj02(lng, lat) {
        let dlat = this.transformlat(lng - 105.0, lat - 35.0)
        let dlng = this.transformlng(lng - 105.0, lat - 35.0)
        let radlat = lat / 180.0 * this.pi
        let magic = Math.sin(radlat)
        magic = 1 - this.ee * magic * magic
        let sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.pi)
        dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.pi)
        let mglat = lat + dlat
        let mglng = lng + dlng
        return [mglng, mglat]
    }


    static gcj02towgs84(lng, lat) {
        // GCJ02(火星坐标系) 转GPS84: param lng: 火星坐标系的经度: param lat: 火星坐标系纬度: return :
        let dlat = this.transformlat(lng - 105.0, lat - 35.0)
        let dlng = this.transformlng(lng - 105.0, lat - 35.0)
        let radlat = lat / 180.0 * this.pi
        let magic = Math.sin(radlat)
        magic = 1 - this.ee * magic * magic
        let sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.pi)
        dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.pi)
        let mglat = lat + dlat
        let mglng = lng + dlng
        return [lng * 2 - mglng, lat * 2 - mglat]
    }

    static transformlat(lng, lat) {
        let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
        ret += (20.0 * Math.sin(6.0 * lng * this.pi) + 20.0 * Math.sin(2.0 * lng * this.pi)) * 2.0 / 3.0
        ret += (20.0 * Math.sin(lat * this.pi) + 40.0 * Math.sin(lat / 3.0 * this.pi)) * 2.0 / 3.0
        ret += (160.0 * Math.sin(lat / 12.0 * this.pi) + 320 * Math.sin(lat * this.pi / 30.0)) * 2.0 / 3.0
        return ret
    }

    static transformlng(lng, lat) {
        let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
        ret += (20.0 * Math.sin(6.0 * lng * this.pi) + 20.0 *
            Math.sin(2.0 * lng * this.pi)) * 2.0 / 3.0
        ret += (20.0 * Math.sin(lng * this.pi) + 40.0 *
            Math.sin(lng / 3.0 * this.pi)) * 2.0 / 3.0
        ret += (150.0 * Math.sin(lng / 12.0 * this.pi) + 300.0 *
            Math.sin(lng / 30.0 * this.pi)) * 2.0 / 3.0
        return ret
    }


}
export default GCJ02_WGS84

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="调用方法" tabindex="-1"><a class="header-anchor" href="#调用方法" aria-hidden="true">#</a> 调用方法</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//uniapp中使用

uni.getLocation({
	geocode: false, //默认false，是否解析地址信息
	isHighAccuracy: true,
	success: function(res) {
		// 转换经纬度
		let gcj02towgs84 = wgs84.wgs84togcj02(res.longitude,res.latitude)
		if (that.latitude == &#39;&#39; || that.longitude == &#39;&#39;) {
			that.latitude = gcj02towgs84[1]
			that.longitude = gcj02towgs84[0]
		}
		let markert = [{
			id: 2,
			latitude: gcj02towgs84[1], //维度
			longitude: gcj02towgs84[0], //经度
			rotate: 0, // 旋转度数
			width: 30, //宽
			height: 30, //高
			iconPath: that.$store.state.imagesurl + &#39;img7.png&#39;, //显示的图标
			anchor: {
				x: 0.5,
				y: 0.5
			}
		}]
		that.markers.push.apply(that.markers, markert);
	},
	fail(err) {
		console.log(err)
		that.gpstype = false
		that.getData()
	}
});


//JS使用方法

let gcj02towgs84 = GCJ02_WGS84.gcj02towgs84(116.397477, 39.908692)
console.log(&#39;gcj02towgs84&#39;, gcj02towgs84)
let wgs84togcj02= GCJ02_WGS84.wgs84togcj02(116.39123343289631, 39.9072885060602)
console.log(&#39;wgs84togcj02&#39;, wgs84togcj02)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="打印结果" tabindex="-1"><a class="header-anchor" href="#打印结果" aria-hidden="true">#</a> 打印结果</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wgs84togcj02,[113.83269945830277,22.612941440541874]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function v(c,m){return n(),e("div",null,[d,l(" more "),r])}const b=i(a,[["render",v],["__file","GCJ-02和WGS-84互转.html.vue"]]);export{b as default};
