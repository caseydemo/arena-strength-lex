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
    
    // element_id is the index of the element in the array
    id: number;
    title: string;
    image: ImageData;
    text: string;
}

// accordion props - is an array of objects that contain: title, text, id
export interface AccordionProps {        
    id: number;
    title: string;
    text: string;
}