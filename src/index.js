import dva from 'dva';
import {message} from 'antd';
import {W_INNER_HEIGHT} from './constants';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
console.log(screen.height);
console.log(W_INNER_HEIGHT);
message.config({
  top: 100,
  duration: 1,
});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
