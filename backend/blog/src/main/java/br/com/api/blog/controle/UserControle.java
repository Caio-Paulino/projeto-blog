package br.com.api.blog.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.blog.modelo.UserModelo;
import br.com.api.blog.servico.UserServico;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

// Camada Controle: responsável por criar rotas e ter acesso a requisições

@RestController // Anotação Spring para camada de controle
public class UserControle {
    
    @Autowired
    private UserServico us; // Objeto para ter acesso ao serviço

    //Endpoit para cadastrar
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody UserModelo um) {
        return us.cadastrar(um);
    }

    //Endpoint para logar
    @PostMapping("/logar")
    public ResponseEntity<?> logar(@RequestBody UserModelo um) {
        return us.logar(um);
    }
    
}
