import { render } from 'preact';
import { Page } from './stories/Page.tsx';
import './theme-base.css';

render(<Page />, document.getElementById('app')!);
