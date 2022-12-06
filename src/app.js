import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderNavigation,renderContentMiddleware } from './middlewares/renderMiddleware.js';


import { homeView } from './views/homeview.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { dashboardView } from './views/dashboardView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { deleteView } from './views/deleteView.js';




page(authMiddleware)
page(renderNavigation)
page(renderContentMiddleware)

page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/dashboard', dashboardView)
page('/create', createView)
page('/data/pets/:animalId', detailsView)
page('/data/pets/:animalId/edit', editView) 
page('/data/pets/:animalId/delete', deleteView) 



page.start();
