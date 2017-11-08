var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JuegoCostanera;
(function (JuegoCostanera) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        function Bonus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bonus;
    }(Phaser.Sprite));
    JuegoCostanera.Bonus = Bonus;
})(JuegoCostanera || (JuegoCostanera = {}));
/// //<reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Personaje = /** @class */ (function (_super) {
        __extends(Personaje, _super);
        //orientacion: string;
        function Personaje(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.height = 400;
            _this.width = 332;
            game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.body.gravity.y = 500;
            _this.body.setSize(780, 705);
            //this.animations.add('left', [0, 1, 2, 3], 10, true);
            //this.animations.add('turn', [4], 20, true);
            // this.animations.add('right', [5, 6, 7, 8], 10, true);
            //this.setOrientacion('left');  
            _this.setPuntos(0);
            _this.setVidas(3);
            _this.setPlayerBonus(0);
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.getPlayerBonus = function () {
            return this.bonus;
        };
        Personaje.prototype.setPlayerBonus = function (value) {
            this.bonus = value;
        };
        Personaje.prototype.getPuntos = function () {
            return this.puntos;
        };
        Personaje.prototype.setPuntos = function (value) {
            this.puntos = value;
        };
        //setOrientacion(value: string){
        // this.orientacion = value;
        //}
        //getOrientacion(){
        // return this.orientacion;
        //}
        Personaje.prototype.getVidas = function () {
            return this.vidas;
        };
        Personaje.prototype.setVidas = function (value) {
            this.vidas = value;
        };
        return Personaje;
    }(Phaser.Sprite));
    JuegoCostanera.Personaje = Personaje;
})(JuegoCostanera || (JuegoCostanera = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Bonus.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Costanera = /** @class */ (function () {
        function Costanera(ancho, alto) {
            this.setGame(new Phaser.Game(ancho, alto, Phaser.CANVAS, 'content', {
                preload: this.preload,
                create: this.create,
                update: this.update,
                setGame: this.setGame,
                getGame: this.getGame,
                setAncho: this.setAncho,
                getAncho: this.getAncho,
                setAlto: this.setAlto,
                getAlto: this.getAlto,
                setLogo: this.setLogo,
                getLogo: this.getLogo,
                setPersonaje: this.setPersonaje,
                getPersonaje: this.getPersonaje,
                setBonus: this.setBonus,
                getBonus: this.getBonus,
                setCursores: this.setCursores,
                getCursores: this.getCursores,
                setSaltarBtn: this.setSaltarBtn,
                getSaltarBtn: this.getSaltarBtn,
                getDobleSalto: this.getDobleSalto,
                setDobleSalto: this.setDobleSalto,
                getEmitter: this.getEmitter,
                setEmitter: this.setEmitter,
                getEmitterBonus: this.getEmitterBonus,
                setEmitterBonus: this.setEmitterBonus,
                collisionHandler: this.collisionHandler,
                collisionBonus: this.collisionBonus,
                getTextoPuntos: this.getTextoPuntos,
                setTextoPuntos: this.setTextoPuntos,
                getTextoVidas: this.getTextoVidas,
                setTextoVidas: this.setTextoVidas
                //listener: this.listener
            }));
        }
        //--------------------setters y getters --------------------------------------
        Costanera.prototype.setGame = function (game) {
            this.game = game;
        };
        Costanera.prototype.getGame = function () {
            return this.game;
        };
        Costanera.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Costanera.prototype.getAncho = function () {
            return this.ancho;
        };
        Costanera.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Costanera.prototype.getAlto = function () {
            return this.alto;
        };
        Costanera.prototype.setPersonaje = function (personaje) {
            this.personaje = personaje;
        };
        Costanera.prototype.getPersonaje = function () {
            return this.personaje;
        };
        Costanera.prototype.setCursores = function (cursores) {
            this.cursores = cursores;
        };
        Costanera.prototype.getCursores = function () {
            return this.cursores;
        };
        Costanera.prototype.setSaltarBtn = function (saltarBtn) {
            this.saltarBtn = saltarBtn;
        };
        Costanera.prototype.getSaltarBtn = function () {
            return this.saltarBtn;
        };
        Costanera.prototype.getDobleSalto = function () {
            return this.doblesalto;
        };
        Costanera.prototype.setDobleSalto = function (valor) {
            this.doblesalto = valor;
        };
        Costanera.prototype.setLogo = function (value) {
            this.logo = value;
        };
        Costanera.prototype.getLogo = function () {
            return this.logo;
        };
        Costanera.prototype.setBonus = function (value) {
            this.bonus = value;
        };
        Costanera.prototype.getBonus = function () {
            return this.bonus;
        };
        Costanera.prototype.setEmitter = function (value) {
            this.emitter = value;
        };
        Costanera.prototype.getEmitter = function () {
            return this.emitter;
        };
        Costanera.prototype.setEmitterBonus = function (value) {
            this.emitterBonus = value;
        };
        Costanera.prototype.getEmitterBonus = function () {
            return this.emitterBonus;
        };
        Costanera.prototype.getTextoPuntos = function () {
            return this.textoPuntos;
        };
        Costanera.prototype.setTextoPuntos = function (value) {
            this.textoPuntos = value;
        };
        Costanera.prototype.getTextoVidas = function () {
            return this.textoVidas;
        };
        Costanera.prototype.setTextoVidas = function (value) {
            this.textoVidas = value;
        };
        Costanera.prototype.preload = function () {
            this.getGame().load.image('logo', 'assets/logo.png');
            this.getGame().load.image('bonus', 'assets/hamburger.png');
            this.getGame().load.image('player', 'assets/cat.png');
            this.getGame().load.image('costanera', 'assets/costanera.JPG');
            this.getGame().load.image('gameover', 'assets/gameover.png');
            //Agregamos un comentario para probar subir cambios a GIT desde el editor
            //hacemos un cambio en el archivo
        };
        Costanera.prototype.create = function () {
            // add the 'logo' sprite to the game, position it in the
            // center of the screen, and set the anchor to the center of
            // the image so it's centered properly. There's a lot of
            // centering in that last sentence
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
            var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
            logo.x = 0;
            logo.y = 0;
            logo.height = this.getGame().height;
            logo.width = this.getGame().width;
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.getGame().time.desiredFps = 30;
            this.getGame().physics.arcade.gravity.y = 200;
            //Personaje
            var personaje = new JuegoCostanera.Personaje(this.getGame(), this.getGame().world.centerX, this.getGame().world.top, 'player');
            this.setPersonaje(personaje);
            //mover		
            this.setCursores(this.getGame().input.keyboard.createCursorKeys());
            this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
            //Logo
            var logo = this.getGame().add.sprite(300, 50, 'logo');
            this.setLogo(logo);
            this.getLogo().name = 'logo';
            this.getGame().physics.enable(this.getLogo(), Phaser.Physics.ARCADE);
            this.getLogo().body.setSize(10, 10, 0, 0);
            //click events
            logo.inputEnabled = true;
            //logo.events.onInputDown.add(this.listener, this);
            //emitter Logo
            var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
            this.setEmitter(emitter);
            this.getEmitter().width = this.getGame().world.width;
            this.getEmitter().makeParticles('logo', null, 1, true);
            this.getEmitter().setYSpeed(500, 600);
            this.getEmitter().setXSpeed(-5, 5);
            this.getEmitter().start(false, 1600, 1, 0);
            //emitter bonus
            var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
            this.setEmitterBonus(emitter);
            this.getEmitterBonus().width = this.getGame().world.width;
            this.getEmitterBonus().makeParticles('bonus', null, 1, true);
            this.getEmitterBonus().setYSpeed(100, 200);
            this.getEmitterBonus().setXSpeed(-5, 5);
            this.getEmitterBonus().start(false, 1600, 1, 0);
            //  Puntos
            var scoreString = 'Puntos: ';
            var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
            this.setTextoPuntos(scoreText);
            //  Vidas
            var vidasString = 'Vidas: ';
            var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
            this.setTextoVidas(vidasText);
        };
        Costanera.prototype.update = function () {
            // this.game.physics.arcade.collide(this.player, platforms);
            //this.getGame().physics.arcade.collide(this.getLogo(), this.getPersonaje(), this.collisionHandler, null, this);
            this.getGame().physics.arcade.collide(this.getEmitter(), this.getPersonaje(), this.collisionHandler, null, this);
            this.getGame().physics.arcade.collide(this.getEmitterBonus(), this.getPersonaje(), this.collisionBonus, null, this);
            this.getPersonaje().body.velocity.x = 0;
            if (this.getCursores().left.isDown) {
                this.getPersonaje().body.velocity.x = -500;
            }
            else if (this.getCursores().right.isDown) {
                this.getPersonaje().body.velocity.x = 500;
            }
            if (this.getSaltarBtn().isDown && (this.getPersonaje().body.onFloor() || this.getPersonaje().body.touching.down)) {
                this.getPersonaje().body.velocity.y = -400;
            }
            if (this.getSaltarBtn().isDown && this.getPersonaje().body.onFloor()) {
                this.getPersonaje().body.velocity.y = -400;
                this.setDobleSalto(1);
                this.getSaltarBtn().isDown = false;
                console.log(this.getSaltarBtn(), "Primer Salto");
            }
            if (this.getSaltarBtn().isDown && this.getDobleSalto() == 1) {
                this.getPersonaje().body.velocity.y = -400;
                this.setDobleSalto(2);
                this.getSaltarBtn().isDown = false;
                console.log(this.getDobleSalto, "Segundo salto");
            }
        };
        Costanera.prototype.collisionHandler = function (logo, personaje) {
            personaje.kill();
            //  Reduce the lives
            if (this.getPersonaje().getVidas() > 0) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
            }
            else {
                logo.kill();
                var gameOver = this.getGame().add.sprite(this.getGame().world.centerX - 250, this.getGame().world.centerY - 100, 'gameover');
            }
        };
        Costanera.prototype.collisionBonus = function (hamburguesas, personaje) {
            personaje.kill();
            //Increase the score
            this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
            this.getPersonaje().setPlayerBonus(this.getPersonaje().getPlayerBonus() + 20);
            this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
            if (this.getPersonaje().getPlayerBonus() == 200) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
                this.getPersonaje().setPlayerBonus(0);
            }
        };
        return Costanera;
    }());
    JuegoCostanera.Costanera = Costanera;
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
/// <reference path="./Bonus.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Logo = /** @class */ (function (_super) {
        __extends(Logo, _super);
        function Logo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Logo;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Logo = Logo;
})(JuegoCostanera || (JuegoCostanera = {}));
