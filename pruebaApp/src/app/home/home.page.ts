import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Asegúrate de importar Router

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private auth: AuthService, private alerta: AlertController, private router: Router) {}

  ngOnInit() {}

  async confirmarCerrarSesion() {
    const alert = await this.alerta.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Sí, cerrar sesión',
          handler: () => {
            this.auth.logout();
            this.router.navigate(['']);
          },
        },
      ],
    });
    await alert.present();
  }
}
