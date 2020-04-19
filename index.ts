// Import stylesheets
import './style.css';

import { Pessoa } from './classes/entidades/Pessoa.class';
import { MockPessoa } from './mock/Pessoa';


const mockPessoa: MockPessoa = new MockPessoa()
const pessoa:Pessoa = new Pessoa(
                      mockPessoa.nome, 
                      mockPessoa.data_nascimento,
                      mockPessoa.endereco,
                      mockPessoa.contato
                    );



// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;