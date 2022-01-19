Vue.createApp({
    data(){
        return{
            apiUrl :'https://vue3-course-api.hexschool.io/v2',
            apiPath : 'ptsai129', //個人 API Path
            //放產品列表資料
            products :[],
            //放產品明細資料
            temp:{}
        }
    },

    methods:{
        //取得產品資料
        getData(){
            const url = `${this.apiUrl}/api/${this.apiPath}/products/all`;
            axios.get(url)
            //成功結果
            .then(res =>{
                console.log(res.data.products);
                this.products = res.data.products;
                console.log(this.products);
            })  
            //失敗結果
            .catch((error)=>{
              console.dir(error);
            })
        }, 


    },
    mounted(){
        this.getData();
    }
}).mount('#app');