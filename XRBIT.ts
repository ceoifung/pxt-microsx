/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

/**
 * 自定义图形块
 */

/*****************************************************************************************************************************************
 *  传感器类 ***************************************************************************************************************************** 
 ****************************************************************************************************************************************/
// enum DHT11Type {
//     //% block="temperature(℃)" enumval=0
//     DHT11_temperature_C,

//     //% block="temperature(℉)" enumval=1
//     DHT11_temperature_F,

//     //% block="humidity(0~100)" enumval=2
//     DHT11_humidity,
// }

// //% color="#87CEEB" weight=24 icon="\uf1b6"
// namespace XRbit_传感器 {

//     export enum enVoice {
//         //% blockId="Voice" block="Voice"
//         Voice = 0,
//         //% blockId="NoVoice" block="NoVoice"
//         NoVoice = 1
//     }

//     export enum enIR {
//         //% blockId="Get" block="Get"
//         Get = 0,
//         //% blockId="NoVoice" block="NoVoice"
//         NoGet = 1
//     }

//     export enum enLight {
//         //% blockId="Open" block="Open"
//         Open = 0,
//         //% blockId="Close" block="Close"
//         Close = 1
//     }

//     export enum enBuzzer {
//         //% blockId="NoBeep" block="NoBeep"
//         NoBeep = 0,
//         //% blockId="Beep" block="Beep"
//         Beep
//     }
//     export enum irPin {
//         //% blockId="ir_Left" block="Left_IR_P12"
//         ir_Left = 1,
//         //% blockId="ir_Right" block="Right_IR_P14"
//         ir_Right = 2,
//         //% blockId="ir_Avoid" block="Avoid_IR_P13"
//         ir_Avoid = 3
//     }

//     //% blockId="XRbit_ReadDht11" block="read dht11 %dht11type| at pin %dht11pin"
//     //% color="#87CEEB"
//     //% weight=100
//     //% blockGap=10
//     export function ReadDht11(dht11type: DHT11Type, dht11pin: DigitalPin): number {
//         pins.digitalWritePin(dht11pin, 0)
//         basic.pause(18)
//         let i = pins.digitalReadPin(dht11pin)
//         pins.setPull(dht11pin, PinPullMode.PullUp);

//         while (pins.digitalReadPin(dht11pin) == 1);
//         while (pins.digitalReadPin(dht11pin) == 0);
//         while (pins.digitalReadPin(dht11pin) == 1);

//         let value = 0;
//         let counter = 0;

//         for (let i = 0; i <= 32 - 1; i++) {
//             while (pins.digitalReadPin(dht11pin) == 0);
//             counter = 0
//             while (pins.digitalReadPin(dht11pin) == 1) {
//                 counter += 1;
//             }
//             if (counter > 4) {
//                 value = value + (1 << (31 - i));
//             }
//         }

//         switch (dht11type) {
//             case 0:
//                 return (value & 0x0000ff00) >> 8
//             case 1:
//                 return ((value & 0x0000ff00) >> 8) * 9 / 5 + 32
//             case 2:
//                 return value >> 24
//             default:
//                 return 0
//         }
//     }


//     //% blockId=XRbit_Buzzer block="Buzzer|pin %pin|value %value"
//     //% weight=100
//     //% blockGap=10
//     //% color="#87CEEB"
//     //% value.min=0 value.max=1
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
//     export function Buzzer(pin: DigitalPin, value: enBuzzer): void {
//         pins.setPull(pin, PinPullMode.PullNone);
//         pins.digitalWritePin(pin, value);
//     }

//     //% blockId=XRbit_IR_Sensor block="IR_Sensor|pin %pin| |%value|obstacle"
//     //% weight=100
//     //% blockGap=10
//     //% color="#87CEEB"
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
//     export function IR_Sensor(pin: irPin, value: enIR): boolean {
//         let Pin: DigitalPin;
//         if (pin == 1) {
//             Pin = DigitalPin.P12;
//         }
//         if (pin == 2) {
//             Pin = DigitalPin.P14;
//         }
//         if (pin == 3) {
//             Pin = DigitalPin.P13;
//         }

//         pins.setPull(Pin, PinPullMode.PullUp);
//         if (pins.digitalReadPin(Pin) == value) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     //% blockId=XRbit_Car_Ligth block="Car_Ligth |pin %pin| |%value|"
//     //% weight=100
//     //% blockGap=10
//     //% color="#87CEEB"
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
//     export function Car_Ligth(pin: DigitalPin, value: enLight): boolean {
//         pins.setPull(pin, PinPullMode.PullUp);
//         if (pins.digitalReadPin(pin) == value) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     //% blockId=XRbit_ultrasonic block="Ultrasonic|Trig %Trig|Echo %Echo"
//     //% color="#87CEEB"
//     //% weight=100
//     //% blockGap=10
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
//     export function Ultrasonic(Trig: DigitalPin, Echo: DigitalPin): number {
//         // send pulse
//         let list: Array<number> = [0, 0, 0, 0, 0];
//         for (let i = 0; i < 5; i++) {
//             pins.setPull(Trig, PinPullMode.PullNone);
//             pins.digitalWritePin(Trig, 0);
//             control.waitMicros(2);
//             pins.digitalWritePin(Trig, 1);
//             control.waitMicros(15);
//             pins.digitalWritePin(Trig, 0);

//             let d = pins.pulseIn(Echo, PulseValue.High, 43200);
//             list[i] = Math.floor(d / 40)
//         }
//         list.sort();
//         let length = (list[1] + list[2] + list[3]) / 3;
//         return Math.floor(length);
//     }
// }





// /*****************************************************************************************************************************************
//  *  彩灯条类 ***************************************************************************************************************************** 
//  ****************************************************************************************************************************************/
// /**
//  * Well known colors for a NeoPixel strip
//  */
// enum NeoPixelColors {
//     //% block=red
//     Red = 0xFF0000,
//     //% block=orange
//     Orange = 0xFFA500,
//     //% block=yellow
//     Yellow = 0xFFFF00,
//     //% block=green
//     Green = 0x00FF00,
//     //% block=blue
//     Blue = 0x0000FF,
//     //% block=indigo
//     Indigo = 0x4b0082,
//     //% block=violet
//     Violet = 0x8a2be2,
//     //% block=purple
//     Purple = 0xFF00FF,
//     //% block=white
//     White = 0xFFFFFF
// }

// /**
//  * Different modes for RGB or RGB+W NeoPixel strips
//  */
// enum NeoPixelMode {
//     //% block="RGB (GRB format)"
//     RGB = 0,
//     //% block="RGB+W"
//     RGBW = 1,
//     //% block="RGB (RGB format)"
//     RGB_RGB = 2
// }

// /**
//  * Functions to operate NeoPixel strips.
//  */
// //% weight=5 color=#2699BF icon="\uf110"
// namespace neopixel {
//     //% shim=sendBufferAsm
//     //% parts="neopixel"
//     function sendBuffer(buf: Buffer, pin: DigitalPin) {
//     }

//     /**
//      * A NeoPixel strip
//      */
//     export class Strip {
//         buf: Buffer;
//         pin: DigitalPin;
//         // TODO: encode as bytes instead of 32bit
//         brightness: number;
//         start: number; // start offset in LED strip
//         _length: number; // number of LEDs
//         _mode: NeoPixelMode;

//         /**
//          * Shows all LEDs to a given color (range 0-255 for r, g, b). 
//          * @param rgb RGB color of the LED
//          */
//         //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors" 
//         //% weight=85 blockGap=8
//         //% parts="neopixel"
//         showColor(rgb: number) {
//             this.setAllRGB(rgb);
//             this.show();
//         }

//         /**
//          * Shows a rainbow pattern on all LEDs. 
//          * @param startHue the start hue value for the rainbow, eg: 1
//          * @param endHue the end hue value for the rainbow, eg: 360
//          */
//         //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue" 
//         //% weight=85 blockGap=8
//         //% parts="neopixel"
//         showRainbow(startHue: number = 1, endHue: number = 360) {
//             let start = neopixel.hsl(startHue, 100, 50);
//             let end = neopixel.hsl(endHue, 100, 50);
//             let colors = neopixel.interpolateHSL(start, end, this._length, HueInterpolationDirection.Clockwise);
//             for (let i = 0; i < colors.length; i++) {
//                 let hsl = colors[i];
//                 let rgb = hsl.toRGB();
//                 this.setPixelColor(i, rgb)
//             }
//             this.show();
//         }

//         /**
//          * Displays a vertical bar graph based on the `value` and `high` value.
//          * If `high` is 0, the chart gets adjusted automatically.
//          * @param value current value to plot
//          * @param high maximum value, eg: 255
//          */
//         //% weight=84
//         //% blockId=neopixel_show_bar_graph block="%strip|show bar graph of %value |up to %high" icon="\uf080" blockExternalInputs=true
//         //% parts="neopixel"
//         showBarGraph(value: number, high: number): void {
//             if (high <= 0) {
//                 this.clear();
//                 this.setPixelColor(0, NeoPixelColors.Yellow);
//                 this.show();
//                 return;
//             }

//             value = Math.abs(value);
//             const n = this._length;
//             const n1 = n - 1;
//             let v = (value * n) / high;
//             if (v == 0) {
//                 this.setPixelColor(0, 0x666600);
//                 for (let i = 1; i < n; ++i)
//                     this.setPixelColor(i, 0);
//             } else {
//                 for (let i = 0; i < n; ++i) {
//                     if (i <= v) {
//                         let b = i * 255 / n1;
//                         this.setPixelColor(i, neopixel.rgb(b, 0, 255 - b));
//                     }
//                     else this.setPixelColor(i, 0);
//                 }
//             }
//             this.show();
//         }

//         /**
//          * Set LED to a given color (range 0-255 for r, g, b). 
//          * You need to call ``show`` to make the changes visible.
//          * @param pixeloffset position of the NeoPixel in the strip
//          * @param rgb RGB color of the LED
//          */
//         //% blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors" 
//         //% blockGap=8
//         //% weight=80
//         //% parts="neopixel" advanced=true
//         setPixelColor(pixeloffset: number, rgb: number): void {
//             this.setPixelRGB(pixeloffset, rgb);
//         }

//         /**
//          * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
//          * @param pixeloffset position of the LED in the strip
//          * @param white brightness of the white LED
//          */
//         //% blockId="neopixel_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white" 
//         //% blockGap=8
//         //% weight=80
//         //% parts="neopixel" advanced=true
//         setPixelWhiteLED(pixeloffset: number, white: number): void {
//             if (this._mode === NeoPixelMode.RGBW) {
//                 this.setPixelW(pixeloffset, white);
//             }
//         }

//         /**
//          * Send all the changes to the strip.
//          */
//         //% blockId="neopixel_show" block="%strip|show" blockGap=8
//         //% weight=79
//         //% parts="neopixel"
//         show() {
//             sendBuffer(this.buf, this.pin);
//         }

//         /**
//          * Turn off all LEDs.
//          * You need to call ``show`` to make the changes visible.
//          */
//         //% blockId="neopixel_clear" block="%strip|clear"
//         //% weight=76
//         //% parts="neopixel"
//         clear(): void {
//             const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
//             this.buf.fill(0, this.start * stride, this._length * stride);
//         }

//         /**
//          * Gets the number of pixels declared on the strip
//          */
//         //% blockId="neopixel_length" block="%strip|length" blockGap=8
//         //% weight=60 advanced=true
//         length() {
//             return this._length;
//         }

//         /**
//          * Set the brightness of the strip. This flag only applies to future operation.
//          * @param brightness a measure of LED brightness in 0-255. eg: 255
//          */
//         //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
//         //% weight=59
//         //% parts="neopixel" advanced=true
//         setBrightness(brightness: number): void {
//             this.brightness = brightness & 0xff;
//         }

//         /**
//          * Apply brightness to current colors using a quadratic easing function.
//          **/
//         //% blockId="neopixel_each_brightness" block="%strip|ease brightness" blockGap=8
//         //% weight=58
//         //% parts="neopixel" advanced=true
//         easeBrightness(): void {
//             const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
//             const br = this.brightness;
//             const buf = this.buf;
//             const end = this.start + this._length;
//             const mid = this._length / 2;
//             for (let i = this.start; i < end; ++i) {
//                 const k = i - this.start;
//                 const ledoffset = i * stride;
//                 const br = k > mid ? 255 * (this._length - 1 - k) * (this._length - 1 - k) / (mid * mid) : 255 * k * k / (mid * mid);
//                 serial.writeLine(k + ":" + br);
//                 const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
//                 const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
//                 const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
//                 if (stride == 4) {
//                     const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
//                 }
//             }
//         }

//         /** 
//          * Create a range of LEDs.
//          * @param start offset in the LED strip to start the range
//          * @param length number of LEDs in the range. eg: 4
//          */
//         //% weight=89
//         //% blockId="neopixel_range" block="%strip|range from %start|with %length|leds"
//         //% parts="neopixel"
//         range(start: number, length: number): Strip {
//             let strip = new Strip();
//             strip.buf = this.buf;
//             strip.pin = this.pin;
//             strip.brightness = this.brightness;
//             strip.start = this.start + Math.clamp(0, this._length - 1, start);
//             strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
//             return strip;
//         }

//         /**
//          * Shift LEDs forward and clear with zeros.
//          * You need to call ``show`` to make the changes visible.
//          * @param offset number of pixels to shift forward, eg: 1
//          */
//         //% blockId="neopixel_shift" block="%strip|shift pixels by %offset" blockGap=8
//         //% weight=40
//         //% parts="neopixel"
//         shift(offset: number = 1): void {
//             const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
//             this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
//         }

//         /**
//          * Rotate LEDs forward.
//          * You need to call ``show`` to make the changes visible.
//          * @param offset number of pixels to rotate forward, eg: 1
//          */
//         //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset" blockGap=8
//         //% weight=39
//         //% parts="neopixel"
//         rotate(offset: number = 1): void {
//             const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
//             this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
//         }

//         /**
//          * Set the pin where the neopixel is connected, defaults to P0.
//          */
//         //% weight=10
//         //% parts="neopixel" advanced=true
//         setPin(pin: DigitalPin): void {
//             this.pin = pin;
//             pins.digitalWritePin(this.pin, 0);
//             // don't yield to avoid races on initialization
//         }

//         private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
//             if (this._mode === NeoPixelMode.RGB_RGB) {
//                 this.buf[offset + 0] = red;
//                 this.buf[offset + 1] = green;
//             } else {
//                 this.buf[offset + 0] = green;
//                 this.buf[offset + 1] = red;
//             }
//             this.buf[offset + 2] = blue;
//         }

//         private setAllRGB(rgb: number) {
//             let red = unpackR(rgb);
//             let green = unpackG(rgb);
//             let blue = unpackB(rgb);

//             const br = this.brightness;
//             if (br < 255) {
//                 red = (red * br) >> 8;
//                 green = (green * br) >> 8;
//                 blue = (blue * br) >> 8;
//             }
//             const end = this.start + this._length;
//             const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
//             for (let i = this.start; i < end; ++i) {
//                 this.setBufferRGB(i * stride, red, green, blue)
//             }
//         }
//         private setAllW(white: number) {
//             if (this._mode !== NeoPixelMode.RGBW)
//                 return;

//             let br = this.brightness;
//             if (br < 255) {
//                 white = (white * br) >> 8;
//             }
//             let buf = this.buf;
//             let end = this.start + this._length;
//             for (let i = this.start; i < end; ++i) {
//                 let ledoffset = i * 4;
//                 buf[ledoffset + 3] = white;
//             }
//         }
//         private setPixelRGB(pixeloffset: number, rgb: number): void {
//             if (pixeloffset < 0
//                 || pixeloffset >= this._length)
//                 return;

//             let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
//             pixeloffset = (pixeloffset + this.start) * stride;

//             let red = unpackR(rgb);
//             let green = unpackG(rgb);
//             let blue = unpackB(rgb);

//             let br = this.brightness;
//             if (br < 255) {
//                 red = (red * br) >> 8;
//                 green = (green * br) >> 8;
//                 blue = (blue * br) >> 8;
//             }
//             this.setBufferRGB(pixeloffset, red, green, blue)
//         }
//         private setPixelW(pixeloffset: number, white: number): void {
//             if (this._mode !== NeoPixelMode.RGBW)
//                 return;

//             if (pixeloffset < 0
//                 || pixeloffset >= this._length)
//                 return;

//             pixeloffset = (pixeloffset + this.start) * 4;

//             let br = this.brightness;
//             if (br < 255) {
//                 white = (white * br) >> 8;
//             }
//             let buf = this.buf;
//             buf[pixeloffset + 3] = white;
//         }
//     }

//     /**
//      * Create a new NeoPixel driver for `numleds` LEDs.
//      * @param pin the pin where the neopixel is connected.
//      * @param numleds number of leds in the strip, eg: 24,30,60,64
//      */
//     //% blockId="neopixel_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
//     //% weight=90 blockGap=8
//     //% parts="neopixel"
//     //% trackArgs=0,2
//     export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
//         let strip = new Strip();
//         let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
//         strip.buf = pins.createBuffer(numleds * stride);
//         strip.start = 0;
//         strip._length = numleds;
//         strip._mode = mode;
//         strip.setBrightness(255)
//         strip.setPin(pin)
//         return strip;
//     }

//     /**
//      * Converts red, green, blue channels into a RGB color
//      * @param red value of the red channel between 0 and 255. eg: 255
//      * @param green value of the green channel between 0 and 255. eg: 255
//      * @param blue value of the blue channel between 0 and 255. eg: 255
//      */
//     //% weight=1
//     //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
//     //% advanced=true
//     export function rgb(red: number, green: number, blue: number): number {
//         return packRGB(red, green, blue);
//     }

//     /**
//      * Gets the RGB value of a known color
//     */
//     //% weight=2 blockGap=8
//     //% blockId="neopixel_colors" block="%color"
//     //% advanced=true
//     export function colors(color: NeoPixelColors): number {
//         return color;
//     }

//     function packRGB(a: number, b: number, c: number): number {
//         return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
//     }
//     function unpackR(rgb: number): number {
//         let r = (rgb >> 16) & 0xFF;
//         return r;
//     }
//     function unpackG(rgb: number): number {
//         let g = (rgb >> 8) & 0xFF;
//         return g;
//     }
//     function unpackB(rgb: number): number {
//         let b = (rgb) & 0xFF;
//         return b;
//     }

//     /**
//      * A HSL (hue, saturation, luminosity) format color
//      */
//     export class HSL {
//         h: number;
//         s: number;
//         l: number;
//         constructor(h: number, s: number, l: number) {
//             this.h = h % 360;
//             this.s = Math.clamp(0, 99, s);
//             this.l = Math.clamp(0, 99, l);
//         }

//         /**
//          * Shifts the hue of a HSL color
//          * @param hsl the HSL (hue, saturation, lightness) color
//          * @param offset value to shift the hue channel by; hue is between 0 and 360. eg: 10
//          */
//         //% weight=1
//         //% blockId="neopixel_rotate_hue" block="shift %hsl| hue by %offset"
//         //% advanced=true
//         rotateHue(offset: number): void {
//             this.h = (this.h + offset) % 360;
//         }

//         /**
//          * Converts from an HSL (hue, saturation, luminosity) format color to an RGB (red, 
//          * green, blue) format color. Input ranges h between [0,360], s between 
//          * [0, 100], and l between [0, 100], and output r, g, b ranges between [0,255]
//         */
//         //% weight=2 blockGap=8
//         //% blockId="neopixel_hsl_to_rgb" block="%hsl| to RGB"
//         //% advanced=true
//         toRGB(): number {
//             //reference: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL
//             let h = this.h;
//             let s = this.s;
//             let l = this.l;
//             let c = (((100 - Math.abs(2 * l - 100)) * s) << 8) / 10000; //chroma, [0,255]
//             let h1 = h / 60;//[0,6]
//             let h2 = (h - h1 * 60) * 256 / 60;//[0,255]
//             let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
//             let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
//             let r$: number;
//             let g$: number;
//             let b$: number;
//             if (h1 == 0) {
//                 r$ = c; g$ = x; b$ = 0;
//             } else if (h1 == 1) {
//                 r$ = x; g$ = c; b$ = 0;
//             } else if (h1 == 2) {
//                 r$ = 0; g$ = c; b$ = x;
//             } else if (h1 == 3) {
//                 r$ = 0; g$ = x; b$ = c;
//             } else if (h1 == 4) {
//                 r$ = x; g$ = 0; b$ = c;
//             } else if (h1 == 5) {
//                 r$ = c; g$ = 0; b$ = x;
//             }
//             let m = ((l * 2 << 8) / 100 - c) / 2;
//             let r = r$ + m;
//             let g = g$ + m;
//             let b = b$ + m;
//             return packRGB(r, g, b);
//         }
//     }

//     /**
//      * Creates a HSL (hue, saturation, luminosity) color
//      * @param hue value of the hue channel between 0 and 360. eg: 360
//      * @param sat value of the saturation channel between 0 and 100. eg: 100
//      * @param lum value of the luminosity channel between 0 and 100. eg: 50
//      */
//     //% weight=1
//     //% blockId="neopixel_hsl" block="hue %hue|sat %sat|lum %lum"
//     //% advanced=true
//     export function hsl(hue: number, sat: number, lum: number): HSL {
//         return new HSL(hue, sat, lum);
//     }

//     export enum HueInterpolationDirection {
//         Clockwise,
//         CounterClockwise,
//         Shortest
//     }

//     /**
//      * Interpolates between two HSL colors
//      * @param startColor the start HSL color
//      * @param endColor the end HSL color
//      * @param steps the number of steps to interpolate for. Note that if steps 
//      *  is 1, the color midway between the start and end color will be returned.
//      * @param direction the direction around the color wheel the hue should be interpolated.
//      */
//     //% parts="neopixel"
//     //% advanced=true
//     export function interpolateHSL(startColor: HSL, endColor: HSL, steps: number, direction: HueInterpolationDirection): HSL[] {
//         if (steps <= 0)
//             steps = 1;

//         //hue
//         let h1 = startColor.h;
//         let h2 = endColor.h;
//         let hDistCW = ((h2 + 360) - h1) % 360;
//         let hStepCW = (hDistCW * 100) / steps;
//         let hDistCCW = ((h1 + 360) - h2) % 360;
//         let hStepCCW = -(hDistCCW * 100) / steps
//         let hStep: number;
//         if (direction === HueInterpolationDirection.Clockwise) {
//             hStep = hStepCW;
//         } else if (direction === HueInterpolationDirection.CounterClockwise) {
//             hStep = hStepCCW;
//         } else {
//             hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
//         }
//         let h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

//         //sat
//         let s1 = startColor.s;
//         let s2 = endColor.s;
//         let sDist = s2 - s1;
//         let sStep = sDist / steps;
//         let s1_100 = s1 * 100;

//         //lum
//         let l1 = startColor.l;
//         let l2 = endColor.l;
//         let lDist = l2 - l1;
//         let lStep = lDist / steps;
//         let l1_100 = l1 * 100

//         //interpolate
//         let colors: HSL[] = [];
//         if (steps === 1) {
//             colors.push(hsl(h1 + hStep, s1 + sStep, l1 + lStep));
//         } else {
//             colors.push(startColor);
//             for (let i = 1; i < steps - 1; i++) {
//                 let h = (h1_100 + i * hStep) / 100 + 360;
//                 let s = (s1_100 + i * sStep) / 100;
//                 let l = (l1_100 + i * lStep) / 100;
//                 colors.push(hsl(h, s, l));
//             }
//             colors.push(endColor);
//         }
//         return colors;
//     }
// }








// /*****************************************************************************************************************************************
//  *  小车类 ***************************************************************************************************************************** 
//  ****************************************************************************************************************************************/

// //% weight=5 color=#9900CC icon="\uf1b9"
// namespace XRbit_小车 {
//     const XRBIT_ADDRESS = 0x17
//     let xrStrip: neopixel.Strip;
//     export enum enMotor {
//         //% blockId="leftMotor" block="leftMotor"
//         leftMotor = 0x14,
//         //% blockId="rightMotor" block="rightMotor"
//         rightMotor = 0x15
//     }

//     export enum IRValue {
//         Power = 0x45,
//         Menu = 0x47,
//         Test = 0x44,
//         Plus = 0x40,
//         Return = 0x43,
//         Left = 0x07,
//         Play = 0x15,
//         Right = 0x09,
//         Num0 = 0x16,
//         Minus = 0x19,
//         Cancle = 0x0D,
//         Num1 = 0x0C,
//         Num2 = 0x18,
//         Num3 = 0x5E,
//         Num4 = 0x08,
//         Num5 = 0x1C,
//         Num6 = 0x5A,
//         Num7 = 0x42,
//         Num8 = 0x52,
//         Num9 = 0x4A

//     }

//     function i2cwrite(addr: number, reg: number, value: number): void {
//         let buf = pins.createBuffer(2);
//         buf[0] = reg;
//         buf[1] = value;
//         pins.i2cWriteBuffer(addr, buf);
//     }

//     function i2cread(addr: number, reg: number): number {
//         pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
//         let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
//         return val;
//     }
//     //% blockId=XRbit_SetMotor block="SetMotor|Motor %Motor|Speed %Speed"
//     //% weight=94
//     //% blockGap=10
//     //% color="#0fbc11"
//     //% Speed.min=-100 Speed.max=100
//     export function SetMotor(Motor: enMotor, Speed: number): void {
//         let buf1 = pins.createBuffer(2);
//         let buf2 = pins.createBuffer(2);
//         buf1[0] = 0xFF;
//         buf1[1] = Motor;
//         buf2[0] = Speed + 100;
//         buf2[1] = 0xFF;
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf1);
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf2);
//     }

//     //% blockId=XRBIT_SetServoAngle block="SetServoAngle|Num %Num|Angle %Angle"
//     //% weight=94
//     //% blockGap=10
//     //% color="#0fbc11"
//     //% Num.min=1 Num.max=8 Angle.min=0 Angle.max=180
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
//     export function SetServoAngle(Num: number, Angle: number): void {
//         let buf1 = pins.createBuffer(2);
//         let buf2 = pins.createBuffer(2);
//         buf1[0] = 0xFF;
//         buf1[1] = Num;
//         buf2[0] = Angle;
//         buf2[1] = 0xFF;
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf1);
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf2);
//     }

//     //% blockId=XRBIT_ReSetServoAngle block="ReSetServoAngle"
//     //% weight=94
//     //% blockGap=10
//     //% color="#0fbc11"
//     export function ReSetServoAngle(): void {
//         let buf1 = pins.createBuffer(2);
//         let buf2 = pins.createBuffer(2);
//         buf1[0] = 0xFF;
//         buf1[1] = 0x00;
//         buf2[0] = 0x01;
//         buf2[1] = 0xFF;
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf1);
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf2);
//     }
//     //% blockId=XRBIT_SaveServoAngle block="SaveServoAngle"
//     //% weight=94
//     //% blockGap=10
//     //% color="#0fbc11"
//     export function SaveServoAngle(): void {
//         let buf1 = pins.createBuffer(2);
//         let buf2 = pins.createBuffer(2);
//         buf1[0] = 0xFF;
//         buf1[1] = 0x11;
//         buf2[0] = 0x01;
//         buf2[1] = 0xFF;
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf1);
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, buf2);
//     }

//     //% blockId=XRit_RGB_Car_Program block="RGB_Car_Program"
//     //% weight=99
//     //% blockGap=10
//     //% color="#0fbc11"
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
//     export function RGB_Car_Program(): neopixel.Strip {

//         if (!xrStrip) {
//             xrStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB);
//         }
//         return xrStrip;
//     }

//     //% blockId=irremote_on_pressed block = "irremote_on_pressed on |%IRValue| button pressed"
//     //% color="#0fbc11"
//     //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
//     export function irremote_on_pressed(IRValue: IRValue): boolean {
//         let irread: boolean = false;
//         let IRreaddat = 0x00;
//         let reg = pins.createBuffer(1);
//         reg[0] = 0x16;
//         pins.i2cWriteBuffer(XRBIT_ADDRESS, reg);
//         IRreaddat = pins.i2cReadNumber(XRBIT_ADDRESS, NumberFormat.UInt8BE);
//         if (IRreaddat == IRValue) {
//             irread = true;
//         }
//         else {
//             irread = false;
//         }
//         return irread;
//     }
// }

/*****************************************************************************************************************************************
 *  四足狗类 ***************************************************************************************************************************** 
 ****************************************************************************************************************************************/


//% weight=5 color=#22FFAA icon="\uf1b9"
namespace XRbit_DOG {
    // let xrStrip: neopixel.Strip;

    const movements_json = {
        ACTION_STOP: "FF37000000000000000000000000FF",
        ACTION_FORWARD: "FF37010000000000000000000000FF",
        ACTION_BACKWARD: "FF37020000000000000000000000FF",
        ACTION_TURN_LEFT: "FF37030000000000000000000000FF",
        ACTION_TURN_RIGHT: "FF37040000000000000000000000FF",
        ACTION_SHIFT_LEFT: "FF37050000000000000000000000FF",
        ACTION_SHIFT_RIGHT: "FF37060000000000000000000000FF",
        ACTION_LOOK_DOWN: "FF37080000000000000000000000FF",
        ACTION_LOOK_UP: "FF37070000000000000000000000FF",
        ACTION_TILT_LEFT: "FF37090000000000000000000000FF",
        ACTION_TILT_RIGHT: "FF370a0000000000000000000000FF",
        ACTION_STEPPING: "FF370b0000000000000000000000FF",

        ACTION_HELLO: "FF42010000000000000000000000FF",
        ACTION_BYE: "FF42020000000000000000000000FF",
        ACTION_DEFENCE: "FF42030000000000000000000000FF",
        ACTION_CAT: "FF42040000000000000000000000FF",
        ACTION_SURRENDER: "FF42050000000000000000000000FF",
        ACTION_PROVOCATION: "FF42060000000000000000000000FF",
        ACTION_STRETCH: "FF42070000000000000000000000FF",
        ACTION_PISSING: "FF42080000000000000000000000FF",
        ACTION_JUMP: "FF42090000000000000000000000FF",
        ACTION_PLAY_DEAD: "FF420a0000000000000000000000FF",

        // ACTION_TEMPLATE: "FF420b0000000000000000000000FF",
        GAIT_PACE: "FF45000000000000000000000000FF",
        GAIT_WALK: "FF45010000000000000000000000FF",
        GAIT_TROT: "FF45020000000000000000000000FF",
        GAIT_HOP: "FF45030000000000000000000000FF",
        GAIT_CLIMB: "FF45040000000000000000000000FF"
    }

    const LEG_INDEX = {
        LEFT_FRONT_LEG: 0,
        RIGHT_FRONT_LEG: 3,
        LEFT_REAR_LEG: 6,
        RIGHT_REAR_LEG: 9,
    }

    const JOINT_INDEX = {
        BODY_JOINT: 1,
        MIDDLE_JOINT: 2,
        FOOT_JOINT: 3,
    }



    export enum enDogmovement {
        //% blockId="ACTION_STOP" block="ACTION_STOP"
        ACTION_STOP,
        //% blockId="ACTION_FORWARD" block="ACTION_FORWARD"
        ACTION_FORWARD,
        //% blockId="ACTION_BACKWARD" block="ACTION_BACKWARD"
        ACTION_BACKWARD,
        //% blockId="ACTION_TURN_LEFT" block="ACTION_TURN_LEFT"
        ACTION_TURN_LEFT,
        //% blockId="ACTION_TURN_RIGHT" block="ACTION_TURN_RIGHT"
        ACTION_TURN_RIGHT,
        //% blockId="ACTION_SHIFT_LEFT" block="ACTION_SHIFT_LEFT"
        ACTION_SHIFT_LEFT,
        //% blockId="ACTION_SHIFT_RIGHT" block="ACTION_SHIFT_RIGHT"
        ACTION_SHIFT_RIGHT,
        //% blockId="ACTION_LOOK_DOWN" block="ACTION_LOOK_DOWN"
        ACTION_LOOK_DOWN,
        //% blockId="ACTION_LOOK_UP" block="ACTION_LOOK_UP"
        ACTION_LOOK_UP,
        //% blockId="ACTION_TILT_LEFT" block="ACTION_TILT_LEFT"
        ACTION_TILT_LEFT,
        //% blockId="ACTION_TILT_RIGHT" block="ACTION_TILT_RIGHT"
        ACTION_TILT_RIGHT,
        //% blockId="ACTION_STEPPING" block="ACTION_STEPPING"
        ACTION_STEPPING
    }

    export enum enDogactions {
        //% blockId="ACTION_HELLO" block="ACTION_HELLO"
        ACTION_HELLO,
        //% blockId="ACTION_BYE" block="ACTION_BYE"
        ACTION_BYE,
        //% blockId="ACTION_DEFENCE" block="ACTION_DEFENCE"
        ACTION_DEFENCE,
        //% blockId="ACTION_CAT" block="ACTION_CAT"
        ACTION_CAT,
        //% blockId="ACTION_SURRENDER" block="ACTION_SURRENDER"
        ACTION_SURRENDER,
        //% blockId="ACTION_PROVOCATION" block="ACTION_PROVOCATION"
        ACTION_PROVOCATION,
        //% blockId="ACTION_STRETCH" block="ACTION_STRETCH"
        ACTION_STRETCH,
        //% blockId="ACTION_PISSING" block="ACTION_PISSING"
        ACTION_PISSING,
        //% blockId="ACTION_JUMP" block="ACTION_JUMP"
        ACTION_JUMP,
        //% blockId="ACTION_PLAY_DEAD" block="ACTION_PLAY_DEAD"
        ACTION_PLAY_DEAD
    }

    export enum enDogWalkGait {
        //% blockId="GAIT_PACE" block="GAIT_PACE"
        GAIT_PACE,
        //% blockId="GAIT_WALK" block="GAIT_WALK"
        GAIT_WALK,
        //% blockId="GAIT_TROT" block="GAIT_TROT"
        GAIT_TROT,
        //% blockId="GAIT_HOP" block="GAIT_HOP"
        GAIT_HOP,
        //% blockId="GAIT_CLIMB" block="GAIT_CLIMB"
        GAIT_CLIMB
    }

    export enum enDogLed {
        //% blockId="ACTION_TURN_ON" block="ACTION_TURN_ON"
        ACTION_TURN_ON,
        //% blockId="ACTION_TURN_OFF" block="ACTION_TURN_OFF"
        ACTION_TURN_OFF
    }

    export enum leg_options {
        //% blockId="LEFT_FRONT_LEG" block="LEFT_FRONT_LEG"
        LEFT_FRONT_LEG,
        //% blockId="RIGHT_FRONT_LEG" block="RIGHT_FRONT_LEG"
        RIGHT_FRONT_LEG,
        //% blockId="LEFT_REAR_LEG" block="LEFT_REAR_LEG"
        LEFT_REAR_LEG,
        //% blockId="RIGHT_REAR_LEG" block="RIGHT_REAR_LEG"
        RIGHT_REAR_LEG
    }

    export enum joint_options {
        //% blockId="BODY_JOINT" block="BODY_JOINT"
        BODY_JOINT,
        //% blockId="MIDDLE_JOINT" block="MIDDLE_JOINT"
        MIDDLE_JOINT,
        //% blockId="FOOT_JOINT" block="FOOT_JOINT"
        FOOT_JOINT
    }



    //% blockId=XRBIT_UartInit block="UartInit"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function UartInit(): void {
        serial.redirect(
            SerialPin.P13,
            SerialPin.P14,
            BaudRate.BaudRate115200
        )
    }

    //% blockId=XRBIT_corgi_movement block="corgi_movement|movement %movement"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function corgi_movement(action: enDogmovement): void {
        switch (action) {
            case enDogmovement.ACTION_STOP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_FORWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_FORWARD));
                break;
            case enDogmovement.ACTION_BACKWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIACTION_BACKWARDT_PACE));
                break;
            case enDogmovement.ACTION_TURN_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_LEFT));
                break;
            case enDogmovement.ACTION_TURN_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_RIGHT));
                break;
            case enDogmovement.ACTION_SHIFT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_LEFT));
                break;
            case enDogmovement.ACTION_SHIFT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_RIGHT));
                break;
            case enDogmovement.ACTION_LOOK_DOWN:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_DOWN));
                break;
            case enDogmovement.ACTION_LOOK_UP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_UP));
                break;
            case enDogmovement.ACTION_TILT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_LEFT));
                break;
            case enDogmovement.ACTION_TILT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_RIGHT));
                break;
            case enDogmovement.ACTION_STEPPING:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STEPPING));
                break;
        }
    }

    //% blockId=XRBIT_corgi_movement_ms block="corgi_movement_ms|movement %movement|%time"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function corgi_movement_ms(action: enDogmovement, time: number): void {
        switch (action) {
            case enDogmovement.ACTION_STOP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_FORWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_FORWARD));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_BACKWARD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_BACKWARD));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TURN_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_LEFT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TURN_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TURN_RIGHT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_SHIFT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_LEFT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_SHIFT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SHIFT_RIGHT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_LOOK_DOWN:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_DOWN));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_LOOK_UP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_LOOK_UP));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TILT_LEFT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_LEFT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_TILT_RIGHT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_TILT_RIGHT));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
            case enDogmovement.ACTION_STEPPING:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STEPPING));
                basic.pause(time);
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STOP));
                break;
        }
    }

    //% blockId=XRBIT_corgi_actions block="corgi_actions|action %action"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function corgi_actions(action: enDogactions): void {
        switch (action) {
            case enDogactions.ACTION_HELLO:
                // const d = movements_json.ACTION_HELLO;
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_HELLO));
                break;
            case enDogactions.ACTION_BYE:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_BYE));
                break;
            case enDogactions.ACTION_DEFENCE:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_DEFENCE));
                break;
            case enDogactions.ACTION_CAT:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_CAT));
                break;
            case enDogactions.ACTION_SURRENDER:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_SURRENDER));
                break;
            case enDogactions.ACTION_PROVOCATION:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_PROVOCATION));
                break;
            case enDogactions.ACTION_STRETCH:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_STRETCH));
                break;
            case enDogactions.ACTION_PISSING:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_PISSING));
                break;
            case enDogactions.ACTION_JUMP:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_JUMP));
                break;
            case enDogactions.ACTION_PLAY_DEAD:
                serial.writeBuffer(Buffer.fromHex(movements_json.ACTION_PLAY_DEAD));
                break;
        }
    }

    //% blockId=XRBIT_corgi_walk_gait block="corgi_walk_gait|action %action"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function corgi_walk_gait(action: enDogWalkGait): void {
        switch (action) {
            case enDogWalkGait.GAIT_PACE:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_PACE));
                break;
            case enDogWalkGait.GAIT_WALK:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_WALK));
                break;
            case enDogWalkGait.GAIT_TROT:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_TROT));
                break;
            case enDogWalkGait.GAIT_HOP:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_HOP));
                break;
            case enDogWalkGait.GAIT_CLIMB:
                serial.writeBuffer(Buffer.fromHex(movements_json.GAIT_CLIMB));
                break;
        }
    }

    //% blockId=corgi_led_control block="corgi_led_control|action %action"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function corgi_led_control(action: enDogLed): void {
        switch (action) {
            case enDogLed.ACTION_TURN_OFF:
                pins.digitalWritePin(DigitalPin.P12, 0);
                break;
            case enDogLed.ACTION_TURN_ON:
                pins.digitalWritePin(DigitalPin.P12, 1);
                break;
        }
    }

    //% blockId=corgi_forward_kinematics block="corgi_forward_kinematics|leg %leg|joint %joint angle %angle"
    //% weight=94
    //% blockGap=10
    //% color="#22FFAA"
    export function corgi_forward_kinematics(leg: leg_options, joint: joint_options, angle: number): void {
        const ACTION_TEMPLATE = [0xFF, 0x42, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF];

        if (parseInt(angle) > 180) {
            angle = 180
        }
        var leg_num = 0;
        var joint_num = 0;
        switch (leg) {
            case leg_options.LEFT_FRONT_LEG:
                leg_num = LEG_INDEX.LEFT_FRONT_LEG;
                break;
            case leg_options.RIGHT_FRONT_LEG:
                leg_num = LEG_INDEX.RIGHT_FRONT_LEG;
                break;
            case leg_options.LEFT_REAR_LEG:
                leg_num = LEG_INDEX.LEFT_REAR_LEG;
                break;
            case leg_options.RIGHT_REAR_LEG:
                leg_num = LEG_INDEX.RIGHT_REAR_LEG;
                break;
        }
        switch (joint) {
            case joint_options.BODY_JOINT:
                joint_num = JOINT_INDEX.BODY_JOINT;
                break;
            case joint_options.MIDDLE_JOINT:
                joint_num = JOINT_INDEX.MIDDLE_JOINT;
                break;
            case joint_options.FOOT_JOINT:
                joint_num = JOINT_INDEX.FOOT_JOINT;
                break;
        }

        ACTION_TEMPLATE[1] = 0x41;
        ACTION_TEMPLATE[2] = (parseInt(leg_num) + parseInt(joint_num));
        ACTION_TEMPLATE[3] = angle;

        serial.writeBuffer(Buffer.fromHex(ACTION_TEMPLATE));
    }
}