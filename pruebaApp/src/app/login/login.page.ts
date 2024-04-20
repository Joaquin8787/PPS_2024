import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService, private alerta : AlertController, private router : Router) {}

  email:string = "";
  password: string = "";

  async ValidarCredenciales() {
    try {
      await this.auth.login(this.email, this.password);
      // Autenticación exitosa
      // Redirigir al usuario a la página de inicio
      this.router.navigate(['/home']);
      this.mostrarAlertaBienvenida();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.mostrarAlertaError();
    }
  }

  async mostrarAlertaBienvenida() {
    const alert = await this.alerta.create({
      header: '¡Bienvenido!',
      message: `¡Hola, ${this.email}! Has iniciado sesión correctamente.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async mostrarAlertaError() {
    const alert = await this.alerta.create({
      header: 'Error',
      message: 'No se pudo iniciar sesión. Verifica tus credenciales e intenta nuevamente.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
