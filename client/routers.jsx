import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import Hola from '../imports/ui/Hola.jsx';
import Login from '../imports/ui/Login.jsx';
import LoginComplete from '../imports/ui/LoginComplete.jsx';
import RegisterComplete from '../imports/ui/RegisterComplete.jsx';
import Main from '../imports/ui/Main.jsx';

FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
    content:(<Main/>)
  });
  }
});
FlowRouter.route('/LoginComplete',{
  action(){
    mount(MainLayout,{
    content:(<LoginComplete/>)
  });
  }
});
FlowRouter.route('/RegisterComplete',{
  action(){
    mount(MainLayout,{
    content:(<RegisterComplete/>)
  });
  }
});
