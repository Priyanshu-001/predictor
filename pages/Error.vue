<template>
    <div class=" tw-h-full tw-grid tw-place-content-center">
        <div class=" p-4 rounded-full -1/4 ">
            <h1 class="text-5xl text-blue-600 text-center">
            {{ error.statusCode }}
                <br>
                <span class="tw-font-bold">
                    {{ error.statusMessage }}
                </span>
            </h1>
        </div>
        <span class="tw-prime-options tw-flex tw-justify-items-center tw-items-center">
            <v-spacer/>
            <v-btn primary color="primary"  @click="$router.go(-2)" outlined><v-icon>mdi-arrow-left</v-icon> Back </v-btn>
            <v-btn primary color="primary" to="/" exact class="tw-ml-3" depressed> HomePage</v-btn>
            <v-spacer/>
        </span>
        <h2 class="mt-12 text-gray-600 text-xl font-medium text-center">
            Consider visiting these links
        </h2>
        <links-to-visit/>
        
    </div>
        
    </template>
    <script >
        export default {
            name:'NotFoundPage',
            props:['error'],
        }
    </script>
    <style>
    
    </style>