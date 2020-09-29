class FormRegister extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        let template = document.getElementById('form-register');
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.label = this.shadowRoot.getElementById('input-label');
        this.email = this.shadowRoot.getElementById('input-main');


    };
    

}

window.customElements.define('form-register', FormRegister)