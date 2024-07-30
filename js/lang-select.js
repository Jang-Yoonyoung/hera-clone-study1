document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('language-select-button');
    const list = document.getElementById('language-select-list');
    const quickBtn = document.querySelector('.footer__quick');
    const info = document.querySelector('.util__info__quick');
    const quickLangBtn = document.querySelector('.lang__toggle');
    const langSelect = document.querySelector('.quick__lang__select');
    

    button.addEventListener('click', (e) => {
        list.classList.toggle("show"); //있으면 제거 없으면 추가
            
        if (list.classList.contains("show")) {
            document.documentElement.style.setProperty('--toggle-degree', '180deg');
        } else {
            document.documentElement.style.setProperty('--toggle-degree', '0deg');
        }
    });

    quickBtn.addEventListener('click', (e) => {
        //언어선택 토글박스 열려있을때
        if(langSelect.classList.contains('display')) {
            langSelect.classList.remove('display');
            info.classList.remove('addLength');
            document.documentElement.style.setProperty('--lang-degree', '90deg');
        }

        info.classList.toggle("visible");

        if (info.classList.contains("visible")) {
            document.documentElement.style.setProperty('--quick-degree', '225deg');
            setTimeout(() => {
                info.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 500)
        } else {
            document.documentElement.style.setProperty('--quick-degree', '45deg');
        }
    });

    //언어선택 토글박스
    quickLangBtn.addEventListener('click', (e) => {
        langSelect.classList.toggle("display");

        if (langSelect.classList.contains("display")) {
            document.documentElement.style.setProperty('--lang-degree', '0deg');
            info.classList.add("addLength");
            setTimeout(() => {
                langSelect.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 500)
        } else {
            document.documentElement.style.setProperty('--lang-degree', '90deg');
            info.classList.remove("addLength");
        }
    });
});