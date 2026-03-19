import {
  html,
  useTSElements,
  useTSNoReload,
  useTSSSRHydration
} from '@devwareng/vanilla-ts'
import { Router } from './routes/__root'
import "./index.css"
import "animate.css"
import { Navbar } from './layouts'


export default function App(DOM?: HTMLElement) {

  const { isDOM } = useTSSSRHydration(DOM!)
  if (!isDOM) return ''

  return useTSElements(
    isDOM,
    html`
      <div class="min-h-screen font-outfit bg-black text-white font-playfair">
        <div data-component="navbar"></div>
        <div data-component="router"></div>
      </div>
    `,
    {
      navbar: (el) => Navbar(el),
      router: (el) => {
        Router(el)
        useTSNoReload(el)
      },
    }

  )

}