document.getElementById('tab1').style.display = 'block';
        document.getElementsByClassName('tab-label')[0].classList.add('active');
        
        function changeTab(event, tabId) {
            var i, tabContent, tabLabels;
            
            // Скрыть все содержимое вкладок
            tabContent = document.getElementsByClassName('tab-content');
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = 'none';
            }
            
            // Удалить активное состояние у всех вкладок
            tabLabels = document.getElementsByClassName('tab-label');
            for (i = 0; i < tabLabels.length; i++) {
                tabLabels[i].classList.remove('active');
            }
            
            // Показать выбранную вкладку и добавить активное состояние
            document.getElementById(tabId).style.display = 'block';
            event.currentTarget.classList.add('active');
        }



ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [55.812838, 37.792986], // Координаты центра карты
        zoom: 15 // Масштаб карты
    });
    
    // Создание метки
    var myPlacemark = new ymaps.Placemark([55.812838, 37.792986], {
        hintContent: 'FMD', // Подсказка при наведении на метку
        
    });
    
    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
});
