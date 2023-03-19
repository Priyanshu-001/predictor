<template>
    <div class="tw-bg-gradient-to-br tw-text-white tw-from-blue-500 tw-to-blue-700  tw-rounded-4 tw-p-3 tw-grid tw-place-items-center">
        <v-card class="tw-w-full fade-in tw--mb-6" v-if="!!college">
            <v-card-title>
                <v-spacer/>
                 <h1 class=" text-2xl text-blue-500 font-semibold text-center"> {{college.institute}} </h1>
                <v-spacer/>
            </v-card-title>
            <v-card-subtitle>
                <v-spacer/>
                <p class="tw-text-gray-500 tw-text-md tw-text-center tw-font-semibold"> 
                    <v-icon> mdi-map-marker-outline </v-icon>   
                    {{college.city}}, {{college.state}} </p>
                <v-spacer/>
            </v-card-subtitle>
            <v-card-text>
                <div class="tw-w-full tw-flex tw-justify-evenly tw-mb-3 md:tw-justify-center ">
                    <v-chip  color="primary"  v-for="(item,key) in ranking" :key="key" class="md:tw-mx-3">
                        <v-avatar left  class="blue darken-4">
                        <v-icon color="yellow">
                            mdi-medal
                        </v-icon >
                    </v-avatar>
                        {{key.toUpperCase()}} : {{item}}
    
                    </v-chip>
                </div>
                <div class="tw-w-full tw-flex tw-flex-col  md:tw-flex-row tw-items-center md:tw-items-end md:tw-content-end  md:tw-px-8 tw-my-2 tw-pt-3 tw-justify-center">
                    <div class="tw-flex-3 " style="margin-top:1ch;">
                    <a :href="college.link" class="tw-w-full" target="_blank">
                            <v-btn color="primary"   outlined> <v-icon left >mdi-web </v-icon> Visit Website  </v-btn>
                    </a>
                </div>
                    <div class="tw-w-min tw-flex tw-flex-col tw-max-w-max tw-m-0 tw-mt-2 tw-p-0  md:tw-m-0 md:tw-ml-5">
                        <label for="more-reviews" class="tw-m-0 tw-p-0 tw-text-gray-800 tw-text-center" style="margin:0px">Read more info on:</label>
                    <div id="more-reviews" class="btns tw-flex tw-flex-row  tw-justify-space-around tw-align-center">
                        <v-btn class="tw-my-0 tw-mx-2 " color="primary" :href='college.r1' target="_external"> Shiksha.com </v-btn>
                        <v-btn class="tw-my-0 tw-mx-2" color="primary" :href='college.r2' > Collegedunia </v-btn>
    
                    </div>
                    </div>
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