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
              axios.defaults.headers.common['Authorization'] = token; 
              //把token跟expired存在cookie expired是unix格式是要用new Date轉格式
              document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
              window.location = 'products.html';
            })
            //失敗結果
            .catch((error)=>{
              console.dir(error);
            })

        }
      

        
    },

    
    mounted(){
    
    
        
    }
}).mount('#app');

   // #3 取得 Token（Token 僅需要設定一次）
   const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
   //console.log(token);
   //把token夾帶到headers內
  