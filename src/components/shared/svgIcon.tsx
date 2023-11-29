// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps, memo } from "react";

import { Icon, SVG } from ".";
import { SVGIconName, IconProps } from "@/types";

const _SVGIcon: FC<
    { name: SVGIconName } & IconProps &
    DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name, size, ...props }): JSX.Element => {
    return (
        <Icon {...props} name={name} size={size}>
            {(() => {
                switch (name) {
                    case "face-book":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-facebook"
                                height="56"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </SVG>
                        );
                    case "instagram":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </SVG>
                        );
                    case "chrome":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-chrome" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M12 9h8.4" />
                                <path d="M14.598 13.5l-4.2 7.275" />
                                <path d="M9.402 13.5l-4.2 -7.275" />
                            </SVG>
                        );
                    default:
                        return <></>;
                }
            })()}
        </Icon>
    );
};

export const SVGIcon = memo(_SVGIcon);
