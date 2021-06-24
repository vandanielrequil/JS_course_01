//Выбираем объекты для манипуляций
var prSlide = document.getElementById('productSlide__main'),
    arrow = document.getElementsByClassName('productSlide__arrow'),
    addToCartButton = document.getElementById('addToCart'),
    clearCartButton = document.getElementById('clearToCart'),
    prCart = document.querySelector('.cart__list'),
    cartTotal = document.querySelector('.cart__total .cp.amount'),
    curItem = 0, //начальный твоар
    purchAmount = 0; //счётчик суммы корзины


var prArr = [         //Массив с нашими продуктами
    ['img/single_page/01s.png', 'img/single_page/01b.jpg', 'luxury dress max coco', '250'],
    ['img/single_page/02s.png', 'img/single_page/02b.jpg', 'topic sky white', '150'],
    ['img/single_page/03s.png', 'img/single_page/03b.jpg', 'pants cowboy bibop', '400']];

// Ф-я добовляет новый товар в указанное место (слайдер или корзина в данном случае)
function addItem(prArr, prNum, targElem, targetBlockClassName) {
    var item = document.createElement('div'),
        img = document.createElement('img'),
        prName = document.createElement('p'),
        prPrice = document.createElement('p');

    img.src = prArr[prNum][0];
    img.onclick = zoonImg;
    prName.innerHTML = prArr[prNum][2];
    prPrice.innerHTML = '$' + prArr[prNum][3] + '.00';

    img.classList.add(targetBlockClassName + '__img');
    prName.classList.add(targetBlockClassName + '__name');
    prPrice.classList.add(targetBlockClassName + '__price');
    item.classList.add(targetBlockClassName + '__item');

    item.id = targetBlockClassName + '__' + prNum;

    item.insertAdjacentElement("afterbegin", prPrice);
    item.insertAdjacentElement("afterbegin", prName);
    item.insertAdjacentElement("afterbegin", img);

    targElem.insertAdjacentElement("afterbegin", item);
}

//Даём методы корзине и слайдеру
prSlide.addItem = addItem;
prCart.addItem = addItem;

//Добавляем первичный товар на вывод в слайдер
prSlide.addItem(prArr, curItem, prSlide, 'productSlide');
//В идеале хотел сделать на переменную curItem слушающее событие, которое бы при её 
//изменении, например кнопками, тригерило вывод нового товара в слайдере...

//Отталкиваясь от переменной текущего продукта в слайдере, 
//ф-ии удаляют ребёнка и добавляют пред/следующий товар из массива
function previousItem() {
    var crPr = document.getElementById('productSlide__' + curItem);
    prSlide.removeChild(crPr);
    curItem <= 0 ? curItem = prArr.length - 1 : curItem--;
    prSlide.addItem(prArr, curItem, prSlide, 'productSlide');
}
function nextItem() {
    var crPr = document.getElementById('productSlide__' + curItem);
    prSlide.removeChild(crPr);
    curItem >= prArr.length - 1 ? curItem = 0 : curItem++;
    prSlide.addItem(prArr, curItem, prSlide, 'productSlide');
}

arrow[0].onclick = previousItem;
arrow[1].onclick = nextItem;

//Увеличение и закрытие картинок продуктов по щелчку
function zoonImg() {
    var curImg = document.querySelector('.productSlide__main .productSlide__img'),
        prImg = curImg.cloneNode();
    prZoom = document.createElement('div');

    prImg.alt = 'О-о, что-то пошло не так... изображение не доступно';
    prImg.src = prImg.src.replace('s.png', 'b.jpg');
    prImg.classList.add('productSlide__zoom_img');
    prImg.onclick = zoonImgRemove;
    prZoom.appendChild(prImg);
    prZoom.classList.add('productSlide__zoom');
    prSlide.appendChild(prZoom);
}

function zoonImgRemove() {
    var prZoom = document.querySelector('.productSlide__main .productSlide__zoom');
    prZoom.remove();
}

//-----------КОРЗИНА-------------


//Добавление в корзину

function addToCart(prArr, prNum, targElem, targetBlockClassName) {
    var item = document.createElement('div'),
        img = document.createElement('img'),
        prName = document.createElement('p'),
        prPrice = document.createElement('p');

    img.src = prArr[prNum][0];
    img.onclick = zoonImg;
    prName.innerHTML = prArr[prNum][2];
    prPrice.innerHTML = '$' + prArr[prNum][3] + '.00';

    img.classList.add(targetBlockClassName + '__img');
    prName.classList.add(targetBlockClassName + '__name');
    prPrice.classList.add(targetBlockClassName + '__price');
    item.classList.add(targetBlockClassName + '__item');

    item.id = targetBlockClassName + '__' + prNum;

    item.insertAdjacentElement("afterbegin", prPrice);
    item.insertAdjacentElement("afterbegin", prName);
    item.insertAdjacentElement("afterbegin", img);

    targElem.insertAdjacentElement("afterbegin", item);

    purchAmount += +prArr[curItem][3];
    cartTotal.innerHTML = '$' + purchAmount + '.00';
}

addToCartButton.onclick = function () { addToCart(prArr, curItem, prCart, 'cart'); };

//Очиска корзины

function clearCart() {
    prCart.innerHTML = '';
    purchAmount = 0;
    cartTotal.innerHTML = '$0.00';
}

clearCartButton.onclick = clearCart;

