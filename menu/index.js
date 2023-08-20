const wrapper = document.querySelector('.dak');

function click1() {
    fetch(`https://643ba89b44779455735dfac5.mockapi.io/newspaper/bai1/NEWS`)
        .then((res) => res.json())
        .then((data) => showData(data) & console.log(data))
        .catch((error) => console.log(error));

}

function showData(data) {
    wrapper.innerHTML = '';
    let dataUser = '';
    data.forEach((info) => {
        const {
            title,
            link,
            description,
            detail,
            img,
            id,
        } = info;
        dataUser += `<div class="how-section1" id="${id}">
            <div class="row" id="datauser">
                <div class="col-md-6 how-img" id="imgdak">
                    <img src=${img}
                    alt="" />
                </div>
                <div class="col-md-6">
                    <h4>${title}</h4>
                    <h4 class="subheading">${description}</h4>
                    <p class="text-muted">${detail}</p>
                </div>
            </div>
            <br>
            <br>
            <hr>
        </div>`;
    });
    wrapper.innerHTML = dataUser;
}
window.onload = click1();

const input = document.querySelector('#myInput');
const myUL = document.querySelector('#myUL');

input.addEventListener('focus', () => {
    myUL.style.display = 'block';
});

input.addEventListener('blur', () => {
    myUL.style.display = 'none';
});
const today = new Date();
const date = today.getDate();
const month = today.getMonth() + 1; // getMonth() returns 0-11
const year = today.getFullYear();
const weekdayIndices = [0, 1, 2, 3, 4, 5, 6];
const weekdaysVN = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
const dayOfWeekVN = weekdaysVN[weekdayIndices[today.getDay()]];

const currentDate = dayOfWeekVN + " " + "," + " " + date + "/" + month + "/" + year;
document.getElementById("hoangbu").innerHTML = currentDate;

