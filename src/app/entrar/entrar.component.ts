import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
this.auth.login(this.userLogin).subscribe((resp: UserLogin)=>{
  this.userLogin = resp

this.userLogin.foto

environment.token = this.userLogin.token
environment.nome = this.userLogin.nome
environment.foto = this.userLogin.foto
environment.id = this.userLogin.id

/* console log mostra as informações do environment no console
console.log(environment.token)
console.log(environment.nome)
console.log(environment.foto)
console.log(environment.id)*/

  this.router.navigate(['/inicio'])
}, erro => {
  if(erro.status == 500){
    alert('Usuário ou senha incorretos')
  }
})
  }

}
