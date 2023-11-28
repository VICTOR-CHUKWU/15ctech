import { BlockquoteHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export type TAnimatTransitionName =
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeInUpBig'
    | 'fadeInDownBig'
    | 'fadeInLeftBig'
    | 'fadeInRightBig'
    | 'In'
    | 'InUp'
    | 'InDown'
    | 'InLeft'
    | 'InRight'
    | 'InUpBig'
    | 'InDownBig'
    | 'InLeftBig'
    | 'InRightBig'
    | 'scale'
    | 'scaleX'
    | 'scaleY';

export type TAs =
    | 'label'
    | 'strong'
    | 'address'
    | 'nav'
    | 'header'
    | 'main'
    | 'aside'
    | 'footer'
    | 'hr'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'div'
    | 'span'
    | 'p'
    | 'ul'
    | 'ol'
    | 'li'
    | 'section'
    | 'i'
    | 'small'
    | 'blockquote';

export interface ContainerProps
    extends Partial<
        DetailedHTMLProps<
            HTMLAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>,
            HTMLElement & HTMLParagraphElement & HTMLOListElement & HTMLUListElement & HTMLLIElement
        >
    > {
    as?: TAs;
    dynamic?: boolean;
    cRef?: React.RefObject<HTMLElement>
}