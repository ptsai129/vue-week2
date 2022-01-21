Vue.createApp({
    data(){
        return{
            apiUrl :'https://vue3-course-api.hexschool.io/v2', //申請api的網址
            apiPath : 'ptsai129', //個人 API Path
            user: {
                "username":'',
                 "password":''
            }
        }
    },

    methods:{
        //登入
        signIn(){
            axios.post(`${this.apiUrl}/admin/signin`, this.user)    
            //成功結果
            .then((res)=>{
          
              const { token , expired} = res.data; 
            
              //把token跟expired存在cookie 存在myToken這個名稱 expired是unix格式是要用new Date轉格式
              document.cookie = `myToken=${token}; expires=${new Date(expired)}; path=/`;
              //跳轉到產品列表頁面
               window.location = 'products.html';
            })
            //失敗結果
            .catch((error)=>{
              console.dir(error.data.message);
            })

        },

    },
    
    mounted(){
    
    
        
    }
}).mount('#app');


   
  