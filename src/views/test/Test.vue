<template>
    <div>
        <el-image :src="url" :preview-src-list="srcList"></el-image>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            user: [],
            nav: 'me',
            srcList: ['https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg'],
            url:'https://ak.hypergryph.com/upload/images/20190228/118078295785f64dac736c6ade50bb76.jpg'
        };
    },
    created() {},
    methods: {
        updateNav(navName) {
            this.nav = navName
            console.log(this.nav)
        }
    }
};
</script>