 
 
 
 
 
function myFunction() {
  var input = document.querySelector(".user-box-input").value;
  var button = document.querySelector(".login-box-button");
  var userBox = document.querySelector(".user-box");

  if (input.length === 0 || input.includes(" ")) {
 
    userBox.style.animation = "shake 0.5s";
    button.style.backgroundColor = "#9f2929";
    button.style.transition = "background-color 1s";
    setTimeout(function() {
      userBox.style.animation = "";
      button.style.backgroundColor = "";
    }, 400);
  } else {
    window.location.href = "index2.html";
  }
}
// document.getElementById('btn-modal').addEventListener('click', function(event){
//   event.preventDefault();
//   let nickname = document.getElementById('form29').value;
//   saveNicknameToDatabase(nickname);
// });
// function saveNicknameToDatabase(username) {
//   fetch('http://localhost:8080/saveNickname', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ nickname: username }),
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log('Nickname successfully saved in the database');
//     } else {
//       console.error('Error while saving nickname');
//     }
//   })
//   .catch(error => {
//     console.error('An error occurred:', error);
//   });

 
// }


// const result = document.getElementById("result");
// const filter = document.getElementById("filter");
// const listItems = [];

// const filterData = (searchTerm) => {
//   listItems.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
//       item.classList.remove("hide");
//     } else {
//       item.classList.add("hide");
//     }
//   });
// };

// const getData = async () => {
//   const res = await fetch("https://randomuser.me/api?results=50");
//   const { results } = await res.json();
//   result.innerHTML = "";
//   results.forEach((user) => {
//     const li = document.createElement("li");
//     listItems.push(li);
//     li.innerHTML = `
//       <img
//             src="${user.picture.large}"
//             alt="${user.name.first}"
//           />
//       <div class="user-info">
//             <h4>${user.name.first} </h4>
         
//       </div>
//       `;
//     result.appendChild(li);
//   });
// };

// getData();

// filter.addEventListener("input", (e) => filterData(e.target.value));



 
 


// let container1 = document.querySelector('.container1');

// // Создаем shadow root для элемента container1
// let shadowRoot = container1.attachShadow({ mode: 'open' });

 
// // Создаем стиль для отображения элементов
// let style = document.createElement('style');
// style.textContent = `
//   .header,
//   .user-list {
//     display: none;
//   }
// `;

// // Добавляем стиль в shadow root
// shadowRoot.appendChild(style);

