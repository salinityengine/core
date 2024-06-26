import { Style } from './Style.js';
import { Vector2 } from '../../../math/Vector2.js';

/**
 * Radial gradient interpolates colors from a point to another point around up to a starting and finishing radius value.
 * If the start and end point are the same it interpolates around the starting and ending radius forming a circle.
 * Outside of the radius the color is solid.
 * Returns CanvasGradient (https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)
 */
class RadialGradientStyle extends Style {

    constructor() {
        super();
        this.colors = [];                       // ordered list of gradient color stops (need at least one)
        this.start = new Vector2(0, 0);         // starting circle of the gradient
        this.startRadius = 10;                  // radius of the starting circle
        this.end = new Vector2(0, 0);           // ending circle of the gradient
        this.endRadius = 50;                    // radius of the ending circle
    }

    /** Add a new color stop defined by an offset (between 0 and 1 inclusive) and a color to the gradient */
    addColorStop(offset, color) {
        this.colors.push({ offset, color });
    }

    get(context) {
        if (this.needsUpdate || this.cache == null) {
            const style = context.createRadialGradient(this.start.x, this.start.y, this.startRadius, this.end.x, this.end.y, this.endRadius);
            for (const colorStop of this.colors) {
                style.addColorStop(colorStop.offset, colorStop.color);
            }
            this.cache = style;
            this.needsUpdate = false;
        }
        return this.cache;
    }

}

export { RadialGradientStyle };
