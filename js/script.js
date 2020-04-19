Vue.component('ad', {
    props: ['ad'],
    template: `
    <li class="ad">
        {{ ad.adBody.text }}
        <br>
        <img v-bind:src="ad.adBody.img">
    </li>`,
});

let adsSorted = [
    {text: 'Страна была в шоке, когда узнала преемника Путина! Им стал...', img: 'img/putin.png'},
    {text: 'Найдено лекарство от простатита! Нужно взять простой советский...', img: 'img/test.jpg'},
    {text: 'Акушеры были в шоке когда увидели что лезет из роженицы!......', img: 'img/mur.jpg'},
    {text: 'Чтобы сбросить 3000 кг за день нужно по утрам пить стакан...', img: 'img/milk.jpg'},
    {text: 'Вот что предсказала Ванга! Тюмень в 2020 ждёт это...', img: 'img/tura.jpg'},
    {text: 'Новая онлайн игра! Пройди по Восточке и останься в живых! Играй бесплатно...', img: 'img/chaes.jpg'},
];

let ids = generateId(adsSorted);
console.log(ids);

let app = new Vue({
    el: '#root',
    data: {
        i: 0,
        ads: [
            {id: 0, adBody: adsSorted[ids[0]]},
            {id: 1, adBody: adsSorted[ids[1]]},
            {id: 2, adBody: adsSorted[ids[2]]},
            {id: 3, adBody: adsSorted[ids[3]]},
            {id: 4, adBody: adsSorted[ids[4]]},
            {id: 5, adBody: adsSorted[ids[5]]},
        ],
        questions: [
            { text: "Как вы относитесь к котикам?", variants: ["Положительно", "Отрицательно", "Нейтрально", "Я не отношусь к котикам"] },
            { text: "Вы левша или правша?", variants: ["Левша", "Правша", "Я амбидекстер", "У меня нет рук"] },
            { text: "Хотели ли бы вы эмигрировать?", variants: ["Мне и тут хорошо", "Да, конечно, куда угодно", "Кто составлял вопросы?", "Как это связано с координатами?"] },
            { text: "Поддерживаете ли вы Владимира Путина", variants: ["Да", "Да", "Да", "Нет (я Алексей Навальный)"] },
        ],
    },
    methods: {
        changeQuestion: function(e) {
            e.preventDefault();
            if(this.i < 3) {
                this.i++;
                console.log(this.i);
                let r = document.querySelectorAll("input");
                r.forEach(elem => {
                    elem.checked = false;
                });
            } else {
                console.log('kek');
                let test = document.querySelector('.test');
                test.style.display = "none";
                let result = document.getElementById('levak');
                result.style.display = "block";
            }
        }
    }
});

function generateId(arr) {
    let ids = [];
    for(let i = 0; i < arr.length; i++) {
        let i = Math.round(Math.random() * (arr.length - 1));
        while(ids.includes(i))
            i = Math.round(Math.random() * (arr.length - 1));
        ids.push(i);
    }
    return ids;
}