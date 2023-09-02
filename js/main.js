let videoData;
let sortvalue;
const apiData = async(id=1000) =>{
    // console.log(id);
    sortvalue= id;
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data= await res.json();
    videoData = data.data; 
    
    // console.log(isshow);
          
    // console.log(data.data);

    // not found data condition 
    if(videoData.length===0)
    {
        const videoContainer2 = document.getElementById('error');
        videoContainer2.textContent ="";  
        // console.log(id.length);
        const div = document.createElement('div');
        div.classList =`mx-auto`;
        div.innerHTML=`<figure class="">

            <img class=mx-auto src="img/Icon.png" alt="Shoes" class="rounded-xl" />

        </figure>
        <div class="card-body items-center text-center text-4xl font-bold">
            <h2 class="card-title">Oops!! Sorry, There is no <br>content here</h2>
        </div>`;
        videoContainer2.appendChild(div);
        // console.log(id);
        const videoContainer = document.getElementById('video-container');  
        videoContainer.textContent ="";
        
        
    }
    else{
        
        showallData(videoData);
    }
    
}

let cards
const showallData = (videoData) =>{
    // console.log(videoData);
    
    
    const videoContainer = document.getElementById('video-container');  
    videoContainer.textContent ="";   
    const videoContainer2 = document.getElementById('error');
        videoContainer2.textContent =""; 
      
       
// videodataloop
    videoData.forEach(videoData => {
        const div = document.createElement('div');

        // sort by view 
       
        
        // verifiyImg 
        const verifiy = `${videoData.authors[0].verified}`;
       
        let verifiyImg=``;

        if(verifiy===`true`)
        {
            verifiyImg=`<img class="w-6 h-6" src="icons8-verified-48.png" alt="" srcset="">`;
        }
        // verifiyImg end

        // conver second into hour and miunets
        const second = `${videoData.others.posted_date}`;
        // console.log(second);
        let h= parseFloat(second)/3600;
        let m=parseFloat(second)%60;
        let hm;
        let time;
        
        if(second>0)
        {

             hm =parseInt(h)+" "+"hrs"+" "+parseInt(m)+" "+"min"+" "+"ago";
             time =`<p class="absolute bg-[#171717] text-white bottom-2 right-2 px-2 rounded-md">${hm}</p>`
        }
        else{
            hm=''
            time='';
        }
         // conver second into hour and miunets
        div.classList =`mx-auto`;
            
        div.innerHTML =`<figure><div class="relative">
        <img class="w-[320px] h-[200px] rounded-xl shadow-neutral-900 relative" src="${videoData.thumbnail}" alt="" srcset="">
            ${time}</div>
        </figure>
        <!-- text-container  -->
        <div class="flex gap-2  p-2">
            <!-- avatar  -->
            <div class="avatar mt-2">
                <div >
                  <img class="w-14 h-14 rounded-full" src="${videoData.authors[0].profile_picture}" />
                </div>
              </div>
              <!-- paragarap -->
            <div>
                <p class="text-lg font-semibold mb-2">${videoData.title}</p>
                <div class="flex gap-5" >
                 <p class="text-sm mb-2">${videoData.authors[0].profile_name}</p>
                 <div id="v-img">${verifiyImg}</div>
                 
                </div>          
                
                <p class="text-sm">${videoData.others.views}</p>
            </div>
        </div>`;
        
        videoContainer.appendChild(div);
   
    });
    

   

}
// get catagroy api data 
const apicategoryData = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data= await res.json();
    const categoryData = data.data;
    category(categoryData);
    // console.log(categoryData);
}

let sortval;

// get category id 
const category = (categoryData) =>{

    
    const allCatagory = document.getElementById('category');
    
   categoryData.forEach(categoryData =>{
    sortval=categoryData;
    console.log(sortval);
    const div = document.createElement('div');
    div.innerHTML =`<button class="btn text-center text-white font-bold rounded-md px-6 py-2 bg-[#FF1F3D]" id="button-color"  onclick="apiData('${categoryData.category_id}')" >${categoryData.category}</button>`;

    allCatagory.appendChild(div);    
    
   });
   
   
}


const blog =() =>{
    window.location.href ='blog.html'
}
const gohome =() =>{
    window.location.href ='index.html'
}

apicategoryData();
apiData();

// on click spinner 






const sort = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${sortvalue}`);
    const data= await res.json();
    const categoryData = data.data;
    // category(categoryData);
    // console.log(categoryData);
    const videoContainer = document.getElementById('video-container');  
    videoContainer.textContent ="";   
    const videoContainer2 = document.getElementById('error');
        videoContainer2.textContent =""; 
   const sortdata = categoryData.sort((a,b) => parseFloat(b.others.views)- parseFloat(a.others.views)) ;
   sortdata.forEach(sortdata =>{

    const div = document.createElement('div');

    // sort by view 
   
    
    // verifiyImg 
    const verifiy = `${sortdata.authors[0].verified}`;
   
    let verifiyImg=``;

    if(verifiy===`true`)
    {
        verifiyImg=`<img class="w-6 h-6" src="icons8-verified-48.png" alt="" srcset="">`;
    }
    // verifiyImg end

    // conver second into hour and miunets
    const second = `${sortdata.others.posted_date}`;
    // console.log(second);
    let h= parseFloat(second)/3600;
    let m=parseFloat(second)%60;
    let hm;
    let time;
    
    if(second>0)
    {

         hm =parseInt(h)+" "+"hrs"+" "+parseInt(m)+" "+"min"+" "+"ago";
         time =`<p class="absolute bg-[#171717] text-white bottom-2 right-2 px-2 rounded-md">${hm}</p>`
    }
    else{
        hm=''
        time='';
    }
     // conver second into hour and miunets
    div.classList =`mx-auto`;
        
    div.innerHTML =`<figure><div class="relative">
    <img class="w-[320px] h-[200px] rounded-xl shadow-neutral-900 relative" src="${sortdata.thumbnail}" alt="" srcset="">
        ${time}</div>
    </figure>
    <!-- text-container  -->
    <div class="flex gap-2  p-2">
        <!-- avatar  -->
        <div class="avatar mt-2">
            <div >
              <img class="w-14 h-14 rounded-full" src="${sortdata.authors[0].profile_picture}" />
            </div>
          </div>
          <!-- paragarap -->
        <div>
            <p class="text-lg font-semibold mb-2">${sortdata.title}</p>
            <div class="flex gap-5" >
             <p class="text-sm mb-2">${sortdata.authors[0].profile_name}</p>
             <div id="v-img">${verifiyImg}</div>
             
            </div>          
            
            <p class="text-sm">${sortdata.others.views}</p>
        </div>
    </div>`;
    
    videoContainer.appendChild(div);

   })

}
// ge

// arayvlue();

// search();
