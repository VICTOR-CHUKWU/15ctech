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
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-chrome" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M12 9h8.4" />
                                <path d="M14.598 13.5l-4.2 7.275" />
                                <path d="M9.402 13.5l-4.2 -7.275" />
                            </SVG>
                        );
                    case "apps":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M14 7l6 0" />
                                <path d="M17 4l0 6" />
                            </SVG>
                        );
                    case "assemble":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-assembly" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                                <path d="M15.5 9.422c.312 .18 .503 .515 .5 .876v3.277c0 .364 -.197 .7 -.515 .877l-3 1.922a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l3 -1.79c.311 -.174 .69 -.174 1 0l3 1.79h-.014z" />
                            </SVG>
                        );
                    case "coins":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coins" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
                                <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                                <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
                                <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                                <path d="M3 11c0 .888 .772 1.45 2 2" />
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
