import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import './vendors/fontawesome/css/all.css'
import './index.css';
import './vendors/bower_components/datatables/media/css/jquery.dataTables.css';
import './vendors/bower_components/morris.js/morris.css';
import './vendors/bower_components/bootstrap-select/dist/css/bootstrap-select.min.css';
import './vendors/vectormap/jquery-jvectormap-2.0.2.css';
import './dist/css/picker.min.css';
import './dist/css/style.css';

//import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

//registerServiceWorker();
