package br.com.api.blog.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.blog.modelo.RespostaModelo;
import br.com.api.blog.modelo.UserModelo;
import br.com.api.blog.repositorio.UserRepositorio;

// Serviço: Camada que faz a ponte entre o Modelo e Repositório
@Service
public class UserServico {
   
    @Autowired // Autowired: Injeção de dependências
    private UserRepositorio ur; // Objeto de acesso a ações SQL no repositório

    @Autowired
    private RespostaModelo rm;  // Responsável por retornar ao usuário um feedback caso falte algo

    //Método de cadastro

    public ResponseEntity<?> cadastrar(UserModelo um) {
        if(um.getUsername().equals("")) {
            rm.setMensagem("O Usuário é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(um.getPassword().equals("")) {
            rm.setMensagem("A senha é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<UserModelo>(ur.save(um), HttpStatus.CREATED);
        }
    }

    //Método de login

    public ResponseEntity<?> logar(UserModelo um) {
        if(um.getUsername().equals("")) {
            rm.setMensagem("O Usuário incorreto!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(um.getPassword().equals("")) {
            rm.setMensagem("A senha incorreta!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else {
            return ResponseEntity.ok("Login bem-sucedido!");
        }   
    }
}
