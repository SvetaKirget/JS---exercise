class Elem {
    html = (str, selector) => {
        const div = document.querySelector(selector)
        div.innerHTML = str;
    }
}

const elem = new Elem();
elem.html('Hello', '.result')