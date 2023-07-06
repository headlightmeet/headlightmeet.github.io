import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,a as l}from"./app.3c425ae9.js";const s={},t=l(`<h1 id="gcj-02\u548Cwgs-84\u4E92\u8F6C" tabindex="-1"><a class="header-anchor" href="#gcj-02\u548Cwgs-84\u4E92\u8F6C" aria-hidden="true">#</a> GCJ-02\u548CWGS-84\u4E92\u8F6C</h1><h1 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h1><p>\u5728uniapp\u4E2D\u76F4\u63A5\u4F7F\u7528GCJ-02\u4F1A\u51FA\u73B0\u5F88\u5927\u51E0\u7387\u83B7\u53D6\u4E0D\u5230\u5F53\u524D\u5B9A\u4F4D\uFF0C\u6240\u4EE5\u5728\u7F51\u4E0A\u627E\u5230GCJ-02\u548CWGS-84\u4E92\u8F6C\u6559\u7A0B</p><h1 id="\u5C01\u88C5js\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5js\u4EE3\u7801" aria-hidden="true">#</a> \u5C01\u88C5JS\u4EE3\u7801</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class GCJ02_WGS84 {
    static x_pi = 3.14159265358979324 * 3000.0 / 180.0
    static pi = 3.1415926535897932384626 //\u03C0
    static a = 6378245.0 // \u957F\u534A\u8F74
    static ee = 0.00669342162296594323 // \u6241\u7387


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
        // GCJ02(\u706B\u661F\u5750\u6807\u7CFB) \u8F6CGPS84: param lng: \u706B\u661F\u5750\u6807\u7CFB\u7684\u7ECF\u5EA6: param lat: \u706B\u661F\u5750\u6807\u7CFB\u7EAC\u5EA6: return :
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u8C03\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u8C03\u7528\u65B9\u6CD5</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//uniapp\u4E2D\u4F7F\u7528

uni.getLocation({
	geocode: false, //\u9ED8\u8BA4false\uFF0C\u662F\u5426\u89E3\u6790\u5730\u5740\u4FE1\u606F
	isHighAccuracy: true,
	success: function(res) {
		// \u8F6C\u6362\u7ECF\u7EAC\u5EA6
		let gcj02towgs84 = wgs84.wgs84togcj02(res.longitude,res.latitude)
		if (that.latitude == &#39;&#39; || that.longitude == &#39;&#39;) {
			that.latitude = gcj02towgs84[1]
			that.longitude = gcj02towgs84[0]
		}
		let markert = [{
			id: 2,
			latitude: gcj02towgs84[1], //\u7EF4\u5EA6
			longitude: gcj02towgs84[0], //\u7ECF\u5EA6
			rotate: 0, // \u65CB\u8F6C\u5EA6\u6570
			width: 30, //\u5BBD
			height: 30, //\u9AD8
			iconPath: that.$store.state.imagesurl + &#39;img7.png&#39;, //\u663E\u793A\u7684\u56FE\u6807
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


//JS\u4F7F\u7528\u65B9\u6CD5

let gcj02towgs84 = GCJ02_WGS84.gcj02towgs84(116.397477, 39.908692)
console.log(&#39;gcj02towgs84&#39;, gcj02towgs84)
let wgs84togcj02= GCJ02_WGS84.wgs84togcj02(116.39123343289631, 39.9072885060602)
console.log(&#39;wgs84togcj02&#39;, wgs84togcj02)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6253\u5370\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u7ED3\u679C" aria-hidden="true">#</a> \u6253\u5370\u7ED3\u679C</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wgs84togcj02,[113.83269945830277,22.612941440541874]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),a=[t];function d(r,v){return n(),e("div",null,a)}var u=i(s,[["render",d],["__file","GCJ-02\u548CWGS-84\u4E92\u8F6C.html.vue"]]);export{u as default};
