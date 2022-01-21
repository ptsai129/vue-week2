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
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products?page=1&category=%E9%A3%BE%E5%93%81`;

            axios.get(url)
            //成功結果
            .then(res =>{  
                this.products = res.data.products;
            })  
            //失敗結果
            .catch((error)=>{
              console.dir(error);
            })
        }, 

      //檢查登入是否成功
      checkSignIn(){
        axios.post(`${this.apiUrl}/api/user/check`)
        .then((res)=>{
          //確認登入成功帶出產品列表
           this.getData(); 
          
        }).catch((error)=>{
          console.dir(error.data.message);
          //跳轉到登入頁面
          window.location = 'index.html';
        })
    }  

    },
    mounted(){
        //取得cookie內的token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        this.checkSignIn();
        
    }
}).mount('#app');