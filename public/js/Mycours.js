

async function showcours() {
  let res = await fetch("http://161.97.163.0/api/Course");
  return res.json();
}

showcours().then((c) => {
  let content = document.getElementById("content");
  content.innerHTML = "";
  let munua = document.getElementById("munua");
  munua.innerHTML = "";
  c.forEach((x) => {
    write(x.img, x.title, x.teacherFullname, x.islocked, x.id);
  });
  showquastionmenum();
});

function showquastionmenum() {
  let cards = document.querySelectorAll(".cards");
  let Quastion = document.querySelectorAll(".Quastion");
  cards.forEach((c) => {
    c.addEventListener("click", showquastion);
  });
  function showquastion(even) {
    Quastion.forEach((q) => {
      if (q.id == even.target.id) {
        q.classList.remove("hidden");
      }
    });
  }

  function removemun() {
    Quastion.forEach((q) => {
      q.children[1].classList.remove("hide12");
      q.children[1].classList.add("hidere");
      q.children[0].classList.remove("quastion");
      q.children[0].classList.add("quastion2");
      setTimeout(() => {
        q.classList.add("hidden");
        q.children[1].classList.add("hide12");
        q.children[0].classList.add("quastion");
        q.children[0].classList.remove("quastion2");
        q.children[1].classList.remove("hidere");
      }, 500);
    });
  }

  let xmark = document.querySelectorAll(".xmark");
  xmark.forEach((x) => {
    x.addEventListener("click", removemun);
  });
  let background = document.querySelectorAll(".background");
  background.forEach((b) => {
    b.addEventListener("click", removemun);
  });
}

 function write(image, title, teacher, active, id) {
  let ac = "";
  let content = document.getElementById("content");
  let munua = document.getElementById("munua");

  
  retquastio().then((c) => {
    const multiPictureCounts = c.reduce((acc, curr) => {
      const { courseId, type } = curr;
      if (type === "multi" || type === "picture" || type === "truefalse") {
        if (!acc[courseId]) {
          acc[courseId] = { multi: 0, picture: 0, truefalse: 0 };
        }
        acc[courseId][type]++;
      }
      return acc;
    }, {});
    
    let arr=[]
    showcours().then(c=>{
      c.forEach((x,index)=>{
        
        arr[index]={
          "title":x.title,
          "id":x.id
        }
      })
      let mun=arr.filter(a=>a.id!=id)
      let li='' 
      mun.forEach(m=>{
        li += `    <li id="${id}">
                <button id="${m.id}" onclick="replace(this)" type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white selectname" id="Teacher">${m.title}</button>
            </li>`;
      })
        munua.innerHTML += `          <div id="${id}" class="w-full hidden Quastion h-screen  fixed top-0 left-0 z-50">
        <div
          id="contentquastion"
          class="fixed duration-500 quastion z-50 h-screen sm:w-96 w-full top-0 right-0 dark:bg-gray-800 bg-white font-medium text-gray-900 dark:text-white"
        >
          <div class="w-[90%] mx-auto">
            <div class="flex justify-between mt-3">
              <h1 class="text-3xl cursor-pointer xmark" >x</h1>
              <h1 class="text-2xl mt-1">Quastion Type</h1>
            </div>
            <div class="relative">
             <button onclick=" this.nextElementSibling.classList.toggle('hidden')" id="dropdown" data-dropdown-toggle="dropdown" class="flex-shrink-0  mt-10 justify-between z-10 inline-flex items-center py-2.5  w-full px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">${title}
              <svg class="w-2.5 h-2.5 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>
                <div id="dropdown" class="z-10  bg-white dropdown  hidden absolute top-[100%] divide-y divide-gray-100  shadow w-full dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            ${li}
   
            </ul>
        </div>  
            </div>
          
            <div class="mt-[10%]">
              <div class=" ">
                <div class="flex justify-between mt-5">
                  <div class=" flex ">
                    <h1 class="mt-[5px] mr-2"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></h1>
                    <h1 class=""> choose</h1>
                  </div>
                  <h2 class="text-red-700">${multiPictureCounts[id].multi}</h2>

                </div>
                    <div class="flex justify-between mt-5">
                  <div class=" flex ">
                    <h1 class="mt-[5px] mr-2"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></h1>
                    <h1 class="">true and false </h1>
                  </div>
                  <h2 class="text-red-700">${multiPictureCounts[id].truefalse}</h2>
                </div>
                    <div class="flex justify-between mt-5">
                  <div class=" flex ">
                    <h1 class="mt-[5px] mr-2"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg></h1>
                    <h1 class=""> picture and word </h1>
                  </div>
                  <h2 class="text-red-700">${multiPictureCounts[id].picture}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-black background fixed top-0 left-0 duration-500 z-40 w-full h-screen hide12"
        ></div>
      </div>`;
      showquastionmenum();
    })
    

  });

  if (!active) ac = "hidden";

  content.innerHTML += `
       
            <div
              class="rounded-lg w-full md:w-[49%]  max-w-sm bg-white  mt-4 border lg:w-[33%] border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="py-10">
                <div class="flex justify-around">
                  <div class="flex space-x-3">
                    <div class="">
                      <img
                        class="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="${image}"
                        alt="${title}"
                      />
                    </div>
                    <div class="mt-5">
                      <h1
                        class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
                      >
                        ${teacher}
                      </h1>
                      <h5 class="text-sm text-gray-500 dark:text-gray-400">
                        ${title}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center mt-2">
                <div class="flex  space-x-3 ">
                  <div class="flex mt-1 cursor-pointer  -space-x-4">
                    <img
                      class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="./images/mohamed.jpg"
                      alt=""
                    />
                    <img
                      class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="./images/mohamed.jpg"
                      alt=""
                    />
                    <img
                      class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="./images/mohamed.jpg"
                      alt=""
                    />
                    <a
                      class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                      href="#"
                      >+99</a
                    >
                  </div>
                   <a
                   id="${id}"
                  class="inline-flex cursor-pointer cards items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >Question</a
                >
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >Exams</a
                  >
                </div>
                </div>
              </div>
            </div>
            `;

}

async function retquastio() {
  let res = await fetch("http://161.97.163.0/api/Question");
  return res.json();
}

function replace(e){
  let Quastion = document.querySelectorAll(".Quastion");
  let dropdown = document.querySelectorAll(".dropdown");
  dropdown.forEach(d=>{
    d.classList.add('hidden')
  })
 Quastion.forEach((q) => {
   q.children[1].classList.remove("hide12");
   q.children[1].classList.add("hidere");
   q.children[0].classList.remove("quastion");
   q.children[0].classList.add("quastion2");
   setTimeout(() => {
     q.classList.add("hidden");
     q.children[1].classList.add("hide12");
     q.children[0].classList.add("quastion");
     q.children[0].classList.remove("quastion2");
     q.children[1].classList.remove("hidere");
   }, 500);
 });

 setTimeout(()=>{
 Quastion.forEach(q=>{
  if(q.id==e.id){
    q.classList.remove('hidden')
  }
 })
 },500)
}