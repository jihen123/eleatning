import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {BlankComponent} from './views/blank/blank.component';
import {LoginComponent} from './pages/login/login.component';
import {ProfileComponent} from './views/profile/profile.component';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {AuthGuard} from './utils/guards/auth.guard';
import {NonAuthGuard} from './utils/guards/non-auth.guard';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from './pages/recover-password/recover-password.component';
import {CourseComponent} from './views/course/course.component';
import {AddcourseComponent} from './views/addcourse/addcourse.component';
import {UpdatecourseComponent} from './views/updatecourse/updatecourse.component';

import {ClientComponent} from './views/client/client.component';
import {AddclientComponent} from './views/addclient/addclient.component';
import {UpdateclientComponent} from './views/updateclient/updateclient.component';

import {AdminComponent} from './views/admin/admin.component';
import {AddadminComponent} from './views/addadmin/addadmin.component';
import {UpdateadminComponent} from './views/updateadmin/updateadmin.component';

import {FormateurComponent} from './views/formateur/formateur.component';
import {AddformateurComponent} from './views/addformateur/addformateur.component';
import {UpdateformateurComponent} from './views/updateformateur/updateformateur.component';
const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: 'course',
                component: CourseComponent
            },
            {
                path: 'addcourse',
                component: AddcourseComponent
            },
            {
                path: 'updatecourse/:id',
                component: UpdatecourseComponent
            },
            {
                path: 'client',
                component: ClientComponent
            },
            {
                path: 'addclient',
                component: AddclientComponent
            },
            {
                path: 'updateclient/:id',
                component: UpdateclientComponent
            },
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'addadmin',
                component: AddadminComponent
            },
            {
                path: 'updateadmin/:id',
                component: UpdateadminComponent
            },
            {
                path: 'formateur',
                component: FormateurComponent
            },
            {
                path: 'addformateur',
                component: AddformateurComponent
            },
            {
                path: 'updateformateur/:id',
                component: UpdateformateurComponent
            },
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
