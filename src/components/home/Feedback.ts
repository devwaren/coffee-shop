import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export function Feedback(DOM: HTMLElement) {


    return useTSElements(
        DOM,
        html`
        <div class="bg-white text-black min-h-100">
            <h1>Feedback</h1>
        </div>
        `
    );

}