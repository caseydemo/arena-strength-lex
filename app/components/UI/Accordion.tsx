import { AccordionProps } from "@/app/types";
import styles from "../../styles/accordion.module.css";
export default function Accordion(props: AccordionProps) {
    return (
        // TODO - make this an iterable component
        <div
            className={`accordion accordion-flush ${styles.block_level_accordion}`}
            id={props.id.toString()}
        >
            <div className='accordion-item'>
                <h2
                    className='accordion-header'
                    id='headingOne'
                >
                    <button
                        className='accordion-button btn-block'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#collapse-${props.id}`}
                        aria-expanded='false'
                        aria-controls={`collapse-${props.id}`}
                    >
                        {props.title}
                    </button>
                </h2>
                <div
                    id={`collapse-${props.id}`}
                    className='accordion-collapse collapse'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                >
                    <div className='accordion-body'>{props.text}</div>
                </div>
            </div>
        </div>
    );
}
