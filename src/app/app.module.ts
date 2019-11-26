import { TestDescansoadecuadoPage } from './../pages/test-descansoadecuado/test-descansoadecuado';
import { TestSerfelizPage } from './../pages/test-serfeliz/test-serfeliz';
import { TestBiencomerPage } from './../pages/test-biencomer/test-biencomer';
import { TestDesayunarmasPage } from './../pages/test-desayunarmas/test-desayunarmas';
import { TestAutocontrolPage } from './../pages/test-autocontrol/test-autocontrol';
import { TestActividadfisicaPage } from './../pages/test-actividadfisica/test-actividadfisica';
import { TestActitudpositivaPage } from './../pages/test-actitudpositiva/test-actitudpositiva';
import { InstruccionesPage } from './../pages/instrucciones/instrucciones';
import { ModalTips1Page } from './../pages/modal-tips1/modal-tips1';
import { ModalReflexionar1Page } from './../pages/modal-reflexionar1/modal-reflexionar1';
import { IonicStorageModule } from '@ionic/storage';
import {TooltipsModule} from 'ionic-tooltips'
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SlidePage } from '../pages/slide/slide';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import {RestProvider } from '../providers/rest/rest';
import {SaludoPage } from '../pages/saludo/saludo';
import {RegistroPage} from '../pages/registro/registro';
import {BienvenidaPage} from '../pages/bienvenida/bienvenida';
import {EvaluacionPage} from '../pages/evaluacion/evaluacion'
import { EvaluacionImcPage } from '../pages/evaluacion-imc/evaluacion-imc';
import { ModalImcPage } from '../pages/modal-imc/modal-imc';
import { ResultadoImcPage } from '../pages/resultado-imc/resultado-imc';
import { PerimetroAbdominalPage } from '../pages/perimetro-abdominal/perimetro-abdominal';
import { TestPage } from '../pages/test/test';
import { TestAguaPage } from '../pages/test-agua/test-agua';
import { RtestaguaPage } from '../pages/rtestagua/rtestagua';
import { IntrotestaguaPage } from '../pages/introtestagua/introtestagua';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { MenuHabitosPage } from '../pages/menu-habitos/menu-habitos';
import { Habito1Page } from '../pages/habito1/habito1';
import { ResultadoSaludPage } from '../pages/resultado-salud/resultado-salud';
import { SaludPage } from '../pages/salud/salud';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Compromisohbt1Page } from '../pages/compromisohbt1/compromisohbt1';
import { Compromisohbt1PageModule } from '../pages/compromisohbt1/compromisohbt1.module';
import { CompromisoPage } from '../pages/compromiso/compromiso';
import { AguaPage } from '../pages/agua/agua';
import { Actividadhbt1Page } from '../pages/actividadhbt1/actividadhbt1';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HTTP } from '@ionic-native/http';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SlidePage,
    SaludoPage,
    RegistroPage,
    BienvenidaPage,
    EvaluacionPage,
    EvaluacionImcPage,
    ModalImcPage,
    ResultadoImcPage,
    PerimetroAbdominalPage,
    TestPage,
    TestAguaPage,
    RtestaguaPage,
    IntrotestaguaPage,
    MenuPrincipalPage,
    MenuHabitosPage,
    Habito1Page,
    SaludPage,
    ResultadoSaludPage,
    Compromisohbt1Page,
    CompromisoPage,
    AguaPage,
    Actividadhbt1Page,
    ModalReflexionar1Page,
    ModalTips1Page,
    InstruccionesPage, 
    TestActitudpositivaPage,
    TestActividadfisicaPage,
    TestAutocontrolPage,
    TestDesayunarmasPage,
    TestBiencomerPage,
    TestSerfelizPage,
    TestDescansoadecuadoPage
  ],
  imports: [
    
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TooltipsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SlidePage,
    SaludoPage,
    RegistroPage,
    BienvenidaPage,
    EvaluacionPage,
    EvaluacionImcPage,
    ModalImcPage,
    ResultadoImcPage,
    PerimetroAbdominalPage,
    TestPage,
    TestAguaPage,
    RtestaguaPage,
    IntrotestaguaPage,
    MenuPrincipalPage,
    MenuHabitosPage,
    Habito1Page,
    SaludPage,
    ResultadoSaludPage,
    Compromisohbt1Page,
    CompromisoPage,
    AguaPage,
    Actividadhbt1Page,
    ModalReflexionar1Page,
    ModalTips1Page,
    InstruccionesPage, 
    TestActitudpositivaPage,
    TestActividadfisicaPage,
    TestAutocontrolPage,
    TestDesayunarmasPage,
    TestBiencomerPage,
    TestSerfelizPage,
    TestDescansoadecuadoPage
  ],
  providers: [
    HTTP,
    RestProvider,
    ScreenOrientation,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
