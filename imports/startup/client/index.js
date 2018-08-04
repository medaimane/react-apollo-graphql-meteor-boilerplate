import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '../../ui/components/App';

const app_root = document.getElementById('app-root');

Meteor.startup(()=>{
   render(<App/>, app_root);
});