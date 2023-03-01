(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{FXBF:function(n,e,t){"use strict";t.r(e),t.d(e,"AndroidModule",function(){return k});var a=t("mrSG"),i=t("fXoL"),o=t("ofXK"),s=t("tyNb"),l=t("c0TW"),r=t("y8eJ");let p=class{constructor(n,e,t){this.el=n,this.document=e,this.aseetService=t}ngAfterViewInit(){}ngOnInit(){}};p.ctorParameters=()=>[{type:i.v},{type:Document,decorators:[{type:i.D,args:[o.d]}]},{type:r.a}],p.propDecorators={createNewAppTemplate:[{type:i.qb,args:["createNewAppTemplate"]}]},p=Object(a.a)([Object(i.n)({selector:"app-android-add",template:'<div fxFlex class="container">\n\n\n  <div appBorder fxLayout="row" fxFlex class="list-head" fxLayoutAlign="start center" fxLayoutGap="1rem">\n\n\n    <div fxFlex="50%">\n      <nb-form-field>\n        <nb-icon icon="search-outline" nbPrefix status="basic">\n\n        </nb-icon>\n        <input nbInput fullWidth placeholder="Search Anroid" status="primary">\n\n      </nb-form-field>\n    </div>\n\n\n    <div fxFlex="50%" fxLayoutGap="1rem">\n      <button (click)="createNewApp(createNewAppTemplate)" fxFlex nbButton status="success" outline>Upload</button>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #createNewAppTemplate>\n\n\n\n  <app-android-create-new>\n\n  </app-android-create-new>\n\n\n</ng-template>\n',styles:[".list-item-head {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #a4b1cd !important;\n}\n\n.list-head {\n  height: 4rem;\n}\n\n.container {\n  margin-top: 1rem;\n}"]})],p);let d=class{constructor(){}ngOnInit(){}};d.ctorParameters=()=>[],d=Object(a.a)([Object(i.n)({selector:"app-android-home",template:"<app-android-add></app-android-add>\n\n\n<app-android-list>\n\n</app-android-list>\n",styles:[""]})],d);const c=[{path:"add",component:p,data:{id:l.c.AndroidCreate}},{path:"**",component:d,data:{id:l.c.AndroidConfigure}}];let u=class{};u=Object(a.a)([Object(i.N)({imports:[s.j.forChild(c)],exports:[s.j]})],u);var f=t("rDax"),m=t("XiUz"),b=t("3Pt+"),v=t("aceb"),x=t("IwCi");let g=class{constructor(n,e,t){this.el=n,this.document=e,this.assetApiService=t,this.selected_file=void 0}ngOnInit(){}onFilesAdded(){this.selected_file=this.file.nativeElement.files[0],console.log(this.selected_file)}selectFile(){this.file.nativeElement.click()}removeFile(){this.file.nativeElement.value="",this.selected_file=void 0}upload(){this.assetApiService.upload(this.selected_file,"").subscribe()}edit(){}};g.ctorParameters=()=>[{type:i.v},{type:Document,decorators:[{type:i.D,args:[o.d]}]},{type:r.a}],g.propDecorators={file:[{type:i.qb,args:["file"]}],app:[{type:i.I,args:["app"]}],editNewAppTemplate:[{type:i.qb,args:["editNewAppTemplate"]}]},g=Object(a.a)([Object(i.n)({selector:"app-android-list-item",template:'<div fxLayout="column">\n\n  <div fxLayout="row" fxFlex class="list-head">\n\n\n\n\n    <div appHoverColor appBorder fxFlex fxLayoutAlign="start center" class="list-item-head">\n      <span class="marL" style=" padding-left:\'2rem\'">\n        {{app.app_name || \'App Name\'}}\n\n\n      </span>\n    </div>\n\n\n    <div appHoverColor appBorder fxFlex fxLayoutAlign="center center" class="list-item-head">\n      {{app.package_name || \'package.com.name\'}}\n\n    </div>\n\n\n    <div appHoverColor appBorder fxFlex="180px" fxLayoutAlign="center center" class="list-item-head">\n      {{app.doc | date }}\n\n    </div>\n\n\n  </div>\n\n</div>\n\n<div *ngIf="false" appBorder fxLayout="column" fxLayoutGap="1rem">\n\n  <div fxLayout="row">\n\n    <div fxFlex="50%" appBorder>\n      <span>\n        {{app.app_name}}\n\n      </span>\n    </div>\n\n\n  </div>\n\n\n  <div fxLayout="row">\n\n    <div fxFlex="50%" appBorder>\n      <span>\n        {{app.package_name}}\n\n\n      </span>\n    </div>\n\n\n  </div>\n\n\n\n\n\n  <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="1rem">\n\n\n\n    <button (click)="edit()" size="tiny" nbButton outline status="basic">\n      Download\n    </button>\n\n    <button (click)="edit()" size="tiny" nbButton filled status="danger">\n      Delete\n    </button>\n\n\n  </div>\n\n\n\n\n\n  <div fxFlex>\n\n    <nb-progress-bar size="tiny" [value]="0" status="primary" [displayValue]="true"></nb-progress-bar>\n  </div>\n</div>\n\n\n<ng-template #editNewAppTemplate>\n\n\n  <app-android-create-new [app]="app">\n\n  </app-android-create-new>\n\n\n</ng-template>\n',styles:["input:disabled {\n  background: #dddddd;\n  color: #fff !important;\n}"]})],g);let h=class{constructor(n){this.assetApiService=n,this.apps=[]}ngOnInit(){this.assetApiService.getAndroidApps().subscribe(n=>{console.log("androdapps",n),this.apps=n})}};h.ctorParameters=()=>[{type:r.a}],h.propDecorators={editNewAppTemplate:[{type:i.qb,args:["editNewAppTemplate"]}]},h=Object(a.a)([Object(i.n)({selector:"app-android-list",template:'<div fxFlex fxLayout="column">\n\n\n  <div fxLayout="column">\n\n    <div fxLayout="row" fxFlex class="list-head">\n\n\n\n\n      <div appHoverColor appBorder fxFlex fxLayoutAlign="start center" class="list-item-head">\n        <span class="marL" style=" padding-left:\'2rem\'">\n          App Name\n\n\n        </span>\n      </div>\n\n\n      <div appHoverColor appBorder fxFlex fxLayoutAlign="center center" class="list-item-head">\n        Package Name\n\n      </div>\n\n\n      <div appHoverColor appBorder fxFlex="180px" fxLayoutAlign="center center" class="list-item-head">\n        Date\n\n      </div>\n\n\n    </div>\n\n  </div>\n  <app-android-list-item [app]="app" fxFlex="50%" *ngFor="let app of apps">\n\n  </app-android-list-item>\n\n</div>\n',styles:[""]})],h);var y=t("lJxs"),A=t("5+tZ"),F=t("vkgz"),w=t("pLZG"),_=t("ZfaG");let L=class{constructor(n){this.assetApiService=n,this.selected_file=void 0,this.android_data_form=new b.e({app_name:new b.d(""),package_name:new b.d("")}),this.progressStatus={progress:0,completed:!0,started:!1}}ngOnInit(){console.log("edit",this.app)}onFilesAdded(){this.selected_file=this.file.nativeElement.files[0],console.log(this.selected_file)}selectFile(){this.file.nativeElement.click()}removeFile(){this.file.nativeElement.value="",this.selected_file=void 0}upload(){this.progressStatus.started=!0,this.assetApiService.createFile(this.selected_file.name).pipe(Object(y.a)(n=>this.assetApiService.upload(this.selected_file,n.token)),Object(A.a)(n=>n),Object(F.a)(n=>{this.progressStatus.completed=n.status,this.progressStatus.progress=n.progress}),Object(w.a)(n=>n.status),Object(y.a)(n=>this.assetApiService.addAndroid(this.android_data_form.value.app_name,this.android_data_form.value.package_name,n.fileData.fileid)),Object(A.a)(n=>n)).subscribe(n=>{console.log("got value ",n)})}};L.ctorParameters=()=>[{type:r.a}],L.propDecorators={app:[{type:i.I,args:["app"]}],file:[{type:i.qb,args:["file"]}]},L=Object(a.a)([Object(i.n)({selector:"app-android-create-new",template:'<nb-layout center [restoreScrollTop]="false">\n  <nb-layout-header fixed>\n\n    <div fxFlex fxLayoutGap="1rem" fxLayoutAlign="center center">\n\n      <nb-icon icon="plus-circle">\n      </nb-icon>\n      <div fxFlex class="h6">\n        Android App\n\n      </div>\n\n\n      <button outline nbButton status="success" size="small">\n\n        <nb-icon icon="checkmark-circle-2">\n        </nb-icon>\n        Save\n\n      </button>\n\n\n\n\n    </div>\n  </nb-layout-header>\n\n  <nb-layout-column @init>\n\n\n    <form [formGroup]="android_data_form">\n\n      <div appBorder fxLayout="column" fxLayoutGap="1rem">\n\n\n        <div fxFlex>\n\n\n          <nb-form-field [nbSpinner]="saving">\n            <div nbPrefix icon="at-outline" pack="eva">\n              <nb-icon icon="hash-outline"></nb-icon>\n            </div>\n            <input formControlName="app_name" fullWidth nbInput fieldSize="medium" status="primary" placeholder="App name">\n\n          </nb-form-field>\n\n\n\n        </div>\n\n\n        <div fxFlex>\n\n\n          <nb-form-field [nbSpinner]="saving">\n            <div nbPrefix icon="at-outline" pack="eva">\n              <nb-icon icon="hash-outline"></nb-icon>\n            </div>\n            <input formControlName="package_name" fullWidth nbInput fieldSize="medium" status="primary" placeholder="Package Name">\n\n\n\n\n          </nb-form-field>\n\n\n\n        </div>\n\n        <div fxFlex fxLayout="row">\n          <input type="file" #file style="display: none" (change)="onFilesAdded()" />\n\n          <nb-form-field [nbSpinner]="saving" fxFlex>\n\n            <div nbPrefix icon="at-outline" pack="eva">\n              <nb-icon icon="hash-outline"></nb-icon>\n            </div>\n            <input fxLayoutAlign="start start" (click)="selectFile()" fieldSize="medium" fullWidth\n              [value]="selected_file?.name || \'No File Selected\' " status="primary" type="button" nbInput outline>\n\n            <div nbSuffix icon="at-outline" pack="eva">\n              \x3c!-- #1 --\x3e\n              \x3c!-- <nb-icon icon="arrow-circle-up-outline"></nb-icon> --\x3e\n              <button *ngIf="!selected_file" (click)="selectFile()" size="small" nbButton ghost status="primary">\n                <nb-icon icon="arrow-circle-up-outline"></nb-icon>\n\n              </button>\n              <button *ngIf="selected_file" (click)="removeFile()" size="small" nbButton ghost status="danger">\n                <nb-icon icon="close-circle"></nb-icon>\n\n              </button>\n\n            </div>\n          </nb-form-field>\n          <div *ngIf="false" fxLayoutAlign="end center">\n            <button *ngIf="!selected_file" (click)="selectFile()" size="tiny" nbButton ghost status="success">\n              Select File\n            </button>\n            <button *ngIf="selected_file" (click)="removeFile()" size="tiny" nbButton ghost status="danger">\n              Remove File\n            </button>\n\n\n          </div>\n\n        </div>\n\n\n\n\n        <div fxFlex fxLayoutAlign="end">\n\n          <button (click)="upload()" [disabled]="!selected_file" size="small" nbButton outline status="basic">\n            Upload\n          </button>\n        </div>\n\n\n        <div fxFlex>\n\n          <nb-progress-bar size="tiny" [value]="progressStatus.progress" status="primary" [displayValue]="true">\n          </nb-progress-bar>\n\n        </div>\n\n      </div>\n\n    </form>\n\n\n\n\n\n  </nb-layout-column>\n\n\n</nb-layout>\n',animations:[..._.a],styles:[""]})],L);let k=class{};k=Object(a.a)([Object(i.N)({declarations:[d,p,g,h,L],imports:[o.c,u,x.a,m.a,v.o,v.l,v.n,f.g,v.p,v.G,b.f,b.m,v.A,v.u]})],k)}}]);