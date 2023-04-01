<template>
	<div class="tw-w-full tw-mt-3  tw-flex tw-flex-col tw-align-items-center md:tw-flex-row md:tw-w-screen  tw-justify-around">
		<v-btn v-for="link in links" :disabled="link.soon" :key="link.name" depressed text exact :to="`${link.name}`" 
		color="primary" elevation="2"  class="ultra-soon tw-my-2 tw-drop-showdow-md"> 
			<span>
				<v-icon>{{link.icon}}</v-icon>
				{{link.display}} 
				<!-- <br/>
				<v-chip dense v-if="link.soon">
					Soon
				</v-chip> -->
			</span>
		</v-btn>
	</div>
</template>

<script >
	export default{
		name:'LinksToVisit',
		data(){
			return{
				links:[
					{
						display:'Predictor',
						name:'/predict',
						icon:'mdi-crystal-ball'
					},
					{
						display:'Colleges',
						name:'/colleges',
						icon:'mdi-bank',
					},
					{
						display:'Courses',
						name:'/courses',
						icon:'mdi-school',
					},{
						display:'About',
						icon:'mdi-information-outline',
						name:'/about',
						// soon:true,

					}
				]
		}
		}
	}
</script>
<style>
	/*.ultra-soon::after{
		position:absolute;
		display:block;
		border-radius:50%;
		color:white;
		background:yellow;
		content:'✨ soon';
	}*/
</style>