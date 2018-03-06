<template>
  <div class="hello" style="height:100%">
    <div id="glChart" :style="{width: '100%', height: '100%'}"></div>

  </div>
</template>
<script>

	export default {
	  data () {
	    return {
	    	iso:true
	    }
	  },
	  created:function(){
	  	var echartsGl = require('echarts-gl')
		console.log(this.$echartsGl)
		//this.drawLine()
	  },
	  mounted(){
	    
	  },
	  methods: {
	  	drawLine(){

		  	let myChart = this.$echartsGl.init(document.getElementById('glChart'))
			myChart.setOption({
			    backgroundColor: '#000',
			    globe: {
			        baseTexture: "../assets/1.jpg",
			        heightTexture: "../assets/1.jpg",
			        displacementScale: 0.2,
			        shading: 'realistic',
			        environment: '../assets/1.jpg',
			        realisticMaterial: {
			            roughness: '../assets/1.jpg',
			            metalness: '../assets/1.jpg',
			            textureTiling: [8, 4]
			        },
			        postEffect: {
			            enable: true
			        },
			        viewControl: {
			            autoRotate: false
			        },
			        light: {
			            main: {
			                intensity: 2,
			                shadow: true
			            },
			            ambientCubemap: {
			                texture: 'data-gl/assets/pisa.hdr',
			                exposure: 2,
			                diffuseIntensity: 2,
			                specularIntensity: 2
			            }
			        }
			    }
			});
		  }
	    }
	}
</script>