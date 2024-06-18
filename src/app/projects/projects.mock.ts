import { FeaturedProject } from "./featuted-project/featured-projects.model";
import { SimpleProject } from "./simple-projects/simple-projects.model";

export const featuredProjectMock: FeaturedProject[] = [

  {id: 1,
    name: "Marvel Angular",
    description: "Uma aplicação Angular que realiza uma busca dinâmica pelos personagens da Marvel.",
    tags: ["Rxjs", "Routing", "Teste Unitário", "ng-bootstrap"],
    url_image: "https://picsum.photos/id/3/200/200",
    link_page: "https://joifogaca.github.io/marvel-angular/heroes",
    link_github: "https://github.com/joifogaca/marvel-angular"
  },
  {id: 2,
    name: "Repositório Ioasys",
    description: "Uma aplicação Angular que realiza uma autenticação local. E lista os meus repósitórios do gitHub, utilizando a API do GitHub.",
    tags: ["PrimeNg", "Routing", "Reactive Forms"],
  url_image: "https://picsum.photos/id/15/200/200",
    link_page: "https://repositorios-ioasys.vercel.app/login",
    link_github: "https://github.com/joifogaca/repositorios-ioasys"
  }
];

export const simpleProjectMock: SimpleProject[] =[
  {id: 1,
    name: "Dashboard Bootstrap",
    description: "O objetivo é simular um dashboard que funcione dinamicamente com os dados que recebera da API. Usando Bootstrap e JavaScript Vanille.",
    link_github: "https://github.com/joifogaca/DashboardBootstrap"
  },
  {id: 2,
  name: "Luma API",
  description: "Desafio de consumo de API conforme o documento fornecido pela empresa no processo seletivo.",
  link_github: "https://github.com/joifogaca/LumaAPI"
}
]
