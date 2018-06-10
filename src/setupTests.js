/*****************************************************************
 * Fix Enzyme Adapter with react 16
 *****************************************************************/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

/*****************************************************************
 * fetch
 *****************************************************************/
import fetch from 'jest-fetch-mock';
global.fetch = fetch;
