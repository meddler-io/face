(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ssy1:function(n,e,t){"use strict";t.r(e),t.d(e,"DockerModule",function(){return x});var a=t("mrSG"),r=t("fXoL"),o=t("ofXK"),i=t("tyNb"),s=t("c0TW"),c=t("3Pt+"),d=t("y8eJ"),l=t("ZfaG");const p=[c.n.pattern(/(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/),c.n.required];let u=class{constructor(n){this.assetApiService=n,this.saving=!1,this.saving_ip_index=-1,this.auth$=new c.e({username:new c.d("admin",[c.n.required]),password:new c.d("password",[c.n.required])}),this.access_token$=new c.e({access_token:new c.d("access_token",[c.n.required])}),this.privatekey$=new c.e({privatekey:new c.d("privatekey",[c.n.required])}),this.ip_addresses=new c.b([new c.d("",p)]),this.tmp$=1,this.myForm=new c.e({name:new c.d("",[c.n.required]),url:new c.d("http://localhost/asset/repository/add.git",p),credential_type:new c.d("none"),credentials:new c.e({})})}addNewIp(){this.ip_addresses.push(new c.d(""))}ngOnInit(){this.myForm.get("credential_type").valueChanges.subscribe(n=>{switch(console.log("d",n),n){case"none":this.myForm.setControl("credentials",null);break;case"password":this.myForm.setControl("credentials",this.auth$);break;case"access_token":this.myForm.setControl("credentials",this.access_token$);break;case"privatekey":this.myForm.setControl("credentials",this.privatekey$)}})}removeAt(n){this.ip_addresses.removeAt(n)}save(){this.saving=!0,this.assetApiService.addDocker(this.myForm.value).subscribe()}};u.ctorParameters=()=>[{type:d.a}],u=Object(a.a)([Object(r.n)({selector:"app-docker-add",template:'<form [formGroup]="myForm" novalidate >\n\n  <nb-card @init>\n\n    <nb-card-header>\n\n      <div fxFlex fxLayoutGap="1rem" fxLayoutAlign="center center">\n\n        <nb-icon class="text-hint" icon="plus-circle">\n        </nb-icon>\n        <div fxFlex class="h6 text-hint">\n          Add Docker\n\n        </div>\n\n      </div>\n\n    </nb-card-header>\n\n    <nb-card-body @init>\n      <nb-form-field [nbSpinner]="saving" >\n \n        <input formControlName="name" fullWidth fxFlex="50%"  nbInput fieldSize="large"   [status]="name?.valid ? \'primary\' : \'basic\' "\n            placeholder="Name">\n\n  \n\n      </nb-form-field>\n\n    </nb-card-body>\n\n    <nb-card-body @init>\n      <nb-form-field [nbSpinner]="saving">\n        <div nbPrefix icon="at-outline" pack="eva">\n          Url\n\n        </div>\n        <input formControlName="url" nbInput fieldSize="medium" fxFlex [status]="url?.valid ? \'primary\' : \'basic\' "\n          fullWidth placeholder="Repository Url">\n\n        <button nbButton nbSuffix size="small" filled status="primary">\n          <nb-icon icon="close-outline">\n          </nb-icon>\n        </button>\n\n      </nb-form-field>\n\n    </nb-card-body>\n \n    <nb-card-body @init   >\n  <div  >\n\n\n      <div     fxLayout="row" class="credentials h6 text-hint  ">\n        Credentials\n      </div>\n\n      <div  appBorder class="credentials"   fxLayout="row">\n\n        <nb-radio-group formControlName="credential_type" fxLayout="row" name="status" status="basic">\n          <nb-radio [checked]="true" value="none">\n            None\n          </nb-radio>\n\n          <nb-radio value="password">\n            Password\n          </nb-radio>\n\n          <nb-radio value="access_token">\n            Access token\n          </nb-radio>\n\n          <nb-radio value="privatekey">\n            SSH\n          </nb-radio>\n        </nb-radio-group>\n\n      </div>\n\n\n    <div   class="credentials  "  formGroupName="credentials"\n\n     @init fxLayout="column" fxLayoutGap="1rem">\n\n\n      <ng-container  \n      \n      [ngSwitch]="myForm.get(\'credential_type\').value">\n\n\n        <ng-container *ngSwitchCase="\'none\'">\n\n        </ng-container>\n\n\n        <ng-container *ngSwitchCase="\'password\'">\n          <nb-form-field>\n\n            <input\n            formControlName="username"\n            nbInput fieldSize="medium" status="primary" placeholder="Username">\n\n            <button nbButton nbSuffix size="small" filled status="primary">\n              <nb-icon icon="close-outline">\n              </nb-icon>\n            </button>\n\n          </nb-form-field>\n\n\n          <nb-form-field>\n\n            <input\n            formControlName="password"\n            nbInput fieldSize="medium" status="primary" placeholder="Password">\n\n            <button nbButton nbSuffix size="small" filled status="primary">\n              <nb-icon icon="close-outline">\n              </nb-icon>\n            </button>\n\n          </nb-form-field>\n        </ng-container>\n\n\n\n\n        <ng-container *ngSwitchCase="\'access_token\'">\n\n\n\n          <textarea\n          formControlName="access_token"\n          \n          rows="7" status="primary" nbInput fullWidth placeholder="Access Token"></textarea>\n\n\n        </ng-container>\n\n\n        <ng-container *ngSwitchCase="\'privatekey\'">\n          <textarea\n          formControlName="privatekey"\n          \n          rows="7" status="primary" nbInput fullWidth placeholder="SSH Key"></textarea>\n        </ng-container>\n      </ng-container>\n\n\n    </div>\n\n\n\n\n\n\n    </div>\n\n\n\n\n    </nb-card-body>\n\n\n\n\n\n\n\n\n\n    <nb-card-footer fxLayoutAlign="end center">\n\n\n\n\n      <button [disabled]="!myForm?.valid" (click)="save()" outline nbButton [status]="myForm?.valid ? \'success\': \'basic\'">\n\n        <nb-icon icon="checkmark-circle-2">\n        </nb-icon>\n        Save\n\n      </button>\n    </nb-card-footer>\n\n\n  </nb-card>\n</form>\n',animations:[...l.a],styles:[""]})],u);let b=class{constructor(){}ngOnInit(){}};b.ctorParameters=()=>[],b=Object(a.a)([Object(r.n)({selector:"app-docker-home",template:"<app-docker-search></app-docker-search>\n<app-docker-list></app-docker-list>\n<app-docker-add></app-docker-add>\n\x3c!-- dsad --\x3e",styles:[""]})],b);const m=[{path:"",children:[{path:"add",component:u,data:{id:s.c.DockerCreate}},{path:"**",component:b,data:{id:s.c.DockerConfigure}}]}];let f=class{};f=Object(a.a)([Object(r.N)({imports:[i.j.forChild(m)],exports:[i.j]})],f);var h=t("rDax"),y=t("XiUz"),v=t("aceb"),k=t("IwCi");let w=class{constructor(){}ngOnInit(){}};w.ctorParameters=()=>[],w=Object(a.a)([Object(r.n)({selector:"app-docker-search",template:"<p>docker-search works!</p>\n",styles:[""]})],w);let g=class{constructor(){}ngOnInit(){}};g.ctorParameters=()=>[],g=Object(a.a)([Object(r.n)({selector:"app-docker-list",template:"<p>docker-list works!</p>\n",styles:[""]})],g);let x=class{};x=Object(a.a)([Object(r.N)({declarations:[b,w,u,g],imports:[o.c,f,k.a,y.a,v.o,v.l,v.n,h.g,v.p,v.G,c.f,c.m,v.A,v.l,v.y,v.v]})],x)}}]);