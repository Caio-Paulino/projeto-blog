package br.com.api.blog.servico;

import java.util.Optional;

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
            // Verificar se o nome de usuário já existe no banco de dados
            Optional<UserModelo> existingUserOpt = ur.findByUsername(um.getUsername().trim());
            if (existingUserOpt.isPresent()) {
                rm.setMensagem("Nome de usuário já existe!");
                return new ResponseEntity<>(rm, HttpStatus.CONFLICT);
            }
            
            // Se não existir, salvar o novo usuário
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
        } else {
            Optional<UserModelo> userOpt = ur.findByUsername(um.getUsername());
            if(userOpt.isPresent()) {
                UserModelo user = userOpt.get();
                if(user.getPassword().equals(um.getPassword())) {
                    return ResponseEntity.ok("Login bem-sucedido!");
                } else {
                    rm.setMensagem("Senha incorreta!");
                    return new ResponseEntity<RespostaModelo>(rm, HttpStatus.UNAUTHORIZED);
                }
            } else {
                rm.setMensagem("Usuário não encontrado!");
                return new ResponseEntity<RespostaModelo>(rm, HttpStatus.NOT_FOUND);
            }
        }
    }
}
