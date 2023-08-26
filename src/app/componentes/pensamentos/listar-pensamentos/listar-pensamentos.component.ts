import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: "Remember feeling broke as fuck?",
      autoria: "Nav",
      modelo: "modelo1"
    },
    {
      conteudo: "I pass the ball, I don't layup",
      autoria: "Lil Baby",
      modelo: "modelo2"
    },
    {
      conteudo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quam deleniti itaque, ipsa distinctio impedit nesciunt delectus dolores quis accusamus repellat! Dolorum quod labore cupiditate dolore similique! Explicabo, laudantium. Est soluta deserunt alias, sed iste, doloremque sequi ullam voluptas sunt nemo quia modi facilis. Quisquam, aliquid iste! Unde a perferendis consequatur illo sapiente nostrum suscipit. Velit beatae totam similique.",
      autoria: "",
      modelo: "modelo3"
    }

  ];

}
