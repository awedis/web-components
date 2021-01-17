class TryCounter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    get count() {
        return this.getAttribute("count");
    }
    set count(val) {
        this.setAttribute("count", val);
    }

    static get observedAttributes() {
        return ["count"];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === 'count') this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <h2>Counter</h2>
            ${this.count}
            <button id='btn'>ADD</button>
        `;
    }
}

customElements.define('try-counter', TryCounter);