<template>
    <div class="bg-gradient-to-br text-white from-blue-500 to-blue-700  rounded-4 p-3 grid place-items-center">
        <v-card class="w-full  -mb-6" v-if="!!college">
            <v-card-title>
                <v-spacer/>
                 <h1 class=" text-2xl text-blue-500 font-semibold text-center whitespace-normal"> {{college.institute}} </h1>
                <v-spacer/>
            </v-card-title>
            <v-card-subtitle>
                <v-spacer/>
                <p class="text-gray-500 text-md text-center font-semibold"> 
                    <v-icon> mdi-map-marker-outline </v-icon>   
                    {{college.city}}, {{college.state}} </p>
                <v-spacer/>
            </v-card-subtitle>
            <v-card-text>
                <!-- <div class="w-full flex justify-evenly mb-3 md:justify-center ">
                    <v-chip  color="primary"  v-for="(item,key) in ranking" :key="key" class="md:mx-3">
                        <v-avatar left  class="blue darken-4">
                        <v-icon color="yellow">
                            mdi-medal
                        </v-icon >
                    </v-avatar>
                        {{key.toUpperCase()}} : {{item}}
    
                    </v-chip>
                </div> -->
                <div class="w-full flex flex-col  md:flex-row items-center md:items-end md:content-end  md:px-8 my-2 pt-3 justify-center">
                    <div class="flex-3 " style="margin-top:1ch;">
                    <a :href="college.link" class="w-full" target="_blank">
                            <v-btn color="primary"   outlined> <v-icon left >mdi-web </v-icon> Visit Website  </v-btn>
                    </a>
                </div>
                    <!-- <div class="w-min flex flex-col max-w-max m-0 mt-2 p-0  md:m-0 md:ml-5">
                        <label for="more-reviews" class="m-0 p-0 text-gray-800 text-center" style="margin:0px">Read more info on:</label>
                    <div id="more-reviews" class="btns flex flex-row  justify-space-around align-center">
                        <v-btn class="my-0 mx-2 " color="primary" :href='college.r1' target="_external"> Shiksha.com </v-btn>
                        <v-btn class="my-0 mx-2" color="primary" :href='college.r2' > Collegedunia </v-btn>
    
                    </div>
                    </div> -->
                </div>
            </v-card-text>
        <!-- <a :href="`https://www.google.com/maps/dir/?destination=${college.institute}`" target="location"> -->
        <!-- <span class="flex mt-4 text-white"> 
            <v-icon color="white"> mdi-map-marker-outline </v-icon>  
            <h2 class="hover:underline"> {{college.city}}, {{college.state}}  </h2>
        </span> -->
        <!-- <v-card-text>
            <div class="w-full flex">
            <v-spacer/>
                    <div class="inhouse-opt">
                        <v-btn color="primary mx-2" > View on map</v-btn>
                        <v-btn color="primary" outlined> <v-icon>mdi-site</v-icon> visit webiste</v-btn>
                    </div>
                    <v-spacer/>
                    <div class="m-1 bg-gradient-to-r  pt-0 p-1   bg-sky-500 ">
                    <h2 class="text-white font-light text-sm "> Read reviews</h2>
                    <div class="w-100  bg-white">
                    Cars
                    </div>
    
                    </div>
            <v-spacer/>
    
            </div>
    
        </v-card-text> -->
        </v-card>
        <v-progress-circular :size="50"
          color="white"
          v-else
          indeterminate/>
            <!-- <v-card
            class="w-7/12"
            v-else
            >
            <v-card-title>
            <v-spacer/>
                <v-progress-circular :size="50"
          color="primary"
          indeterminate/>
          <v-spacer/>
      </v-card-title>
            </v-card> -->
            <!-- </a> -->
    </div>
    </template>
    
    <script>
        export default{
            name: 'CollegeInfoCard',
           
            computed:{
                ranking(){
                    const {nirf_engg,nirf_overall} = this.college
                    const destination = {
                    ...(nirf_overall ? { nirf_overall } : {}),
                    ...(nirf_engg ? { nirf_engg } : {})
                    }
                    return destination
                } 
            },
            props:{
                'college':{
                    default:()=>({institute:'',})
                }
            }
        }
    </script>
    <style scoped>
        .fade-in{
      animation: fadeIn 450ms;
      /*animation-delay:250ms;*/
      animation-timing-function: ease-in;
    }
    @keyframes fadeIn{
     from{
          opacity: 0.1;
          transform: translateY(20px);
      }
      to{
        opacity:1;
        transform:translateY(0);
      }
    }
    
    </style>