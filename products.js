Vue.createApp({
    data(){
        return{
            apiUrl :'https://vue3-course-api.hexschool.io/v2',
            apiPath : 'ptsai129', //個人 API Path
            products :[]
        }
    },

    methods:{
        //取得產品資料
        getData(){
            const url = `${this.apiUrl}/api/${this.apiPath}/products/all`;
            axios.get(url).then(res =>{
                console.log(res.data.products);
                this.products = res.data.products;
            })
        }

    },
    mounted(){
        this.getData();
    }
}).mount('#app');