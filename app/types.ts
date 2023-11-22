export interface ImageData {
    src: string;
    width: number;
    height: number;
    alt: string;
}
export interface ServiceData {
    title: string;
    id: string;
    image: ImageData;
    text: string; 
}
