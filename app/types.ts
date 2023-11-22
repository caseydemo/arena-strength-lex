export interface ImageData {
    src: string;
    width: number;
    height: number;
    alt: string;
}
export interface ServiceItemProps {
    title: string;
    id: string;
    image: ImageData;
    text: string; 
}

// AboutItem must an object with the following properties
export interface AboutItemProps {
    title: string;
    image: ImageData;
    text: string;
}