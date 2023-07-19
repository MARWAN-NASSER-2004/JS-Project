// write on the menum
function witemenum(id, svg, title, li) {
  let str = "";
  if (title == null) {
    str = ` <div class="hover:ml-4 cursor-pointer justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                ${svg}
                </div>`;
  } else {
    try {
      let lilist = "";
      li.forEach((li) => {
        lilist += `
                            <li class="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center "><a href="${li.linke}"> ${li.name} </a></li>
                            `;
      });
      str += `         <div  id="${id}" class="hover:ml-4 jj showmenum cursor-pointer w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B]  px-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center">
                        <div class="flex  space-x-3  ">
                        ${svg}
                        <div>${title}</div>
                        </div>
                        <div class="ml-auto fill-white duration-500 -rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </div>
                    </div>
                    <ul  class="pl-8 duration-500 overflow-hidden   ml-3 cursor-pointer " style="height: 0;">
                        ${lilist}
                    </ul>`;
    } catch {
      str = `<div  class="hover:ml-4 w-full cursor-pointer text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    ${svg}
                    <div> ${title} </div> 
                </div>`;
    }
  }
  return str;
}

onload = () => {
  let showmenum = document.querySelectorAll(".showmenum");

  showmenum.forEach((sm) => {
    sm.addEventListener("click", divs);
  });
  function divs(even) {
    let div = "";
    if (even.target.classList.contains("jj")) {
      div = even.target;
    } else {
      div = even.target.parentElement;
      if (!div.classList.contains("jj")) {
        div = even.target.parentElement.parentElement;
        if (!div.classList.contains("jj")) {
          div = even.target.parentElement.parentElement.parentElement;
        }
      }
    }

    if (div.nextElementSibling.style.height == "0px") {
      div.children[1].style.rotate = "180deg";
      let height = div.nextElementSibling.children.length * 40;
      div.nextElementSibling.style.height = `${height}px`;
    } else {
      div.children[1].style.rotate = "0deg";
      let height = 0;
      div.nextElementSibling.style.height = `${height}px`;
    }
  }
};

// wite dashbord in all page

let dashboard = document.querySelectorAll(".dashboard");
dashboard.forEach((d) => {
  let imp=d.innerHTML 
  d.innerHTML= wrdashboad(imp);
});
function wrdashboad(imp) {
  let str = ` <div class="font-['Poppins',sans-serif] ">
  <div id="dash" class="fixed   w-full z-30 flex bg-white duration-500 dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
    <div class="logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
      <img src="./images/logo2.svg" class="w-[50%]"  alt="">
    </div>
    <div class="grow h-full flex items-center justify-center"></div>
    <div class="flex-none h-full text-center flex items-center justify-center">
      <div class="flex space-x-3 items-center px-3">
              <div class="dark:text-white text-black hover:text-blue-500 cursor-pointer dark:hover:text-[#38BDF8]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{3}" stroke="currentColor" class="lg:w-8 lg:h-8 h-6 w-6">
            <path strokelinecap="round" strokelinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
          </svg>
        </div>
   <div class="relative" id="menu">
<img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU" alt="User dropdown">

<!-- Dropdown menu -->
<div id="userDropdown" class="z-10 absolute ani ltr:right-0 rtl:left-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>mohamed</div>
      <div class="font-medium truncate">name@gmail.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Passwoard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change profile</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>

</div>
</div>
        <div class="hidden md:block text-sm md:text-md text-black dark:text-white">
          Heema-14
        </div>
      </div>
    </div>
  </div>
  <aside class="w-60 -translate-x-48  fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]">
    <div class="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B] absolute top-2 rounded-full h-12">
      <div class="flex pl-4 items-center space-x-2">
        <div>
          <div onclick="setDark('dark')" class="moon cursor-pointer text-white hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{3}" stroke="currentColor" class="w-4 h-4">
              <path strokelinecap="round" strokelinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
            </svg>
          </div>
          <div onclick="setDark('light')" class="sun cursor-pointer  text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
            </svg>
          </div>
        </div>

      </div>
      <div class="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500 pl-10 pr-2 py-1 rounded-full text-white">
        <div class="transform ease-in-out duration-300 mr-12">NERVE</div>
      </div>
    </div>
    <div onclick="openNav()" class="-right-6 transition cursor-pointer transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{3}" stroke="currentColor" class="w-4 h-4">
        <path strokelinecap="round" strokelinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"></path>
      </svg>
    </div>
      <div id="scrollbar" class="overflow-y-scroll w-full">
    <div class="max hidden  text-white mt-20 flex-col space-y-2 w-full h-screen  " id="menum">
    </div>
    </div>
    <div class="mini mt-20 flex flex-col space-y-2 w-full h-screen">
    </div>
  </aside>
  <div class="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4">

    ${imp}
  </div> 
</div>`;

  return str;
}

let foot = document.querySelectorAll(".foot");

// dashboad script
let sidebar = document.querySelector("aside");
let maxSidebar = document.querySelector(".max");
let miniSidebar = document.querySelector(".mini");
let roundout = document.querySelector(".roundout");
let maxToolbar = document.querySelector(".max-toolbar");
let logo = document.querySelector(".logo");
let content = document.querySelector(".content");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

document.documentElement.classList.add("dark");
if (localStorage.mood != undefined) setDark(localStorage.mood);
let mini = document.querySelector(".mini");
let menum = document.getElementById("menum");
menudb.forEach((m) => {
  menum.innerHTML += witemenum(m.id, m.svg, m.title, m.li);
  mini.innerHTML += witemenum(m.id, m.svg, null, []);
});
function setDark(val) {
  if (val === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    localStorage.mood = document.documentElement.classList[0];
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    localStorage.mood = document.documentElement.classList[0];
  }
}

function openNav() {
  if (sidebar.classList.contains("-translate-x-48")) {
    // max sidebar
    sidebar.classList.remove("-translate-x-48");
    sidebar.classList.add("translate-x-none");
    maxSidebar.classList.remove("hidden");
    maxSidebar.classList.add("flex");
    miniSidebar.classList.remove("flex");
    miniSidebar.classList.add("hidden");
    maxToolbar.classList.add("translate-x-0");
    maxToolbar.classList.remove("translate-x-24", "scale-x-0");
    logo.classList.remove("ml-12");
    content.classList.remove("ml-12");
    content.classList.add("ml-12", "md:ml-60");
  } else {
    // mini sidebar
    sidebar.classList.add("-translate-x-48");
    sidebar.classList.remove("translate-x-none");
    maxSidebar.classList.add("hidden");
    maxSidebar.classList.remove("flex");
    miniSidebar.classList.add("flex");
    miniSidebar.classList.remove("hidden");
    maxToolbar.classList.add("translate-x-24", "scale-x-0");
    maxToolbar.classList.remove("translate-x-0");
    logo.classList.add("ml-12");
    content.classList.remove("ml-12", "md:ml-60");
    content.classList.add("ml-12");
  }
}
