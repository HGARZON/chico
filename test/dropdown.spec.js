describe('Dropdown', function () {
    var container = document.createElement('div'),
        dropdownHtml = [
            '<span id="dropdown1">Trigger 1</span>',
            '<menu class="ch-hide">',
            '<li><a href="http://www.mercadolibre.com">MercadoLibre</a></li>',
            '<li><a href="http://www.mercadopago.com">MercadoPago</a></li>',
            '<li><a href="http://www.mercadoshops.com">MercadoShops</a></li>',
            '<li><a href="http://www.mercadoclics.com">MercadoClics</a></li>',
            '</menu>',

            '<span id="dropdown2">Trigger 2</span>',
            '<menu class="ch-hide">',
            '<li><a href="http://www.mercadolibre.com">MercadoLibre</a></li>',
            '<li><a href="http://www.mercadopago.com">MercadoPago</a></li>',
            '<li><a href="http://www.mercadoshops.com">MercadoShops</a></li>',
            '<li><a href="http://www.mercadoclics.com">MercadoClics</a></li>',
            '</menu>'
        ].join(''),
        dropdown1,
        t,
        c,
        dropdown2;

    before(function(){
        container.innerHTML = dropdownHtml;
        document.body.appendChild(container);

        dropdown1 = new ch.Dropdown(document.getElementById('dropdown1'));
        t = dropdown1.trigger;
        c = dropdown1.container;
        dropdown2 = new ch.Dropdown(document.getElementById('dropdown2'), {
            'skin': true
        });
    });

    after(function () {
        document.body.removeChild(container);
    });

    it('should be defined on ch object', function () {
        expect(ch.Dropdown).to.exist;
        expect(ch.Dropdown).to.be.a('function');
    });

    it('should return a new instance of Dropdown', function () {
        expect(dropdown1).to.be.an.instanceof(ch.Dropdown);
    });

    describe('It should have a container with', function () {

        it('role combobox', function () {
            expect(c.getAttribute('role')).to.equal('combobox');
        });

        it('specific CSS class names', function () {
            expect(ch.util.classList(c).contains('ch-dropdown')).to.be.true;
            expect(ch.util.classList(c).contains('ch-box-lite')).to.be.true;
        });
    });

    describe('By default', function () {
        it('should have class names like a button', function () {
            expect(ch.util.classList(t).contains('ch-btn-skin')).to.be.true;
            expect(ch.util.classList(t).contains('ch-btn-small')).to.be.true;
        });
    });

    describe('An intance configured with skin', function () {
        it('should have a specific class name on trigger', function () {
            expect(ch.util.classList(dropdown2.trigger).contains('ch-dropdown-trigger-skin')).to.be.true;
        });

        it('shouldn\'t have class names like a button', function () {
            expect(ch.util.classList(dropdown2.trigger).contains('ch-btn-skin')).to.be.false;
            expect(ch.util.classList(dropdown2.trigger).contains('ch-btn-small')).to.be.false;
        });
    });

});

