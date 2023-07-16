


async function  showcours(){
  let res=await fetch('http://161.97.163.0/api/Course')
  return res.json()
}

showcours().then((c) => {
  console.log(c)
  let writedata = document.getElementById("writedata");
  writedata.innerHTML=''
  c.forEach((x) => {
      writedata.innerHTML += write(
        x.img,
        x.title,
        x.teacherFullname,
        x.islocked,
        x.class
      );
      
    });
    chanflow()
  });
  
function write(image, title, teacher, active, numberclass) {
  let ac = "";
  if (!active) ac = "hidden";

  return `
       <tr class="bg-white border-b capitalize ${ac} dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                    <img src="" alt="${title}">
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${title}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${teacher}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${numberclass}
                </td>
                <td class="px-3">
                    <a href="#" class="font-medium md:px-3 py-2 md:text-sm rounded-md text-xs px-1  bg-buttoncolor text-white   hover:underline follow duration-500">Send Request</a>
                </td>
            </tr>
            `;
}


// follow toogle
function chanflow(){
    let follow = document.querySelectorAll(".follow");
    follow.forEach((f) => {
      f.addEventListener("click", (even) => {
        if (even.target.innerHTML == "Send Request") {
          even.target.innerHTML = "delete request";
          even.target.style.backgroundColor = "#ff5f95";
        } else {
          even.target.innerHTML = "Send Request";
          even.target.style.backgroundColor = "#696cff";
        }
      });
    });
}
// search script 
function searching(){
  let selectname = document.querySelectorAll(".selectname");
  let dropdownbutton = document.getElementById("dropdown-button");
  selectname.forEach((s) => {
    s.addEventListener("click", (even) => {
      let svg = dropdownbutton.children[0].cloneNode(true);
      dropdownbutton.innerHTML = "";
      dropdownbutton.prepend(even.target.innerHTML);
      dropdownbutton.append(svg);
      document.getElementById("dropdown").classList.toggle("hidden");
    });
  });
  dropdownbutton.addEventListener("click", () => {
    document.getElementById("dropdown").classList.toggle("hidden");
  });

}
searching()



