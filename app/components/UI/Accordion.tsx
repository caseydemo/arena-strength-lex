import { AccordionProps } from "@/app/types";
export default function Accordion(props: AccordionProps) {
    return (
        // TODO - make this an iterable component
        <div
            className='accordion'
            id={props.id}
        >
            <div className='accordion-item'>
                <h2
                    className='accordion-header'
                    id='headingOne'
                >
                    <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                    >
                        {props.title}
                    </button>
                </h2>
                <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                >
                    <div className='accordion-body'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    );
}
