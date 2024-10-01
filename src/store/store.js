import {reactive} from 'vue';

export const store = reactive({

    apiUrl: 'http://127.0.0.1:8000/api/',

    getData : reactive({
        getRequest:(url) =>{
            return new Promise((resolve, reject) => {
    
                if(!url) reject('Magari dovresti passarmi un url, altrimenti ti attachi');
    
                fetch(url)
                    .then(res => {
    
                        if(res.ok){
                            return res.json();
    
                        }else{
                            reject("You hear Professor Layton's words echo in your mind, 'Oh, how embarrassing!'")
                        }
                    })
                    .then(data => {
    
                        resolve({
                            data: data,
                        })
                    })
            })
        }
    })

});

// export const getData = reactive({
//     getRequest:(url) =>{
//         return new Promise((resolve, reject) => {

//             if(!url) reject('Magari dovresti passarmi un url, altrimenti ti attachi');

//             fetch(url)
//                 .then(res => {

//                     if(res.ok){
//                         return res.json();

//                     }else{
//                         reject("You hear Professor Layton's words echo in your mind, 'Oh, how embarrassing!'")
//                     }
//                 })
//                 .then(data => {

//                     resolve({
//                         data: data,
//                     })
//                 })
//         })
//     }
// });