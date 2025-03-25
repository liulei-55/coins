// 动态调整页面可视高度
function adjustHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    document.body.style.height = `${window.innerHeight}px`;

    document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);
    document.body.style.width = `${window.innerWidth}px`;
}

window.addEventListener('load', adjustHeight);

window.addEventListener('resize', adjustHeight);



const coinOptions = document.querySelectorAll('.coin-option');
// const buyButton = document.getElementById('buyButton');
const customOption = document.getElementById('custom-option');
const closeModal = document.querySelector('.close');
const customAmountInput = document.getElementById('customAmount');

coinOptions.forEach(option => {
    option.addEventListener('click', function () {
        if (this.id !== 'custom-option') {
            coinOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const price = this.dataset.price;
            buyButton.textContent = `SAR$ ${price}`;
        }
    });
});

function goLogin() {
    window.location.href = '../index.html';
}

const inputField = document.getElementById('inputField');
const clearButton = document.getElementById('clearButton');

// 输入框内容变化时显示或隐藏清除按钮
inputField.addEventListener('input', function () {
    if (inputField.value.length > 0) {
        clearButton.style.display = 'inline'; // 显示清除按钮
    } else {
        clearButton.style.display = 'none'; // 隐藏清除按钮
    }
});

// 点击清除按钮清空输入框
clearButton.addEventListener('click', function () {
    inputField.value = ''; // 清空输入框内容
    clearButton.style.display = 'none'; // 隐藏清除按钮
    inputField.focus(); // 让输入框重新获得焦点
});

// buyButton.addEventListener('click', function () {
//     alert('Purchase initiated!');
// });

function showPop() {
    $('#pop').css('display', 'block');
    $('.show-box').css({
        'bottom': '0',
        'transition': 'all .1s ease-in'
    })
}

function hidePop() {
    $('#pop').css('display', 'none');
    // if (screen.height < 800) {
    //     $('.show-box').css({
    //         'bottom': '-70vh',
    //         'transition': 'all .1s ease-in'
    //     })
    // } else {
    //     $('.show-box').css({
    //         'bottom': '-60vh',
    //         'transition': 'all .1s ease-in'
    //     })
    // }
    $('.show-box').css({
        'bottom': '-500px',
        'transition': 'all .1s ease-in'
    })
    $('.load-box').css({
        'display': 'none'
    });
    $('.load-box-2').css({
        'display': 'none'
    });
    clearInterval(timer); // 停止倒计时
    totalTime = 5 * 60 - 1; // 重置倒计时时间

    $('.success-box').css('display', 'none');

    $('#language-modal').css('display', 'none');
}


// 输入金额

const coinInput = document.getElementById('coinInput');
const totalAmount = document.getElementById('totalAmount');
const rechargeButton = document.getElementById('rechargeButton');
const keys = document.querySelectorAll('.key');
const ConfirmButton = document.getElementById('ConfirmButton');

function updateInput() {
    let value = coinInput.value.replace(/,/g, '');
    let numValue = parseInt(value) || 0;

    // 校验值是否在 30 到 2,500,000 范围内
    if (numValue < 0 && numValue !== 0) {
        numValue = 0;
    } else if (numValue > 2500000) {
        numValue = 2500000;
    }

    // 更新输入框和总金额显示
    coinInput.value = numValue.toLocaleString();


    numValue = parseInt(numValue / 2.7);


    totalAmount.textContent = `SAR$${numValue.toLocaleString()}`;

    // 禁用或启用充值按钮
    rechargeButton.disabled = numValue === 0;
}

keys.forEach(key => {
    key.addEventListener('click', function () {
        let currentValue = coinInput.value.replace(/,/g, '');

        // 判断是否点击了回退按钮
        if (this.classList.contains('backspace')) {
            currentValue = currentValue.slice(0, -1);
        } else {
            const keyValue = this.textContent;

            // 判断是否点击了 "000" 按钮
            if (keyValue === '000') {
                currentValue += '000';
            } else {
                currentValue += keyValue;
            }
        }

        // 防止无效输入
        coinInput.value = currentValue || '0';
        updateInput();
    });
});

let totalTime = 5 * 60 - 1;
let timer; // 定义全局变量来存储计时器

function startCountdown() {
    const timeDisplay = document.getElementById("timeLeft");

    timer = setInterval(function () {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        // 格式化时间为 MM:SS 的形式
        timeDisplay.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (totalTime === 0) {
            clearInterval(timer);
            alert("Error: Payment timed out!");
        }

        totalTime--;
    }, 1000); // 每秒更新一次
}


rechargeButton.addEventListener('click', function () {
    if (coinInput.value !== '') {
        let coinsNum = document.querySelector('#coinsNum');
        let username = document.querySelector('#userName');
        let coinsNum_1 = document.querySelector('#coinsNum_1');
        let coinsPrice_1 = document.querySelector('#coinsPrice_1');
        let coinsPrice_2 = document.querySelector('#coinsPrice_2');
        

        coinsNum_1.textContent = coinInput.value;
        coinsPrice_1.innerHTML = totalAmount.innerHTML;
        coinsPrice_2.innerHTML = totalAmount.innerHTML;

        $('#pop').css('display', 'block');
        $('.show-box').css({
            'bottom': '-500px',
            'transition': 'all .1s ease-in'
        });
        $('.load-box-2').css({
            'display': 'block'
        });
        //启动倒计时
        // startCountdown();
        // setTimeout(function () {
        //     $('.load-box').css({
        //         'display': 'none'
        //     });
        //     coinsNum.textContent = coinInput.value;
        //     username.textContent = inputField.value;

        //     $('.success-box').css('display', 'flex');

        //     setTimeout(() => {
        //         coinInput.value = '';
        //     }, 10);
        // }, 3000);
    }
});

ConfirmButton.addEventListener('click', function () {
    let coinsNum = document.querySelector('#coinsNum');
    let username = document.querySelector('#userName');
    $('.load-box-2').css({
        'display': 'none'
    });

    $('.load-box').css({
        'display': 'flex'
    });
    //启动倒计时
    startCountdown();
    setTimeout(function () {
        $('.load-box').css({
            'display': 'none'
        });
        coinsNum.textContent = coinInput.value;
        username.textContent = inputField.value;

        $('.success-box').css('display', 'flex');

        setTimeout(() => {
            coinInput.value = '';
        }, 10);
    }, 2000);
})

// 阻止键盘输入
coinInput.addEventListener('keydown', function (e) {
    e.preventDefault();
});

// 初始化输入框
updateInput();


//语言选择
function changeLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[lang][key] || element.textContent;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        element.setAttribute("placeholder", translations[lang][key]);
    });

    localStorage.setItem("selectedLanguage", lang);
}

const savedLang = localStorage.getItem("selectedLanguage") || "en";
changeLanguage(savedLang);

const modal = document.getElementById("language-modal");
const languageList = document.getElementById("language-list");

document.querySelector(".menu-button").addEventListener("click", function () {
    $('#pop').css('display', 'block');
    modal.style.display = "block";
    languageList.innerHTML = "";

    Object.keys(languageNames).forEach(lang => {
        const li = document.createElement("li");
        li.textContent = languageNames[lang]; // 始终显示英语
        li.addEventListener("click", () => {
            changeLanguage(lang);
            modal.style.display = "none";
            $('#pop').css('display', 'none');
        });
        languageList.appendChild(li);
    });
});

document.getElementById("close-modal").addEventListener("click", function () {
    modal.style.display = "none";
    $('#pop').css('display', 'none');
});