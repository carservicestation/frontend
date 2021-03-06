import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminConsoleComponent } from './admin/admin-console/admin-console.component';
import { ListOwnersComponent } from './admin/owner/list-owners/list-owners.component';
import { ListServiceCentersComponent } from './admin/service-center/list-service-centers/list-service-centers.component';
import { EditServiceComponent } from './admin/service/edit-service/edit-service.component';
import { ListServicesComponent } from './admin/service/list-services/list-services.component';
import { AddVehicleComponent } from './admin/vehicle/add-vehicle/add-vehicle.component';
import { ListVehiclesComponent } from './admin/vehicle/list-vehicles/list-vehicles.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectServicesComponent } from './customer/appointment/select-services/select-services.component';
import { SelectSlotComponent } from './customer/appointment/select-slot/select-slot.component';
import { SelectVehicleComponent } from './customer/appointment/select-vehicle/select-vehicle.component';
import { CustomerConsoleComponent } from './customer/customer-console/customer-console.component';
import { SignUpComponent } from './customer/sign-up/sign-up.component';
import { AuthService } from './helperservices/auth.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './other/about-us/about-us.component';
import { ContactUsComponent } from './other/contact-us/contact-us.component';
import { NotFoundComponent } from './other/not-found/not-found.component';
import { PrivacyPolicyComponent } from './other/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './other/terms-and-conditions/terms-and-conditions.component';
import { OwnerConsoleComponent } from './owner/owner-console/owner-console.component';
import { AddCenterAddressComponent } from './owner/servicecenter/add-center-address/add-center-address.component';
import { AddServiceCenterComponent } from './owner/servicecenter/add-service-center/add-service-center.component';
import { AddServiceComponent } from './admin/service/add-service/add-service.component';
import {
  ListServicesByCenterComponent,
} from './owner/servicecenter/service/list-services-by-center/list-services-by-center.component';
import { SignUpOwnerComponent } from './owner/sign-up-owner/sign-up-owner.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignOutComponent } from './user/sign-out/sign-out.component';
import { EditCustomerProfileComponent } from './customer/edit-customer-profile/edit-customer-profile.component';
import { EditOwnerProfileComponent } from './owner/edit-owner-profile/edit-owner-profile.component';

import { BookAppointmentComponent } from './customer/appointment/book-appointment/book-appointment.component';
import { SelectCutomerAddressComponent } from './customer/appointment/select-cutomer-address/select-cutomer-address.component';
import { SelectCenterComponent } from './customer/appointment/select-center/select-center.component';
import { EditVehicleComponent } from './admin/vehicle/edit-vehicle/edit-vehicle.component';
import { EditServiceCenterComponent } from './owner/servicecenter/edit-service-center/edit-service-center.component';
import { AddServicesToServicenterComponent } from './owner/servicecenter/add-services-to-servicenter/add-services-to-servicenter.component';
import { AdminAuthService } from './helperservices/admin-auth.service';
import { OwnerAuthService } from './helperservices/owner-auth.service';
import { AddCustomerAddressComponent } from './customer/add-customer-address/add-customer-address.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ListCustomerComponent } from './admin/list-customer/list-customer.component';
import { ListServiceCenterAppointmentComponent } from './owner/servicecenter/list-service-center-appointment/list-service-center-appointment.component';
import { ListCustomerAppointmentComponent } from './customer/appointment/list-customer-appointment/list-customer-appointment.component';
import { ListAppointmentComponent } from './admin/list-appointment/list-appointment.component';
import { AppointmentCheckoutComponent } from './customer/appointment/appointment-checkout/appointment-checkout.component';

import { FooterComponent } from './other/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    AddServiceComponent,
    AddCenterAddressComponent,
    AddServiceCenterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SelectVehicleComponent,
    SelectSlotComponent,
    SelectCenterComponent,
    SelectServicesComponent,
    NotFoundComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    SignUpOwnerComponent,
    ListServiceCentersComponent,
    AddVehicleComponent,
    ListOwnersComponent,
    AdminConsoleComponent,
    OwnerConsoleComponent,
    ListServicesComponent,
    ListVehiclesComponent,
    ListServicesByCenterComponent,
    CustomerConsoleComponent,
    EditServiceComponent,
    EditCustomerProfileComponent,
    EditOwnerProfileComponent,
    BookAppointmentComponent,
    SelectCutomerAddressComponent,
    EditVehicleComponent,
    EditServiceCenterComponent,
    AddServicesToServicenterComponent,
    AddCustomerAddressComponent,
    ChangePasswordComponent,
    ListCustomerComponent,
    ListServiceCenterAppointmentComponent,
    ListCustomerAppointmentComponent,
    ListAppointmentComponent,
    AppointmentCheckoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: "", component: HomeComponent},
      { path: "home", component: HomeComponent },
      { path: "aboutus", component: AboutUsComponent },
      { path: "contactus", component: ContactUsComponent },
      { path: "terms", component: TermsAndConditionsComponent },
      { path: "privacypolicy", component: PrivacyPolicyComponent },

      { path: "signin", component: SignInComponent },
      { path: "signout", component: SignOutComponent },
      { path: "changepassword", component: ChangePasswordComponent, canActivate:[AuthService]},

      { path: "admin/console", component: AdminConsoleComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/listowners", component: ListOwnersComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/listcenters", component: ListServiceCentersComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/listcustomers", component: ListCustomerComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/addservice", component: AddServiceComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/listservices", component: ListServicesComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/editservice/:id", component: EditServiceComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/listvehicles", component: ListVehiclesComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/addvehicle", component: AddVehicleComponent, canActivate:[AuthService, AdminAuthService] },
      { path: "admin/editvehicle/:id", component: EditVehicleComponent , canActivate:[AuthService, AdminAuthService]},
      { path: "admin/listappointments", component: ListAppointmentComponent, canActivate:[AuthService, AdminAuthService] },

      //OWNER
      { path: "registerowner", component: SignUpOwnerComponent },
      { path: "owner/console", component: OwnerConsoleComponent, canActivate:[AuthService, OwnerAuthService]  },
      { path: "owner/addservicecenter", component: AddServiceCenterComponent, canActivate:[AuthService, OwnerAuthService]  },
      { path: "owner/addcenteraddress", component: AddCenterAddressComponent, canActivate:[AuthService, OwnerAuthService]  },
      { path: "owner/addsstosc", component: AddServicesToServicenterComponent, canActivate:[AuthService, OwnerAuthService]  },
      { path: "owner/editownerprofile", component: EditOwnerProfileComponent, canActivate:[AuthService, OwnerAuthService]  },
      { path: "owner/editservicecenter", component: EditServiceCenterComponent, canActivate:[AuthService, OwnerAuthService]  },
      { path: "owner/listappointments", component: ListServiceCenterAppointmentComponent, canActivate:[AuthService, OwnerAuthService]  },


      //CUSTOMER
      { path: "signup", component: SignUpComponent },
      { path: "customer/console", component: CustomerConsoleComponent, canActivate:[AuthService]  },
      { path: "customer/addcustomeraddress", component: AddCustomerAddressComponent },
      { path: "customer/editprofile", component: EditCustomerProfileComponent, canActivate:[AuthService]  },
      
      { path: "customer/bookappointment", component: BookAppointmentComponent, canActivate:[AuthService] }, 
      { path: "customer/selectcustomeraddress", component: SelectCutomerAddressComponent, canActivate:[AuthService]  },
      { path: "customer/selectcenter", component: SelectCenterComponent, canActivate:[AuthService]  },
      { path: "customer/selectservices", component: SelectServicesComponent, canActivate:[AuthService]  },
      { path: "customer/selectvehicle", component: SelectVehicleComponent, canActivate:[AuthService]  },
      { path: "customer/selectslot", component: SelectSlotComponent, canActivate:[AuthService]  },
      { path: "customer/listappointments", component: ListCustomerAppointmentComponent, canActivate:[AuthService]  },
      { path: "customer/checkout", component: AppointmentCheckoutComponent, canActivate:[AuthService]  },


      { path: "*", component: NotFoundComponent }
    ],{ useHash: true})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }


