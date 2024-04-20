// import { Injectable } from '@angular/core';
// import { Auth, authState,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   user$: Observable<any>; // Observable para el estado del usuario

//   constructor(private auth: Auth) {
//     this.user$ = authState(this.auth); // Escucha los cambios en el estado de autenticación
//   }

//   // Función para iniciar sesión con email y contraseña
//   async login(email: string, password: string): Promise<any> {
//     try {
//       return await signInWithEmailAndPassword(this.auth, email, password);
//     } catch (error) {
//       console.error('Error en login:', error);
//       throw error;
//     }
//   }

//    // Función para cerrar sesión
//    async logout(): Promise<void> {
//     try {
//       await signOut(this.auth);
//     } catch (error) {
//       console.error('Error en logout:', error);
//       throw error;
//     }
//   }
// }
// AuthService.ts

import { Injectable } from '@angular/core';
import { Auth, authState,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>; // Observable para el estado del usuario

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth); // Escucha los cambios en el estado de autenticación
    
    this.user$.subscribe(user => {
      if (user) {
        console.log('Usuario conectado:', user.email);
      } else {
        console.log('Usuario desconectado');
      }
    });
  }

  // Función para iniciar sesión con email y contraseña
  async login(email: string, password: string): Promise<any> {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  // Función para cerrar sesión
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }
}
