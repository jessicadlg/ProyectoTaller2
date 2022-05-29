import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore) {}

  //Crear usuario
  addUser(user: User) {
    const userRef = collection(this.firestore, 'Users');
    return addDoc(userRef, user);
  }

  //Obtener todos los usuarios creados
  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'Users');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

}
