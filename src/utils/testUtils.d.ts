import { FunctionComponent, ReactElement } from "react";
import { RenderOptions, RenderResult } from "@testing-library/react";
declare const Providers: FunctionComponent;
declare const customRender: (ui: ReactElement, options?: Omit<RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>, "wrapper"> | undefined) => RenderResult;
declare function waitForI18n(r: RenderResult): Promise<void>;
export { customRender, Providers, waitForI18n };
