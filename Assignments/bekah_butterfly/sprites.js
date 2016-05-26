/* Created by danielgraff1 on 11/13/15.
 */
// Sprite variables
var
    fishSprite,
    backgroundSprite,
    foregroundSprite,
    topCoralSprite,
    bottomCoralSprite,
    textSprites,
    scoreSprite,
    splashScreenSprite,
    okButtonSprite,
    smallNumberSprite,
    largeNumberSprite;

/**
 * Sprite class
 * @param {Image} img - sprite sheet image
 * @param {number} x - x-position in sprite sheet
 * @param {number} y - y-position in sprite sheet
 * @param {number} width - width of sprite
 * @param {number} height - height of sprite
 */
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}

/**
 * Draw sprite to canvas context
 *
 * @param {CanvasRenderingContext2D} renderingContext context used for drawing
 * @param {number} x   x-position on canvas to draw from
 * @param {number} y   y-position on canvas to draw from
 */
Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height,
        x, y, this.width, this.height);
};

/**
 * Initate all sprite
 * @param {Image} img spritesheet image
 */
function initSprites(img) {

    fishSprite = [
        new Sprite(img, 6, 260, 50, 40),
        new Sprite(img, 68, 260, 50, 40),
        new Sprite(img, 137, 260, 50, 40)
    ];

    backgroundSprite = new Sprite(img, 0, 0, 206, 183);
    backgroundSprite.color = "#4cb1e0"; // save background color
    foregroundSprite = new Sprite(img, 0, 181, 200, 59);

    topCoralSprite = new Sprite(img, 222, 296, 24, 98);
    bottomCoralSprite = new Sprite(img, 267, 293, 24, 104);

    textSprites = {
        floppyFish: new Sprite(img, 59, 114, 96, 22),
        gameOver: new Sprite(img, 59, 136, 94, 19),
        getReady: new Sprite(img, 59, 155, 87, 22)
    };

    okButtonSprite = new Sprite(img, 118, 240, 40, 14);

    scoreSprite = new Sprite(img, 138, 56, 113, 58);
    splashScreenSprite = new Sprite(img, 0, 114, 59, 49);

}