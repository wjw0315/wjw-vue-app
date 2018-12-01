<template>
    <div class="container">
        <!-- <div class="row">
            <mt-header fixed  title="文章检索">
            </mt-header>
        </div> -->
        <div id="searchbar" class="row">
            <mt-search v-model="value" :result.sync="result"></mt-search>
        </div>
         <div class="row">
            <p>111111</p>
        </div>

    </div>
</template>

<style>
    #searchbar {height: 50px;
    }
</style>
