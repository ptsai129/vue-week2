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
              console.log(token , expired);
             
              //把token跟expired存在cookie 存在myToken這個名稱 expired是unix格式是要用new Date轉格式
              document.cookie = `myToken=${token}; expires=${new Date(expired)}; path=/`;
                //把token夾帶到headers內
                axios.defaults.headers.common['Authorization'] = token; 
              //跳轉到產品列表頁面
              window.location = 'products.html';
            })
            //失敗結果
            .catch((error)=>{
              console.dir(error);
            })

        },
        //檢查登入是否成功
        checkSignIn(params){
            axios.post(`${this.apiUrl}/api/user/check`)
            .then((res)=>{
              console.log(res);
              //取得 Token（Token 僅需要設定一次）
              const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
              
               console.log(res.data);
            }).catch((error)=>{
              console.dir(error);
            })
        }

    },
    
    mounted(){
    
    
        
    }
}).mount('#app');


   
  