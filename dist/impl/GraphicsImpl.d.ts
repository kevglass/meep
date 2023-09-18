import { Bitmap, Graphics } from "..";
import { Font } from "../Font";
import { Offscreen } from "../Graphics";
export declare class GraphicsImpl implements Graphics {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mainCtx: CanvasRenderingContext2D;
    font: Font;
    fontSize: number;
    offscreen: Offscreen | null;
    constructor();
    getError(): string | undefined;
    renderStart(): void;
    renderEnd(): void;
    newResourceLoaded(): void;
    initResourceOnLoaded(): void;
    smooth(): void;
    getTransform(): DOMMatrix;
    clear(): void;
    clip(x: number, y: number, width: number, height: number): void;
    createOffscreen(): Offscreen;
    getOffscreen(): Offscreen | null;
    drawToOffscreen(screen: Offscreen | null): void;
    drawOffscreen(screen: Offscreen): void;
    drawScaledOffscreen(screen: Offscreen, x: number, y: number, width: number, height: number): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    fitScreen(pixelScale: number): void;
    setAlpha(alpha: number): void;
    copy(): Bitmap;
    getWidth(): number;
    getHeight(): number;
    push(): void;
    pop(): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    applyFont(): void;
    setFont(font: Font): void;
    setFontSize(size: number): void;
    getStringWidth(text: string): number;
    drawString(x: number, y: number, text: string, col: string): void;
    setComposite(name: string): void;
    drawCircle(x: number, y: number, radius: number, col: string, width: number): void;
    fillCircle(x: number, y: number, radius: number, col: string): void;
    fillRect(x: number, y: number, width: number, height: number, col: string): void;
    setLineDash(segments: number[]): void;
    drawLine(x1: number, y1: number, x2: number, y2: number, col: string, width?: number): void;
    drawBitmap(x: number, y: number, bitmap: Bitmap): void;
    drawScaledBitmap(x: number, y: number, width: number, height: number, bitmap: Bitmap): void;
}
